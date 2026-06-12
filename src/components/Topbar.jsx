import { useState, useRef, useEffect } from 'react';

const SEARCH_INDEX = [
  { title: 'New Remote Work Policy', sub: 'Announcement · HR', icon: 'ti-speakerphone', bg: '#FFE4E6', color: '#F43F5E', section: 'announcements' },
  { title: 'Q2 All-Hands Meeting', sub: 'Event · June 11', icon: 'ti-calendar-event', bg: '#EEF2FF', color: '#4F46E5', section: 'events' },
  { title: 'Priya Sharma', sub: 'Sr. Product Manager · Product', icon: 'ti-user', bg: '#EEF2FF', color: '#4F46E5', section: 'directory' },
  { title: 'Arjun Kumar', sub: 'Staff Engineer · Engineering', icon: 'ti-user', bg: '#D1FAE5', color: '#10B981', section: 'directory' },
  { title: 'Employee Handbook 2026', sub: 'Knowledge Base · HR', icon: 'ti-file-text', bg: '#FFE4E6', color: '#F43F5E', section: 'knowledge' },
  { title: 'Remote Work Policy', sub: 'Knowledge Base · HR', icon: 'ti-file-text', bg: '#EEF2FF', color: '#4F46E5', section: 'knowledge' },
  { title: 'Project Phoenix', sub: 'Engineering milestone · Done', icon: 'ti-rocket', bg: '#D1FAE5', color: '#10B981', section: 'teams' },
  { title: 'Recognition Hub', sub: 'Peer kudos · Leaderboard', icon: 'ti-award', bg: '#FEF3C7', color: '#F59E0B', section: 'recognition' },
  { title: 'Nexus Carnival', sub: 'Event · June 21 · Culture', icon: 'ti-confetti', bg: '#FEF3C7', color: '#F59E0B', section: 'events' },
  { title: 'Engineering Team', sub: 'Teams · 148 people', icon: 'ti-code', bg: '#EEF2FF', color: '#4F46E5', section: 'teams' },
  { title: 'Celebrations', sub: 'Birthdays · Promotions', icon: 'ti-cake', bg: '#FFE4E6', color: '#F43F5E', section: 'celebrations' },
  { title: 'POSH Policy 2026', sub: 'Knowledge Base · HR', icon: 'ti-file-text', bg: '#FEF3C7', color: '#F59E0B', section: 'knowledge' },
  { title: 'Megha Nair', sub: 'Lead Designer · Design', icon: 'ti-user', bg: '#FEF3C7', color: '#F59E0B', section: 'directory' },
  { title: 'Sales Team', sub: 'Teams · 86 people · 112% Q2', icon: 'ti-chart-bar', bg: '#FFE4E6', color: '#F43F5E', section: 'teams' },
  { title: 'Give Kudos', sub: 'Recognition · Send appreciation', icon: 'ti-heart', bg: '#FFE4E6', color: '#F43F5E', section: 'recognition' },
  { title: 'Office Gallery', sub: 'Photos · Events · Moments', icon: 'ti-photo', bg: '#D1FAE5', color: '#10B981', section: 'gallery' },
];

export function Topbar({ title, showToast, onNavigate }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.sub.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (item) => {
    setQuery('');
    setOpen(false);
    onNavigate(item.section);
    showToast(`Navigating to ${item.title}`);
  };

  return (
    <header className="topbar">
      <div className="page-title">{title}</div>
      <div className="search-wrapper" ref={ref}>
        <div className="search-box">
          <i className="ti ti-search" style={{ fontSize: 15, color: 'var(--text3)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search people, docs, events..."
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
          />
          {query && (
            <i className="ti ti-x" style={{ fontSize: 14, color: 'var(--text3)', cursor: 'pointer', flexShrink: 0 }}
              onClick={() => { setQuery(''); setOpen(false); }} />
          )}
        </div>
        {open && results.length > 0 && (
          <div className="search-results">
            {results.map((item, i) => (
              <div key={i} className="search-result-item" onClick={() => handleSelect(item)}>
                <div className="search-result-icon" style={{ background: item.bg }}>
                  <i className={`ti ${item.icon}`} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="search-result-title">{item.title}</div>
                  <div className="search-result-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {open && query.trim().length > 0 && results.length === 0 && (
          <div className="search-results">
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text2)', fontSize: 13 }}>
              No results for "{query}"
            </div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <div className="icon-btn" onClick={() => showToast('You have 3 new notifications')}>
          <i className="ti ti-bell" /><span className="notif-dot" />
        </div>
        <div className="icon-btn" onClick={() => showToast('Settings coming soon')}>
          <i className="ti ti-settings" />
        </div>
        <div className="icon-btn" onClick={() => showToast('Profile coming soon')}>
          <div className="avatar av-sm" style={{ background: '#312E81', color: '#C7D2FE', width: 28, height: 28, fontSize: 11 }}>SK</div>
        </div>
      </div>
    </header>
  );
}

const PULSE_ITEMS = [
  { icon: 'ti-award', color: '#F59E0B', parts: ['Priya S.', ' received kudos from Design Team'] },
  { icon: 'ti-rocket', color: '#10B981', parts: ['Project Phoenix', ' beta launched to 500 clients'] },
  { icon: 'ti-user-plus', color: '#6366F1', parts: ['3 new joiners', ' welcomed today — say hello!'] },
  { icon: 'ti-calendar', color: '#F43F5E', parts: ['All-Hands', ' tomorrow at 3 PM — register now'] },
  { icon: 'ti-trophy', color: '#F59E0B', parts: ['Backend team', ' won Q2 Innovation Award'] },
  { icon: 'ti-file-check', color: '#10B981', parts: ['Remote Work Policy', ' updated — review by Jun 25'] },
  { icon: 'ti-cake', color: '#F43F5E', parts: ['Happy birthday ', 'Rajan Kumar! 🎂'] },
  { icon: 'ti-chart-bar', color: '#6366F1', parts: ['Sales closed ', 'INR 4.2Cr deal — biggest in Q2!'] },
];

export function PulseBar() {
  const doubled = [...PULSE_ITEMS, ...PULSE_ITEMS];
  return (
    <div className="pulse-bar">
      <div className="pulse-label"><span className="pulse-dot" />Live</div>
      <div className="pulse-track">
        <div className="pulse-inner">
          {doubled.map((item, i) => (
            <div key={i} className="pulse-item">
              <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: 13 }} />
              <strong>{item.parts[0]}</strong>{item.parts[1]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Toast({ msg }) {
  return (
    <div className="toast">
      <i className="ti ti-circle-check" style={{ color: '#34D399', fontSize: 17 }} />
      {msg}
    </div>
  );
}