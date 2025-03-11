    function toggleExpand(id, button) {
        const content = document.getElementById(id);
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            button.textContent = "- Show Less";
        } else {
            content.classList.add("hidden");
            button.textContent = "+ Show More";
        }
    }



document.addEventListener("DOMContentLoaded", function () {
    const createPieChart = (canvasId, labels, data, colors) => {
        const ctx = document.getElementById(canvasId).getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: "#fff",
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.label}: $${tooltipItem.raw}`;
                            }
                        }
                    },
                    legend: { display: true },
                    datalabels: {
                        color: "#fff",
                        font: { weight: 'bold' },
                        formatter: (value, ctx) => {
                            let total = ctx.dataset.data.reduce((acc, val) => acc + val, 0);
                            let percentage = ((value / total) * 100).toFixed(1);
                            return `${percentage}%`;
                        }
                    }
                },
                cutout: "60%",  // Thicker slices
            },
            plugins: [ChartDataLabels]
        });
    };

    createPieChart("incomeChart", ["Salary", "Freelance", "Investments", "Other"], [5000, 2000, 1500, 500], ["#16A34A", "#22C55E", "#86EFAC", "#BBF7D0"]);
    createPieChart("expenseChart", ["Rent", "Food", "Transport", "Entertainment"], [2000, 1000, 500, 300], ["#DC2626", "#EF4444", "#F87171", "#FCA5A5"]);
    createPieChart("investChart", ["Stocks", "Crypto", "Real Estate", "Bonds"], [4000, 1000, 2000, 1000], ["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"]);
});



document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('barChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: 31 }, (_, i) => i + 1), // Days of the month
            datasets: [
                {
                    label: 'Income',
                    data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 7000) + 2000),
                    backgroundColor: 'rgba(54, 162, 235, 1)', // Full opacity blue
                    barPercentage: 0.6,
                    categoryPercentage: 0.8,
                },
                {
                    label: 'Expense',
                    data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 5000) + 1000),
                    backgroundColor: 'rgba(255, 99, 132, 1)', // Full opacity red
                    barPercentage: 0.6,
                    categoryPercentage: 0.8,
                },
                {
                    label: 'Investment',
                    data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 4000) + 500),
                    backgroundColor: 'rgba(75, 192, 192, 1)', // Full opacity green
                    barPercentage: 0.6,
                    categoryPercentage: 0.8,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                x: { 
                    grid: { display: false },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 6 // Show fewer x-axis labels
                    },
                    title: {
                        display: true,
                        text: 'Days of the Month',
                        font: { weight: 'bold', size: 14 }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    title: {
                        display: true,
                        text: 'Amount',
                        font: { weight: 'bold', size: 14 }
                    }
                }
            }
        }
    });
});