

let totalBudget = 0;
let expenses = [];
const catEmoji = { Hotel:"🏨", Flight:"✈️", Food:"🍜", Transport:"🚖", Activities:"🎡", Shopping:"🛍️", Medical:"💊", Other:"📦", "":"📦" };
const fmt = n => '₹' + n.toLocaleString('en-IN');

// ------ NEW: pick up any flights booked from flights page ----
document.addEventListener('DOMContentLoaded', () => {
  //get item stored under the name pendingFlughtExpenses if nothing is stored return an empty array
  const pending = JSON.parse(localStorage.getItem('pendingFlightExpenses') || '[]');
  if (pending.length > 0) {
    pending.forEach(exp => {
      //loop through the array and add name amount and emoji 
      expenses.push({ name: exp.name, amount: exp.amount, cat: exp.cat });
    });
    // Clear so they don't re-import on next page load
    localStorage.removeItem('pendingFlightExpenses');
    renderExpenses();
    updateSummary();

    // Show a small line so the user knows flights were added
    showToast(`✈️ ${pending.length} flight expense${pending.length > 1 ? 's' : ''} added from Flights page!`);
  }
});

function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    background: #1a1a1a; color: #fff;
    padding: 12px 20px; border-radius: 12px;
    font-size: 14px; font-weight: 500;
    z-index: 9999; white-space: nowrap;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease;
  `;
  const keyframes = document.createElement('style');
  keyframes.textContent = `@keyframes slideUp { from { opacity:0; transform: translateX(-50%) translateY(12px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }`;
  document.head.appendChild(keyframes);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function setBudget() {
  const val = parseFloat(document.getElementById('budgetInput').value);
  if (!val || val <= 0) { alert("Please enter a valid budget!"); return; }
  totalBudget = val;
  updateSummary();
}

function addExpense() {
  const name   = document.getElementById('expName').value.trim();
  const amount = parseFloat(document.getElementById('expAmount').value);
  const cat    = document.getElementById('expCategory').value;
  if (!name)             { alert("Please enter an expense name!"); return; }
  if (!amount || amount <= 0) { alert("Please enter a valid amount!"); return; }
  expenses.push({ name, amount, cat });
  document.getElementById('expName').value = '';
  document.getElementById('expAmount').value = '';
  document.getElementById('expCategory').value = '';
  renderExpenses();
  updateSummary();
}

function deleteExpense(i) {
  expenses.splice(i, 1);
  renderExpenses();
  updateSummary();
}

function renderExpenses() {
  const list = document.getElementById('expenseList');
  if (!expenses.length) {
    list.innerHTML = '<div class="empty-state"><div class="emoji">🧾</div><div>No expenses added yet.<br/>Start adding to track your spending!</div></div>';
    return;
  }
  // e is the value at an index and i is the index 
  list.innerHTML = expenses.map((e, i) => `
    <div class="expense-item">
      <div class="expense-left">
        <div class="category-icon">${catEmoji[e.cat] || "📦"}</div>
        <div>
          <div class="expense-name">${e.name}</div>
          <div class="expense-cat">${e.cat || "Other"}</div>
        </div>
      </div>
      <div class="expense-right">
        <div class="expense-amount">${fmt(e.amount)}</div>
        <button class="btn-delete" onclick="deleteExpense(${i})">✕</button>
      </div>
    </div>`).join('');
}

//here we update the summary of expenditure everytime
function updateSummary() {
  const spent     = expenses.reduce((s, e) => s + e.amount, 0);
  const remaining = totalBudget - spent;
  //this tells us the percentage of how much is used
  const pct       = totalBudget > 0 ? Math.min((spent / totalBudget) * 100, 100) : 0;

  document.getElementById('totalDisplay').textContent = fmt(totalBudget);
  document.getElementById('spentDisplay').textContent = fmt(spent);

  const remBox = document.getElementById('remainingBox');
  const remAmt = document.getElementById('remainingDisplay');
  if (remaining < 0) {
    remBox.className = 'summary-box over';
    remAmt.textContent = '-' + fmt(Math.abs(remaining));
  } else {
    remBox.className = 'summary-box remaining';
    remAmt.textContent = fmt(remaining);
  }

  const bar = document.getElementById('progressBar');
  //to make the bar fill pct% of width
  bar.style.width = pct + '%';
  bar.className = 'progress-bar-fill' + (pct >= 100 ? ' danger' : pct >= 75 ? ' warning' : '');
  document.getElementById('progressLabel').textContent = Math.round(pct) + '% used';
}