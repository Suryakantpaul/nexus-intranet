export default function Sidebar({ active, onNavigate }) {
  const Item = ({ id, icon, label, badge, dot }) => (
    <div
      className={`nav-item${active === id ? ' active' : ''}`}
      onClick={() => onNavigate(id)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onNavigate(id)}
    >
      <i className={`ti ${icon} nav-icon`} aria-hidden="true" />
      <span>{label}</span>
      {badge && <span className="nav-badge">{badge}</span>}
      {dot && <span className="nav-dot" />}
    </div>
  );

  return (
    <nav className="sidebar" aria-label="Main navigation">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <div className="logo-icon">
            <i className="ti ti-building-community" aria-hidden="true" />
          </div>
          <div>
            <div className="logo-name">Nexus</div>
            <div className="logo-sub">Your workspace</div>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Overview</div>
        <Item id="dashboard" icon="ti-layout-dashboard" label="Dashboard" />
        <Item id="announcements" icon="ti-speakerphone" label="Announcements" badge="3" />
        <Item id="teams" icon="ti-sitemap" label="Teams & Verticals" />
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">People</div>
        <Item id="recognition" icon="ti-award" label="Recognition" dot />
        <Item id="celebrations" icon="ti-confetti" label="Celebrations" />
        <Item id="directory" icon="ti-users" label="People Directory" />
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Resources</div>
        <Item id="knowledge" icon="ti-books" label="Knowledge Base" />
        <Item id="events" icon="ti-calendar-event" label="Events & Calendar" />
        <Item id="gallery" icon="ti-photo" label="Gallery" />
      </div>

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="avatar av-md" style={{ background: '#312E81', color: '#C7D2FE' }}>SK</div>
          <div>
            <div className="user-name">Surya Kant</div>
            <div className="user-role">Engineering · Durgapur</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
