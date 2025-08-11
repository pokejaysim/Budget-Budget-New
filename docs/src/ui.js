import { auth, db } from './firebase-init.js';
import { collection, addDoc, doc, updateDoc, serverTimestamp, deleteDoc, setDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import { currentUser, allExpenses, expenses, monthlyBudget, billingCycleDay, billingCycleStart, searchQuery, selectedCategory, selectedMonth, selectedYear, categories, defaultCategories, editingExpenseId, expenseAmount, expenseCategory, expenseDescription, expenseDate, isRefund, setCurrentUser, setAllExpenses, setExpenses, setMonthlyBudget, setBillingCycleDay, setBillingCycleStart, setUnsubscribeExpenses, setUnsubscribeSettings, setCurrentView, setSearchQuery, setSelectedCategory, setSelectedMonth, setSelectedYear, setCharts, setCategories, setUnsubscribeCategories, setEditingExpenseId, setExpenseAmount, setExpenseCategory, setExpenseDescription, setExpenseDate, setIsRefund } from './state.js';
import { calculateCurrentCycle, filterExpenses, getAvailableMonths, getAvailableYears, checkBudgetAlert } from './utils.js';
import { getMonthlyData, getCategoryTrends, renderCharts } from './charts.js';

export function showBudgetNotification(type, message) {
    const existingNotification = document.getElementById('budget-notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.id = 'budget-notification';
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 animate-slide-up ${
        type === 'danger' ? 'bg-red-500 text-white' : 
        type === 'success' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${type === 'success' ? 
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />' :
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

export function showLogin() {
    document.getElementById('app').innerHTML = `
        <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
                <div class="text-center mb-6 sm:mb-8">
                    <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
                        <span class="text-2xl sm:text-3xl">💳</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Budget Buddy</h1>
                    <p class="text-sm sm:text-base text-gray-600 mt-2" id="authTitle">Sign in to your account</p>
                </div>

                <div id="errorMessage"></div>

                <!-- Google Sign In Button -->
                <button onclick="handleGoogleSignIn()" type="button" class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                        </g>
                    </svg>
                    <span class="text-gray-700 font-medium">Sign in with Google</span>
                </button>

                <div class="relative my-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                </div>

                <form onsubmit="handleAuth(event, isSignUp)" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="At least 6 characters" required>
                    </div>

                    <button type="submit" id="authButton" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Sign In
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        <span id="authToggleText">Don't have an account?</span>
                        <button onclick="toggleAuthMode()" class="text-blue-600 hover:text-blue-700 font-medium ml-1" id="authToggle">Sign Up</button>
                    </p>
                </div>
            </div>
        </div>
    `;
}

export function showApp() {
    filterAndRender();
}

export function render() {
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const daysSinceCycleStart = Math.max(1, Math.floor((new Date() - new Date(billingCycleStart)) / (1000 * 60 * 60 * 24)));
    const dailyAverage = totalSpent / daysSinceCycleStart;
    const budgetRemaining = monthlyBudget - totalSpent;
    const budgetPercentage = (totalSpent / monthlyBudget) * 100;

    const spendingByCategory = categories.map(cat => {
        const categoryTotal = expenses
            .filter(expense => expense.category === cat.id)
            .reduce((sum, expense) => sum + expense.amount, 0);
        return {
            ...cat,
            total: categoryTotal,
            percentage: totalSpent > 0 ? (categoryTotal / totalSpent) * 100 : 0
        };
    });

    document.getElementById('app').innerHTML = `
        <div class="min-h-screen bg-gray-50 pb-20">
            <div class="max-w-6xl mx-auto p-4">
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                    <h1 class="text-2xl sm:text-3xl font-bold">Budget Buddy</h1>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <button onclick="showMasterResetModal()" class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-red-600 hover:text-red-700 px-2 sm:px-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span class="hidden sm:inline">Clear All Data</span>
                            <span class="sm:hidden">Clear</span>
                        </button>
                        <button onclick="handleLogout()" class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 px-2 sm:px-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>

                <!-- View Toggle -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <button onclick="setView('current')" class="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg ${currentView === 'current' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}">
                        Current Cycle
                    </button>
                    <button onclick="setView('monthly')" class="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg ${currentView === 'monthly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}">
                        This Month
                    </button>
                    <button onclick="setView('yearly')" class="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg ${currentView === 'yearly' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}">
                        This Year
                    </button>
                    
                    ${allExpenses.length > 0 ? `
                        <select 
                            onchange="setCustomMonth(this.value)"
                            class="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentView === 'custom' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}"
                        >
                            <option value="">Select Month...</option>
                            ${getAvailableMonths().map(monthKey => {
                                const [year, month] = monthKey.split('-');
                                const monthName = new Date(year, month - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                                return `<option value="${monthKey}" ${selectedMonth === monthKey ? 'selected' : ''}>${monthName}</option>`;
                            }).join('')}
                        </select>
                        
                        <select 
                            onchange="setCustomYear(this.value)"
                            class="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentView === 'customYear' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}"
                        >
                            <option value="">Select Year...</option>
                            ${getAvailableYears().map(year => {
                                return `<option value="${year}" ${selectedYear == year ? 'selected' : ''}>${year}</option>`;
                            }).join('')}
                        </select>
                    ` : ''}
                </div>

                <!-- Search and Filter -->
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                    <div class="flex-1">
                        <input 
                            type="text" 
                            placeholder="Search expenses..." 
                            value="${searchQuery}"
                            onchange="setSearch(this.value)"
                            class="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                    </div>
                    <select 
                        onchange="setCategory(this.value)"
                        class="px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All Categories</option>
                        ${categories.map(cat => `
                            <option value="${cat.id}" ${selectedCategory === cat.id ? 'selected' : ''}>
                                ${cat.emoji} ${cat.name}
                            </option>
                        `).join('')}
                    </select>
                </div>
                
                <!-- Budget Overview Card -->
                <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 sm:p-6 text-white mb-6">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                        <div>
                            <p class="text-xs sm:text-sm opacity-90">
                                ${currentView === 'current' ? 'Current Cycle' : 
                                  currentView === 'monthly' ? 'This Month' : 
                                  currentView === 'yearly' ? 'This Year' :
                                  currentView === 'custom' && selectedMonth ? 
                                    new Date(selectedMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 
                                  currentView === 'customYear' && selectedYear ? 
                                    'Year ' + selectedYear :
                                    'Period'} Spent
                            </p>
                            <p class="text-2xl sm:text-4xl font-bold">$${totalSpent.toFixed(2)}</p>
                        </div>
                        <button onclick="showBudgetModal()" class="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap">
                            Budget: $${monthlyBudget.toFixed(2)}
                        </button>
                    </div>
                    
                    ${currentView === 'current' ? `
                        <div class="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                            <div>
                                <p class="text-xs opacity-75">Cycle Period</p>
                                <p class="font-semibold text-xs sm:text-sm">${new Date(billingCycleStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(calculateCurrentCycle().end).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                            <div>
                                <p class="text-xs opacity-75">Days Left</p>
                                <p class="font-semibold text-sm sm:text-base">${Math.max(0, Math.ceil((new Date(calculateCurrentCycle().end) - new Date()) / (1000 * 60 * 60 * 24)))}</p>
                            </div>
                            <div>
                                <p class="text-xs opacity-75">Daily Avg</p>
                                <p class="font-semibold text-sm sm:text-base">$${dailyAverage.toFixed(2)}</p>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <div class="flex justify-between text-sm mb-1">
                                <span>Budget Used</span>
                                <span>${budgetPercentage.toFixed(0)}%</span>
                            </div>
                            <div class="w-full bg-white/30 rounded-full h-2">
                                <div class="h-2 rounded-full transition-all ${
                                    budgetPercentage > 90 ? 'bg-red-400' : 
                                    budgetPercentage > 70 ? 'bg-yellow-400' : 'bg-green-400'
                                }" style="width: ${Math.min(budgetPercentage, 100)}%"></div>
                            </div>
                            <p class="text-xs mt-1 opacity-75">
                                $${totalSpent.toFixed(2)} of $${monthlyBudget.toFixed(2)} used
                            </p>
                        </div>
                    ` : ''}
                </div>

                <!-- Charts Section -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    <!-- Monthly Comparison Chart -->
                    <div class="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                        <h2 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Monthly Spending Trend</h2>
                        <div class="chart-container">
                            <canvas id="monthlyChart"></canvas>
                        </div>
                    </div>

                    <!-- Category Trends Chart -->
                    <div class="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                        <h2 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Category Trends</h2>
                        <div class="chart-container">
                            <canvas id="categoryChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Spending by Category -->
                <div class="bg-white rounded-2xl p-4 sm:p-6 mb-6 shadow-sm">
                    <div class="flex justify-between items-center mb-3 sm:mb-4">
                        <h2 class="text-base sm:text-lg font-semibold">Spending by Category</h2>
                        <button onclick="showCategoryManager()" class="text-xs sm:text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span class="hidden sm:inline">Manage</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                        ${spendingByCategory.map(cat => `
                            <div class="bg-gray-50 rounded-lg p-2 sm:p-3">
                                <div class="flex items-center gap-1 sm:gap-2 mb-1">
                                    <span class="text-lg sm:text-xl">${cat.emoji}</span>
                                    <span class="text-xs sm:text-sm font-medium">${cat.name}</span>
                                </div>
                                <p class="text-sm sm:text-lg font-semibold">$${cat.total.toFixed(2)}</p>
                                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                                    <div class="h-1 rounded-full ${cat.color}" style="width: ${cat.percentage}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Recent Expenses -->
                <div class="bg-white rounded-2xl p-4 sm:p-6 shadow-sm mb-20">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                        <h2 class="text-base sm:text-lg font-semibold">
                            ${searchQuery || selectedCategory ? 'Filtered' : 'Recent'} Expenses 
                            <span class="text-xs sm:text-sm text-gray-500">(${expenses.length})</span>
                        </h2>
                        <div class="flex gap-2">
                            <button onclick="exportToCSV()" class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                                <span class="hidden sm:inline">Export CSV</span>
                                <span class="sm:hidden">Export</span>
                            </button>
                            <button onclick="handleResetBilling()" class="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span class="hidden sm:inline">Sync Cycle</span>
                                <span class="sm:hidden">Sync</span>
                            </button>
                        </div>
                    </div>
                    
                    ${expenses.length === 0 ? `
                        <p class="text-gray-500 text-center py-8">No expenses found</p>
                    ` : `
                        <div class="space-y-2">
                            ${expenses.map(expense => {
                                const cat = categories.find(c => c.id === expense.category);
                                const isRefund = expense.amount < 0;
                                const displayAmount = Math.abs(expense.amount);
                                return `
                                    <div class="flex items-center justify-between p-2 sm:p-3 ${isRefund ? 'bg-green-50 border border-green-200' : 'bg-gray-50'} rounded-lg group">
                                        <div class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                            <span class="text-xl sm:text-2xl flex-shrink-0">${cat?.emoji || '❓'}</span>
                                            <div class="min-w-0 flex-1">
                                                <div class="flex items-center gap-1 sm:gap-2 flex-wrap">
                                                    <p class="font-medium text-sm sm:text-base truncate">${cat?.name || 'Unknown Category'}</p>
                                                    ${isRefund ? '<span class="text-xs bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 rounded-full font-medium">Refund</span>' : ''}
                                                </div>
                                                ${expense.description ? `<p class="text-xs sm:text-sm text-gray-600 truncate">${expense.description}</p>` : ''}
                                                <p class="text-xs text-gray-500">${new Date(expense.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                            <p class="font-semibold text-sm sm:text-lg ${isRefund ? 'text-green-600' : ''}">
                                                ${isRefund ? '-' : ''}$${displayAmount.toFixed(2)}
                                            </p>
                                            <button onclick="editExpense('${expense.id}')" class="opacity-0 group-hover:opacity-100 p-1 hover:bg-blue-100 rounded transition-all touch-manipulation">
                                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button onclick="handleDeleteExpense('${expense.id}')" class="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all touch-manipulation">
                                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>
            </div>

            <!-- Floating Add Button -->
            <button onclick="showAddExpense()" class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 transition-all z-10 touch-manipulation select-none min-w-[56px] min-h-[56px] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center" style="min-height: 56px; min-width: 56px;">
                <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>

        <div id="modal"></div>
    `;

    // Render charts after DOM is updated
    setTimeout(() => {
        renderCharts();
    }, 100);
}

export function setView(view) {
    setCurrentView(view);
    if (view !== 'custom') {
        setSelectedMonth(null);
    }
    if (view !== 'customYear') {
        setSelectedYear(null);
    }
    filterAndRender();
}

export function setCustomMonth(monthKey) {
    if (monthKey) {
        setCurrentView('custom');
        setSelectedMonth(monthKey);
        setSelectedYear(null);
        filterAndRender();
    }
}

export function setCustomYear(year) {
    if (year) {
        setCurrentView('customYear');
        setSelectedYear(parseInt(year));
        setSelectedMonth(null);
        filterAndRender();
    }
}

export function setSearch(query) {
    setSearchQuery(query);
    filterAndRender();
}

export function setCategory(category) {
    setSelectedCategory(category);
    filterAndRender();
}

let isSignUp = false;

export function toggleAuthMode() {
    isSignUp = !isSignUp;
    document.getElementById('authTitle').textContent = isSignUp ? 'Create your account' : 'Sign in to your account';
    document.getElementById('authButton').textContent = isSignUp ? 'Create Account' : 'Sign In';
    document.getElementById('authToggleText').textContent = isSignUp ? 'Already have an account?' : "Don't have an account?";
    document.getElementById('authToggle').textContent = isSignUp ? 'Sign In' : 'Sign Up';
    document.getElementById('errorMessage').innerHTML = '';
}

export function editExpense(expenseId) {
    // Update global state variables
    setEditingExpenseId(expenseId);
    const expense = allExpenses.find(e => e.id === expenseId);
    
    if (!expense) {
        console.error('Expense not found:', expenseId);
        return;
    }
    
    // Pre-fill the form with existing expense data
    setExpenseAmount(Math.abs(expense.amount).toString());
    setExpenseCategory(expense.category);
    setExpenseDescription(expense.description || '');
    setExpenseDate(expense.date.split('T')[0]);
    setIsRefund(expense.amount < 0);
    
    // Show the modal with edit title
    showExpenseModal('Edit Expense');
}

export function showAddExpense() {
    setEditingExpenseId(null); // Reset editing state
    setExpenseAmount('');
    setExpenseCategory('');
    setExpenseDescription('');
    setExpenseDate(new Date().toISOString().split('T')[0]);
    setIsRefund(false);
    
    showExpenseModal('Add Expense');
}

export function showExpenseModal(title) {
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
            <div class="bg-white rounded-t-3xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-lg animate-slide-up max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg sm:text-xl font-semibold" id="modalTitle">${title}</h3>
                    <button onclick="closeModal()" class="p-2 hover:bg-gray-100 rounded-lg touch-manipulation">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="flex gap-2 mb-4">
                    <button onclick="setTransactionType(false)" id="expenseBtn" class="flex-1 py-2 px-4 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 font-medium transition-all">
                        Expense
                    </button>
                    <button onclick="setTransactionType(true)" id="refundBtn" class="flex-1 py-2 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium transition-all">
                        Refund/Credit
                    </button>
                </div>

                <!-- Partial Refund Note -->
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4 text-sm text-blue-800" id="refundNote" style="display: none;">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><strong>Note:</strong> For partial refunds, this creates an offsetting line item to adjust your spending totals.</span>
                    </div>
                </div>

                <div class="bg-gray-100 rounded-xl p-4 mb-4 text-center" id="amountContainer">
                    <p class="text-4xl font-bold" id="amountDisplay">$0.00</p>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-4">
                    ${categories.map(cat => `
                        <button onclick="selectCategory('${cat.id}')" id="cat-${cat.id}" class="p-2 sm:p-3 rounded-lg border-2 transition-all border-gray-200 hover:border-gray-300 touch-manipulation">
                            <div class="text-xl sm:text-2xl mb-1">${cat.emoji}</div>
                            <div class="text-xs sm:text-sm">${cat.name}</div>
                        </button>
                    `).join('')}
                </div>

                <input type="text" id="description" placeholder="Description (optional)" class="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Transaction Date</label>
                    <input type="date" id="expenseDate" value="${expenseDate}" max="${new Date().toISOString().split('T')[0]}" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div class="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
                    ${['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'delete'].map(btn => `
                        <button onclick="handleNumberPadPress('${btn}')" onmousedown="addPressEffect(this)" onmouseup="removePressEffect(this)" onmouseleave="removePressEffect(this)" ontouchstart="addPressEffect(this)" ontouchend="removePressEffect(this)" class="select-none touch-manipulation min-h-[48px] min-w-[48px] p-4 sm:p-5 text-xl sm:text-2xl font-bold rounded-lg transition-all duration-150 ${
                            btn === 'delete' ? 'bg-red-100 hover:bg-red-200 active:bg-red-300 text-red-700' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800'
                        }" style="min-height: 48px; min-width: 48px;">
                            ${btn === 'delete' ? `<svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                            </svg>` : btn}
                        </button>
                    `).join('')}
                    <button onclick="handleNumberPadPress('clear')" onmousedown="addPressEffect(this)" onmouseup="removePressEffect(this)" onmouseleave="removePressEffect(this)" ontouchstart="addPressEffect(this)" ontouchend="removePressEffect(this)" class="col-span-3 select-none touch-manipulation min-h-[48px] p-4 sm:p-5 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-800 rounded-lg font-bold transition-all duration-150" style="min-height: 48px;">
                        Clear
                    </button>
                </div>

                <button onclick="handleAddExpense()" class="w-full bg-blue-500 text-white py-4 sm:py-5 rounded-xl font-semibold hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-150 mt-4 touch-manipulation select-none min-h-[52px]" style="min-height: 52px;">
                    ${editingExpenseId ? 'Update Expense' : 'Add Expense'}
                </button>
            </div>
        </div>
    `;
    
    // If editing, update the UI to show pre-filled data
    if (editingExpenseId) {
        // Update amount display
        updateAmountDisplay();
        
        // Highlight selected category
        if (expenseCategory) {
            selectCategory(expenseCategory);
        }
        
        // Update transaction type buttons
        setTransactionType(isRefund);
        
        // Set description
        if (expenseDescription) {
            document.getElementById('description').value = expenseDescription;
        }
    }
}

export function setTransactionType(refund) {
    setIsRefund(refund);
    const expenseBtn = document.getElementById('expenseBtn');
    const refundBtn = document.getElementById('refundBtn');
    const modalTitle = document.getElementById('modalTitle');
    const amountContainer = document.getElementById('amountContainer');
    const addBtn = document.getElementById('addExpenseBtn');
    const refundNote = document.getElementById('refundNote');
    
    if (refund) {
        if (!editingExpenseId) modalTitle.textContent = 'Add Refund/Credit';
        expenseBtn.className = 'flex-1 py-2 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium transition-all';
        refundBtn.className = 'flex-1 py-2 px-4 rounded-lg border-2 border-green-500 bg-green-50 text-green-700 font-medium transition-all';
        amountContainer.className = 'bg-green-100 rounded-xl p-4 mb-4 text-center';
        addBtn.textContent = editingExpenseId ? 'Update Refund' : 'Add Refund';
        addBtn.className = 'w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-4';
        if (refundNote) refundNote.style.display = 'block';
    } else {
        if (!editingExpenseId) modalTitle.textContent = 'Add Expense';
        expenseBtn.className = 'flex-1 py-2 px-4 rounded-lg border-2 border-blue-500 bg-blue-50 text-blue-700 font-medium transition-all';
        refundBtn.className = 'flex-1 py-2 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium transition-all';
        amountContainer.className = 'bg-gray-100 rounded-xl p-4 mb-4 text-center';
        addBtn.textContent = editingExpenseId ? 'Update Expense' : 'Add Expense';
        addBtn.className = 'w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-4';
        if (refundNote) refundNote.style.display = 'none';
    }
    updateAmountDisplay();
}

export function selectCategory(catId) {
    setExpenseCategory(catId);
    categories.forEach(cat => {
        const btn = document.getElementById(`cat-${cat.id}`);
        if (cat.id === catId) {
            btn.className = 'p-3 rounded-lg border-2 transition-all border-blue-500 bg-blue-50';
        } else {
            btn.className = 'p-3 rounded-lg border-2 transition-all border-gray-200 hover:border-gray-300';
        }
    });
}

export function handleNumberPad(value) {
    if (value === 'clear') {
        setExpenseAmount('');
    } else if (value === 'delete') {
        setExpenseAmount(expenseAmount.slice(0, -1));
    } else if (value === '.') {
        if (!expenseAmount.includes('.')) {
            setExpenseAmount(expenseAmount + '.');
        }
    } else {
        const parts = expenseAmount.split('.');
        if (parts.length === 2 && parts[1].length >= 2) {
            return;
        }
        setExpenseAmount(expenseAmount + value);
    }
    updateAmountDisplay();
}

export function handleNumberPadPress(value) {
    // Add haptic feedback if available
    if (navigator.vibrate) {
        navigator.vibrate(25);
    }
    
    // Call the original function
    handleNumberPad(value);
}

export function addPressEffect(element) {
    element.style.transform = 'scale(0.95)';
    element.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
}

export function removePressEffect(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '';
}

export function updateAmountDisplay() {
    const displayAmount = expenseAmount || '0.00';
    const prefix = isRefund ? '-$' : '$';
    document.getElementById('amountDisplay').textContent = prefix + displayAmount;
}

export async function handleAddExpense() {
    if (!expenseAmount || parseFloat(expenseAmount) === 0 || !expenseCategory || !currentUser) return;
    
    const btn = document.getElementById('addExpenseBtn');
    const isEditing = editingExpenseId !== null;
    
    btn.textContent = isEditing ? 'Updating...' : (isRefund ? 'Adding Refund...' : 'Adding...');
    btn.disabled = true;
    
    try {
        const amount = parseFloat(expenseAmount);
        const selectedDate = document.getElementById('expenseDate').value;
        const transactionDate = selectedDate ? new Date(selectedDate + 'T12:00:00') : new Date();
        
        const expenseData = {
            amount: isRefund ? -amount : amount,
            category: expenseCategory,
            description: document.getElementById('description').value,
            date: transactionDate,
            userId: currentUser.uid,
            isRefund: isRefund
        };
        
        if (isEditing) {
            // Update existing expense
            await updateDoc(doc(db, 'expenses', editingExpenseId), {
                ...expenseData,
                updatedAt: serverTimestamp()
            });
        } else {
            // Add new expense
            await addDoc(collection(db, 'expenses'), {
                ...expenseData,
                createdAt: serverTimestamp()
            });
        }
        
        closeModal();
    } catch (error) {
        console.error(isEditing ? 'Error updating expense:' : 'Error adding expense:', error);
        alert(`Failed to ${isEditing ? 'update' : 'add'} ${isRefund ? 'refund' : 'expense'}. Please try again.`);
        btn.textContent = isEditing ? 'Update Expense' : (isRefund ? 'Add Refund' : 'Add Expense');
        btn.disabled = false;
    }
}

export function closeModal() {
    document.getElementById('modal').innerHTML = '';
}

export function showBudgetModal() {
    const currentCycle = calculateCurrentCycle();
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-full">
                <h3 class="text-base sm:text-lg font-semibold mb-4">Budget & Billing Settings</h3>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Monthly Budget</label>
                    <div class="relative">
                        <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">$</span>
                        <input type="number" id="budgetInput" value="${monthlyBudget}" class="w-full pl-10 pr-4 py-3 text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" step="100">
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Billing Cycle Closing Day</label>
                    <select id="cycleDayInput" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        ${Array.from({length: 31}, (_, i) => i + 1).map(day => 
                            `<option value="${day}" ${billingCycleDay === day ? 'selected' : ''}>${day}${day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th'}</option>`
                        ).join('')}
                    </select>
                    <p class="text-xs text-gray-600 mt-2">
                        Current cycle: ${currentCycle.start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${currentCycle.end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                </div>
                
                <div class="flex gap-3">
                    <button onclick="closeModal()" class="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onclick="saveBudget()" class="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" id="saveBudgetBtn">
                        Save
                    </button>
                </div>
            </div>
        </div>
    `;
}

export async function saveBudget() {
    const newBudget = parseFloat(document.getElementById('budgetInput').value) || 0;
    const newCycleDay = parseInt(document.getElementById('cycleDayInput').value) || 11;
    const btn = document.getElementById('saveBudgetBtn');
    btn.textContent = 'Saving...';
    btn.disabled = true;
    
    try {
        // Calculate new cycle dates if cycle day changed
        const currentCycle = calculateCurrentCycle(newCycleDay);
        
        await setDoc(doc(db, 'userSettings', currentUser.uid), {
            monthlyBudget: newBudget,
            billingCycleDay: newCycleDay,
            billingCycleStart: currentCycle.startStr,
            userId: currentUser.uid,
            updatedAt: serverTimestamp()
        }, { merge: true });
        
        setMonthlyBudget(newBudget);
        setBillingCycleDay(newCycleDay);
        setBillingCycleStart(currentCycle.startStr);
        
        closeModal();
        filterAndRender();
    } catch (error) {
        console.error('Error saving budget:', error);
        alert('Failed to save budget. Please try again.');
        btn.textContent = 'Save';
        btn.disabled = false;
    }
}

export async function handleResetBilling() {
    if (confirm('Are you sure you want to manually override the billing cycle? This will recalculate based on your cycle closing day.')) {
        try {
            // Recalculate current cycle
            const currentCycle = calculateCurrentCycle();
            
            await setDoc(doc(db, 'userSettings', currentUser.uid), {
                monthlyBudget: monthlyBudget,
                billingCycleDay: billingCycleDay,
                billingCycleStart: currentCycle.startStr,
                userId: currentUser.uid,
                updatedAt: serverTimestamp()
            }, { merge: true });
            
            setBillingCycleStart(currentCycle.startStr);
            filterAndRender();
            showBudgetNotification('success', 'Billing cycle updated successfully!');
        } catch (error) {
            console.error('Error resetting billing cycle:', error);
            alert('Failed to reset billing cycle. Please try again.');
        }
    }
}

export async function handleDeleteExpense(expenseId) {
    if (!confirm('Are you sure you want to delete this expense?')) return;
    
    try {
        await deleteDoc(doc(db, 'expenses', expenseId));
    } catch (error) {
        console.error('Error deleting expense:', error);
        alert('Failed to delete expense. Please try again.');
    }
}

export function showMasterResetModal() {
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl p-4 sm:p-6 max-w-md w-full">
                <div class="flex items-center gap-2 sm:gap-3 mb-4">
                    <div class="bg-red-100 p-2 sm:p-3 rounded-full">
                        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-base sm:text-lg font-semibold">Clear All Data</h3>
                        <p class="text-xs sm:text-sm text-gray-600">This action cannot be undone</p>
                    </div>
                </div>
                
                <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p class="text-sm text-red-800 mb-2">This will permanently delete:</p>
                    <ul class="text-sm text-red-700 space-y-1 ml-4">
                        <li>• All ${allExpenses.length} expense records</li>
                        <li>• All refunds and credits</li>
                        <li>• Your complete transaction history</li>
                    </ul>
                    <p class="text-sm text-green-700 mt-3">Your settings and budget will be preserved.</p>
                </div>

                <p class="text-sm text-gray-700 mb-4">
                    Type <span class="font-mono bg-gray-100 px-2 py-1 rounded">DELETE</span> to confirm:
                </p>
                
                <input 
                    type="text" 
                    id="confirmDelete" 
                    placeholder="Type DELETE to confirm"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onkeyup="checkDeleteConfirmation()"
                >
                
                <div class="flex gap-3">
                    <button onclick="closeModal()" class="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Cancel
                    </button>
                    <button 
                        onclick="handleMasterReset()" 
                        id="confirmResetBtn"
                        class="flex-1 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" 
                        disabled
                    >
                        Clear All Data
                    </button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('confirmDelete').focus();
}

export function checkDeleteConfirmation() {
    const input = document.getElementById('confirmDelete').value;
    const btn = document.getElementById('confirmResetBtn');
    
    if (input === 'DELETE') {
        btn.disabled = false;
        btn.className = 'flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer';
    } else {
        btn.disabled = true;
        btn.className = 'flex-1 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed';
    }
}

export async function handleMasterReset() {
    const btn = document.getElementById('confirmResetBtn');
    btn.textContent = 'Clearing...';
    btn.disabled = true;
    
    try {
        // Get all expenses for the current user
        const batch = [];
        allExpenses.forEach(expense => {
            batch.push(deleteDoc(doc(db, 'expenses', expense.id)));
        });
        
        // Delete all expenses in parallel
        await Promise.all(batch);
        
        // Show success message
        closeModal();
        showBudgetNotification('success', `Successfully cleared ${batch.length} expense records!`);
        
    } catch (error) {
        console.error('Error clearing data:', error);
        alert('Failed to clear data. Please try again.');
        btn.textContent = 'Clear All Data';
        btn.disabled = false;
    }
}

export function showCategoryManager() {
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div class="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-2xl my-8">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg sm:text-xl font-semibold">Manage Categories</h3>
                    <button onclick="closeModal()" class="p-2 hover:bg-gray-100 rounded-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div class="mb-6">
                    <button onclick="showAddCategory()" class="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Category
                    </button>
                </div>
                
                <div class="space-y-2">
                    ${categories.map((cat, index) => `
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">${cat.emoji}</span>
                                <div>
                                    <p class="font-medium">${cat.name}</p>
                                    <p class="text-xs text-gray-500">ID: ${cat.id}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 ${cat.color} rounded"></div>
                                <button onclick="editCategory(${index})" class="p-2 hover:bg-gray-200 rounded-lg transition-all">
                                    <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                ${categories.length > 1 ? `
                                    <button onclick="deleteCategory(${index})" class="p-2 hover:bg-red-100 rounded-lg transition-all">
                                        <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <p class="text-xs text-gray-500 mt-4">Note: You must have at least one category.</p>
            </div>
        </div>
    `;
}

export function showAddCategory() {
    const colors = [
        { color: 'bg-red-500', chartColor: '#ef4444' },
        { color: 'bg-orange-500', chartColor: '#f97316' },
        { color: 'bg-yellow-500', chartColor: '#eab308' },
        { color: 'bg-green-500', chartColor: '#10b981' },
        { color: 'bg-blue-500', chartColor: '#3b82f6' },
        { color: 'bg-purple-500', chartColor: '#a855f7' },
        { color: 'bg-pink-500', chartColor: '#ec4899' },
        { color: 'bg-gray-500', chartColor: '#6b7280' }
    ];
    
    const emojis = ['🍔', '🛒', '🚗', '🛍️', '📄', '🎬', '📦', '🏠', '💊', '✈️', '🎮', '📚', '👕', '💰', '🎁', '🏋️', '🍕', '☕'];
    
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md">
                <h3 class="text-lg font-semibold mb-4">Add New Category</h3>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                    <input type="text" id="newCategoryName" placeholder="e.g., Groceries" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="20">
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Emoji</label>
                    <div class="grid grid-cols-6 gap-2">
                        ${emojis.map(emoji => `
                            <button onclick="selectEmoji('${emoji}')" class="p-2 text-2xl hover:bg-gray-100 rounded-lg emoji-btn" data-emoji="${emoji}">
                                ${emoji}
                            </button>
                        `).join('')}
                    </div>
                    <input type="hidden" id="selectedEmoji" value="">
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Color</label>
                    <div class="grid grid-cols-4 gap-2">
                        ${colors.map((c, i) => `
                            <button onclick="selectColor(${i})" class="h-10 ${c.color} rounded-lg color-btn hover:ring-2 hover:ring-offset-2 hover:ring-gray-400" data-color="${c.color}" data-chart="${c.chartColor}"></button>
                        `).join('')}
                    </div>
                    <input type="hidden" id="selectedColor" value="">
                    <input type="hidden" id="selectedChartColor" value="">
                </div>
                
                <div class="flex gap-3">
                    <button onclick="showCategoryManager()" class="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onclick="saveNewCategory()" class="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" id="saveCategoryBtn">
                        Add Category
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function selectEmoji(emoji) {
    document.getElementById('selectedEmoji').value = emoji;
    document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.classList.toggle('ring-2', btn.dataset.emoji === emoji);
        btn.classList.toggle('ring-blue-500', btn.dataset.emoji === emoji);
    });
}

export function selectColor(index) {
    const colors = [
        { color: 'bg-red-500', chartColor: '#ef4444' },
        { color: 'bg-orange-500', chartColor: '#f97316' },
        { color: 'bg-yellow-500', chartColor: '#eab308' },
        { color: 'bg-green-500', chartColor: '#10b981' },
        { color: 'bg-blue-500', chartColor: '#3b82f6' },
        { color: 'bg-purple-500', chartColor: '#a855f7' },
        { color: 'bg-pink-500', chartColor: '#ec4899' },
        { color: 'bg-gray-500', chartColor: '#6b7280' }
    ];
    
    document.getElementById('selectedColor').value = colors[index].color;
    document.getElementById('selectedChartColor').value = colors[index].chartColor;
    
    document.querySelectorAll('.color-btn').forEach((btn, i) => {
        btn.classList.toggle('ring-2', i === index);
        btn.classList.toggle('ring-offset-2', i === index);
        btn.classList.toggle('ring-gray-800', i === index);
    });
}

export async function saveNewCategory() {
    const name = document.getElementById('newCategoryName').value.trim();
    const emoji = document.getElementById('selectedEmoji').value;
    const color = document.getElementById('selectedColor').value;
    const chartColor = document.getElementById('selectedChartColor').value;
    
    if (!name || !emoji || !color) {
        alert('Please fill in all fields');
        return;
    }
    
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    
    // Check if ID already exists
    if (categories.some(cat => cat.id === id)) {
        alert('A category with this name already exists');
        return;
    }
    
    const newCategory = { id, name, emoji, color, chartColor };
    const updatedCategories = [...categories, newCategory];
    
    const btn = document.getElementById('saveCategoryBtn');
    btn.textContent = 'Saving...';
    btn.disabled = true;
    
    try {
        await setDoc(doc(db, 'userCategories', currentUser.uid), {
            categories: updatedCategories
        });
        showCategoryManager();
    } catch (error) {
        console.error('Error saving category:', error);
        alert('Failed to save category. Please try again.');
        btn.textContent = 'Add Category';
        btn.disabled = false;
    }
}

export async function editCategory(index) {
    const cat = categories[index];
    const colors = [
        { color: 'bg-red-500', chartColor: '#ef4444' },
        { color: 'bg-orange-500', chartColor: '#f97316' },
        { color: 'bg-yellow-500', chartColor: '#eab308' },
        { color: 'bg-green-500', chartColor: '#10b981' },
        { color: 'bg-blue-500', chartColor: '#3b82f6' },
        { color: 'bg-purple-500', chartColor: '#a855f7' },
        { color: 'bg-pink-500', chartColor: '#ec4899' },
        { color: 'bg-gray-500', chartColor: '#6b7280' }
    ];
    
    const emojis = ['🍔', '🛒', '🚗', '🛍️', '📄', '🎬', '📦', '🏠', '💊', '✈️', '🎮', '📚', '👕', '💰', '🎁', '🏋️', '🍕', '☕'];
    
    document.getElementById('modal').innerHTML = `
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md">
                <h3 class="text-lg font-semibold mb-4">Edit Category</h3>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                    <input type="text" id="editCategoryName" value="${cat.name}" placeholder="e.g., Groceries" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" maxlength="20">
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Emoji</label>
                    <div class="grid grid-cols-6 gap-2">
                        ${emojis.map(emoji => `
                            <button onclick="selectEmoji('${emoji}')" class="p-2 text-2xl hover:bg-gray-100 rounded-lg emoji-btn ${cat.emoji === emoji ? 'ring-2 ring-blue-500' : ''}" data-emoji="${emoji}">
                                ${emoji}
                            </button>
                        `).join('')}
                    </div>
                    <input type="hidden" id="selectedEmoji" value="${cat.emoji}">
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Select Color</label>
                    <div class="grid grid-cols-4 gap-2">
                        ${colors.map((c, i) => `
                            <button onclick="selectColor(${i})" class="h-10 ${c.color} rounded-lg color-btn hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 ${cat.color === c.color ? 'ring-2 ring-offset-2 ring-gray-800' : ''}" data-color="${c.color}" data-chart="${c.chartColor}"></button>
                        `).join('')}
                    </div>
                    <input type="hidden" id="selectedColor" value="${cat.color}">
                    <input type="hidden" id="selectedChartColor" value="${cat.chartColor}">
                </div>
                
                <div class="flex gap-3">
                    <button onclick="showCategoryManager()" class="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onclick="updateCategory(${index})" class="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" id="updateCategoryBtn">
                        Update Category
                    </button>
                </div>
            </div>
        </div>
    `;
}

export async function updateCategory(index) {
    const name = document.getElementById('editCategoryName').value.trim();
    const emoji = document.getElementById('selectedEmoji').value;
    const color = document.getElementById('selectedColor').value;
    const chartColor = document.getElementById('selectedChartColor').value;
    
    if (!name || !emoji || !color) {
        alert('Please fill in all fields');
        return;
    }
    
    const updatedCategories = [...categories];
    updatedCategories[index] = {
        ...updatedCategories[index],
        name,
        emoji,
        color,
        chartColor
    };
    
    const btn = document.getElementById('updateCategoryBtn');
    btn.textContent = 'Updating...';
    btn.disabled = true;
    
    try {
        await setDoc(doc(db, 'userCategories', currentUser.uid), {
            categories: updatedCategories
        });
        showCategoryManager();
    } catch (error) {
        console.error('Error updating category:', error);
        alert('Failed to update category. Please try again.');
        btn.textContent = 'Update Category';
        btn.disabled = false;
    }
}

export async function deleteCategory(index) {
    const cat = categories[index];
    
    // Check if category has expenses
    const hasExpenses = allExpenses.some(expense => expense.category === cat.id);
    
    if (hasExpenses) {
        if (!confirm(`The category "${cat.name}" has expenses associated with it. Are you sure you want to delete it? The expenses will be moved to "Other".`)) {
            return;
        }
    } else {
        if (!confirm(`Are you sure you want to delete the category "${cat.name}"?`)) {
            return;
        }
    }
    
    const updatedCategories = categories.filter((_, i) => i !== index);
    
    try {
        await setDoc(doc(db, 'userCategories', currentUser.uid), {
            categories: updatedCategories
        });
        
        // If there were expenses in this category, update them to 'other'
        if (hasExpenses) {
            const batch = [];
            allExpenses.forEach(expense => {
                if (expense.category === cat.id) {
                    batch.push(
                        setDoc(doc(db, 'expenses', expense.id), 
                            { category: 'other' }, 
                            { merge: true }
                        )
                    );
                }
            });
            await Promise.all(batch);
        }
        
        showCategoryManager();
    } catch (error) {
        console.error('Error deleting category:', error);
        alert('Failed to delete category. Please try again.');
    }
}

export function exportToCSV() {
    if (expenses.length === 0) {
        alert('No expenses to export');
        return;
    }

    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const daysSinceCycleStart = Math.max(1, Math.floor((new Date() - new Date(billingCycleStart)) / (1000 * 60 * 60 * 24)));
    const dailyAverage = totalSpent / daysSinceCycleStart;
    const budgetRemaining = monthlyBudget - totalSpent;

    const headers = ['Date', 'Category', 'Amount', 'Description'];
    
    const rows = expenses.map(expense => {
        const cat = categories.find(c => c.id === expense.category);
        const date = new Date(expense.date).toLocaleDateString('en-US');
        return [
            date,
            cat?.name || expense.category,
            expense.amount.toFixed(2),
            expense.description || ''
        ];
    });

    rows.push([]);
    rows.push(['Summary']);
    rows.push(['Total Spent', '', totalSpent.toFixed(2)]);
    rows.push(['Daily Average', '', dailyAverage.toFixed(2)]);
    rows.push(['Days in Cycle', '', daysSinceCycleStart]);
    rows.push(['Budget', '', monthlyBudget.toFixed(2)]);
    rows.push(['Remaining', '', budgetRemaining.toFixed(2)]);

    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `credit-card-expenses-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}