import { useState } from 'react';
import { teams, milestones, kbPolicies, forumPosts, events, celebrations, people } from '../../data/mockData';

export function Teams({ showToast }) {
  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Teams & Verticals</div>
          <div className="section-sub">What every team is building and winning</div>
        </div>
      </div>
      <div className="grid-2" style={{ marginBottom: 18 }}>
        {teams.map((t, i) => (
          <div key={i} className="dept-row" onClick={() => showToast(`${t.name} detail page coming soon`)}>
            <div className="dept-icon" style={{ background: t.iconBg }}>
              <i className={`ti ${t.icon}`} style={{ color: t.iconColor }} aria-hidden="true" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="dept-name">{t.name}</div>
              <div className="dept-sub">{t.sub}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${t.pct}%`, background: t.color }} />
              </div>
            </div>
            <span className="badge badge-emerald">{t.tag}</span>
            <i className="ti ti-chevron-right" style={{ color: 'var(--text3)', fontSize: 16, flexShrink: 0 }} aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-head">
          <div className="card-title">
            <i className="ti ti-rocket" style={{ color: '#10B981' }} aria-hidden="true" />
            Key Milestones — June 2026
          </div>
        </div>
        {milestones.map((m, i) => (
          <div key={i} className="milestone-item" style={{ background: m.bg, marginBottom: i < milestones.length - 1 ? 7 : 0 }}>
            <i className={`ti ${m.icon}`} style={{ color: m.iconColor, fontSize: 17, flexShrink: 0 }} aria-hidden="true" />
            <div style={{ flex: 1, fontSize: 13 }}>{m.text}</div>
            <span className={`badge ${m.badge}`}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KnowledgeBase({ showToast }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Knowledge Base</div>
          <div className="section-sub">Policies, handbooks, and team resources</div>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <input type="text" placeholder="Search documents, policies, topics..." value={search} onChange={e => setSearch(e.target.value)} style={{ maxWidth: 380 }} />
      </div>
      <div className="grid-2">
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <div className="card-head">
              <div className="card-title"><i className="ti ti-file-description" style={{ color: 'var(--accent)' }} aria-hidden="true" />HR &amp; Policies</div>
            </div>
            {kbPolicies.map((d, i) => (
              <div key={i} className="kb-item" onClick={() => showToast(`Opening ${d.name}...`)}>
                <div className="kb-icon" style={{ background: d.iconBg }}>
                  <i className={`ti ${d.icon}`} style={{ color: d.iconColor }} aria-hidden="true" />
                </div>
                <div>
                  <div className="kb-name">{d.name}</div>
                  <div className="kb-meta">{d.meta}</div>
                </div>
                <i className="ti ti-download" style={{ marginLeft: 'auto', color: 'var(--text3)', fontSize: 15 }} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-head">
              <div className="card-title"><i className="ti ti-device-laptop" style={{ color: 'var(--accent)' }} aria-hidden="true" />IT &amp; Tools</div>
            </div>
            {[
              { icon: 'ti-tool', bg: '#EEF2FF', color: '#4F46E5', name: 'Onboarding IT Checklist', meta: 'Always current · Notion link' },
              { icon: 'ti-brand-slack', bg: 'var(--surface2)', color: 'var(--text2)', name: 'Slack & Comms Guide', meta: 'Updated Mar 2026' },
              { icon: 'ti-lock', bg: '#FFF1F2', color: '#F43F5E', name: 'Security & Access Policy', meta: 'Updated Apr 2026' },
            ].map((d, i) => (
              <div key={i} className="kb-item" onClick={() => showToast(`Opening ${d.name}...`)}>
                <div className="kb-icon" style={{ background: d.bg }}>
                  <i className={`ti ${d.icon}`} style={{ color: d.color }} aria-hidden="true" />
                </div>
                <div>
                  <div className="kb-name">{d.name}</div>
                  <div className="kb-meta">{d.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <div className="card-head">
              <div className="card-title"><i className="ti ti-messages" style={{ color: '#10B981' }} aria-hidden="true" />Discussion Forum</div>
              <button className="btn btn-sm" onClick={() => showToast('New post UI coming soon')}>
                <i className="ti ti-plus" aria-hidden="true" />Post
              </button>
            </div>
            {forumPosts.map((p, i) => (
              <div key={i} className="forum-post" onClick={() => showToast('Opening discussion...')}>
                <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <div className="avatar av-sm" style={{ background: p.bg, color: p.fg, flexShrink: 0 }}>{p.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div className="forum-title">{p.title}</div>
                    <div className="forum-meta">
                      <i className="ti ti-message-circle" aria-hidden="true" />{p.replies} replies
                      <span>·</span>{p.author}
                      <span>·</span>{p.time}
                      <span className="tag" style={{ margin: 0, padding: '1px 7px' }}>{p.dept}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-head">
              <div className="card-title"><i className="ti ti-tag" style={{ color: 'var(--text2)' }} aria-hidden="true" />Browse by Topic</div>
            </div>
            {['Onboarding', 'Benefits', 'Remote Work', 'Engineering', 'Design System', 'Sales Playbook', 'Legal', 'L&D', 'Travel Policy', 'Finance', 'Security', 'Analytics'].map(t => (
              <span key={t} className="tag" onClick={() => showToast(`Showing ${t} docs`)}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events({ showToast }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'All Hands', 'Workshops', 'Culture', 'Training', 'Celebrations'];
  const calEventDays = [11, 16, 21, 25];

  const calDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) days.push({ day: i + 1, prev: true });
    for (let i = 1; i <= 30; i++) days.push({ day: i });
    return days;
  };

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Events & Calendar</div>
          <div className="section-sub">Org-wide events, workshops, and celebrations</div>
        </div>
        <button className="btn btn-primary" onClick={() => showToast('Event creation coming soon')}>
          <i className="ti ti-plus" aria-hidden="true" />Add event
        </button>
      </div>
      <div className="grid-2">
        <div>
          <div className="card" style={{ marginBottom: 14 }}>
            <div className="card-head">
              <div className="card-title"><i className="ti ti-calendar" style={{ color: 'var(--accent)' }} aria-hidden="true" />June 2026</div>
            </div>
            <div className="cal-grid">
              {['S','M','T','W','T','F','S'].map((d, i) => (
                <div key={i} className="cal-head">{d}</div>
              ))}
              {calDays().map((d, i) => (
                <div
                  key={i}
                  className={`cal-day${d.prev ? ' other-month' : ''}${d.day === 10 && !d.prev ? ' today' : ''}${calEventDays.includes(d.day) && !d.prev ? ' has-event' : ''}`}
                  onClick={() => !d.prev && showToast(calEventDays.includes(d.day) ? 'Event on this day!' : 'No events')}
                >{d.day}</div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <div className="card-title"><i className="ti ti-filter" style={{ color: 'var(--text2)' }} aria-hidden="true" />Filter events</div>
            </div>
            <div>
              {filters.map(f => (
                <span key={f} className={`tag${activeFilter === f ? ' active' : ''}`} onClick={() => setActiveFilter(f)} role="button" tabIndex={0}>{f}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Upcoming Events</div>
          {events.map((e, i) => (
            <div key={i} className="event-card" onClick={() => showToast(`${e.name} added to calendar`)}>
              <div className="event-top">
                <div className="event-date">
                  <div className="event-month">{e.month}</div>
                  <div className="event-day">{e.day}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="event-name">{e.name}</div>
                  <div className="event-detail">
                    <i className={`ti ${e.type === 'Culture' || e.type === 'Townhall' ? 'ti-map-pin' : 'ti-video'}`} style={{ fontSize: 12 }} aria-hidden="true" />
                    {e.detail}
                    {e.badge && <span className={`badge ${e.badge}`}>{e.badgeLabel}</span>}
                  </div>
                </div>
                <i className="ti ti-calendar-plus" style={{ color: 'var(--text3)', fontSize: 16 }} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Celebrations({ showToast }) {
  const [celebHearts, setCelebHearts] = useState(celebrations.map(c => c.hearts));

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Celebrations</div>
          <div className="section-sub">Birthdays, work anniversaries, promotions, and wins</div>
        </div>
      </div>
      <div className="grid-3" style={{ marginBottom: 18 }}>
        {[
          { emoji: '🎂', label: '3 Birthdays Today', sub: 'Rajan K., Tanya M., Dev P.' },
          { emoji: '🎉', label: '5 Work Anniversaries', sub: 'Including a 5-year milestone!' },
          { emoji: '🏆', label: '2 Promotions', sub: 'Congrats Priya & Arjun!' },
        ].map((s, i) => (
          <div key={i} className="card card-sm" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 26, marginBottom: 6 }}>{s.emoji}</div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 3 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      {celebrations.map((c, i) => (
        <div key={i} className="celebrate-card">
          <div className="celebrate-banner" style={c.bannerStyle}>{c.banner}</div>
          <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 10 }}>{c.desc}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <div
              className="react-btn"
              style={{ fontSize: 13 }}
              onClick={() => { showToast(c.ctaToast); }}
              role="button" tabIndex={0}
            >{c.ctaLabel}</div>
            <div
              className="react-btn"
              onClick={() => { const n = [...celebHearts]; n[i]++; setCelebHearts(n); showToast('❤️ Reaction added!'); }}
              role="button" tabIndex={0}
              aria-label="React with heart"
            >
              <i className="ti ti-heart" aria-hidden="true" />{celebHearts[i]}
            </div>
          </div>
          <div className="reply-box" onClick={() => showToast('Reply coming soon!')} role="button" tabIndex={0}>
            <i className="ti ti-message-circle" style={{ fontSize: 14 }} aria-hidden="true" />
            Write a message...
          </div>
        </div>
      ))}
    </div>
  );
}

export function Gallery({ showToast }) {
  const [activeAlbum, setActiveAlbum] = useState('All');
  const albums = ['All', 'Carnival 2025', 'Hackathon', 'Offsite', 'Team Lunches', 'Awards'];
  const icons = ['ti-photo', 'ti-users', 'ti-trophy', 'ti-confetti', 'ti-device-laptop', 'ti-pizza', 'ti-camera', 'ti-star', 'ti-ballpen', 'ti-music', 'ti-rocket', 'ti-heart'];

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Gallery</div>
          <div className="section-sub">Office life, events, and team moments</div>
        </div>
        <button className="btn" onClick={() => showToast('Upload coming soon')}>
          <i className="ti ti-upload" aria-hidden="true" />Upload
        </button>
      </div>
      <div style={{ marginBottom: 16 }}>
        {albums.map(a => (
          <span key={a} className={`tag${activeAlbum === a ? ' active' : ''}`} onClick={() => setActiveAlbum(a)} role="button" tabIndex={0}>{a}</span>
        ))}
      </div>
      <div className="gallery-grid">
        {icons.map((icon, i) => (
          <div key={i} className="gallery-thumb" onClick={() => showToast('Full view coming soon')} role="button" tabIndex={0} aria-label={`Photo ${i + 1}`}>
            <i className={`ti ${icon}`} aria-hidden="true" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 18 }}>
        <button className="btn" onClick={() => showToast('Loading more photos...')}>
          <i className="ti ti-photo-down" aria-hidden="true" />Load more
        </button>
      </div>
    </div>
  );
}

export function Directory({ showToast }) {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');
  const depts = ['All', 'Engineering', 'Product', 'Design', 'Sales', 'Customer Success', 'Finance', 'Leadership'];

  const filtered = people.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === 'All' || p.dept === dept;
    return matchSearch && matchDept;
  });

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">People Directory</div>
          <div className="section-sub">Find anyone across the org</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <input type="text" placeholder="Search by name or role..." value={search} onChange={e => setSearch(e.target.value)} style={{ maxWidth: 280 }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {depts.map(d => (
            <span key={d} className={`tag${dept === d ? ' active' : ''}`} onClick={() => setDept(d)} role="button" tabIndex={0} style={{ margin: '2px' }}>{d}</span>
          ))}
        </div>
      </div>
      <div className="grid-3">
        {filtered.map((p, i) => (
          <div key={i} className="person-card" onClick={() => showToast(`Viewing ${p.name}'s profile...`)}>
            <div className="avatar av-lg" style={{ background: p.bg, color: p.fg }}>{p.initials}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 2 }}>{p.role}</div>
              <span className={`badge ${p.badge}`} style={{ marginTop: 5, display: 'inline-block' }}>{p.dept}</span>
            </div>
            <i className="ti ti-message-circle" style={{ color: 'var(--text3)', fontSize: 17 }} aria-hidden="true" />
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text2)' }}>
          <i className="ti ti-user-off" style={{ fontSize: 32, display: 'block', marginBottom: 8 }} aria-hidden="true" />
          No people found matching your search
        </div>
      )}
    </div>
  );
}
