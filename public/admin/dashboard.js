// ============================================================
// DASHBOARD LOGIC — Firebase Firestore + Admin UI
// ============================================================

// Auth guard
if (sessionStorage.getItem('adminLoggedIn') !== 'true') {
  window.location.href = 'index.html';
}

// ── Firebase init ──────────────────────────────────────────
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ── State ──────────────────────────────────────────────────
let allBookings = [];
let activeFilter = 'all'; // 'all' | 'today' | 'date'
let filterDate = '';
let unsubscribe = null;

// ── DOM refs ───────────────────────────────────────────────
const tableBody        = document.getElementById('tableBody');
const statTotal        = document.getElementById('statTotal');
const statPending      = document.getElementById('statPending');
const statCompleted    = document.getElementById('statCompleted');
const statToday        = document.getElementById('statToday');
const bookingCount     = document.getElementById('bookingCount');
const filterDateInput  = document.getElementById('filterDate');
const btnAll           = document.getElementById('btnAll');
const btnToday         = document.getElementById('btnToday');

// ── Toast helper ───────────────────────────────────────────
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// ── Today's date string (YYYY-MM-DD) ──────────────────────
function todayStr() {
  return new Date().toISOString().split('T')[0];
}

// ── Format date for display ────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '—';
  try {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ── Update stats ───────────────────────────────────────────
function updateStats(bookings) {
  const today = todayStr();
  statTotal.textContent     = bookings.length;
  statPending.textContent   = bookings.filter(b => b.status !== 'completed').length;
  statCompleted.textContent = bookings.filter(b => b.status === 'completed').length;
  statToday.textContent     = bookings.filter(b => b.date === today).length;
}

// ── Apply current filter ───────────────────────────────────
function applyFilter() {
  let filtered = [...allBookings];

  if (activeFilter === 'today') {
    filtered = filtered.filter(b => b.date === todayStr());
  } else if (activeFilter === 'date' && filterDate) {
    filtered = filtered.filter(b => b.date === filterDate);
  }

  // Sort: pending first, then by date desc
  filtered.sort((a, b) => {
    if (a.status === 'completed' && b.status !== 'completed') return 1;
    if (a.status !== 'completed' && b.status === 'completed') return -1;
    return (b.date || '').localeCompare(a.date || '');
  });

  renderTable(filtered);
  bookingCount.textContent = `${filtered.length} booking${filtered.length !== 1 ? 's' : ''}`;
}

// ── Render table ───────────────────────────────────────────
function renderTable(bookings) {
  if (bookings === null) {
    tableBody.innerHTML = `
      <tr><td colspan="8">
        <div class="state-container">
          <div class="spinner"></div>
          <p>Loading bookings...</p>
        </div>
      </td></tr>`;
    return;
  }

  if (bookings.length === 0) {
    tableBody.innerHTML = `
      <tr><td colspan="8">
        <div class="state-container">
          <div class="state-icon">📋</div>
          <h3>No bookings found</h3>
          <p>${activeFilter !== 'all' ? 'No bookings match your current filter.' : 'No patient bookings yet.'}</p>
        </div>
      </td></tr>`;
    return;
  }

  tableBody.innerHTML = bookings.map((b, idx) => {
    const isCompleted = b.status === 'completed';
    return `
      <tr class="${isCompleted ? 'completed-row' : ''}" data-id="${b.id}">
        <td class="patient-name">${escHtml(b.name || '—')}</td>
        <td class="phone-cell">
          <a href="tel:${escHtml(b.phone || '')}" style="color:#2563eb;text-decoration:none;">
            ${escHtml(b.phone || '—')}
          </a>
        </td>
        <td>${formatDate(b.date)}</td>
        <td>${escHtml(b.time || '—')}</td>
        <td class="problem-cell" title="${escHtml(b.problem || '')}">${escHtml(b.problem || '—')}</td>
        <td>
          <span class="badge ${isCompleted ? 'badge-completed' : 'badge-pending'}">
            ${isCompleted ? '✓ Completed' : '⏳ Pending'}
          </span>
        </td>
        <td class="actions-cell">
          ${!isCompleted ? `
            <button class="btn-success" onclick="markCompleted('${b.id}')">
              Mark Done
            </button>
          ` : `
            <button class="btn-success" disabled>Done</button>
          `}
          <button class="btn-danger" onclick="deleteBooking('${b.id}', '${escHtml(b.name || '')}')">
            Delete
          </button>
        </td>
      </tr>`;
  }).join('');
}

// ── Escape HTML ────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Mark booking as completed ──────────────────────────────
async function markCompleted(id) {
  try {
    await db.collection('bookings').doc(id).update({ status: 'completed' });
    showToast('✓ Booking marked as completed', 'success');
  } catch (err) {
    console.error(err);
    showToast('Error updating booking', 'error');
  }
}

// ── Delete booking ─────────────────────────────────────────
async function deleteBooking(id, name) {
  const confirmed = confirm(`Delete booking for "${name}"?\nThis cannot be undone.`);
  if (!confirmed) return;
  try {
    await db.collection('bookings').doc(id).delete();
    showToast('🗑 Booking deleted', 'success');
  } catch (err) {
    console.error(err);
    showToast('Error deleting booking', 'error');
  }
}

// ── Subscribe to Firestore real-time ──────────────────────
function subscribeBookings() {
  renderTable(null); // show loading

  if (unsubscribe) unsubscribe();

  unsubscribe = db.collection('bookings')
    .onSnapshot(
      (snapshot) => {
        allBookings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        updateStats(allBookings);
        applyFilter();
      },
      (err) => {
        console.error('Firestore error:', err);
        tableBody.innerHTML = `
          <tr><td colspan="8">
            <div class="state-container">
              <div class="state-icon">⚠️</div>
              <h3>Failed to load bookings</h3>
              <p>${err.message}</p>
            </div>
          </td></tr>`;
        showToast('Failed to connect to database', 'error');
      }
    );
}

// ── Filter: All ────────────────────────────────────────────
btnAll.addEventListener('click', () => {
  activeFilter = 'all';
  filterDate = '';
  filterDateInput.value = '';
  btnAll.classList.add('active');
  btnToday.classList.remove('active');
  applyFilter();
});

// ── Filter: Today ──────────────────────────────────────────
btnToday.addEventListener('click', () => {
  activeFilter = 'today';
  filterDate = '';
  filterDateInput.value = '';
  btnToday.classList.add('active');
  btnAll.classList.remove('active');
  applyFilter();
});

// ── Filter: Pick a date ────────────────────────────────────
filterDateInput.addEventListener('change', (e) => {
  filterDate = e.target.value;
  activeFilter = filterDate ? 'date' : 'all';
  btnAll.classList.remove('active');
  btnToday.classList.remove('active');
  applyFilter();
});

// ── Logout ─────────────────────────────────────────────────
document.getElementById('btnLogout').addEventListener('click', () => {
  if (unsubscribe) unsubscribe();
  sessionStorage.removeItem('adminLoggedIn');
  window.location.href = 'index.html';
});

// ── Expose functions to window for inline onclick ──────────
window.markCompleted = markCompleted;
window.deleteBooking = deleteBooking;

// ── Boot ───────────────────────────────────────────────────
subscribeBookings();
