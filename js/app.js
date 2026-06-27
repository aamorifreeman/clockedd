// ─── Clocked App ─────────────────────────────────────────────────────────────
// Vanilla JS SPA. Supabase for auth; Plaid in Phase 1.

const { createClient } = supabase

const sb = createClient(
  'https://luhdlfahkcjrxvklscdr.supabase.co',
  'sb_publishable_7qzRZk83UT4LBq0WMTf5pA_LY4mT8qL'
)

// ─── State ────────────────────────────────────────────────────────────────────
let activeTab    = 'home'
let currentUser  = null
let storyIdx     = 0
let demoMode     = false
let crewTab      = 'create'
let connectedBank = null  // { id, name } once Plaid sim completes

const DEMO_USER = {
  user_metadata: { full_name: 'Maya Chen' },
  email: 'maya@clocked.app',
}

const STORAGE_KEY = 'clocked_onboarded'

// ─── Init ─────────────────────────────────────────────────────────────────────
async function init() {
  document.getElementById('app').innerHTML = screenLoading()
  animateLoadBar()

  const { data: { session } } = await sb.auth.getSession()

  sb.auth.onAuthStateChange((_event, session) => {
    if (session && !currentUser) {
      currentUser = session.user
      checkOnboarding()
    } else if (!session && currentUser) {
      currentUser = null
      showSignIn()
    }
  })

  setTimeout(() => {
    if (session) {
      currentUser = session.user
      checkOnboarding()
    } else {
      showSignIn()
    }
  }, 1400)
}

function animateLoadBar() {
  const bar = document.getElementById('load-bar')
  if (!bar) return
  setTimeout(() => { bar.style.transition = 'width 1.8s ease-in'; bar.style.width = '88%' }, 50)
  setTimeout(() => { bar.style.transition = 'width .6s ease-out'; bar.style.width = '100%' }, 1900)
}

// ─── Onboarding gate ──────────────────────────────────────────────────────────
function checkOnboarding() {
  if (localStorage.getItem(STORAGE_KEY)) {
    showApp()
  } else {
    goToConnectBank()
  }
}

function markOnboarded() {
  localStorage.setItem(STORAGE_KEY, '1')
}

function skipToApp() {
  markOnboarded()
  showApp()
}

// ─── Auth flows ───────────────────────────────────────────────────────────────
function showSignIn() {
  document.getElementById('app').innerHTML = screenSignIn()
}

async function signInGoogle() {
  const btn = document.getElementById('google-btn')
  if (btn) btn.textContent = 'Signing in…'
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  })
  if (error) showAuthError(error.message)
}

function signInApple() {
  showAuthError('Apple sign-in coming soon')
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error')
  if (el) { el.textContent = msg; el.style.display = 'block' }
}

function enterDemo() {
  demoMode = true
  currentUser = DEMO_USER
  checkOnboarding()
}

async function signOut() {
  demoMode = false
  currentUser = null
  connectedBank = null
  localStorage.removeItem(STORAGE_KEY)
  if (!demoMode) await sb.auth.signOut().catch(() => {})
  showSignIn()
}

// ─── Onboarding: Connect Bank ─────────────────────────────────────────────────
function goToConnectBank() {
  connectedBank = null
  document.getElementById('app').innerHTML = screenConnectBank()
}

function filterBanks(q) {
  const rows = document.querySelectorAll('.bank-row')
  rows.forEach(row => {
    const name = row.querySelector('span').textContent.toLowerCase()
    row.style.display = name.includes(q.toLowerCase()) ? '' : 'none'
  })
}

function selectBank(bankId) {
  // Already connected to this one — do nothing
  if (connectedBank) return

  const row = document.getElementById(`bank-${bankId}`)
  const statusEl = document.getElementById(`bank-${bankId}-status`)
  if (!row || !statusEl) return

  // Show spinner
  statusEl.innerHTML = `<div class="bank-connecting"><div class="spinner"></div><span class="mono muted" style="font-size:12px">Connecting…</span></div>`
  row.style.pointerEvents = 'none'

  // Simulate Plaid Link flow (~2s)
  setTimeout(() => {
    const bank = BANKS.find(b => b.id === bankId)
    connectedBank = bank

    // Update the row to show connected
    statusEl.innerHTML = `<span class="mono" style="color:var(--lime);font-size:13px;font-weight:700">✓ Connected</span>`
    row.style.background = 'rgba(202,255,77,.06)'

    // Show continue button
    const cont = document.getElementById('bank-continue')
    const contName = document.getElementById('bank-continue-name')
    if (cont) cont.style.display = 'block'
    if (contName) contName.textContent = `with ${bank.name}`
  }, 1800)
}

function goToFindCrew() {
  crewTab = 'create'
  document.getElementById('app').innerHTML = screenFindCrew(crewTab)
  // Focus the group name input
  setTimeout(() => document.getElementById('group-name-input')?.focus(), 100)
}

// ─── Onboarding: Find Your Crew ───────────────────────────────────────────────
function switchCrewTab(tab) {
  crewTab = tab
  document.getElementById('app').innerHTML = screenFindCrew(tab)
  if (tab === 'join') {
    setTimeout(() => {
      const input = document.getElementById('code-input')
      const cells = document.getElementById('code-cells')
      if (cells) cells.addEventListener('click', () => input?.focus())
      input?.focus()
    }, 100)
  } else {
    setTimeout(() => document.getElementById('group-name-input')?.focus(), 100)
  }
}

function onGroupNameInput(val) {
  const btn = document.getElementById('create-group-btn')
  if (!btn) return
  const valid = val.trim().length >= 2
  btn.style.opacity = valid ? '1' : '.4'
  btn.style.pointerEvents = valid ? 'auto' : 'none'
}

function createGroup() {
  const nameInput = document.getElementById('group-name-input')
  const name = nameInput?.value?.trim() || 'The Roommates'
  const btn = document.getElementById('create-group-btn')
  if (btn) { btn.textContent = 'Creating…'; btn.style.opacity = '.7'; btn.style.pointerEvents = 'none' }

  // Simulate group creation
  setTimeout(() => {
    markOnboarded()
    showOnboardSuccess(name)
  }, 1200)
}

function joinGroup() {
  const code = document.getElementById('code-input')?.value?.toUpperCase()
  if (!code || code.length < 6) return
  const btn = document.getElementById('join-group-btn')
  if (btn) { btn.textContent = 'Joining…'; btn.style.opacity = '.7'; btn.style.pointerEvents = 'none' }

  setTimeout(() => {
    markOnboarded()
    showOnboardSuccess('The Roommates')
  }, 1200)
}

function fillDemoCode() {
  const input = document.getElementById('code-input')
  if (input) { input.value = 'CLKD01'; onCodeInput('CLKD01') }
}

function onCodeInput(val) {
  const clean = val.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6)
  // Update hidden input to cleaned value
  const input = document.getElementById('code-input')
  if (input && input.value !== clean) input.value = clean

  // Update cells
  for (let i = 0; i < 6; i++) {
    const cell = document.getElementById(`cell-${i}`)
    if (!cell) continue
    cell.textContent = clean[i] || ''
    cell.classList.toggle('filled', i < clean.length)
  }

  // Enable join button when 6 chars
  const btn = document.getElementById('join-group-btn')
  if (btn) {
    const valid = clean.length === 6
    btn.style.opacity = valid ? '1' : '.4'
    btn.style.pointerEvents = valid ? 'auto' : 'none'
  }
}

function showOnboardSuccess(groupName) {
  document.getElementById('app').innerHTML = `
  <div style="height:100dvh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:0 var(--pad);text-align:center">
    <div style="width:72px;height:72px;background:rgba(202,255,77,.15);border-radius:50%;display:grid;place-items:center;font-size:36px">✓</div>
    <div>
      <h1 class="anton" style="font-size:28px;color:var(--lime);margin:0 0 8px">YOU'RE IN.</h1>
      <p style="color:var(--mut);font-size:14px;margin:0">${groupName} is ready to get clocked.</p>
    </div>
    <div class="mono muted" style="font-size:12px;letter-spacing:.06em">loading your dashboard…</div>
  </div>`
  setTimeout(() => showApp(), 1400)
}

// ─── App shell ────────────────────────────────────────────────────────────────
function showApp() {
  renderScreen(activeTab)
}

function navigate(tab) {
  activeTab = tab
  renderScreen(tab)
}

function renderScreen(tab) {
  let html = ''
  if (tab === 'home')    html = screenDashboard()
  if (tab === 'ranks')   html = screenLeaderboard()
  if (tab === 'wrapped') html = screenWrapped()
  if (tab === 'you')     html = screenProfile(currentUser)
  document.getElementById('app').innerHTML = html + renderNav(tab)
}

// ─── Dashboard interactions ───────────────────────────────────────────────────
function openDay(day, spend) {
  const sheet = document.getElementById('day-sheet')
  if (!sheet) return
  const isMax = spend >= 100
  document.getElementById('day-label').textContent = isMax ? 'YOUR BIGGEST DAY 🚨' : `JUN ${day}`

  // Work out day of week (June 2026 starts Monday)
  const dow = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][(day - 1) % 7]
  document.getElementById('day-title').textContent = `${dow.toUpperCase()} · JUN ${day}`
  document.getElementById('day-spend').textContent = `$${spend} spent`

  // Render seeded transactions for this day
  const txns = SEED.transactions.filter(t => t.day === day)
  const txnEl = document.getElementById('day-transactions')
  if (txnEl) {
    txnEl.innerHTML = txns.length
      ? txns.map(t => `
          <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--line)">
            <div style="width:36px;height:36px;border-radius:10px;background:var(--p2);display:grid;place-items:center;font-size:16px;flex-shrink:0">${t.emoji}</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${t.merchant}</div>
              <div class="mono muted" style="font-size:11px;margin-top:1px">${t.category} · ${t.time}</div>
            </div>
            <div class="mono" style="font-size:14px;font-weight:700;color:${spend >= 100 ? 'var(--hot)' : 'var(--ink)'}">$${t.amount}</div>
          </div>`).join('')
      : `<div class="mono muted" style="text-align:center;padding:20px;font-size:13px">No transactions this day</div>`
  }
  sheet.classList.add('open')
}
function closeDaySheet() {
  document.getElementById('day-sheet')?.classList.remove('open')
}

function openBudgetSheet() {
  document.getElementById('budget-sheet')?.classList.add('open')
}
function closeBudgetSheet() {
  document.getElementById('budget-sheet')?.classList.remove('open')
}

function selectCat(btn, cat) {
  document.querySelectorAll('#cat-chips .chip').forEach(c => c.classList.remove('chip-lime'))
  btn.classList.add('chip-lime')
}

function updateLimit(val) {
  const display = document.getElementById('limit-display')
  if (display) display.textContent = `$${val}`
  document.querySelectorAll('[data-val]').forEach(c => {
    c.classList.toggle('chip-lime', String(c.dataset.val) === String(val))
  })
}

function setLimit(val) {
  const slider = document.querySelector('input[type=range]')
  if (slider) { slider.value = val; updateLimit(val) }
}

function saveBudget() {
  const catBtn = document.querySelector('#cat-chips .chip-lime')
  const cat = catBtn?.dataset?.cat || 'Transport'
  const limit = document.querySelector('input[type=range]')?.value || 150
  // In Phase 2 this writes to Supabase; for now update seed data in-memory
  const existing = SEED.budgets.find(b => b.name === cat)
  if (existing) {
    existing.cap = parseInt(limit)
  } else {
    SEED.budgets.push({ emoji: '🚗', name: cat, spent: 0, cap: parseInt(limit) })
  }
  closeBudgetSheet()
  // Re-render dashboard to reflect new budget
  navigate('home')
}

// ─── Leaderboard ──────────────────────────────────────────────────────────────
function setScope(s) {
  document.getElementById('scope-week')?.classList.toggle('chip-lime', s === 'week')
  document.getElementById('scope-month')?.classList.toggle('chip-lime', s === 'month')
}

// ─── Wrapped story player ─────────────────────────────────────────────────────
function openStory() {
  storyIdx = 0
  renderStoryCard()
  document.getElementById('story-overlay')?.classList.add('open')
}
function closeStory() {
  document.getElementById('story-overlay')?.classList.remove('open')
}
function renderStoryCard() {
  const card = document.getElementById('story-card')
  if (!card) return
  const s = STORY_CARDS[storyIdx]
  card.style.background = s.bg
  card.innerHTML = s.html
  document.querySelectorAll('.story-pip').forEach((pip, i) => {
    pip.classList.toggle('done', i <= storyIdx)
  })
}
function handleStoryTap(e) {
  const overlay = document.getElementById('story-overlay')
  if (!overlay) return
  const rect = overlay.getBoundingClientRect()
  const x = e.clientX - rect.left
  if (x < rect.width * 0.4) {
    storyIdx = Math.max(0, storyIdx - 1)
  } else {
    storyIdx = Math.min(STORY_CARDS.length - 1, storyIdx + 1)
  }
  renderStoryCard()
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
init()
