'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

const zones = [
  { id: 'landing', name: 'Landing', icon: '🧠' },
  { id: 'about', name: 'About', icon: '📘' },
  { id: 'projects', name: 'Projects', icon: '🧩' },
  { id: 'skills', name: 'Skills', icon: '⚙️' },
  { id: 'achievements', name: 'Achievements', icon: '🧬' },
  { id: 'contact', name: 'Contact', icon: '💬' },
];

export default function Navigation() {
  const { currentZone, setCurrentZone, visitedZones } = useAppStore();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
      {zones.map((zone, index) => {
        const isVisited = visitedZones.includes(zone.id);
        const isActive = currentZone === zone.id;
        
        return (
          <motion.button
            key={zone.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setCurrentZone(zone.id)}
            className={`
              px-4 py-2 rounded-lg font-mono text-sm font-bold transition-all duration-300
              ${isActive 
                ? 'bg-[#00ffff] text-black shadow-lg shadow-cyan-500/50' 
                : isVisited
                ? 'bg-[#9d00ff] text-white hover:bg-[#9d00ff]/80'
                : 'bg-black/50 text-gray-400 hover:bg-black/70 border border-gray-700'
              }
            `}
          >
            <span className="mr-2">{zone.icon}</span>
            {zone.name}
          </motion.button>
        );
      })}
    </nav>
  );
}

