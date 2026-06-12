import { useState } from 'react';
import { appreciations, newJoiners, kudosLeaderboard } from '../../data/mockData';

export default function Recognition({ onKudos, showToast }) {
  const [lbTab, setLbTab] = useState('Received');
  const [hearts, setHearts] = useState(appreciations.map(a => a.hearts));

  const handleHeart = (i) => {
    setHearts(prev => { const n = [...prev]; n[i]++; return n; });
    showToast('❤️ Reaction added!');
  };

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Recognition Hub</div>
          <div className="section-sub">Celebrate people who make a difference</div>
        </div>
        <button className="btn btn-primary" onClick={onKudos}>
          <i className="ti ti-heart" aria-hidden="true" />Give Kudos
        </button>
      </div>

      <div className="card" style={{ marginBottom: 18 }}>
        <div className="card-head">
          <div className="card-title">
            <i className="ti ti-user-plus" style={{ color: '#10B981' }} aria-hidden="true" />
            Welcome, new joiners! 👋
          </div>
          <span className="badge badge-emerald">{newJoiners.length} this month</span>
        </div>
        <div className="joinee-scroll">
          {newJoiners.map((p, i) => (
            <div key={i} className="joinee-card">
              <div className="avatar av-lg" style={{ background: p.bg, color: p.fg, margin: '0 auto' }}>{p.initials}</div>
              <div className="joinee-name">{p.name}</div>
              <div className="joinee-role">{p.role}</div>
              <div className="joinee-dept">{p.dept}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-2">
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="ti ti-heart" style={{ color: '#F43F5E' }} aria-hidden="true" />
            Recent Appreciations
          </div>
          {appreciations.map((a, i) => (
            <div key={i} className="recog-card">
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div className="avatar av-md" style={{ background: a.fromBg, color: a.fromFg }}>{a.fromInit}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>
                    {a.from} <span style={{ color: 'var(--text2)', fontWeight: 400 }}>→</span> {a.to}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text2)' }}>{a.fromDept} → {a.toDept} · {a.time}</div>
                </div>
              </div>
              <div className="recog-msg">{a.msg}</div>
              <div className="recog-footer">
                <span className={`badge ${a.badge}`}>{a.badgeLabel}</span>
                <div style={{ flex: 1 }} />
                <div className="react-btn" onClick={() => handleHeart(i)} role="button" tabIndex={0} aria-label="React with heart">
                  <i className="ti ti-heart" aria-hidden="true" />{hearts[i]}
                </div>
                <div className="react-btn" onClick={() => showToast('Reply coming soon!')} role="button" tabIndex={0} aria-label="Reply">
                  <i className="ti ti-message" aria-hidden="true" />{a.replies}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="ti ti-trophy" style={{ color: '#F59E0B' }} aria-hidden="true" />
            Monthly Leaderboard
          </div>
          <div className="card">
            <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
              {['Received', 'Sent', 'Posts'].map(t => (
                <span
                  key={t}
                  className={`tag${lbTab === t ? ' active' : ''}`}
                  onClick={() => setLbTab(t)}
                  role="button"
                  tabIndex={0}
                  style={{ margin: 0 }}
                >{t}</span>
              ))}
            </div>
            {kudosLeaderboard.map((p, i) => (
              <div key={i} className="lb-row">
                <div className="lb-rank">{p.rank}</div>
                <div className="avatar av-sm" style={{ background: p.bg, color: p.fg }}>{p.initials}</div>
                <div className="lb-info">
                  <div className="lb-name">{p.name}</div>
                  <div className="lb-dept">{p.dept}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                  <div className="lb-bar-wrap">
                    <div className="lb-bar" style={{ width: `${p.pct}%` }} />
                  </div>
                  <div className="lb-score">{p.pts}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: '10px 12px', background: 'var(--accent-light)', borderRadius: 'var(--r)', textAlign: 'center' }}>
              <div style={{ fontSize: 12, color: 'var(--accent-text)', fontWeight: 600 }}>Your rank: #23 · 84 pts</div>
              <div style={{ fontSize: 11, color: 'var(--accent-text)', opacity: 0.7, marginTop: 2 }}>18 pts to enter Top 20 — send more kudos!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
