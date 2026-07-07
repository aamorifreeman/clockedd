# Clocked ⏱

**Money, but make it a group chat** — a social budgeting app that turns your spending into budgets, heatmaps, friendly leaderboards, and a monthly "Money Wrapped" recap.

<!-- TODO: add live URL -->

## What it is

Clocked is a mobile-first single-page web app for tracking your spending *with* your friends — without ever exposing real dollar amounts. You connect a bank, set category budgets, and get "clocked" when you overspend. Friends compete on a leaderboard ranked by **savings rate** (percentages only — income and balances stay private), and at the end of each month you get a shareable, story-style **Money Wrapped**.

This is an MVP prototype: the full UI runs on seeded demo data, Supabase handles auth, and the Plaid bank connection is simulated (real integration is the next phase).

## Features

- **Onboarding flow** — connect a bank (simulated Plaid Link), then create a crew or join one with a 6-character invite code
- **Auth** — Google sign-in via Supabase, plus a no-login demo mode
- **Dashboard** — safe-to-spend summary, per-category budgets with progress bars, weekly spending bar chart, and a June calendar heatmap where each day drills down into its transactions
- **Add budget sheet** — pick a category, slide to set a monthly limit, get nudged at 80%
- **Leaderboard** — podium + rankings of your crew by savings rate, with badges like Money Monk and Most Improved; all stats are percentages, never dollars
- **Money Wrapped** — a tap-through story player (Spotify Wrapped style) recapping your month: top categories, your biggest day, and your monthly title
- **Profile** — connected bank, private budgets, savings goal tracker, and settings

## Tech stack

- **Vanilla JavaScript** — no framework, no build step; screens are template-literal renderers (`js/screens.js`) driven by a small state/controller layer (`js/app.js`)
- **CSS custom properties** — a design-token system (`css/tokens.css`) with a dark theme and a light-theme override hook
- **Supabase** — auth (Google OAuth) via the CDN client
- **Netlify** — static hosting with an SPA redirect (`netlify.toml`)

## Run locally

No install, no build:

```bash
git clone https://github.com/aamorifreeman/clockedd.git
cd clockedd
python3 -m http.server 8000
```

Then open http://localhost:8000. (Or just open `index.html` directly in a browser.)

Tap **"Try demo (no login)"** on the sign-in screen to explore everything with seeded data.

## Project structure

```
index.html      # shell + JS-crash fallback
js/app.js       # state, auth, navigation, interactions
js/screens.js   # seed data + screen renderers
css/tokens.css  # design tokens (colors, fonts, radii)
css/app.css     # components + layout
netlify.toml    # SPA redirect for Netlify
```

## Roadmap

- Real Plaid transaction sync (replacing seed data)
- Supabase-backed groups, budgets, and leaderboards
- Apple and phone-number sign-in
