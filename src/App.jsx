import { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import { Topbar, PulseBar, Toast } from './components/Topbar';
import Dashboard from './components/sections/Dashboard';
import Announcements from './components/sections/Announcements';
import Recognition from './components/sections/Recognition';
import Teams from './components/sections/Teams';
import KnowledgeBase from './components/sections/KnowledgeBase';
import Events from './components/sections/Events';
import Celebrations from './components/sections/Celebrations';
import Gallery from './components/sections/Gallery';
import Directory from './components/sections/Directory';
import KudosModal from './components/KudosModal';

const SECTION_TITLES = {
  dashboard: 'Dashboard',
  announcements: 'Announcements',
  recognition: 'Recognition Hub',
  teams: 'Teams & Verticals',
  knowledge: 'Knowledge Base',
  events: 'Events & Calendar',
  celebrations: 'Celebrations',
  gallery: 'Gallery',
  directory: 'People Directory',
};

export default function App() {
  const [section, setSection] = useState('dashboard');
  const [kudosOpen, setKudosOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  }, []);

  const sections = {
    dashboard: <Dashboard onNavigate={setSection} showToast={showToast} />,
    announcements: <Announcements showToast={showToast} />,
    recognition: <Recognition onKudos={() => setKudosOpen(true)} showToast={showToast} />,
    teams: <Teams showToast={showToast} />,
    knowledge: <KnowledgeBase showToast={showToast} />,
    events: <Events showToast={showToast} />,
    celebrations: <Celebrations showToast={showToast} />,
    gallery: <Gallery showToast={showToast} />,
    directory: <Directory showToast={showToast} />,
  };

  return (
    <div className="app">
      <Sidebar active={section} onNavigate={setSection} />
      <div className="main">
        <Topbar title={SECTION_TITLES[section]} showToast={showToast} onNavigate={setSection} />
        <PulseBar />
        <div className="content">{sections[section]}</div>
      </div>
      {kudosOpen && <KudosModal onClose={() => setKudosOpen(false)} showToast={showToast} />}
      {toast && <Toast msg={toast} />}
    </div>
  );
}