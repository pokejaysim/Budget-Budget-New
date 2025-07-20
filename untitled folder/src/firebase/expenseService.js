import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  setDoc
} from 'firebase/firestore';
import { db } from './config';

// Collection reference
const EXPENSES_COLLECTION = 'expenses';

// Add a new expense
export const addExpense = async (userId, expenseData) => {
  try {
    const docRef = await addDoc(collection(db, EXPENSES_COLLECTION), {
      ...expenseData,
      userId,
      createdAt: serverTimestamp(),
      date: new Date(expenseData.date)
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};

// Get user's expenses with real-time updates
export const subscribeToExpenses = (userId, billingCycleStart, callback) => {
  const startDate = new Date(billingCycleStart);
  
  const q = query(
    collection(db, EXPENSES_COLLECTION),
    where('userId', '==', userId),
    where('date', '>=', startDate),
    orderBy('date', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const expenses = [];
    snapshot.forEach((doc) => {
      expenses.push({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate().toISOString()
      });
    });
    callback(expenses);
  });
};

// Delete an expense
export const deleteExpense = async (expenseId) => {
  try {
    await deleteDoc(doc(db, EXPENSES_COLLECTION, expenseId));
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};

// Update an expense
export const updateExpense = async (expenseId, updateData) => {
  try {
    await updateDoc(doc(db, EXPENSES_COLLECTION, expenseId), {
      ...updateData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};

// User settings collection
const SETTINGS_COLLECTION = 'userSettings';

// Save user settings (budget, billing cycle start)
export const saveUserSettings = async (userId, settings) => {
  try {
    const settingsRef = doc(db, SETTINGS_COLLECTION, userId);
    await setDoc(settingsRef, {
      ...settings,
      userId,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error saving user settings:', error);
    throw error;
  }
};

// Get user settings with real-time updates
export const subscribeToUserSettings = (userId, callback) => {
  const settingsRef = doc(db, SETTINGS_COLLECTION, userId);
  
  return onSnapshot(settingsRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    } else {
      // Return default settings if none exist
      callback({
        monthlyBudget: 2000,
        billingCycleStart: new Date().toISOString().split('T')[0]
      });
    }
  });
};