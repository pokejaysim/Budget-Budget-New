import React, { useState, useEffect } from 'react';
import { Calendar, DollarSign, TrendingUp, AlertCircle, RotateCcw, PieChart, Download, X, Delete, LogOut, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { 
  addExpense, 
  subscribeToExpenses, 
  deleteExpense,
  saveUserSettings,
  subscribeToUserSettings 
} from '../firebase/expenseService';

const CreditCardTracker = () => {
  const { currentUser, logout } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [billingCycleStart, setBillingCycleStart] = useState(new Date().toISOString().split('T')[0]);
  const [monthlyBudget, setMonthlyBudget] = useState(2000);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  // Subscribe to user settings
  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = subscribeToUserSettings(currentUser.uid, (settings) => {
      if (settings.monthlyBudget) setMonthlyBudget(settings.monthlyBudget);
      if (settings.billingCycleStart) setBillingCycleStart(settings.billingCycleStart);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Subscribe to expenses
  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = subscribeToExpenses(
      currentUser.uid, 
      billingCycleStart, 
      (expensesData) => {
        setExpenses(expensesData);
      }
    );

    return () => unsubscribe();
  }, [currentUser, billingCycleStart]);

  const categories = [
    { id: 'food', name: 'Food', emoji: '🍔', color: 'bg-orange-500' },
    { id: 'transport', name: 'Transport', emoji: '🚗', color: 'bg-blue-500' },
    { id: 'shopping', name: 'Shopping', emoji: '🛍️', color: 'bg-pink-500' },
    { id: 'bills', name: 'Bills', emoji: '📄', color: 'bg-gray-500' },
    { id: 'fun', name: 'Fun', emoji: '🎬', color: 'bg-purple-500' },
    { id: 'other', name: 'Other', emoji: '📦', color: 'bg-brown-500' }
  ];

  // Calculate statistics
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const daysSinceCycleStart = Math.max(1, Math.floor((new Date() - new Date(billingCycleStart)) / (1000 * 60 * 60 * 24)));
  const dailyAverage = totalSpent / daysSinceCycleStart;
  const budgetRemaining = monthlyBudget - totalSpent;
  const budgetPercentage = (totalSpent / monthlyBudget) * 100;

  // Calculate spending by category
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

  const handleNumberPadClick = (value) => {
    if (value === 'clear') {
      setAmount('');
    } else if (value === 'delete') {
      setAmount(amount.slice(0, -1));
    } else if (value === '.') {
      if (!amount.includes('.')) {
        setAmount(amount + '.');
      }
    } else {
      // Limit to 2 decimal places
      const parts = amount.split('.');
      if (parts.length === 2 && parts[1].length >= 2) {
        return;
      }
      setAmount(amount + value);
    }
  };

  const handleAddExpense = async () => {
    if (!amount || parseFloat(amount) === 0 || !category || !currentUser) return;
    
    setLoading(true);
    try {
      await addExpense(currentUser.uid, {
        amount: parseFloat(amount),
        category,
        description,
        date: new Date().toISOString()
      });
      
      setAmount('');
      setDescription('');
      setCategory('');
      setShowAddExpense(false);
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetBilling = async () => {
    if (confirm('Are you sure you want to reset the billing cycle? This will start a new cycle from today.')) {
      const newCycleStart = new Date().toISOString().split('T')[0];
      setBillingCycleStart(newCycleStart);
      
      if (currentUser) {
        try {
          await saveUserSettings(currentUser.uid, {
            billingCycleStart: newCycleStart,
            monthlyBudget
          });
        } catch (error) {
          console.error('Error saving settings:', error);
        }
      }
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    if (!confirm('Are you sure you want to delete this expense?')) return;
    
    try {
      await deleteExpense(expenseId);
    } catch (error) {
      console.error('Error deleting expense:', error);
      alert('Failed to delete expense. Please try again.');
    }
  };

  const handleSaveBudget = async () => {
    if (!currentUser) return;
    
    setSavingSettings(true);
    try {
      await saveUserSettings(currentUser.uid, {
        monthlyBudget,
        billingCycleStart
      });
      setShowBudgetModal(false);
    } catch (error) {
      console.error('Error saving budget:', error);
      alert('Failed to save budget. Please try again.');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const exportToCSV = () => {
    if (expenses.length === 0) {
      alert('No expenses to export');
      return;
    }

    // Create CSV header
    const headers = ['Date', 'Category', 'Amount', 'Description'];
    
    // Create CSV rows
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

    // Add summary rows
    rows.push([]);
    rows.push(['Summary']);
    rows.push(['Total Spent', '', totalSpent.toFixed(2)]);
    rows.push(['Daily Average', '', dailyAverage.toFixed(2)]);
    rows.push(['Days in Cycle', '', daysSinceCycleStart]);
    rows.push(['Budget', '', monthlyBudget.toFixed(2)]);
    rows.push(['Remaining', '', budgetRemaining.toFixed(2)]);
    
    // Add category breakdown
    rows.push([]);
    rows.push(['Category Breakdown']);
    spendingByCategory.forEach(cat => {
      if (cat.total > 0) {
        rows.push([cat.name, '', cat.total.toFixed(2), `${cat.percentage.toFixed(1)}%`]);
      }
    });

    // Convert to CSV string
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileName = `credit-card-expenses-${new Date().toISOString().split('T')[0]}.csv`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const NumberPad = () => {
    const buttons = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '.', '0', 'delete'
    ];

    return (
      <div className="grid grid-cols-3 gap-2 mt-4">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleNumberPadClick(btn)}
            className={`p-4 text-xl font-semibold rounded-lg transition-all ${
              btn === 'delete' 
                ? 'bg-red-100 hover:bg-red-200 text-red-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {btn === 'delete' ? <Delete className="w-6 h-6 mx-auto" /> : btn}
          </button>
        ))}
        <button
          onClick={() => handleNumberPadClick('clear')}
          className="col-span-3 p-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold"
        >
          Clear
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Credit Card Tracker</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
        
        {/* Budget Overview Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-90">Total Spent</p>
              <p className="text-4xl font-bold">{formatCurrency(totalSpent)}</p>
            </div>
            <button
              onClick={() => setShowBudgetModal(true)}
              className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm"
            >
              Budget: {formatCurrency(monthlyBudget)}
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <p className="text-xs opacity-75">Since</p>
              <p className="font-semibold">{formatDate(billingCycleStart)}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Days</p>
              <p className="font-semibold">{daysSinceCycleStart}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Daily Avg</p>
              <p className="font-semibold">{formatCurrency(dailyAverage)}</p>
            </div>
          </div>
          
          {/* Budget Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Budget Used</span>
              <span>{budgetPercentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all ${
                  budgetPercentage > 90 ? 'bg-red-400' : 
                  budgetPercentage > 70 ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
              />
            </div>
            <p className="text-xs mt-1 opacity-75">
              {budgetRemaining >= 0 
                ? `${formatCurrency(budgetRemaining)} remaining`
                : `${formatCurrency(Math.abs(budgetRemaining))} over budget`
              }
            </p>
          </div>
        </div>

        {/* Spending by Category */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            Spending by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {spendingByCategory.map(cat => (
              <div key={cat.id} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{cat.emoji}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </div>
                <p className="text-lg font-semibold">{formatCurrency(cat.total)}</p>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div 
                    className={`h-1 rounded-full ${cat.color}`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Expenses</h2>
            <div className="flex gap-2">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={handleResetBilling}
                className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Cycle
              </button>
            </div>
          </div>
          
          {expenses.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No expenses yet this billing cycle</p>
          ) : (
            <div className="space-y-2">
              {expenses.map(expense => {
                const cat = categories.find(c => c.id === expense.category);
                return (
                  <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat?.emoji}</span>
                      <div>
                        <p className="font-medium">{cat?.name}</p>
                        {expense.description && (
                          <p className="text-sm text-gray-600">{expense.description}</p>
                        )}
                        <p className="text-xs text-gray-500">{formatDate(expense.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-lg">{formatCurrency(expense.amount)}</p>
                      <button
                        onClick={() => handleDeleteExpense(expense.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddExpense(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-all"
      >
        <DollarSign className="w-6 h-6" />
      </button>

      {/* Add Expense Modal/Sheet */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl p-6 w-full max-w-lg animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add Expense</h3>
              <button
                onClick={() => {
                  setShowAddExpense(false);
                  setAmount('');
                  setCategory('');
                  setDescription('');
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Amount Display */}
            <div className="bg-gray-100 rounded-xl p-4 mb-4 text-center">
              <p className="text-4xl font-bold">
                ${amount || '0.00'}
              </p>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    category === cat.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{cat.emoji}</div>
                  <div className="text-xs">{cat.name}</div>
                </button>
              ))}
            </div>

            {/* Description */}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              className="w-full px-4 py-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Number Pad */}
            <NumberPad />

            {/* Add Button */}
            <button
              onClick={handleAddExpense}
              disabled={!amount || parseFloat(amount) === 0 || !category || loading}
              className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-4"
            >
              {loading ? 'Adding...' : 'Add Expense'}
            </button>
          </div>
        </div>
      )}

      {/* Budget Modal */}
      {showBudgetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Set Monthly Budget</h3>
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">$</span>
              <input
                type="number"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(parseFloat(e.target.value) || 0)}
                className="w-full pl-10 pr-4 py-3 text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="100"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBudgetModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBudget}
                disabled={savingSettings}
                className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {savingSettings ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardTracker;