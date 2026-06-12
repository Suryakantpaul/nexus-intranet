import { useState } from 'react';

const CATEGORIES = ['Collaboration', 'Innovation', 'Above & Beyond', 'Customer Focus', 'Leadership', 'Problem Solving'];

export default function KudosModal({ onClose, showToast }) {
  const [cat, setCat] = useState('');
  const [recipient, setRecipient] = useState('');
  const [msg, setMsg] = useState('');

  const send = () => {
    if (!recipient.trim()) { showToast('Please enter a recipient'); return; }
    onClose();
    showToast('Kudos sent! +10 points earned 🎉');
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-labelledby="kudos-title">
      <div className="modal-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div className="modal-title" id="kudos-title" style={{ margin: 0 }}>
            <i className="ti ti-heart" style={{ color: '#F43F5E', marginRight: 7 }} aria-hidden="true" />
            Give Kudos
          </div>
          <div className="icon-btn" onClick={onClose} role="button" tabIndex={0} aria-label="Close">
            <i className="ti ti-x" aria-hidden="true" />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="kudos-recipient">Recipient</label>
          <input
            id="kudos-recipient"
            type="text"
            placeholder="Search by name..."
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
            autoFocus
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Category</label>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {CATEGORIES.map(c => (
              <span
                key={c}
                className={`tag${cat === c ? ' active' : ''}`}
                onClick={() => setCat(c)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setCat(c)}
              >{c}</span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="kudos-msg">Message</label>
          <textarea
            id="kudos-msg"
            rows={3}
            placeholder="Tell them why they're awesome..."
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={send}>
            <i className="ti ti-send" aria-hidden="true" />
            Send Kudos
          </button>
        </div>
      </div>
    </div>
  );
}
