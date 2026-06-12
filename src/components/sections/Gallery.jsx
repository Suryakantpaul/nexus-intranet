import { useState } from 'react';

const ALBUMS = ['All', 'Carnival 2025', 'Hackathon', 'Offsite', 'Team Lunches', 'Awards'];

const PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop', label: 'Team Day', album: 'Offsite' },
  { url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop', label: 'Awards Night', album: 'Awards' },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop', label: 'Carnival', album: 'Carnival 2025' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop', label: 'Hackathon', album: 'Hackathon' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', label: 'Team Lunch', album: 'Team Lunches' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', label: 'Offsite 2025', album: 'Offsite' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop', label: 'Star Awards', album: 'Awards' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop', label: 'Carnival Night', album: 'Carnival 2025' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop', label: 'Hack Finals', album: 'Hackathon' },
  { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop', label: 'Culture Day', album: 'Carnival 2025' },
  { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop', label: 'Friday Lunch', album: 'Team Lunches' },
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', label: 'Bangalore HQ', album: 'Offsite' },
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
            style={{ padding: 0, overflow: 'hidden', position: 'relative' }}
            onClick={() => showToast(`Opening ${photo.label}...`)}>
            <img
              src={photo.url}
              alt={photo.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
              color: '#fff', padding: '18px 10px 8px', fontSize: 12, fontWeight: 500
            }}>
              {photo.label}
            </div>
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