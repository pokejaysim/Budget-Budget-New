
import { allExpenses, categories, charts, setCharts, expenses } from './state.js';

export function getMonthlyData() {
    const monthlyTotals = {};
    const now = new Date();
    
    // Initialize last 6 months
    for (let i = 5; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        monthlyTotals[key] = 0;
    }

    // Sum expenses by month
    allExpenses.forEach(expense => {
        const date = new Date(expense.date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        if (monthlyTotals.hasOwnProperty(key)) {
            monthlyTotals[key] += expense.amount;
        }
    });

    return monthlyTotals;
}

export function getCategoryTrends() {
    const trends = {};
    const now = new Date();
    
    // Initialize categories for last 6 months
    categories.forEach(cat => {
        trends[cat.id] = {};
        for (let i = 5; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            trends[cat.id][key] = 0;
        }
    });

    // Sum expenses by category and month
    allExpenses.forEach(expense => {
        const date = new Date(expense.date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const monthStart = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        
        if (date >= monthStart && trends[expense.category]) {
            trends[expense.category][key] = (trends[expense.category][key] || 0) + expense.amount;
        }
    });

    return trends;
}

export function getCategoryBreakdown() {
    const breakdown = {};
    
    // Initialize categories
    categories.forEach(cat => {
        breakdown[cat.id] = {
            name: cat.name,
            total: 0,
            color: cat.chartColor,
            emoji: cat.emoji
        };
    });

    // Sum current filtered expenses by category
    expenses.forEach(expense => {
        if (breakdown[expense.category]) {
            breakdown[expense.category].total += expense.amount;
        }
    });

    // Filter out categories with no expenses
    return Object.values(breakdown).filter(cat => cat.total > 0);
}

export function renderCharts() {
    // Monthly Spending Trend
    const monthlyCtx = document.getElementById('monthlyChart');
    if (monthlyCtx) {
        if (charts.monthly) charts.monthly.destroy();
        
        const monthlyData = getMonthlyData();
        const labels = Object.keys(monthlyData).map(key => {
            const [year, month] = key.split('-');
            return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short' });
        });

        charts.monthly = new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Monthly Spending',
                    data: Object.values(monthlyData),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toFixed(0);
                            }
                        }
                    }
                }
            }
        });
        setCharts(charts);
    }

    // Category Trends - Stacked Bar Chart
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx) {
        if (charts.category) charts.category.destroy();
        
        const trends = getCategoryTrends();
        // Check if categories exist before rendering
        if (!categories || categories.length === 0) {
            console.warn('No categories available for trend chart');
            return;
        }
        
        const months = Object.keys(trends[categories[0].id] || {});
        const datasets = categories.map(cat => ({
            label: cat.name,
            data: Object.values(trends[cat.id]),
            backgroundColor: cat.chartColor,
            borderColor: cat.chartColor,
            borderWidth: 1,
            hidden: Object.values(trends[cat.id]).every(v => v === 0)
        }));

        charts.category = new Chart(categoryCtx, {
            type: 'bar',
            data: {
                labels: months.map(key => {
                    const [year, month] = key.split('-');
                    return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short' });
                }),
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'rect',
                            padding: 15,
                            generateLabels: function(chart) {
                                const data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                    return data.datasets.map((dataset, i) => {
                                        return {
                                            text: dataset.label,
                                            fillStyle: dataset.backgroundColor,
                                            strokeStyle: dataset.backgroundColor,
                                            hidden: dataset.hidden,
                                            index: i
                                        };
                                    });
                                }
                                return [];
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            footer: function(tooltipItems) {
                                let sum = 0;
                                tooltipItems.forEach(function(tooltipItem) {
                                    sum += tooltipItem.parsed.y;
                                });
                                return 'Total: $' + sum.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toFixed(0);
                            }
                        }
                    }
                }
            }
        });
        setCharts(charts);
    }

    // Category Breakdown Pie Chart
    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        if (charts.pie) charts.pie.destroy();
        
        const breakdown = getCategoryBreakdown();
        
        if (breakdown.length > 0) {
            charts.pie = new Chart(pieCtx, {
                type: 'doughnut',
                data: {
                    labels: breakdown.map(cat => `${cat.emoji} ${cat.name}`),
                    datasets: [{
                        data: breakdown.map(cat => cat.total),
                        backgroundColor: breakdown.map(cat => cat.color),
                        borderWidth: 2,
                        borderColor: '#ffffff',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 15,
                                font: {
                                    size: 12
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const total = context.dataset.data.reduce((sum, value) => sum + value, 0);
                                    const percentage = ((context.parsed / total) * 100).toFixed(1);
                                    return `${context.label}: $${context.parsed.toFixed(2)} (${percentage}%)`;
                                }
                            }
                        }
                    },
                    cutout: '60%',
                    animation: {
                        animateRotate: true,
                        duration: 1000
                    }
                }
            });
        } else {
            // Show "No data" message
            pieCtx.getContext('2d').clearRect(0, 0, pieCtx.width, pieCtx.height);
            const ctx = pieCtx.getContext('2d');
            ctx.font = '16px system-ui';
            ctx.fillStyle = '#6b7280';
            ctx.textAlign = 'center';
            ctx.fillText('No expenses to display', pieCtx.width / 2, pieCtx.height / 2);
        }
        setCharts(charts);
    }
}
