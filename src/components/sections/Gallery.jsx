import { useState } from 'react';

const ALBUMS = ['All', 'Carnival 2025', 'Hackathon', 'Offsite', 'Team Lunches', 'Awards'];

const PHOTOS = [
  { icon: 'ti-users', label: 'Team Day', color: '#6366F1', bg: '#EEF2FF', album: 'Offsite' },
  { icon: 'ti-trophy', label: 'Awards Night', color: '#F59E0B', bg: '#FEF3C7', album: 'Awards' },
  { icon: 'ti-confetti', label: 'Carnival', color: '#F43F5E', bg: '#FFE4E6', album: 'Carnival 2025' },
  { icon: 'ti-device-laptop', label: 'Hackathon', color: '#10B981', bg: '#D1FAE5', album: 'Hackathon' },
  { icon: 'ti-pizza', label: 'Team Lunch', color: '#F59E0B', bg: '#FEF3C7', album: 'Team Lunches' },
  { icon: 'ti-camera', label: 'Offsite 2025', color: '#6366F1', bg: '#EEF2FF', album: 'Offsite' },
  { icon: 'ti-star', label: 'Star Awards', color: '#F59E0B', bg: '#FEF3C7', album: 'Awards' },
  { icon: 'ti-music', label: 'Carnival', color: '#F43F5E', bg: '#FFE4E6', album: 'Carnival 2025' },
  { icon: 'ti-rocket', label: 'Hack Finals', color: '#10B981', bg: '#D1FAE5', album: 'Hackathon' },
  { icon: 'ti-heart', label: 'Culture Day', color: '#F43F5E', bg: '#FFE4E6', album: 'Carnival 2025' },
  { icon: 'ti-coffee', label: 'Friday Lunch', color: '#F59E0B', bg: '#FEF3C7', album: 'Team Lunches' },
  { icon: 'ti-map-pin', label: 'Bangalore HQ', color: '#6366F1', bg: '#EEF2FF', album: 'Offsite' },
];

export default function Gallery({ showToast }) {
  const [activeAlbum, setActiveAlbum] = useState('All');
  const filtered = activeAlbum === 'All' ? PHOTOS : PHOTOS.filter(p => p.album === activeAlbum);

  return (
    <div>
      <div className="section-head">
        <div>
          <div className="section-title">Gallery</div>
          <div className="section-sub">Office life, events, and team moments</div>
        </div>
        <button className="btn" onClick={() => showToast('Photo upload coming soon')}>
          <i className="ti ti-upload" />Upload
        </button>
      </div>
      <div style={{ marginBottom: 18 }}>
        {ALBUMS.map(a => (
          <span key={a} className={`tag${activeAlbum === a ? ' active' : ''}`}
            onClick={() => setActiveAlbum(a)} role="button" tabIndex={0}>
            {a}{a !== 'All' && <span style={{ marginLeft: 4, opacity: 0.5 }}>{PHOTOS.filter(p => p.album === a).length}</span>}
          </span>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((photo, i) => (
          <div key={i} className="gallery-thumb"
            style={{ background: photo.bg, flexDirection: 'column', gap: 8 }}
            onClick={() => showToast(`Opening ${photo.label}...`)}>
            <i className={`ti ${photo.icon}`} style={{ color: photo.color, fontSize: 30 }} />
            <div className="label">{photo.label}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 22 }}>
        <button className="btn" onClick={() => showToast('Loading more photos...')}>
          <i className="ti ti-photo-down" />Load more
        </button>
      </div>
    </div>
  );
}