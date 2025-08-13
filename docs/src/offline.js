// Offline storage utilities
import { allExpenses, categories, monthlyBudget, billingCycleDay, setAllExpenses, setCategories, setMonthlyBudget, setBillingCycleDay } from './state.js';

const STORAGE_KEYS = {
    EXPENSES: 'budget-buddy-expenses',
    CATEGORIES: 'budget-buddy-categories',
    SETTINGS: 'budget-buddy-settings',
    LAST_SYNC: 'budget-buddy-last-sync'
};

// Save data to localStorage
export function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(allExpenses));
        localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({
            monthlyBudget,
            billingCycleDay
        }));
        localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
        console.log('Data saved to localStorage');
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

// Load data from localStorage
export function loadFromLocalStorage() {
    try {
        const expensesData = localStorage.getItem(STORAGE_KEYS.EXPENSES);
        const categoriesData = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
        const settingsData = localStorage.getItem(STORAGE_KEYS.SETTINGS);

        if (expensesData) {
            const expenses = JSON.parse(expensesData);
            setAllExpenses(expenses);
        }

        if (categoriesData) {
            const cats = JSON.parse(categoriesData);
            setCategories(cats);
        }

        if (settingsData) {
            const settings = JSON.parse(settingsData);
            setMonthlyBudget(settings.monthlyBudget || 2000);
            setBillingCycleDay(settings.billingCycleDay || 11);
        }

        console.log('Data loaded from localStorage');
        return true;
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        return false;
    }
}

// Clear localStorage data
export function clearLocalStorage() {
    try {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        console.log('localStorage cleared');
    } catch (error) {
        console.error('Failed to clear localStorage:', error);
    }
}

// Check if we have offline data
export function hasOfflineData() {
    return localStorage.getItem(STORAGE_KEYS.EXPENSES) !== null;
}

// Get last sync time
export function getLastSyncTime() {
    const lastSync = localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
    return lastSync ? new Date(lastSync) : null;
}

// Add expense to offline queue
export function addOfflineExpense(expense) {
    try {
        const offlineExpenses = getOfflineExpenses();
        offlineExpenses.push({
            ...expense,
            id: `offline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            isOffline: true,
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('budget-buddy-offline-expenses', JSON.stringify(offlineExpenses));
        return true;
    } catch (error) {
        console.error('Failed to add offline expense:', error);
        return false;
    }
}

// Get offline expenses
export function getOfflineExpenses() {
    try {
        const data = localStorage.getItem('budget-buddy-offline-expenses');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Failed to get offline expenses:', error);
        return [];
    }
}

// Clear offline expenses
export function clearOfflineExpenses() {
    try {
        localStorage.removeItem('budget-buddy-offline-expenses');
    } catch (error) {
        console.error('Failed to clear offline expenses:', error);
    }
}

// Sync offline expenses to Firebase when online
export async function syncOfflineExpenses(addExpenseToFirebase) {
    const offlineExpenses = getOfflineExpenses();
    if (offlineExpenses.length === 0) return;

    console.log(`Syncing ${offlineExpenses.length} offline expenses...`);
    
    for (const expense of offlineExpenses) {
        try {
            // Remove offline-specific properties
            const { isOffline, createdAt, ...cleanExpense } = expense;
            await addExpenseToFirebase(cleanExpense);
        } catch (error) {
            console.error('Failed to sync expense:', expense.id, error);
            // Keep failed expenses for retry
            return false;
        }
    }

    // Clear offline expenses after successful sync
    clearOfflineExpenses();
    console.log('Offline expenses synced successfully');
    return true;
}

// Auto-save functionality
let autoSaveTimeout;
export function scheduleAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        saveToLocalStorage();
    }, 1000); // Save 1 second after last change
}

// Export data for backup
export function exportBackupData() {
    try {
        const backupData = {
            expenses: allExpenses,
            categories: categories,
            settings: {
                monthlyBudget,
                billingCycleDay
            },
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        return JSON.stringify(backupData, null, 2);
    } catch (error) {
        console.error('Failed to export backup data:', error);
        return null;
    }
}

// Import data from backup
export function importBackupData(jsonData) {
    try {
        const backupData = JSON.parse(jsonData);
        
        if (backupData.expenses) {
            setAllExpenses(backupData.expenses);
        }
        
        if (backupData.categories) {
            setCategories(backupData.categories);
        }
        
        if (backupData.settings) {
            setMonthlyBudget(backupData.settings.monthlyBudget || 2000);
            setBillingCycleDay(backupData.settings.billingCycleDay || 11);
        }
        
        saveToLocalStorage();
        return true;
    } catch (error) {
        console.error('Failed to import backup data:', error);
        return false;
    }
}