// ==================== NAVIGATION ====================
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  updateDashboard();
  renderChart();
}

// ==================== DATA HANDLING ====================
let incomes = JSON.parse(localStorage.getItem('incomes')) || [];
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// ==================== INCOME ====================
document.getElementById('incomeForm').addEventListener('submit', function(e){
  e.preventDefault();
  const source = incomeSource.value;
  const amount = parseFloat(incomeAmount.value);
  const date = incomeDate.value;
  const desc = incomeDesc.value;

  incomes.push({source, amount, date, desc});
  localStorage.setItem('incomes', JSON.stringify(incomes));
  this.reset();
  renderIncome();
  updateDashboard();
});

function renderIncome(){
  const tbody = document.getElementById('incomeTable');
  tbody.innerHTML = '';
  incomes.forEach((inc, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${inc.source}</td>
      <td>₹${inc.amount}</td>
      <td>${inc.date}</td>
      <td>${inc.desc}</td>
      <td><button class="delete-btn" onclick="deleteIncome(${index})">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteIncome(index){
  incomes.splice(index, 1);
  localStorage.setItem('incomes', JSON.stringify(incomes));
  renderIncome();
  updateDashboard();
}

// ==================== EXPENSE ====================
document.getElementById('expenseForm').addEventListener('submit', function(e){
  e.preventDefault();
  const category = expenseCategory.value;
  const amount = parseFloat(expenseAmount.value);
  const date = expenseDate.value;
  const desc = expenseDesc.value;

  expenses.push({category, amount, date, desc});
  localStorage.setItem('expenses', JSON.stringify(expenses));
  this.reset();
  renderExpenses();
  updateDashboard();
});

function renderExpenses(){
  const tbody = document.getElementById('expenseTable');
  tbody.innerHTML = '';
  expenses.forEach((exp, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${exp.category}</td>
      <td>₹${exp.amount}</td>
      <td>${exp.date}</td>
      <td>${exp.desc}</td>
      <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteExpense(index){
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
  updateDashboard();
}

// ==================== DASHBOARD ====================
function updateDashboard(){
  const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const balance = totalIncome - totalExpenses;

  document.getElementById('totalIncome').innerText = '₹' + totalIncome;
  document.getElementById('totalExpenses').innerText = '₹' + totalExpenses;
  document.getElementById('balance').innerText = '₹' + balance;
}

// ==================== REPORTS ====================
let chart;
function renderChart(){
  const ctx = document.getElementById('reportChart').getContext('2d');
  const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expenses'],
      datasets: [{
        data: [totalIncome, totalExpenses],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    }
  });
}

// ==================== INITIAL LOAD ====================
renderIncome();
renderExpenses();
updateDashboard();
renderChart();