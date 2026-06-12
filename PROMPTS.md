# Prompts Used — AI Generation Log

## Tool: Claude Sonnet 4.6 (claude.ai)

---

### Prompt 1 — Design Planning
**Input:** Full assessment brief (Corporate Intranet, all features, UX/engagement focus)
**Output:** Design token system (navy + indigo + amber + emerald palette), typography pairing (Inter + Fraunces), layout architecture (sidebar + topbar + pulse ticker + content), feature prioritization, component list
**Corrections:** Removed emoji from nav items for professionalism; narrowed palette from 5 to 4 main colors; changed leaderboard from table to visual bar layout for better scannability

---

### Prompt 2 — Inline Prototype (Widget)
**Input:** "Build this as an interactive HTML widget showing all sections"
**Output:** Full single-file HTML intranet with all 9 sections, live pulse bar, navigation, toast feedback
**Corrections:** Fixed modal z-index (position:fixed conflicts in iframe); added keyboard navigation (tabIndex, onKeyDown); removed hardcoded dark backgrounds that conflicted with host CSS variables

---

### Prompt 3 — Full React Codebase
**Input:** "Continue — build the full deployable React app"
**Output:** Complete React + Vite project: App.jsx, Sidebar, Topbar/PulseBar/Toast, KudosModal, Dashboard, Announcements, Recognition, Teams, KnowledgeBase, Events, Celebrations, Gallery, Directory, index.css, mockData.js
**Corrections:**
- Fixed JSX in .js file (mockData.js had JSX fragments → moved pulse items to plain objects in Topbar.jsx)
- Renamed sections/index.js → index.jsx to allow JSX parsing
- Fixed named vs default export mismatch in Topbar.jsx imports
- Changed `linear-gradient` in banners to flat colors for dark mode compatibility

---

### Key Design Decisions (human judgment applied)
1. **Pulse bar** as "signature element" — communicates aliveness without overwhelming the dashboard
2. **Fraunces serif for leadership quote only** — creates editorial authority for CEO message without making the whole UI feel non-technical
3. **Dark navy sidebar** vs light content area — classic enterprise contrast pattern, lets content breathe
4. **Moderation notice on "New Post"** — per brief requirement; shows awareness of governance without building full moderation UI
5. **Engagement gamification** — kept subtle (pts leaderboard, rank indicator) rather than overt to match "not overwhelming" brief requirement
6. **No attendance/leave features** — correctly scoped per brief ("not HR transactions")
