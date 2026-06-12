import { useState } from 'react';
import { announcements } from '../../data/mockData';

const FILTERS = ['All', 'HR', 'Leadership', 'IT', 'Culture', 'Policy'];

export default function Announcements({ showToast }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? announcements : announcements.filter(a => a.dept === filter);

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Announcements</div>
          <div className="section-sub">Official communications across the org</div>
        </div>
        <button className="btn btn-primary" onClick={() => showToast('Post submitted for moderation review')}>
          <i className="ti ti-plus" aria-hidden="true" />New post
        </button>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="badge badge-rose" style={{ padding: '4px 10px', fontSize: 11, marginRight: 4 }}>🔴 3 require action</span>
        {FILTERS.map(f => (
          <span
            key={f}
            className={`tag${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setFilter(f)}
          >{f}</span>
        ))}
      </div>

      <div className="grid-2">
        {filtered.map(a => (
          <div
            key={a.id}
            className="card"
            style={{
              cursor: 'pointer',
              transition: 'background 0.12s',
              borderLeft: a.urgent ? '3px solid #F43F5E' : a.win ? '3px solid #10B981' : undefined
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <span className={`badge ${a.badge}`}>{a.badgeLabel}</span>
              <span style={{ fontSize: 11, color: 'var(--text3)' }}>{a.time}</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, lineHeight: 1.4 }}>{a.title}</div>
            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65 }}>{a.body}</div>
            {a.actions.length > 0 && (
              <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {a.actions.map((act, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm${i === 0 ? ' btn-primary' : ''}`}
                    onClick={() => showToast(`${act} — done!`)}
                  >
                    <i className={`ti ${i === 0 ? 'ti-check' : 'ti-download'}`} aria-hidden="true" />
                    {act}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
