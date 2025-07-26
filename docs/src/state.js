// Global state
export let currentUser = null;
export let allExpenses = []; // All expenses for the user
export let expenses = []; // Filtered expenses
export let monthlyBudget = 2000;
export let billingCycleDay = 11; // Day of month when cycle closes
export let billingCycleStart = new Date().toISOString().split('T')[0];
export let unsubscribeExpenses = null;
export let unsubscribeSettings = null;
export let currentView = 'current'; // 'current', 'monthly', 'yearly', 'custom', 'customYear'
export let searchQuery = '';
export let selectedCategory = '';
export let selectedMonth = null; // Format: 'YYYY-MM'
export let selectedYear = null; // Format: YYYY
export let charts = {}; // Store chart instances
export let categories = []; // Will be loaded from Firebase
export let unsubscribeCategories = null;

// Modal state
export let editingExpenseId = null;
export let expenseAmount = '';
export let expenseCategory = '';
export let expenseDescription = '';
export let expenseDate = new Date().toISOString().split('T')[0];
export let isRefund = false;

// Default categories (used as fallback and for new users)
export const defaultCategories = [
    { id: 'food', name: 'Food', emoji: '🍔', color: 'bg-orange-500', chartColor: '#f97316' },
    { id: 'groceries', name: 'Groceries', emoji: '🛒', color: 'bg-green-500', chartColor: '#10b981' },
    { id: 'transport', name: 'Transport', emoji: '🚗', color: 'bg-blue-500', chartColor: '#3b82f6' },
    { id: 'shopping', name: 'Shopping', emoji: '🛍️', color: 'bg-pink-500', chartColor: '#ec4899' },
    { id: 'bills', name: 'Bills', emoji: '📄', color: 'bg-gray-500', chartColor: '#6b7280' },
    { id: 'fun', name: 'Fun', emoji: '🎬', color: 'bg-purple-500', chartColor: '#a855f7' },
    { id: 'other', name: 'Other', emoji: '📦', color: 'bg-yellow-600', chartColor: '#eab308' }
];

// Functions to update state
export function setCurrentUser(user) { currentUser = user; }
export function setAllExpenses(exp) { allExpenses = exp; }
export function setExpenses(exp) { expenses = exp; }
export function setMonthlyBudget(budget) { monthlyBudget = budget; }
export function setBillingCycleDay(day) { billingCycleDay = day; }
export function setBillingCycleStart(start) { billingCycleStart = start; }
export function setUnsubscribeExpenses(unsub) { unsubscribeExpenses = unsub; }
export function setUnsubscribeSettings(unsub) { unsubscribeSettings = unsub; }
export function setCurrentView(view) { currentView = view; }
export function setSearchQuery(query) { searchQuery = query; }
export function setSelectedCategory(category) { selectedCategory = category; }
export function setSelectedMonth(month) { selectedMonth = month; }
export function setSelectedYear(year) { selectedYear = year; }
export function setCharts(chartObj) { charts = chartObj; }
export function setCategories(cats) { categories = cats; }
export function setUnsubscribeCategories(unsub) { unsubscribeCategories = unsub; }

// Modal state setters
export function setEditingExpenseId(id) { editingExpenseId = id; }
export function setExpenseAmount(amount) { expenseAmount = amount; }
export function setExpenseCategory(category) { expenseCategory = category; }
export function setExpenseDescription(desc) { expenseDescription = desc; }
export function setExpenseDate(date) { expenseDate = date; }
export function setIsRefund(refund) { isRefund = refund; }