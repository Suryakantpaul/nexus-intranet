// Topbar
export function Topbar({ title, showToast }) {
  return (
    <header className="topbar">
      <div className="page-title">{title}</div>
      <div className="search-box" role="search">
        <i className="ti ti-search" style={{ fontSize: 14 }} aria-hidden="true" />
        <span>Search anything...</span>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        <div className="icon-btn" onClick={() => showToast('No new notifications')} role="button" tabIndex={0} aria-label="Notifications">
          <i className="ti ti-bell" aria-hidden="true" />
          <span className="notif-dot" />
        </div>
        <div className="icon-btn" onClick={() => showToast('Settings coming soon')} role="button" tabIndex={0} aria-label="Settings">
          <i className="ti ti-settings" aria-hidden="true" />
        </div>
        <div className="icon-btn" onClick={() => showToast('Profile coming soon')} role="button" tabIndex={0} aria-label="Profile">
          <i className="ti ti-user" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

// PulseBar
const ITEMS = [
  { icon: 'ti-award', color: '#F59E0B', text: ['Priya S.', ' received kudos from Design'] },
  { icon: 'ti-rocket', color: '#10B981', text: ['Project Phoenix', ' hit 80% milestone'] },
  { icon: 'ti-user-plus', color: '#4F46E5', text: ['3 new joiners', ' welcomed today'] },
  { icon: 'ti-calendar', color: '#F43F5E', text: ['All-Hands', ' tomorrow 3 PM'] },
  { icon: 'ti-trophy', color: '#F59E0B', text: ['Backend team', ' won Q2 Innovation Award'] },
  { icon: 'ti-file-check', color: '#10B981', text: ['Remote Work Policy', ' updated'] },
  { icon: 'ti-cake', color: '#F43F5E', text: ['Happy birthday ', 'Rajan K.!'] },
];

export function PulseBar() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="pulse-bar" aria-label="Live activity feed">
      <div className="pulse-label">
        <span className="pulse-dot" aria-hidden="true" />
        LIVE PULSE
      </div>
      <div className="pulse-track" aria-hidden="true">
        <div className="pulse-inner">
          {doubled.map((item, i) => (
            <div key={i} className="pulse-item">
              <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: 13 }} />
              <strong>{item.text[0]}</strong>{item.text[1]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Toast
export function Toast({ msg }) {
  return (
    <div className="toast" role="status" aria-live="polite">
      <i className="ti ti-circle-check" style={{ color: '#10B981' }} aria-hidden="true" />
      {msg}
    </div>
  );
}
