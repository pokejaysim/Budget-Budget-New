// Undo/Redo functionality for Budget Buddy
import { allExpenses, setAllExpenses } from './state.js';

// Action history stack
let actionHistory = [];
let currentPosition = -1;
const MAX_HISTORY_SIZE = 50;

// Action types
export const ACTION_TYPES = {
    ADD_EXPENSE: 'ADD_EXPENSE',
    EDIT_EXPENSE: 'EDIT_EXPENSE',
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    BULK_DELETE: 'BULK_DELETE'
};

// Action structure: { type, data, timestamp, description }

export function pushAction(action) {
    // Remove any actions after current position (if we're not at the end)
    if (currentPosition < actionHistory.length - 1) {
        actionHistory = actionHistory.slice(0, currentPosition + 1);
    }
    
    // Add new action
    actionHistory.push({
        ...action,
        timestamp: Date.now(),
        id: `action-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });
    
    // Limit history size
    if (actionHistory.length > MAX_HISTORY_SIZE) {
        actionHistory = actionHistory.slice(-MAX_HISTORY_SIZE);
    }
    
    currentPosition = actionHistory.length - 1;
    
    // Auto-save after action
    try {
        localStorage.setItem('budget-buddy-action-history', JSON.stringify({
            history: actionHistory,
            position: currentPosition
        }));
    } catch (error) {
        console.error('Failed to save action history:', error);
    }
}

export function canUndo() {
    return currentPosition >= 0;
}

export function canRedo() {
    return currentPosition < actionHistory.length - 1;
}

export function undo() {
    if (!canUndo()) return null;
    
    const action = actionHistory[currentPosition];
    currentPosition--;
    
    return action;
}

export function redo() {
    if (!canRedo()) return null;
    
    currentPosition++;
    const action = actionHistory[currentPosition];
    
    return action;
}

export function getLastAction() {
    return currentPosition >= 0 ? actionHistory[currentPosition] : null;
}

export function clearHistory() {
    actionHistory = [];
    currentPosition = -1;
    localStorage.removeItem('budget-buddy-action-history');
}

export function loadHistory() {
    try {
        const saved = localStorage.getItem('budget-buddy-action-history');
        if (saved) {
            const data = JSON.parse(saved);
            actionHistory = data.history || [];
            currentPosition = data.position || -1;
        }
    } catch (error) {
        console.error('Failed to load action history:', error);
        actionHistory = [];
        currentPosition = -1;
    }
}

// Expense-specific action creators
export function createAddExpenseAction(expense) {
    return {
        type: ACTION_TYPES.ADD_EXPENSE,
        data: { expense },
        description: `Added ${expense.description || 'expense'} ($${expense.amount})`
    };
}

export function createEditExpenseAction(oldExpense, newExpense) {
    return {
        type: ACTION_TYPES.EDIT_EXPENSE,
        data: { oldExpense, newExpense },
        description: `Edited ${newExpense.description || 'expense'} ($${newExpense.amount})`
    };
}

export function createDeleteExpenseAction(expense) {
    return {
        type: ACTION_TYPES.DELETE_EXPENSE,
        data: { expense },
        description: `Deleted ${expense.description || 'expense'} ($${expense.amount})`
    };
}

export function createBulkDeleteAction(expenses) {
    return {
        type: ACTION_TYPES.BULK_DELETE,
        data: { expenses },
        description: `Deleted ${expenses.length} expenses`
    };
}

// Execute undo/redo actions
export async function executeUndo() {
    const action = undo();
    if (!action) return false;
    
    try {
        await revertAction(action);
        return true;
    } catch (error) {
        console.error('Failed to execute undo:', error);
        // Push action back if revert failed
        currentPosition++;
        return false;
    }
}

export async function executeRedo() {
    const action = redo();
    if (!action) return false;
    
    try {
        await reapplyAction(action);
        return true;
    } catch (error) {
        console.error('Failed to execute redo:', error);
        // Move position back if reapply failed
        currentPosition--;
        return false;
    }
}

async function revertAction(action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_EXPENSE:
            // Remove the added expense
            const expenseToRemove = action.data.expense;
            const filteredExpenses = allExpenses.filter(e => e.id !== expenseToRemove.id);
            setAllExpenses(filteredExpenses);
            
            // Remove from Firebase if it exists there
            if (!expenseToRemove.id.startsWith('offline-')) {
                const { deleteDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                const db = getFirestore();
                await deleteDoc(doc(db, 'expenses', expenseToRemove.id));
            }
            break;
            
        case ACTION_TYPES.EDIT_EXPENSE:
            // Restore the old expense
            const { oldExpense } = action.data;
            const expenseIndex = allExpenses.findIndex(e => e.id === oldExpense.id);
            if (expenseIndex !== -1) {
                const updatedExpenses = [...allExpenses];
                updatedExpenses[expenseIndex] = oldExpense;
                setAllExpenses(updatedExpenses);
                
                // Update in Firebase
                if (!oldExpense.id.startsWith('offline-')) {
                    const { updateDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                    const db = getFirestore();
                    await updateDoc(doc(db, 'expenses', oldExpense.id), {
                        amount: oldExpense.amount,
                        category: oldExpense.category,
                        description: oldExpense.description,
                        date: oldExpense.date,
                        isRefund: oldExpense.isRefund
                    });
                }
            }
            break;
            
        case ACTION_TYPES.DELETE_EXPENSE:
            // Restore the deleted expense
            const expenseToRestore = action.data.expense;
            setAllExpenses([...allExpenses, expenseToRestore]);
            
            // Re-add to Firebase
            if (!expenseToRestore.id.startsWith('offline-')) {
                const { setDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                const db = getFirestore();
                await setDoc(doc(db, 'expenses', expenseToRestore.id), expenseToRestore);
            }
            break;
            
        case ACTION_TYPES.BULK_DELETE:
            // Restore all deleted expenses
            const expensesToRestore = action.data.expenses;
            setAllExpenses([...allExpenses, ...expensesToRestore]);
            
            // Re-add to Firebase
            for (const expense of expensesToRestore) {
                if (!expense.id.startsWith('offline-')) {
                    const { setDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                    const db = getFirestore();
                    await setDoc(doc(db, 'expenses', expense.id), expense);
                }
            }
            break;
    }
}

async function reapplyAction(action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_EXPENSE:
            // Re-add the expense
            const expenseToAdd = action.data.expense;
            setAllExpenses([...allExpenses, expenseToAdd]);
            
            // Re-add to Firebase
            if (!expenseToAdd.id.startsWith('offline-')) {
                const { setDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                const db = getFirestore();
                await setDoc(doc(db, 'expenses', expenseToAdd.id), expenseToAdd);
            }
            break;
            
        case ACTION_TYPES.EDIT_EXPENSE:
            // Re-apply the edit
            const { newExpense } = action.data;
            const expenseIndex = allExpenses.findIndex(e => e.id === newExpense.id);
            if (expenseIndex !== -1) {
                const updatedExpenses = [...allExpenses];
                updatedExpenses[expenseIndex] = newExpense;
                setAllExpenses(updatedExpenses);
                
                // Update in Firebase
                if (!newExpense.id.startsWith('offline-')) {
                    const { updateDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                    const db = getFirestore();
                    await updateDoc(doc(db, 'expenses', newExpense.id), {
                        amount: newExpense.amount,
                        category: newExpense.category,
                        description: newExpense.description,
                        date: newExpense.date,
                        isRefund: newExpense.isRefund
                    });
                }
            }
            break;
            
        case ACTION_TYPES.DELETE_EXPENSE:
            // Re-delete the expense
            const expenseToDelete = action.data.expense;
            const filteredExpenses = allExpenses.filter(e => e.id !== expenseToDelete.id);
            setAllExpenses(filteredExpenses);
            
            // Delete from Firebase
            if (!expenseToDelete.id.startsWith('offline-')) {
                const { deleteDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                const db = getFirestore();
                await deleteDoc(doc(db, 'expenses', expenseToDelete.id));
            }
            break;
            
        case ACTION_TYPES.BULK_DELETE:
            // Re-delete all expenses
            const expensesToDelete = action.data.expenses;
            const idsToDelete = expensesToDelete.map(e => e.id);
            const remainingExpenses = allExpenses.filter(e => !idsToDelete.includes(e.id));
            setAllExpenses(remainingExpenses);
            
            // Delete from Firebase
            for (const expense of expensesToDelete) {
                if (!expense.id.startsWith('offline-')) {
                    const { deleteDoc, doc, getFirestore } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
                    const db = getFirestore();
                    await deleteDoc(doc(db, 'expenses', expense.id));
                }
            }
            break;
    }
}