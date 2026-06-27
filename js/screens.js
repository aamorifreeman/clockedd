// ─── Seed data (replaces real Plaid data in Phase 1) ─────────────────────────
const SEED = {
  user: { name: 'Maya Chen', handle: '@maya', initials: 'MC', bankName: 'Chase', bankMask: '4417' },

  budgets: [
    { emoji: '🎉', name: 'Going Out',  spent: 390, cap: 300 },
    { emoji: '🍔', name: 'Food',       spent: 210, cap: 300 },
    { emoji: '☕', name: 'Coffee',     spent: 58,  cap: 60  },
    { emoji: '🚗', name: 'Transport',  spent: 45,  cap: 100 },
    { emoji: '💅', name: 'Self-care',  spent: 28,  cap: 50  },
  ],

  weeklySpend: [42, 18, 95, 67, 28, 147, 35],

  calendarSpend: [0,12,0,45,28,0,0,67,34,89,23,0,0,147,56,78,34,0,0,23,45,12,0,0,90,67,34,0,0,45],

  // Seeded transactions per day (day = 1-based June date)
  transactions: [
    { day:2,  merchant:'Blue Bottle Coffee',    emoji:'☕', category:'Coffee',     amount:7,   time:'8:14am' },
    { day:4,  merchant:'Chipotle',              emoji:'🍔', category:'Food',       amount:14,  time:'1:22pm' },
    { day:4,  merchant:'Uber',                  emoji:'🚗', category:'Transport',  amount:18,  time:'10:05pm' },
    { day:4,  merchant:'Sephora',               emoji:'💅', category:'Self-care',  amount:13,  time:'3:40pm' },
    { day:5,  merchant:'Bar Louie',             emoji:'🎉', category:'Going Out',  amount:28,  time:'9:30pm' },
    { day:8,  merchant:'Whole Foods',           emoji:'🍔', category:'Food',       amount:43,  time:'5:12pm' },
    { day:8,  merchant:'Lyft',                  emoji:'🚗', category:'Transport',  amount:12,  time:'11:45pm' },
    { day:8,  merchant:'Spotify',               emoji:'🎵', category:'Bills',      amount:12,  time:'12:00am' },
    { day:9,  merchant:'Starbucks',             emoji:'☕', category:'Coffee',     amount:6,   time:'7:50am' },
    { day:9,  merchant:'Trader Joe\'s',         emoji:'🍔', category:'Food',       amount:28,  time:'4:30pm' },
    { day:10, merchant:'ZARA',                  emoji:'🛍️', category:'Shopping',   amount:67,  time:'2:15pm' },
    { day:10, merchant:'Dunkin\'',              emoji:'☕', category:'Coffee',     amount:5,   time:'9:02am' },
    { day:10, merchant:'DoorDash',              emoji:'🍔', category:'Food',       amount:17,  time:'7:30pm' },
    { day:11, merchant:'Netflix',               emoji:'🎬', category:'Bills',      amount:15,  time:'12:00am' },
    { day:11, merchant:'Smoothie King',         emoji:'💅', category:'Self-care',  amount:8,   time:'11:20am' },
    { day:14, merchant:'Erewhon',               emoji:'🍔', category:'Food',       amount:52,  time:'12:40pm' },
    { day:14, merchant:'Club Poms',             emoji:'🎉', category:'Going Out',  amount:45,  time:'10:15pm' },
    { day:14, merchant:'Uber',                  emoji:'🚗', category:'Transport',  amount:22,  time:'2:10am' },
    { day:14, merchant:'Starbucks',             emoji:'☕', category:'Coffee',     amount:7,   time:'9:30am' },
    { day:14, merchant:'ASOS',                  emoji:'🛍️', category:'Shopping',   amount:21,  time:'3:00pm' },
    { day:15, merchant:'Sweetgreen',            emoji:'🍔', category:'Food',       amount:16,  time:'1:05pm' },
    { day:15, merchant:'Blue Bottle Coffee',    emoji:'☕', category:'Coffee',     amount:8,   time:'8:22am' },
    { day:15, merchant:'H&M',                   emoji:'🛍️', category:'Shopping',   amount:32,  time:'4:00pm' },
    { day:16, merchant:'Equinox',               emoji:'💅', category:'Self-care',  amount:38,  time:'7:00am' },
    { day:16, merchant:'Chipotle',              emoji:'🍔', category:'Food',       amount:13,  time:'12:30pm' },
    { day:16, merchant:'Lyft',                  emoji:'🚗', category:'Transport',  amount:14,  time:'9:00pm' },
    { day:16, merchant:'Shake Shack',           emoji:'🍔', category:'Food',       amount:13,  time:'6:15pm' },
    { day:20, merchant:'Trader Joe\'s',         emoji:'🍔', category:'Food',       amount:23,  time:'5:00pm' },
    { day:21, merchant:'Target',                emoji:'🛍️', category:'Shopping',   amount:45,  time:'3:20pm' },
    { day:22, merchant:'Starbucks',             emoji:'☕', category:'Coffee',     amount:7,   time:'8:10am' },
    { day:22, merchant:'Shake Shack',           emoji:'🍔', category:'Food',       amount:5,   time:'1:45pm' },
    { day:25, merchant:'Revolve',               emoji:'🛍️', category:'Shopping',   amount:68,  time:'11:00am' },
    { day:25, merchant:'DoorDash',              emoji:'🍔', category:'Food',       amount:22,  time:'7:45pm' },
    { day:26, merchant:'Bar Louie',             emoji:'🎉', category:'Going Out',  amount:38,  time:'9:00pm' },
    { day:26, merchant:'Lyft',                  emoji:'🚗', category:'Transport',  amount:16,  time:'11:30pm' },
    { day:26, merchant:'Dunkin\'',              emoji:'☕', category:'Coffee',     amount:6,   time:'8:05am' },
    { day:26, merchant:'Whole Foods',           emoji:'🍔', category:'Food',       amount:7,   time:'5:30pm' },
    { day:27, merchant:'Amazon',                emoji:'📦', category:'Shopping',   amount:34,  time:'2:00pm' },
    { day:29, merchant:'Sweetgreen',            emoji:'🍔', category:'Food',       amount:14,  time:'1:00pm' },
    { day:29, merchant:'Blue Bottle Coffee',    emoji:'☕', category:'Coffee',     amount:8,   time:'8:30am' },
    { day:29, merchant:'Spotify',               emoji:'🎵', category:'Bills',      amount:12,  time:'12:00am' },
    { day:29, merchant:'Uber',                  emoji:'🚗', category:'Transport',  amount:11,  time:'7:00pm' },
  ],

  friends: [
    { rank:1, name:'Priya',  initials:'P', color:'#7c5cff', savedPct:41, investedPct:15, onBudget:true,  badge:'🧘', badgeLabel:'Money Monk',     badgeColor:'rgba(61,214,196,.15)', badgeTxt:'var(--teal)' },
    { rank:2, name:'Maya',   initials:'M', color:'#caff4d', savedPct:34, investedPct:9,  onBudget:false, badge:'📈', badgeLabel:'Most Improved',   badgeColor:'rgba(202,255,77,.12)', badgeTxt:'var(--lime)', isYou:true },
    { rank:3, name:'Sofia',  initials:'S', color:'#ff5c8a', savedPct:29, investedPct:12, onBudget:true,  badge:null },
    { rank:4, name:'Devon',  initials:'D', color:'#5ce1ff', savedPct:24, investedPct:8,  onBudget:true,  badge:null },
    { rank:5, name:'Jaylen', initials:'J', color:'#ff9f45', savedPct:18, investedPct:6,  onBudget:false, badge:'🔥', badgeLabel:'Big Spender',     badgeColor:'rgba(255,45,85,.15)', badgeTxt:'var(--hot)' },
    { rank:6, name:'Marcus', initials:'M', color:'#8a8a90', savedPct:11, investedPct:4,  onBudget:false, badge:'🥷', badgeLabel:'Stealth Saver',   badgeColor:'rgba(255,255,255,.08)', badgeTxt:'var(--mut)' },
  ],
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const ICONS = {
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 22V12h6v10"/></svg>`,
  ranks: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="11" width="5" height="10" rx="1"/><rect x="9.5" y="6" width="5" height="15" rx="1"/><rect x="17" y="14" width="5" height="7" rx="1"/></svg>`,
  wrapped: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/></svg>`,
  you: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4l4 4-4 4"/></svg>`,
}

// ─── Heatmap color helper ─────────────────────────────────────────────────────
function heatColor(spend, max) {
  if (!spend) return '#191a1d'
  const r = spend / max
  if (r < 0.2) return '#1d4a3a'
  if (r < 0.4) return '#37b58c'
  if (r < 0.6) return '#caff4d'
  if (r < 0.8) return '#ff5c8a'
  return '#ff2d55'
}

function barColor(spend, limit) {
  const r = spend / limit
  if (r < 0.6) return 'var(--good)'
  if (r < 1.0) return 'var(--watch)'
  return 'var(--over)'
}

// ─── Bottom nav ───────────────────────────────────────────────────────────────
function renderNav(active) {
  const tabs = [
    { id: 'home',    label: 'Home',    icon: 'home' },
    { id: 'ranks',   label: 'Ranks',   icon: 'ranks' },
    { id: 'wrapped', label: 'Wrapped', icon: 'wrapped' },
    { id: 'you',     label: 'You',     icon: 'you' },
  ]
  return `<nav id="bottom-nav">${tabs.map(t => `
    <button class="nav-btn ${active === t.id ? 'active' : ''}" onclick="navigate('${t.id}')">
      ${ICONS[t.icon]}<span>${t.label}</span>
    </button>`).join('')}</nav>`
}

// ─── Screens ──────────────────────────────────────────────────────────────────
function screenLoading() {
  return `
  <div id="loading">
    <div style="position:relative;width:80px;height:80px">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="var(--lime)" stroke-width="3"/>
        <line x1="40" y1="40" x2="40" y2="20" stroke="var(--lime)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="3" fill="var(--lime)"/>
      </svg>
      <svg width="80" height="80" viewBox="0 0 80 80" class="clock-sweep" style="position:absolute;top:0;left:0" fill="none">
        <line x1="40" y1="40" x2="55" y2="40" stroke="var(--lime)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="loading-wordmark">CL&#x25EF;CKED</div>
    <p class="loading-tag">counting your damage… <span class="loading-cursor">▋</span></p>
    <div class="load-bar-track"><div class="load-bar" id="load-bar"></div></div>
    <p class="mono muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">SYNCING CHASE ••4417</p>
    <p class="mono muted" style="position:absolute;bottom:calc(24px + env(safe-area-inset-bottom));font-size:11px">no $ shared · just vibes 🔒</p>
  </div>`
}

function screenSignIn() {
  return `
  <div id="signin">
    <div class="signin-hero">
      <svg width="78" height="78" viewBox="0 0 78 78" fill="none">
        <circle cx="39" cy="39" r="35" stroke="var(--lime)" stroke-width="3"/>
        <line x1="39" y1="39" x2="39" y2="19" stroke="var(--lime)" stroke-width="3" stroke-linecap="round"/>
        <line x1="39" y1="39" x2="52" y2="47" stroke="var(--lime)" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="39" cy="39" r="3" fill="var(--lime)"/>
      </svg>
      <div class="signin-wordmark">CL&#x25EF;CKED</div>
      <p class="signin-tagline">money, but make it a group chat 👀</p>
    </div>
    <div class="auth-buttons">
      <div id="auth-error" style="color:var(--hot);font-size:13px;text-align:center;display:none"></div>
      <button class="btn btn-white" onclick="signInApple()">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="#000"><path d="M12.38 2c.26 1.12-.36 2.23-1.03 2.94-.7.74-1.77 1.3-2.83 1.22-.3-1.08.37-2.2 1.04-2.88C10.3 2.55 11.4 2 12.38 2zm2.43 4.77c-1.33-.08-2.47.76-3.1.76-.65 0-1.64-.72-2.71-.7-1.4.02-2.7.81-3.41 2.07-1.47 2.53-.38 6.28 1.03 8.35.69.99 1.52 2.1 2.6 2.06 1.04-.04 1.44-.67 2.7-.67 1.27 0 1.63.67 2.72.65 1.12-.02 1.83-1.01 2.52-2.01.8-1.14 1.13-2.26 1.15-2.32-.03-.01-2.2-.85-2.22-3.35-.02-2.1 1.71-3.1 1.79-3.16-.98-1.44-2.5-1.6-3.07-1.64z"/></svg>
        Continue with Apple
      </button>
      <button class="btn btn-panel" id="google-btn" onclick="signInGoogle()">
        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.48h4.84a4.13 4.13 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"/><path d="M9 18c2.43 0 4.47-.81 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34A9 9 0 009 18z" fill="#34A853"/><path d="M3.97 10.72A5.41 5.41 0 013.69 9c0-.6.1-1.18.28-1.72V4.94H.96A9 9 0 000 9c0 1.45.35 2.82.96 4.06l3.01-2.34z" fill="#FBBC05"/><path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.94L3.97 7.28C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/></svg>
        Continue with Google
      </button>
      <button class="btn btn-panel" onclick="showAuthError('Phone sign-in coming soon')">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="1" width="8" height="16" rx="2"/><circle cx="9" cy="14.5" r=".75" fill="currentColor" stroke="none"/></svg>
        Use phone number
      </button>
      <p class="auth-legal">By continuing you agree to our Terms &amp; Privacy.<br><span style="color:var(--teal)">🔒 we never post or share your $.</span></p>
      <div style="display:flex;align-items:center;gap:10px;margin-top:8px">
        <div style="flex:1;height:1px;background:var(--line)"></div>
        <span class="mono muted" style="font-size:10px">or</span>
        <div style="flex:1;height:1px;background:var(--line)"></div>
      </div>
      <button class="btn" style="background:var(--p2);color:var(--lime);border:1px dashed rgba(202,255,77,.3);margin-top:0" onclick="enterDemo()">
        👀 Try demo (no login)
      </button>
    </div>
  </div>`
}

function screenDashboard() {
  const { budgets, weeklySpend, calendarSpend } = SEED
  const maxBar = Math.max(...weeklySpend)
  const maxCal = Math.max(...calendarSpend)
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

  // Calendar grid — June 2026 starts on Monday (index 1 in Sun-start, so 0 offset in Mon-start)
  const calCells = calendarSpend.map((spend, i) => {
    const day = i + 1
    const bg = heatColor(spend, maxCal)
    const textColor = spend > 60 ? '#0a0a0a' : 'var(--mut)'
    return `<div style="aspect-ratio:1;border-radius:4px;background:${bg};display:grid;place-items:center;cursor:${spend > 0 ? 'pointer' : 'default'}"
              ${spend > 0 ? `onclick="openDay(${day},${spend})"` : ''}>
              <span style="font-family:var(--font-mono);font-size:8px;color:${textColor};font-weight:700">${day}</span></div>`
  }).join('')

  const budgetRows = budgets.map((b, i) => {
    const pct = Math.min(b.spent / b.cap, 1)
    const over = b.spent > b.cap
    return `<div style="padding:14px 16px;${i < budgets.length - 1 ? 'border-bottom:1px solid var(--line)' : ''}">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <span style="font-weight:600;font-size:14px">${b.emoji} ${b.name}</span>
        <span class="mono" style="font-size:12px;color:${over ? 'var(--hot)' : 'var(--mut)'}">$${b.spent} / $${b.cap}</span>
      </div>
      <div class="progress-track"><div class="progress-fill${over ? ' over' : ''}" style="width:${pct*100}%"></div></div>
    </div>`
  }).join('')

  const barCols = weeklySpend.map((spend, i) => {
    const h = Math.round((spend / maxBar) * 72)
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
      <div style="width:100%;height:${h}px;background:${barColor(spend, 80)};border-radius:4px 4px 0 0;min-height:4px"></div>
    </div>`
  }).join('')

  const dayLabels = days.map((d, i) => `<div style="flex:1;text-align:center;font-family:var(--font-mono);font-size:9px;color:${weeklySpend[i] === maxBar ? 'var(--hot)' : 'var(--mut)'};">${d}</div>`).join('')

  return `
  <div class="screen" id="screen-home">
    <div class="screen-inner">
      <!-- Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding-top:56px">
        <div>
          <p class="mono muted" style="margin:0;font-size:11px;letter-spacing:.1em;text-transform:uppercase">JUNE 2026</p>
          <h1 class="anton" style="margin:2px 0 0;font-size:22px;letter-spacing:.01em">HEY MAYA 👋</h1>
        </div>
        <div class="avatar" style="width:40px;height:40px;background:var(--lime);font-size:16px">M</div>
      </div>

      <!-- Safe-to-spend -->
      <div class="card" style="margin-top:20px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span class="mono muted" style="font-size:10px;letter-spacing:.12em;text-transform:uppercase">SAFE TO SPEND</span>
          <span class="mono muted" style="font-size:10px">9 days left</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:10px;margin-top:4px">
          <span class="anton" style="font-size:52px;color:var(--lime);line-height:1">$553</span>
          <span class="chip chip-teal" style="font-size:11px">↑ 12% wk</span>
        </div>
        <p class="mono muted" style="margin:4px 0 12px;font-size:11px">of your $2,400 monthly budget</p>
        <div class="progress-track"><div class="progress-fill" style="width:77%"></div></div>
        <p class="mono muted" style="margin:6px 0 0;font-size:11px">$1,847 spent · 77% used</p>
      </div>

      <!-- Budgets -->
      <div class="section-header">
        <span class="section-title">Budgets · June</span>
        <button onclick="openBudgetSheet()" style="background:rgba(202,255,77,.1);border:none;cursor:pointer;color:var(--lime);font-family:var(--font-mono);font-size:12px;font-weight:700;letter-spacing:.04em;padding:4px 12px;border-radius:var(--r-pill)">+ Add budget</button>
      </div>
      <div class="card" style="padding:0;overflow:hidden">${budgetRows}</div>

      <!-- Weekly bars -->
      <div class="section-header">
        <span class="section-title">This week</span>
        <span class="mono muted" style="font-size:13px">$392 spent</span>
      </div>
      <div class="card">
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px;margin-bottom:10px">${barCols}</div>
        <div style="display:flex;gap:6px">${dayLabels}</div>
        <div style="display:flex;gap:16px;margin-top:12px">
          ${[['var(--good)','good'],['var(--watch)','watch'],['var(--over)','over']].map(([c,l]) =>
            `<span class="mono" style="font-size:10px;color:var(--mut);display:flex;align-items:center;gap:4px">
              <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${c}"></span>${l}</span>`).join('')}
        </div>
      </div>

      <!-- Calendar heatmap -->
      <div class="section-header"><span class="section-title">June calendar</span></div>
      <div class="card" style="margin-bottom:32px">
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:4px">
          ${['S','M','T','W','T','F','S'].map(d => `<div style="text-align:center;font-family:var(--font-mono);font-size:9px;color:var(--mut)">${d}</div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px">
          <div></div>${calCells}
        </div>
        <div style="display:flex;align-items:center;gap:4px;margin-top:12px;justify-content:center">
          <span class="mono muted" style="font-size:9px">low</span>
          ${['#191a1d','#1d4a3a','#37b58c','#caff4d','#ff5c8a','#ff2d55'].map(c =>
            `<div style="width:14px;height:14px;border-radius:3px;background:${c}"></div>`).join('')}
          <span class="mono" style="font-size:9px;color:var(--hot)">clocked 🚨</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Day drill-down sheet -->
  <div id="day-sheet" onclick="closeDaySheet()">
    <div class="day-sheet-inner" onclick="event.stopPropagation()">
      <div class="drag-handle"></div>
      <p class="mono muted" style="margin:0 0 4px;font-size:10px;letter-spacing:.1em" id="day-label"></p>
      <p class="anton" style="margin:0;font-size:32px" id="day-title"></p>
      <p class="mono hot" style="margin:4px 0 16px;font-size:14px" id="day-spend"></p>
      <div id="day-transactions"></div>
    </div>
  </div>

  <!-- Add budget sheet -->
  <div id="budget-sheet" onclick="closeBudgetSheet()">
    <div class="budget-sheet-inner" onclick="event.stopPropagation()">
      <div class="drag-handle"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h2 class="anton" style="margin:0;font-size:18px">NEW BUDGET</h2>
        <button onclick="closeBudgetSheet()" style="background:none;border:none;color:var(--mut);font-size:20px;cursor:pointer">✕</button>
      </div>
      <p class="mono muted" style="font-size:10px;letter-spacing:.1em;margin:0 0 10px">PICK A CATEGORY</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px" id="cat-chips">
        ${[['🚗','Transport'],['💅','Self-care'],['☕','Coffee'],['📦','Misc'],['🛍️','Shopping']].map(([e,n],i) =>
          `<button class="chip${i===0?' chip-lime':''}" onclick="selectCat(this,'${n}')" data-cat="${n}">${e} ${n}</button>`).join('')}
      </div>
      <p class="mono muted" style="font-size:10px;letter-spacing:.1em;margin:0 0 8px">MONTHLY LIMIT</p>
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:4px">
        <span class="anton" style="font-size:44px;color:var(--ink)" id="limit-display">$150</span>
        <span class="mono muted" style="font-size:12px">spent so far $130</span>
      </div>
      <input type="range" min="50" max="500" step="10" value="150" oninput="updateLimit(this.value)"
        style="width:100%;accent-color:var(--lime);margin:8px 0 12px">
      <div style="display:flex;gap:8px;margin-bottom:16px">
        ${[100,150,200].map(v =>
          `<button class="chip${v===150?' chip-lime':''}" onclick="setLimit(${v})" data-val="${v}">$${v}</button>`).join('')}
      </div>
      <div class="card" style="background:rgba(202,255,77,.06);border-color:rgba(202,255,77,.2);margin-bottom:16px;font-size:13px">
        💡 Clocked suggests ~$130 based on your last 3 months on Transport.
      </div>
      <button class="btn btn-lime" onclick="saveBudget()">Set budget · nudge me at 80% 👀</button>
    </div>
  </div>`
}

function screenLeaderboard() {
  const { friends } = SEED
  const podiumOrder = [friends[1], friends[0], friends[2]] // 2nd, 1st, 3rd
  const medals = ['🥈','🥇','🥉']
  const heights = [80, 100, 64]

  const podium = podiumOrder.map((f, i) => `
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
      <div style="position:relative">
        <div class="avatar" style="width:48px;height:48px;background:${f.color};font-size:18px;font-weight:700">${f.initials}</div>
        <span style="position:absolute;bottom:-2px;right:-4px;font-size:14px">${medals[i]}</span>
      </div>
      ${f.isYou ? `<span class="mono" style="font-size:9px;color:var(--lime);letter-spacing:.06em">👈 you</span>` : ''}
      <span class="anton" style="font-size:13px;text-align:center">${f.name}</span>
      <span class="mono" style="font-size:11px;color:var(--lime);font-weight:700">${f.savedPct}% saved</span>
      <div style="width:100%;height:${heights[i]}px;background:linear-gradient(180deg,${f.color}33,${f.color}11);border-radius:8px 8px 0 0;border:1px solid ${f.color}44;display:grid;place-items:center">
        <span class="anton" style="font-size:36px;color:${f.color}22;user-select:none">${f.rank}</span>
      </div>
    </div>`).join('')

  const rows = friends.slice(3).map((f, i) => `
    <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;${i<2?'border-bottom:1px solid var(--line)':''}">
      <span class="mono" style="font-size:13px;color:var(--mut);width:18px;text-align:center">${f.rank}</span>
      <div class="avatar" style="width:36px;height:36px;background:${f.color};font-size:13px">${f.initials}</div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:14px">${f.name}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-top:2px">
          <span class="mono" style="font-size:10px;color:var(--purple)">↗ ${f.investedPct}% inv</span>
          <span class="chip ${f.onBudget?'chip-teal':'chip-hot'}" style="font-size:9px;padding:2px 8px">${f.onBudget?'✓ on budget':'✕ over'}</span>
        </div>
      </div>
      <div style="text-align:right">
        <div class="mono" style="font-size:16px;font-weight:700;color:var(--lime)">${f.savedPct}%</div>
        <div class="mono" style="font-size:9px;color:var(--mut);letter-spacing:.06em">SAVED</div>
      </div>
      ${f.badge ? `<span style="background:${f.badgeColor};color:${f.badgeTxt};border-radius:var(--r-pill);padding:3px 8px;font-size:12px">${f.badge}</span>` : ''}
    </div>`).join('')

  return `
  <div class="screen" id="screen-ranks">
    <div class="screen-inner">
      <div style="display:flex;align-items:center;justify-content:space-between;padding-top:56px">
        <h1 class="anton" style="margin:0;font-size:22px;letter-spacing:.01em">LEADERBOARD</h1>
        <span class="chip">🏠 The Roommates</span>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        <button class="chip chip-lime" id="scope-week" onclick="setScope('week',this)">This week</button>
        <button class="chip" id="scope-month" onclick="setScope('month',this)">This month</button>
      </div>
      <p class="mono" style="color:var(--mut);font-size:11px;margin:10px 0 20px;letter-spacing:.03em">
        Ranked by <strong style="color:var(--ink)">savings rate</strong> — % of your income you kept. Higher = better 🔒
      </p>
      <div style="display:flex;align-items:flex-end;justify-content:center;gap:10px;margin-bottom:24px">${podium}</div>
      <div class="card" style="padding:0;overflow:hidden;margin-bottom:8px">${rows}</div>
      <p class="mono muted" style="font-size:10px;text-align:center;letter-spacing:.04em;margin-bottom:32px">saved · ↗ invested · on budget — all % of income, no $ 🔒</p>
    </div>
  </div>`
}

const STORY_CARDS = [
  {
    bg: 'var(--lime)',
    html: `<div style="display:flex;flex-direction:column;height:100%;padding:28px 22px;color:#0a0a0a">
      <div style="display:flex;justify-content:space-between">
        <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;opacity:.6">CLOCKED</span>
        <span style="font-family:var(--font-mono);font-size:10px;opacity:.6">'26</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:8px">
        <p style="font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;margin:0;opacity:.7">YOUR JUNE WRAPPED</p>
        <h1 style="font-family:var(--font-display);font-size:64px;margin:0;line-height:.9">MONEY<br>WRAPPED</h1>
        <p style="font-family:var(--font-ui);font-size:14px;margin:8px 0 0;opacity:.8">@maya · the receipts are in 👀</p>
      </div>
      <p style="font-family:var(--font-mono);font-size:11px;opacity:.5;margin:0;letter-spacing:.08em">swipe to get clocked →</p>
    </div>`
  },
  {
    bg: '#0a0a0a',
    html: `<div style="display:flex;flex-direction:column;height:100%;padding:28px 22px;color:var(--ink)">
      <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;color:var(--mut);margin-bottom:8px">WHERE IT WENT</span>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:space-evenly">
        ${[['01','🎉','GOING OUT','21%','var(--pink)'],['02','🍔','FOOD','18%','var(--lime)'],['03','☕','COFFEE','14%','var(--teal)']].map(([n,e,name,pct,c]) =>
          `<div style="display:flex;align-items:center;gap:16px">
            <span style="font-family:var(--font-display);font-size:46px;color:${c};line-height:1;opacity:.9;min-width:60px">${n}</span>
            <div>
              <div style="font-family:var(--font-display);font-size:27px;letter-spacing:.01em">${e} ${name}</div>
              <div style="font-family:var(--font-mono);font-size:13px;color:${c}">${pct} of spend</div>
            </div>
          </div>`).join('')}
      </div>
      <p style="font-family:var(--font-ui);font-size:12px;color:var(--mut);margin:0">you were OUT out this month. 🦋</p>
    </div>`
  },
  {
    bg: 'var(--pink)',
    html: `<div style="display:flex;flex-direction:column;height:100%;padding:28px 22px;color:#fff">
      <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;opacity:.7;margin-bottom:auto">YOU GOT CLOCKED 🚨</span>
      <div style="text-align:center;padding:40px 0">
        <div style="font-family:var(--font-display);font-size:88px;line-height:.85;margin:0 0 4px">23</div>
        <div style="font-family:var(--font-display);font-size:26px;letter-spacing:.01em">ICED COFFEES ☕</div>
      </div>
      <div>
        <p style="font-family:var(--font-ui);font-size:14px;margin:0 0 12px;line-height:1.4">that's basically a part-time barista habit. be so fr.</p>
        <p style="font-family:var(--font-mono);font-size:11px;opacity:.7;margin:0">biggest day → Sat Jun 13 👀</p>
      </div>
    </div>`
  },
  {
    bg: 'var(--purple)',
    html: `<div style="display:flex;flex-direction:column;height:100%;padding:28px 22px;color:#fff">
      <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;opacity:.7;margin-bottom:8px">YOUR JUNE TITLE IS…</span>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;text-align:center">
        <span style="font-size:56px">🦋</span>
        <h2 style="font-family:var(--font-display);font-size:36px;margin:0;letter-spacing:.01em;line-height:1.1">THE SOCIAL BUTTERFLY</h2>
        <p style="font-family:var(--font-ui);font-size:13px;opacity:.8;margin:0">you lived your life fully this month. the bank account felt it.</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <span class="chip" style="background:rgba(255,255,255,.2);color:#fff">🎉 21%</span>
        <span class="chip" style="background:rgba(255,255,255,.2);color:#fff">12 nights out</span>
      </div>
    </div>`
  },
  {
    bg: 'var(--teal)',
    html: `<div style="display:flex;flex-direction:column;height:100%;padding:28px 22px;color:#0a0a0a">
      <span style="font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;opacity:.6;margin-bottom:8px">IN THE ROOMMATES… YOU RANKED</span>
      <div style="font-family:var(--font-display);font-size:108px;line-height:.85;margin:0 0 4px">#2</div>
      <div style="flex:1">
        <span style="background:rgba(0,0,0,.12);border-radius:var(--r-pill);padding:4px 12px;font-family:var(--font-mono);font-size:12px;font-weight:700">📈 Most Improved</span>
        <p style="font-family:var(--font-ui);font-size:14px;margin:16px 0 0;line-height:1.4">up 14% on yourself. priya still won 🧘</p>
      </div>
      <button style="background:#0a0a0a;color:#fff;border:none;border-radius:var(--r-md);padding:14px;font-family:var(--font-ui);font-weight:700;font-size:14px;cursor:pointer;width:100%">⬇ Save &amp; post to story</button>
    </div>`
  },
]

function screenWrapped() {
  return `
  <div class="screen" id="screen-wrapped">
    <div class="screen-inner">
      <div style="padding-top:56px">
        <p class="mono muted" style="font-size:10px;letter-spacing:.14em;margin:0 0 4px">CLOCKED PRESENTS</p>
        <h1 class="anton" style="margin:0 0 20px;font-size:26px">MONEY WRAPPED</h1>

        <!-- Fanned stack -->
        <div style="position:relative;height:200px;margin-bottom:24px">
          ${[['var(--purple)',-5,16],['var(--pink)',3,8],['var(--lime)',0,0]].map(([c,rot,top]) =>
            `<div style="position:absolute;width:72%;height:180px;border-radius:16px;background:${c};left:50%;top:${top}px;transform:translateX(-50%) rotate(${rot}deg);box-shadow:0 8px 32px rgba(0,0,0,.4)"></div>`).join('')}
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10">
            <button class="btn btn-lime" style="width:auto;padding:12px 24px;font-size:14px" onclick="openStory()">▶ View your Wrapped</button>
          </div>
        </div>

        <!-- Past months -->
        <div class="section-header"><span class="section-title">Past Wrappeds</span></div>
        ${[['MAY 2026','The Coffee Chapter ☕','var(--teal)'],['APR 2026','Soft Launch Szn 🛍️','var(--purple)']].map(([m,s,c]) =>
          `<div class="card" style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
            <div style="width:42px;height:42px;border-radius:10px;background:${c};flex-shrink:0"></div>
            <div>
              <div class="mono" style="font-size:12px;font-weight:700;letter-spacing:.06em">${m}</div>
              <div style="font-size:13px;color:var(--mut);margin-top:2px">${s}</div>
            </div>
            ${ICONS.chevron}
          </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Story overlay -->
  <div id="story-overlay" onclick="handleStoryTap(event)">
    <div class="story-progress" id="story-pips">
      ${STORY_CARDS.map((_,i) => `<div class="story-pip" id="pip-${i}"></div>`).join('')}
    </div>
    <button class="story-close" onclick="closeStory()">✕</button>
    <div class="story-card" id="story-card"></div>
  </div>`
}

function screenProfile(user) {
  const name = user ? (user.user_metadata?.full_name || 'Maya Chen') : 'Maya Chen'
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'MC'
  const { budgets } = SEED

  const budgetRows = budgets.map((b, i) => {
    const pct = Math.min(b.spent / b.cap, 1)
    const over = b.spent > b.cap
    return `<div style="padding:12px 16px;${i<budgets.length-1?'border-bottom:1px solid var(--line)':''}">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:13px;font-weight:600">${b.emoji} ${b.name}</span>
        <span class="mono" style="font-size:11px;color:${over?'var(--hot)':'var(--mut)'}">$${b.spent}/$${b.cap} · ${Math.round(pct*100)}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill${over?' over':''}" style="width:${pct*100}%"></div></div>
    </div>`
  }).join('')

  return `
  <div class="screen" id="screen-you">
    <div class="screen-inner">
      <div style="padding-top:56px">
        <!-- Header -->
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:24px">
          <div class="avatar" style="width:72px;height:72px;background:var(--lime);font-size:28px">${initials}</div>
          <h1 class="anton" style="margin:0;font-size:24px;letter-spacing:.01em">${name.toUpperCase()}</h1>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="mono muted" style="font-size:12px">@maya</span>
            <span style="color:var(--mut)">·</span>
            <span class="chip" style="font-size:11px">🏠 The Roommates</span>
            <button style="background:var(--p2);border:none;color:var(--mut);border-radius:var(--r-pill);padding:3px 10px;font-size:11px;cursor:pointer">edit</button>
          </div>
        </div>

        <!-- Bank -->
        <div class="card" style="margin-bottom:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:36px;height:36px;border-radius:10px;background:#1d3c78;display:grid;place-items:center;flex-shrink:0;font-size:14px">🏦</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">Chase ••4417</div>
              <div class="mono muted" style="font-size:11px;margin-top:2px">income detected · kept private 🔒</div>
            </div>
            <div style="display:flex;align-items:center;gap:5px">
              <div style="width:7px;height:7px;border-radius:50%;background:var(--teal);box-shadow:0 0 6px var(--teal)"></div>
              <span class="mono" style="font-size:11px;color:var(--teal)">live</span>
            </div>
          </div>
        </div>

        <!-- Budgets -->
        <div class="section-header">
          <span class="section-title">Your budgets</span>
          <span class="mono muted" style="font-size:10px;letter-spacing:.06em">private to you</span>
        </div>
        <div class="card" style="padding:0;overflow:hidden;margin-bottom:12px">${budgetRows}</div>

        <!-- Savings goal -->
        <div class="card" style="background:rgba(124,92,255,.1);border:1px solid rgba(124,92,255,.2);margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <span style="font-weight:600;font-size:14px">✈️ Tokyo fund</span>
            <span class="mono muted" style="font-size:12px">$1,240 / $2,500</span>
          </div>
          <div class="progress-track" style="margin-bottom:8px">
            <div style="width:49.6%;height:100%;border-radius:var(--r-pill);background:linear-gradient(90deg,var(--purple),var(--pink))"></div>
          </div>
          <span style="font-size:13px;color:var(--mut)">halfway there — 50% 🎉</span>
        </div>

        <!-- Settings -->
        <div class="section-header"><span class="section-title">Settings</span></div>
        <div class="card" style="padding:0;overflow:hidden;margin-bottom:12px">
          ${[['🔒','Privacy & visibility'],['🔔','Nudges'],['🎨','Appearance']].map(([icon,label],i) =>
            `<div style="display:flex;align-items:center;gap:14px;padding:16px;${i<2?'border-bottom:1px solid var(--line)':''}cursor:pointer">
              <span style="font-size:16px">${icon}</span>
              <span style="flex:1;font-weight:500;font-size:14px">${label}</span>
              ${ICONS.chevron}
            </div>`).join('')}
        </div>

        <!-- Sign out -->
        <button class="btn btn-panel" onclick="signOut()" style="margin-bottom:32px;color:var(--hot);border-color:rgba(255,45,85,.2)">Sign out</button>
      </div>
    </div>
  </div>`
}

// ─── Onboarding: Connect Bank ─────────────────────────────────────────────────
const BANKS = [
  { id: 'chase', name: 'Chase',           color: '#1d3c78', emoji: '🏦' },
  { id: 'bofa',  name: 'Bank of America', color: '#c0102a', emoji: '🏛️' },
  { id: 'wells', name: 'Wells Fargo',     color: '#c03a1d', emoji: '🏚️' },
  { id: 'chime', name: 'Chime',           color: '#1ec677', emoji: '💚' },
]

function screenConnectBank() {
  const bankRows = BANKS.map(b => `
    <div class="bank-row" id="bank-${b.id}" onclick="selectBank('${b.id}')">
      <div class="bank-logo" style="background:${b.color}">${b.emoji}</div>
      <span style="flex:1;font-weight:600;font-size:15px">${b.name}</span>
      <div id="bank-${b.id}-status">
        ${ICONS.chevron}
      </div>
    </div>`).join('')

  return `
  <div class="onboard-wrap">
    <div class="onboard-top">
      <div class="step-dots">
        <div class="step-dot active"></div>
        <div class="step-dot inactive"></div>
      </div>
      <button class="skip-btn" onclick="skipToApp()">Skip →</button>
    </div>

    <h1 class="anton" style="font-size:26px;margin:0 0 8px;letter-spacing:.01em">CONNECT YOUR BANK</h1>
    <p style="color:var(--mut);font-size:14px;line-height:1.5;margin:0 0 20px">
      This is how you get clocked — we read your transactions to build your calendar + budgets.
    </p>

    <!-- Privacy card -->
    <div class="card" style="background:rgba(61,214,196,.08);border-color:rgba(61,214,196,.25);margin-bottom:20px;display:flex;gap:12px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">🔒</span>
      <div style="font-size:13px;line-height:1.5;color:var(--ink)">
        <strong>Your income &amp; balances stay private.</strong><br>
        <span style="color:var(--mut)">Friends only ever see %s and ranks — never your real $.</span>
      </div>
    </div>

    <!-- Search -->
    <div style="position:relative;margin-bottom:12px">
      <input
        type="text"
        placeholder="Search for your bank…"
        oninput="filterBanks(this.value)"
        style="width:100%;background:var(--p2);border:1px solid var(--line);border-radius:var(--r-md);padding:13px 16px 13px 40px;color:var(--ink);font-family:var(--font-ui);font-size:14px;outline:none"
      />
      <svg style="position:absolute;left:13px;top:50%;transform:translateY(-50%);color:var(--mut)" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6.5" cy="6.5" r="4"/><line x1="10" y1="10" x2="14" y2="14"/></svg>
    </div>

    <!-- Bank list -->
    <div class="card" style="padding:0;overflow:hidden;flex:1" id="bank-list">
      ${bankRows}
    </div>

    <!-- Continue button (hidden until connected) -->
    <div id="bank-continue" style="display:none;margin-top:16px">
      <button class="btn btn-lime" onclick="goToFindCrew()">
        Continue → <span id="bank-continue-name"></span>
      </button>
    </div>

    <!-- Plaid footer -->
    <div class="plaid-footer">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--mut)" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="5" width="10" height="8" rx="1.5"/><path d="M4.5 5V3.5a2.5 2.5 0 015 0V5"/></svg>
      <span class="mono muted" style="font-size:11px">Secured by <strong style="color:var(--ink)">Plaid</strong> · bank-level encryption</span>
    </div>
  </div>`
}

// ─── Onboarding: Find Your Crew ───────────────────────────────────────────────
function screenFindCrew(tab = 'create') {
  const isCreate = tab === 'create'
  return `
  <div class="onboard-wrap">
    <div class="onboard-top">
      <button onclick="goToConnectBank()" style="background:none;border:none;color:var(--mut);cursor:pointer;padding:0;display:flex;align-items:center;gap:6px">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4L6 9l5 5"/></svg>
      </button>
      <div class="step-dots">
        <div class="step-dot done"></div>
        <div class="step-dot active"></div>
      </div>
      <button class="skip-btn" onclick="skipToApp()">Skip →</button>
    </div>

    <h1 class="anton" style="font-size:25px;margin:0 0 8px;letter-spacing:.01em">FIND YOUR CREW</h1>
    <p style="color:var(--mut);font-size:14px;line-height:1.5;margin:0 0 24px">
      Money's only fun with friends. Make a group or hop in one.
    </p>

    <!-- Create / Join toggle -->
    <div class="seg-toggle">
      <button class="seg-btn ${isCreate ? 'active' : ''}" onclick="switchCrewTab('create')">Create</button>
      <button class="seg-btn ${!isCreate ? 'active' : ''}" onclick="switchCrewTab('join')">Join</button>
    </div>

    ${isCreate ? `
    <!-- Create tab -->
    <p class="mono muted" style="font-size:10px;letter-spacing:.1em;margin:0 0 8px">GROUP NAME</p>
    <input
      id="group-name-input"
      type="text"
      class="group-name-input"
      placeholder="🏠 The Roommates"
      maxlength="30"
      oninput="onGroupNameInput(this.value)"
    />

    <!-- Invite card -->
    <div class="card" style="margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="display:flex">
          ${['#ff5c8a','#7c5cff','#3dd6c4'].map((c,i) =>
            `<div class="avatar" style="width:32px;height:32px;background:${c};font-size:12px;margin-left:${i>0?'-10px':'0'};border:2px solid var(--p1);z-index:${3-i}">${['P','S','D'][i]}</div>`).join('')}
        </div>
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600">3 added from contacts</div>
          <div class="mono muted" style="font-size:11px;margin-top:2px">Priya, Sofia, Devon</div>
        </div>
        <button class="chip chip-lime" style="cursor:pointer;border:none">＋ Share link</button>
      </div>
    </div>

    <button class="btn btn-lime" id="create-group-btn" onclick="createGroup()" style="opacity:.4;pointer-events:none">
      Create group →
    </button>
    ` : `
    <!-- Join tab -->
    <p class="mono muted" style="font-size:10px;letter-spacing:.1em;margin:0 0 12px">ENTER INVITE CODE</p>
    <div class="code-cells" id="code-cells">
      ${[0,1,2,3,4,5].map(i => `<div class="code-cell" id="cell-${i}"></div>`).join('')}
    </div>
    <input
      class="code-input-hidden"
      id="code-input"
      type="text"
      maxlength="6"
      autocomplete="off"
      oninput="onCodeInput(this.value)"
      autofocus
    />
    <p class="mono muted" style="font-size:12px;text-align:center;margin:0 0 24px">
      tap above to type your code
    </p>
    <button class="btn btn-lime" id="join-group-btn" onclick="joinGroup()" style="opacity:.4;pointer-events:none">
      Join group →
    </button>
    <div style="margin-top:16px;text-align:center">
      <p class="mono muted" style="font-size:11px">Try demo code:</p>
      <button onclick="fillDemoCode()" style="background:none;border:none;color:var(--lime);font-family:var(--font-mono);font-size:16px;letter-spacing:.2em;cursor:pointer">CLKD01</button>
    </div>
    `}
  </div>`
}
}
