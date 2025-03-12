    const transactions = [
        { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
        { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Income", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
        { date: "2025-03-05", category: "Utilities", description: "Electricity bill", amount: "- $120.00", type: "Expense", payment: "Debit Card", tags: "food", status: "Completed", recurring: "Yes" },
        { date: "2025-02-28", category: "Entertainment", description: "Movie tickets", amount: "- $30.00", type: "Expense", payment: "Cash", tags: "food", status: "Completed", recurring: "No" },
        { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
        { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Income", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
        { date: "2025-03-05", category: "Utilities", description: "Electricity bill", amount: "- $120.00", type: "Expense", payment: "Debit Card", tags: "food", status: "Completed", recurring: "Yes" },
        { date: "2025-02-28", category: "Entertainment", description: "Movie tickets", amount: "- $30.00", type: "Expense", payment: "Cash", tags: "food", status: "Completed", recurring: "No" },
        { date: "2025-03-12", category: "Groceries", description: "Weekly food shopping", amount: "- $50.00", type: "Expense", payment: "Credit Card", tags: "food", status: "Pending", recurring: "No" },
        { date: "2025-03-10", category: "Salary", description: "Monthly salary payment", amount: "+ $2000.00", type: "Income", payment: "Bank Transfer", tags: "food", status: "Completed", recurring: "Yes" },
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