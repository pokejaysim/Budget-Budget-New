
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, deleteDoc, doc, serverTimestamp, setDoc, updateDoc, Timestamp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import { firebaseConfig } from '../firebase-config.js';
import { setCurrentUser, setAllExpenses, setMonthlyBudget, setBillingCycleDay, setBillingCycleStart, setUnsubscribeExpenses, setUnsubscribeSettings, setCategories, defaultCategories, setUnsubscribeCategories } from './state.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Make functions available globally (for now, will refactor later)
window.auth = auth;
window.db = db;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
window.GoogleAuthProvider = GoogleAuthProvider;
window.signInWithPopup = signInWithPopup;
window.collection = collection;
window.addDoc = addDoc;
window.query = query;
window.where = where;
window.orderBy = orderBy;
window.onSnapshot = onSnapshot;
window.deleteDoc = deleteDoc;
window.doc = doc;
window.serverTimestamp = serverTimestamp;
window.setDoc = setDoc;
window.updateDoc = updateDoc;
window.Timestamp = Timestamp;

export function calculateCurrentCycle(cycleDay) {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    let cycleStart, cycleEnd;
    
    // Helper function to get the actual day in a month (handles months with < 31 days)
    function getValidDayInMonth(year, month, day) {
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        return Math.min(day, lastDayOfMonth);
    }
    
    // Cycle starts on the day after closing (e.g., 12th if closing is 11th)
    const cycleStartDay = cycleDay + 1;
    
    if (currentDay >= cycleStartDay) {
        // We're in a cycle that started this month
        const validStartDay = getValidDayInMonth(currentYear, currentMonth, cycleStartDay);
        const validEndDay = getValidDayInMonth(currentYear, currentMonth + 1, cycleDay);
        
        cycleStart = new Date(currentYear, currentMonth, validStartDay);
        cycleEnd = new Date(currentYear, currentMonth + 1, validEndDay);
    } else {
        // We're in a cycle that started last month
        const validStartDay = getValidDayInMonth(currentYear, currentMonth - 1, cycleStartDay);
        const validEndDay = getValidDayInMonth(currentYear, currentMonth, cycleDay);
        
        cycleStart = new Date(currentYear, currentMonth - 1, validStartDay);
        cycleEnd = new Date(currentYear, currentMonth, validEndDay);
    }
    
    return {
        start: cycleStart,
        end: cycleEnd,
        startStr: cycleStart.toISOString().split('T')[0],
        endStr: cycleEnd.toISOString().split('T')[0]
    };
}

export function subscribeToUserData() {
    // Initialize categories with defaults immediately to prevent undefined errors
    setCategories([...defaultCategories]);
    
    // Subscribe to user settings
    const settingsRef = doc(db, 'userSettings', auth.currentUser.uid);
    setUnsubscribeSettings(onSnapshot(settingsRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            setMonthlyBudget(data.monthlyBudget || 2000);
            setBillingCycleDay(data.billingCycleDay || 11);
            
            // Auto-calculate current cycle based on cycle day
            const currentCycle = calculateCurrentCycle(data.billingCycleDay || 11);
            setBillingCycleStart(currentCycle.startStr);
        }
        if (window.filterAndRender) window.filterAndRender();
    }));

    // Subscribe to user categories
    const categoriesRef = doc(db, 'userCategories', auth.currentUser.uid);
    setUnsubscribeCategories(onSnapshot(categoriesRef, async (doc) => {
        if (doc.exists()) {
            setCategories(doc.data().categories || defaultCategories);
        } else {
            // Initialize with default categories for new users
            setCategories(defaultCategories);
            try {
                await setDoc(categoriesRef, { categories: defaultCategories });
            } catch (error) {
                console.error('Error saving default categories:', error);
                // Continue with default categories even if save fails
            }
        }
        if (window.filterAndRender) window.filterAndRender();
    }, (error) => {
        console.error('Error loading categories:', error);
        // Use default categories if there's an error
        setCategories(defaultCategories);
        if (window.filterAndRender) window.filterAndRender();
    }));

    // Subscribe to ALL expenses (not just current billing cycle)
    const q = query(
        collection(db, 'expenses'),
        where('userId', '==', auth.currentUser.uid),
        orderBy('date', 'desc')
    );

    setUnsubscribeExpenses(onSnapshot(q, (snapshot) => {
        const newAllExpenses = [];
        snapshot.forEach((doc) => {
            const expenseData = doc.data();
            const expense = {
                id: doc.id,
                ...expenseData,
                date: expenseData.date.toDate().toISOString()
            };
            
            // Debug: Check for expenses with missing categories
            // if (expense.category && !categories.find(c => c.id === expense.category)) {
            //     console.warn('Expense has unknown category:', expense.id, 'Category ID:', expense.category);
            // }
            
            newAllExpenses.push(expense);
        });
        setAllExpenses(newAllExpenses);
        if (window.filterAndRender) window.filterAndRender();
        // checkBudgetAlert(); // This function needs to be moved or imported
    }));
}

export async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    const errorDiv = document.getElementById('errorMessage');
    
    try {
        await signInWithPopup(auth, provider);
        errorDiv.innerHTML = '';
    } catch (error) {
        console.error('Google sign-in error:', error);
        let message = 'Failed to sign in with Google';
        if (error.code === 'auth/popup-closed-by-user') {
            message = 'Sign-in cancelled';
        } else if (error.code === 'auth/popup-blocked') {
            message = 'Pop-up blocked. Please allow pop-ups for this site.';
        }
        
        errorDiv.innerHTML = `
            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm">${message}</span>
            </div>
        `;
    }
}

export async function handleAuth(event, isSignUp) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMessage');
    
    try {
        if (isSignUp) {
            await createUserWithEmailAndPassword(auth, email, password);
        } else {
            await signInWithEmailAndPassword(auth, email, password);
        }
        errorDiv.innerHTML = '';
    } catch (error) {
        let message = 'An error occurred';
        if (error.code === 'auth/email-already-in-use') message = 'Email already in use';
        else if (error.code === 'auth/weak-password') message = 'Password is too weak';
        else if (error.code === 'auth/invalid-email') message = 'Invalid email address';
        else if (error.code === 'auth/user-not-found') message = 'No account found with this email';
        else if (error.code === 'auth/wrong-password') message = 'Incorrect password';
        else if (error.code === 'auth/invalid-credential') message = 'Invalid email or password';
        
        errorDiv.innerHTML = `
            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 mb-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm">${message}</span>
            </div>
        `;
    }
}

export async function handleLogout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error logging out:', error);
    }
}
