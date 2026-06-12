# Prompts Used — AI Generation Log

## Tools Used: Claude Sonnet 4.6 (claude.ai), ChatGPT-4o (chat.openai.com), GitHub Copilot, v0 by Vercel

---

### Prompt 1 — Design Planning
**Tool:** ChatGPT-4o
**Input:** Full assessment brief (Corporate Intranet, all features, UX/engagement focus)
**Output:** Initial ideation — feature prioritization list, rough information architecture, section naming suggestions (Dashboard, Announcements, Recognition, Teams, etc.), color palette mood board description
**Corrections:** Palette felt too generic (standard blues); refined in next step with Claude for more distinctive token system

---

### Prompt 2 — Design Token System & Component Architecture
**Tool:** Claude Sonnet 4.6
**Input:** ChatGPT's feature list + "Design a cohesive visual system for a corporate intranet with personality"
**Output:** Design token system (navy + indigo + amber + emerald palette), typography pairing (Inter + Fraunces), layout architecture (sidebar + topbar + pulse ticker + content), component list
**Corrections:** Removed emoji from nav items for professionalism; narrowed palette from 5 to 4 main colors; changed leaderboard from table to visual bar layout for better scannability

---

### Prompt 3 — Inline Prototype (Widget)
**Tool:** Claude Sonnet 4.6
**Input:** "Build this as an interactive HTML widget showing all sections"
**Output:** Full single-file HTML intranet with all 9 sections, live pulse bar, navigation, toast feedback
**Corrections:** Fixed modal z-index (position:fixed conflicts in iframe); added keyboard navigation (tabIndex, onKeyDown); removed hardcoded dark backgrounds that conflicted with host CSS variables

---

### Prompt 4 — Full React Codebase
**Tool:** Claude Sonnet 4.6
**Input:** "Continue — build the full deployable React app"
**Output:** Complete React + Vite project: App.jsx, Sidebar, Topbar/PulseBar/Toast, KudosModal, Dashboard, Announcements, Recognition, Teams, KnowledgeBase, Events, Celebrations, Gallery, Directory, index.css, mockData.js
**Corrections:**
- Fixed JSX in .js file (mockData.js had JSX fragments → moved pulse items to plain objects in Topbar.jsx)
- Renamed sections/index.js → index.jsx to allow JSX parsing
- Fixed named vs default export mismatch in Topbar.jsx imports
- Changed `linear-gradient` in banners to flat colors for dark mode compatibility

---

### Prompt 5 — Bug Fixes & CSS Refinements
**Tool:** GitHub Copilot (VS Code)
**Input:** Inline suggestions while editing component files
**Output:** Autocompleted repetitive JSX patterns, suggested CSS variable names, fixed minor prop-type warnings
**Corrections:** Some Copilot suggestions used class instead of className; manually corrected throughout

---

### Prompt 6 — UI Polish & Layout Variants
**Tool:** v0 by Vercel
**Input:** "Generate a sidebar navigation component with dark navy theme and icon labels"
**Output:** Alternate sidebar layout used as reference for spacing and hover state styling
**Corrections:** v0 output used Tailwind utility classes; translated key spacing/color decisions back into the project's custom CSS variable system

---

### Key Design Decisions (human judgment applied)
1. **Pulse bar** as "signature element" — communicates aliveness without overwhelming the dashboard
2. **Fraunces serif for leadership quote only** — creates editorial authority for CEO message without making the whole UI feel non-technical
3. **Dark navy sidebar** vs light content area — classic enterprise contrast pattern, lets content breathe
4. **Moderation notice on "New Post"** — per brief requirement; shows awareness of governance without building full moderation UI
5. **Engagement gamification** — kept subtle (pts leaderboard, rank indicator) rather than overt to match "not overwhelming" brief requirement
6. **No attendance/leave features** — correctly scoped per brief ("not HR transactions")
7. **Multi-tool workflow** — used ChatGPT for broad ideation, Claude for architecture and code generation, Copilot for in-editor productivity, and v0 for UI reference — each tool played to its strengths