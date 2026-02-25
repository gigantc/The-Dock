# Morning Brief Spec (Living)

_Last updated: 2026-02-25_

This is the **source of truth** for Morning Brief formatting rules and behavior.
Update this file whenever we change structure/style.

## Core Direction
- Keep the brief skimmable, compact, fun, and informative.
- Keep formatting consistent day to day.
- Use real sources for factual claims.
- Avoid random markdown/list formatting drift.

## Required Sections (in order)
1. Intro line (fresh daily)
2. Apollo greeting line (fresh daily, personality + day/date context)
3. Outline (anchor links)
4. Weather (Chandler, AZ)
5. Markets
6. Yesterday vs Today
7. Trending Topics Roundup
8. Topic Highlights
9. Today I can help with…
10. Apollo outro/sign-off

---

## Formatting Rules

### Global
- No double blank lines inside sections.
- Keep source lines compact.
- Use clear headings so anchors resolve.

### Outline
- Must use working anchor links to actual section IDs.

### Weather (strict)
- No bullets, no `<ul>`, no `<li>`.
- Format as compact prose lines.
- Start with:
  - `Today at a glance:`
  - Include: high/low range, fun+practical forecast blurb, sunrise/sunset, pressure + trend.
- Include pressure every day:
  - format: `🧭 pressure: <value> (<rising/falling/steady>)`
  - if unavailable: explicitly say unavailable + source checked.
- Lunar block should be plain lines (not bullets):
  - `Lunar Cycle:` with phase-appropriate emoji (🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘)
  - `Next major phase:`
  - `Moon watch:` if relevant.

### Markets (strict)
- No bullets, no `<ul>`, no `<li>`.
- One compact line per instrument:
  - S&P 500, Dow, Nasdaq, BTC, ETH
  - format: `Name: value (pct, delta) + up/down icon`
- If two sources are used, keep both on one source line.
- Include `Market Watch` mini-summary (2-3 sentences, playful + informative).

### Yesterday vs Today
- Required and populated daily.
- Must include concrete comparison values for S&P, Dow, Nasdaq, BTC, ETH.
- If unavailable after fallback attempts, explicitly mark unavailable and include reason + sources checked.

### Trending Topics Roundup
- No bullets, no `<ul>`, no `<li>`.
- Use bold lead-in:
  - `**Headline:** explanation`
- Dynamic count (more on busy days, fewer on slow days).
- This section is broad public trends (not limited to personal interests).
- If two sources, keep on same source line.

### Topic Highlights
- Personalized to dFree interests.
- Keep recent successful format.
- Include Apollo Picks (min 2; can add more when high signal).
- Notable extras allowed when relevant.
- Flexible count based on signal.

### Today I can help with…
- **Bullets are allowed here** (intentional exception).

### Intro / Greeting / Outro
- Intro: short, fresh daily opener.
- Greeting: Apollo personality, positive/inspiring, concise, day/date aware.
- Outro: positive Apollo one-liner, witty/helpful, rotate phrasing daily.

---

## Source Rules
- Every factual item should include a source line (except action-only help list).
- Use readable domain labels.
- Avoid raw API URLs in user-facing output.
- For weather/markets, prefer human-readable source pages.

---

## Tags Rules
- Text-only tags (3-8), meaningful topics.
- Never include numeric-only tags (`1`, `2`, etc.).

---

## Template Files
- HTML/CSS template: `templates/morning-brief-v1.html`
- Markdown scaffolding (optional): `templates/morning-brief-template.md`

---

## Change Log
- 2026-02-25: Added strict prose formatting for Weather/Markets/Trending; added pressure field + trend; allowed bullets only in "Today I can help with…"; locked intro/greeting/outro style; added dynamic item-count behavior for trends/highlights.
