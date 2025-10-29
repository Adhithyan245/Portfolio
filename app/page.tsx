'use client';

import { useAppStore } from '@/lib/store';
import Navigation from './components/common/Navigation';
import LandingZone from './components/LandingZone/LandingZone';
import AboutZone from './components/AboutZone/AboutZone';
import ProjectsZone from './components/ProjectsZone/ProjectsZone';
import SkillsZone from './components/SkillsZone/SkillsZone';
import AchievementsZone from './components/AchievementsZone/AchievementsZone';
import ContactZone from './components/ContactZone/ContactZone';
import ChatbotZone from './components/ChatbotZone/ChatbotZone';

export default function Home() {
  const { currentZone } = useAppStore();

  const renderZone = () => {
    switch (currentZone) {
      case 'landing':
        return <LandingZone />;
      case 'about':
        return <AboutZone />;
      case 'projects':
        return <ProjectsZone />;
      case 'skills':
        return <SkillsZone />;
      case 'achievements':
        return <AchievementsZone />;
      case 'contact':
        return <ContactZone />;
      default:
        return <LandingZone />;
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      {currentZone !== 'landing' && <Navigation />}
      
      {/* Current Zone */}
      {renderZone()}
      
      {/* Chatbot (floating) */}
      <ChatbotZone />
    </main>
  );
}

