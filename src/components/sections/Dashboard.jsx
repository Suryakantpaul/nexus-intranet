import { stats, feed, kudosLeaderboard, announcements } from '../../data/mockData';

export default function Dashboard({ onNavigate, showToast }) {
  const topKudos = kudosLeaderboard.slice(0, 3);

  return (
    <div>
      <div className="grid-4" style={{ marginBottom: 18 }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
            <div className={`stat-delta${s.up ? ' delta-up' : ''}`}>
              <i className={`ti ${s.up ? 'ti-trending-up' : 'ti-calendar'}`} style={{ fontSize: 11 }} aria-hidden="true" />
              {s.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="leadership-banner">
        <div className="avatar av-xl" style={{ background: '#1E3A5F', color: '#BAE6FD', flexShrink: 0 }}>CK</div>
        <div>
          <div className="ldr-quote">
            "This quarter has been a testament to what we can achieve together. Our cross-functional collaboration on Project Phoenix has been extraordinary — and I want every person reading this to know their contribution matters. Keep the momentum going."
          </div>
          <div className="ldr-attr">
            <strong>Chandra Kumar</strong> · CEO, Nexus Corp · Monthly Leadership Message · June 2026
          </div>
        </div>
      </div>

      <div className="grid-main">
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <div className="card-head">
              <div className="card-title">
                <i className="ti ti-speakerphone" style={{ color: '#4F46E5' }} aria-hidden="true" />
                Latest Announcements
              </div>
              <span className="card-link" onClick={() => onNavigate('announcements')} role="button" tabIndex={0}>View all →</span>
            </div>
            {announcements.slice(0, 4).map(a => (
              <div
                key={a.id}
                className="annc-card"
                style={{ borderLeft: a.urgent ? '3px solid #F43F5E' : a.win ? '3px solid #10B981' : undefined }}
                onClick={() => showToast('Opening announcement...')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span>{a.dept}</span><span>·</span><span>{a.time}</span>
                    </div>
                  </div>
                  <span className={`badge ${a.badge}`}>{a.badgeLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-head">
              <div className="card-title">
                <i className="ti ti-activity" style={{ color: '#10B981' }} aria-hidden="true" />
                Org Activity Feed
              </div>
              <span className="card-link" onClick={() => onNavigate('teams')} role="button" tabIndex={0}>All teams →</span>
            </div>
            {feed.map((f, i) => (
              <div key={i} className="feed-item">
                <div className="feed-icon" style={{ background: f.iconBg }}>
                  <i className={`ti ${f.icon}`} style={{ color: f.iconColor }} aria-hidden="true" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="feed-title">{f.title}</div>
                  <div className="feed-meta">
                    <span className="feed-dept">{f.dept}</span>
                    <span>{f.time}</span>
                    {f.badge && <span className={`badge ${f.badge}`}>{f.badgeLabel}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="card card-sm" style={{ marginBottom: 14 }}>
            <div className="card-head">
              <div className="card-title">
                <i className="ti ti-award" style={{ color: '#F59E0B' }} aria-hidden="true" />
                Top Kudos This Week
              </div>
            </div>
            {topKudos.map((p, i) => (
              <div key={i} className="lb-row">
                <div className="lb-rank">{p.rank}</div>
                <div className="avatar av-sm" style={{ background: p.bg, color: p.fg }}>{p.initials}</div>
                <div className="lb-info">
                  <div className="lb-name" style={{ fontSize: 12 }}>{p.name}</div>
                  <div className="lb-dept">{p.dept}</div>
                </div>
                <div className="lb-score" style={{ fontSize: 12 }}>{p.pts} pts</div>
              </div>
            ))}
            <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 10, fontSize: 12 }} onClick={() => onNavigate('recognition')}>
              <i className="ti ti-arrow-right" aria-hidden="true" />Full leaderboard
            </button>
          </div>

          <div className="card card-sm" style={{ marginBottom: 14 }}>
            <div className="card-head">
              <div className="card-title">
                <i className="ti ti-calendar-event" style={{ color: '#4F46E5' }} aria-hidden="true" />
                Upcoming
              </div>
            </div>
            {[
              { label: 'Q2 All-Hands', sub: 'Tomorrow · 3:00 PM · Virtual', border: '#F43F5E', bg: 'var(--rose-light)', color: 'var(--rose-text)' },
              { label: 'Townhall: Product Roadmap', sub: 'June 15 · 11:00 AM · Conf Rm A', border: '#4F46E5', bg: 'var(--accent-light)', color: 'var(--accent-text)' },
              { label: 'Nexus Carnival', sub: 'June 21 · All day · Bangalore HQ', border: '#F59E0B', bg: 'var(--amber-light)', color: 'var(--amber-text)' },
            ].map((e, i) => (
              <div key={i} style={{ padding: '8px 10px', borderRadius: 'var(--r)', borderLeft: `3px solid ${e.border}`, background: e.bg, color: e.color, marginBottom: i < 2 ? 8 : 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{e.label}</div>
                <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>{e.sub}</div>
              </div>
            ))}
          </div>

          <div className="card card-sm">
            <div className="card-head">
              <div className="card-title">
                <i className="ti ti-user-plus" style={{ color: '#10B981' }} aria-hidden="true" />
                New This Week
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { init: 'RV', bg: '#0C4A6E', fg: '#BAE6FD', name: 'Rohan V.', dept: 'Product' },
                { init: 'NS', bg: '#4C1D95', fg: '#DDD6FE', name: 'Neha S.', dept: 'Finance' },
                { init: 'TK', bg: '#065F46', fg: '#A7F3D0', name: 'Tanvi K.', dept: 'Design' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--surface2)', borderRadius: 'var(--r)', padding: '5px 8px', flex: 1, minWidth: 0 }}>
                  <div className="avatar av-sm" style={{ background: p.bg, color: p.fg }}>{p.init}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 500 }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: 'var(--text2)' }}>{p.dept}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
