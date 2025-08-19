
import { allExpenses, billingCycleStart, monthlyBudget, currentView, searchQuery, categories, selectedCategory, selectedMonth, selectedYear, setExpenses, expenses, setCharts, charts, billingCycleDay } from './state.js';
import { showBudgetNotification } from './ui.js';

// Helper function to get the local date string in PST/PDT timezone
export function getLocalDateString() {
    const now = new Date();
    // Convert to PST/PDT timezone (America/Los_Angeles)
    const localDate = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    
    // Format as YYYY-MM-DD
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const day = String(localDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

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

export function calculatePreviousCycle(cycleDay) {
    // Helper function to get the actual day in a month (handles months with < 31 days)
    function getValidDayInMonth(year, month, day) {
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        return Math.min(day, lastDayOfMonth);
    }
    
    const currentCycle = calculateCurrentCycle(cycleDay);
    
    // Previous cycle ends one day before current cycle starts
    const currentStart = new Date(currentCycle.start);
    const previousEnd = new Date(currentStart.getTime() - 24 * 60 * 60 * 1000);
    
    // Previous cycle starts one month before current cycle starts
    const cycleStartDay = cycleDay + 1; // Cycle starts the day after closing
    const currentStartMonth = currentStart.getMonth();
    const currentStartYear = currentStart.getFullYear();
    
    let previousStartMonth, previousStartYear;
    if (currentStartMonth === 0) {
        previousStartMonth = 11; // December of previous year
        previousStartYear = currentStartYear - 1;
    } else {
        previousStartMonth = currentStartMonth - 1;
        previousStartYear = currentStartYear;
    }
    
    const validStartDay = getValidDayInMonth(previousStartYear, previousStartMonth, cycleStartDay);
    const previousStart = new Date(previousStartYear, previousStartMonth, validStartDay);
    
    return {
        start: previousStart,
        end: previousEnd,
        startStr: previousStart.toISOString().split('T')[0],
        endStr: previousEnd.toISOString().split('T')[0]
    };
}

export function filterExpenses(expenseList) {
    let filtered = [...expenseList];

    // Filter by time period
    const now = new Date();
    if (currentView === 'current') {
        const startDate = new Date(billingCycleStart);
        filtered = filtered.filter(e => new Date(e.date) >= startDate);
    } else if (currentView === 'lastCycle') {
        const previousCycle = calculatePreviousCycle(billingCycleDay);
        const startDate = new Date(previousCycle.start);
        const endDate = new Date(previousCycle.end);
        filtered = filtered.filter(e => {
            const expenseDate = new Date(e.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    } else if (currentView === 'monthly') {
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        filtered = filtered.filter(e => new Date(e.date) >= startOfMonth);
    } else if (currentView === 'yearly') {
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        filtered = filtered.filter(e => new Date(e.date) >= startOfYear);
    } else if (currentView === 'custom' && selectedMonth) {
        const [year, month] = selectedMonth.split('-');
        const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        const endDate = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59);
        filtered = filtered.filter(e => {
            const expenseDate = new Date(e.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    } else if (currentView === 'customYear' && selectedYear) {
        const startDate = new Date(selectedYear, 0, 1);
        const endDate = new Date(selectedYear, 11, 31, 23, 59, 59);
        filtered = filtered.filter(e => {
            const expenseDate = new Date(e.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    }

    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(e => 
            e.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            categories.find(c => c.id === e.category)?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Filter by category
    if (selectedCategory) {
        filtered = filtered.filter(e => e.category === selectedCategory);
    }

    return filtered;
}

export function getAvailableMonths() {
    const months = new Set();
    allExpenses.forEach(expense => {
        const date = new Date(expense.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        months.add(monthKey);
    });
    return Array.from(months).sort().reverse();
}

export function getAvailableYears() {
    const years = new Set();
    allExpenses.forEach(expense => {
        const date = new Date(expense.date);
        years.add(date.getFullYear());
    });
    return Array.from(years).sort().reverse();
}

export function checkBudgetAlert() {
    const currentCycleExpenses = filterExpenses(allExpenses.filter(e => {
        const startDate = new Date(billingCycleStart);
        return new Date(e.date) >= startDate;
    }));
    
    const totalSpent = currentCycleExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    const budgetPercentage = (totalSpent / monthlyBudget) * 100;

    // Show alert if over 80% of budget
    if (budgetPercentage >= 80 && budgetPercentage < 100) {
        showBudgetNotification('warning', `You've used ${budgetPercentage.toFixed(0)}% of your budget!`);
    } else if (budgetPercentage >= 100) {
        showBudgetNotification('danger', `You're over budget by $${(totalSpent - monthlyBudget).toFixed(2)}!`);
    }
}
