# Morning Brief — Template Post

> HTML/CSS templating sandbox for Dock format tuning.

## Outline
- [Weather](#weather)
- [Markets](#markets)
- [Yesterday vs Today](#yesterday-vs-today)
- [Trending Topics Roundup](#trending-topics-roundup)
- [Topic Highlights](#topic-highlights)
- [Today I can help with…](#today-i-can-help-with)

---

## Weather (Chandler, AZ)
Today at a glance: 🌡️ Today’s range: High:{{HIGH_F}}° Low:{{LOW_F}}°. {{WEATHER_GLANCE}} 🌅 sunrise: {{SUNRISE}} · 🌇 sunset: {{SUNSET}} 🧭 pressure: {{PRESSURE_HPA}} hPa ({{PRESSURE_TREND}})
Source: {{WEATHER_SOURCE_DOMAIN}}

Lunar Cycle: {{MOON_PHASE_EMOJI}} {{MOON_PHASE}}, about {{MOON_ILLUMINATION}} illuminated and {{MOON_TREND}} tonight.
🌓 Next major phase: {{NEXT_MAJOR_PHASE}}
🔭 Moon watch: {{MOON_WATCH_NOTE}}
Source: {{MOON_SOURCE_DOMAIN}}

---

## Markets
S&P 500: {{SP500_VALUE}} ({{SP500_PCT}}, {{SP500_DELTA}}) {{SP500_ARROW}}
Source: {{SP500_SOURCE_1}}, {{SP500_SOURCE_2}}

Dow: {{DOW_VALUE}} ({{DOW_PCT}}, {{DOW_DELTA}}) {{DOW_ARROW}}
Source: {{DOW_SOURCE_1}}, {{DOW_SOURCE_2}}

Nasdaq: {{NASDAQ_VALUE}} ({{NASDAQ_PCT}}, {{NASDAQ_DELTA}}) {{NASDAQ_ARROW}}
Source: {{NASDAQ_SOURCE_1}}, {{NASDAQ_SOURCE_2}}

Bitcoin (BTC): {{BTC_VALUE}} ({{BTC_PCT}}, {{BTC_DELTA}}) {{BTC_ARROW}}
Source: {{BTC_SOURCE_1}}, {{BTC_SOURCE_2}}

Ethereum (ETH): {{ETH_VALUE}} ({{ETH_PCT}}, {{ETH_DELTA}}) {{ETH_ARROW}}
Source: {{ETH_SOURCE_1}}, {{ETH_SOURCE_2}}

Market Watch: {{MARKET_WATCH_SUMMARY}} 📈📉
Source: {{MARKET_WATCH_SOURCE_1}}, {{MARKET_WATCH_SOURCE_2}}

---

## Yesterday vs Today
- {{YVST_1}}
- {{YVST_2}}
- {{YVST_3}}

Source: marketwatch.com · nasdaq.com

---

## Trending Topics Roundup
**{{TREND_1_HEAD}}:** {{TREND_1_BODY}}
Source: {{TREND_1_SOURCE_1}}, {{TREND_1_SOURCE_2}}

**{{TREND_2_HEAD}}:** {{TREND_2_BODY}}
Source: {{TREND_2_SOURCE_1}}, {{TREND_2_SOURCE_2}}

**{{TREND_3_HEAD}}:** {{TREND_3_BODY}}
Source: {{TREND_3_SOURCE_1}}, {{TREND_3_SOURCE_2}}

{{TREND_OPTIONAL_BLOCKS}}

---

## Topic Highlights
- {{HIGHLIGHT_1}} (Source: {{HIGHLIGHT_1_SOURCE}})
- {{HIGHLIGHT_2}} (Source: {{HIGHLIGHT_2_SOURCE}})
- {{HIGHLIGHT_3}} (Source: {{HIGHLIGHT_3_SOURCE}})

Tags: packers · ai · markets · weather · dev

---

## Today I can help with…
- {{HELP_1}}
- {{HELP_2}}
- {{HELP_3}}

See you at the next checkpoint 🦞
