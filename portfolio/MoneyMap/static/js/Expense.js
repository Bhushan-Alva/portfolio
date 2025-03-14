const transactions = [
    { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
    { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Expense", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-03-05", category: "Utilities", description: "Electricity bill", amount: "- $120.00", type: "Expense", payment: "Debit Card", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-02-28", category: "Entertainment", description: "Movie tickets", amount: "- $30.00", type: "Expense", payment: "Cash", tags: "food", status: "Completed", recurring: "No" },
    { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
    { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Expense", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-03-05", category: "Utilities", description: "Electricity bill", amount: "- $120.00", type: "Expense", payment: "Debit Card", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-02-28", category: "Entertainment", description: "Movie tickets", amount: "- $30.00", type: "Expense", payment: "Cash", tags: "food", status: "Completed", recurring: "No" },
    { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
    { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Expense", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-03-05", category: "Utilities", description: "Electricity bill", amount: "- $120.00", type: "Expense", payment: "Debit Card", tags: "food", status: "Completed", recurring: "Yes" },
    { date: "2025-02-28", category: "Entertainment", description: "Movie tickets", amount: "- $30.00", type: "Expense", payment: "Cash", tags: "food", status: "Completed", recurring: "No" }
];

let currentPage = 1;
let recordsPerPage = parseInt(document.getElementById("recordsPerPage").value);

function loadTransactions() {
    const tableBody = document.getElementById("transactionTable");
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const paginatedItems = transactions.slice(start, end);

    paginatedItems.forEach((t) => {
        if (t.type === "Expense") {
        const row = `<tr class="border-t hover:bg-gray-100 transition">
            <td class="p-3">${t.date}</td>
            <td class="p-3">${t.category}</td>
            <td class="p-3">${t.description}</td>
            <td class="p-3 text-${t.type === "Expense" ? "red" : "green"}-500">${t.amount}</td>
            <td class="p-3">${t.type}</td>
            <td class="p-3">${t.payment}</td>
            <td class="p-3">${t.tags}</td>
            <td class="p-3 text-${t.status === "Pending" ? "yellow" : "green"}-500">${t.status}</td>
            <td class="p-3">${t.recurring}</td>
            <td class="p-3">
                <button class="text-blue-500 hover:underline">Edit</button> | 
                <button class="text-red-500 hover:underline">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
        }
    });

    document.getElementById("pageInfo").innerText = `Page ${currentPage} of ${Math.ceil(transactions.length / recordsPerPage)}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === Math.ceil(transactions.length / recordsPerPage);
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadTransactions();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(transactions.length / recordsPerPage)) {
        currentPage++;
        loadTransactions();
    }
});

document.getElementById("recordsPerPage").addEventListener("change", (event) => {
    recordsPerPage = parseInt(event.target.value);
    currentPage = 1;
    loadTransactions();
});

loadTransactions();



document.addEventListener("DOMContentLoaded", function () {
    const addTransactionBtn = document.querySelector("#addTransactionBtn");
    const modal = document.querySelector("#transactionModal");
    const closeModalBtn = document.querySelector("#closeModal");

    // Open Modal
    addTransactionBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });

    // Close Modal
    closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});



document.getElementById("recurringCheckbox").addEventListener("change", function() {
    document.getElementById("recurringFields").classList.toggle("hidden", !this.checked);
});

document.getElementById("frequencySelect").addEventListener("change", function() {
    document.getElementById("customDaysField").classList.toggle("hidden", this.value !== "Custom");
});



    // Expense Trend Chart
    const ExpenseTrendCtx = document.getElementById('ExpenseTrendChart').getContext('2d');
    new Chart(ExpenseTrendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Expense Trend',
                data: [10000, 12000, 9000, 13000, 12500],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 128, 0, 0.1)',
                fill: true
            }]
        }
    });

    // Expense Source Pie Chart
    const ExpenseSourceCtx = document.getElementById('ExpenseSourceChart').getContext('2d');
    new Chart(ExpenseSourceCtx, {
        type: 'pie',
        data: {
            labels: ['Salary', 'Freelance', 'Investments'],
            datasets: [{
                data: [8000, 3500, 1000],
                backgroundColor: ['blue', 'purple', 'orange']
            }]
        }
    });

    // Monthly Expense Chart
    const monthlyExpenseCtx = document.getElementById('monthlyExpenseChart').getContext('2d');
    new Chart(monthlyExpenseCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Monthly Expense',
                data: [10000, 12000, 9000, 13000, 12500],
                backgroundColor: 'green'
            }]
        }
    });



    let categories = [
        { name: "Salary", icon: "https://cdn-icons-png.flaticon.com/128/3135/3135731.png", amount: 8000 },
        { name: "Freelance", icon: "https://cdn-icons-png.flaticon.com/128/2920/2920263.png", amount: 3500 },
        { name: "Investments", icon: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png", amount: 1000 },
    ];

    function openModal() {
        document.getElementById("categoryModal").classList.remove("hidden");
    }

    function closeModal() {
        document.getElementById("categoryModal").classList.add("hidden");
    }

    function addCategory() {
        let type = document.getElementById("categoryType").value;
        let name = document.getElementById("categoryName").value.trim();
        let iconInput = document.getElementById("categoryIcon");

        if (name === "") {
            alert("Please enter a valid category name.");
            return;
        }

        let iconUrl = "default-icon.png";
        if (iconInput.files.length > 0) {
            let file = iconInput.files[0];
            iconUrl = URL.createObjectURL(file);
        }

        // Add to category list with zero amount (hidden initially)
        categories.push({ name, icon: iconUrl, amount: 0 });

        // Clear inputs and close modal
        document.getElementById("categoryName").value = "";
        document.getElementById("categoryIcon").value = "";
        closeModal();

        renderCategories();
    }

    function renderCategories() {
        let ExpenseList = document.getElementById("ExpenseList");
        ExpenseList.innerHTML = ""; // Clear before re-rendering

        categories.forEach(cat => {
            if (cat.amount > 0) { // Show only if it has transactions
                let div = document.createElement("div");
                div.className = "p-6 bg-gray-100 rounded-md text-center";
                div.innerHTML = `
                    <img src="${cat.icon}" alt="icon" class="mx-auto w-8 h-8 mb-2">
                    <p class="text-sm text-gray-600">${cat.name}</p>
                    <h4 class="text-xl font-bold">$${cat.amount}</h4>
                `;
                ExpenseList.appendChild(div);
            }
        });

        // Update total Expense
        let total = categories.reduce((sum, cat) => sum + cat.amount, 0);
        document.getElementById("totalExpense").innerText = `$${total}`;
    }

    // // Simulating transactions
    // setTimeout(() => {
    //     categories[3] = { name: "Side Hustle", icon: "side-hustle-icon.png", amount: 2000 };
    //     renderCategories();
    // }, 3000);

    renderCategories(); // Initial render