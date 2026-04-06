// Helper Selector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// DOM Elements
const balance = $('#total-balance');
const income = $('#total-income');
const expense = $('#total-expense');
const list = $('#transaction-list');
const form = $('#transaction-form');
const text = $('#description');
const amount = $('#amount');
const modal = $('#modalOverlay');
const openModalBtn = $('#openModal');
const closeModalBtn = $('#closeModal');
const searchInput = $('#search-input');
const filterBtns = $$('.filter-btn');

const categoryIcons = {
    salary: '💰',
    food: '🍔',
    entertainment: '🎬',
    shopping: '🛍️',
    utilities: '⚡',
    other: '📦'
};

// Initial State
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let currentFilter = 'all';

// Add Transaction
function addTransaction(e) {
    e.preventDefault();

    const type = $('input[name="transaction-type"]:checked').value;
    const amt = parseFloat(amount.value);
    const category = $('#category').value;

    if (!text.value.trim() || isNaN(amt)) return;

    const transaction = {
        id: Date.now(), // better unique id
        text: text.value.trim(),
        amount: amt,
        category: category,
        date: new Date().toLocaleDateString(),
        type: type
    };

    transactions.push(transaction);
    updateLocalStorage();
    init();

    form.reset();
    modal.classList.remove('active');
}

// Remove Transaction
function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

// Local Storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Calculate Totals (FIXED)
function updateValues() {
    let total = 0;
    let inc = 0;
    let exp = 0;

    transactions.forEach(t => {
        if (t.type === 'income') {
            inc += t.amount;
            total += t.amount;
        } else {
            exp += t.amount;
            total -= t.amount;
        }
    });

    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${inc.toFixed(2)}`;
    expense.innerText = `$${exp.toFixed(2)}`;
}

// Render Transactions
function renderTransactions() {
    list.innerHTML = '';

    let filtered = [...transactions];

    // Search
    const query = searchInput.value.toLowerCase();
    if (query) {
        filtered = filtered.filter(t =>
            t.text.toLowerCase().includes(query)
        );
    }

    // Filter (Income / Expense)
    if (currentFilter !== 'all') {
        filtered = filtered.filter(t =>
            t.type === currentFilter
        );
    }

    filtered.forEach(transaction => {
        const sign = transaction.type === 'expense' ? '-' : '+';
        const itemClass = transaction.type === 'expense'
            ? 'amount-expense'
            : 'amount-income';

        const item = document.createElement('li');
        item.classList.add('transaction-item');

        item.innerHTML = `
            <div class="item-icon">
                ${categoryIcons[transaction.category] || '📦'}
            </div>
            <div class="item-details">
                <p>${transaction.text}</p>
                <span>${transaction.date}</span>
            </div>
            <div class="item-amount ${itemClass}">
                ${sign}$${transaction.amount.toFixed(2)}
            </div>
            <button class="delete-btn">
                🗑️
            </button>
        `;

        item.querySelector('.delete-btn')
            .addEventListener('click', () =>
                removeTransaction(transaction.id)
            );

        list.appendChild(item);
    });
}

// Init
function init() {
    renderTransactions();
    updateValues();
}

// Events
form.addEventListener('submit', addTransaction);

openModalBtn.addEventListener('click', () =>
    modal.classList.add('active')
);

closeModalBtn.addEventListener('click', () =>
    modal.classList.remove('active')
);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

searchInput.addEventListener('input', renderTransactions);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTransactions();
    });
});

init();