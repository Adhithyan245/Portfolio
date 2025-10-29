'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import ParticlesBackground from '../common/ParticlesBackground';

export default function LandingZone() {
  const { setCurrentZone, togglePlay } = useAppStore();
  const [isBooting, setIsBooting] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [showButton, setShowButton] = useState(false);

  const bootMessages = [
    'System Booting...',
    'Neural Sync Initializing...',
    'AI Core Online...',
    'Welcome to The Neural Quest',
  ];

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    let timer: NodeJS.Timeout;

    const typeWriter = () => {
      if (messageIndex < bootMessages.length) {
        if (charIndex < bootMessages[messageIndex].length) {
          setCurrentText(bootMessages[messageIndex].substring(0, charIndex + 1));
          charIndex++;
          timer = setTimeout(typeWriter, 50);
        } else {
          messageIndex++;
          charIndex = 0;
          if (messageIndex < bootMessages.length) {
            setTimeout(() => {
              setCurrentText('');
              timer = setTimeout(typeWriter, 200);
            }, 1000);
          } else {
            setShowButton(true);
            setIsBooting(false);
          }
        }
      }
    };

    timer = setTimeout(typeWriter, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    togglePlay();
    setCurrentZone('about');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 text-center space-y-8">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-7xl md:text-9xl font-black neon-cyan"
        >
          THE NEURAL QUEST
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl md:text-3xl text-[#9d00ff] font-mono"
        >
          Adhithyan Aravind
        </motion.p>

        {/* Boot Messages */}
        <AnimatePresence>
          {isBooting && (
            <motion.div
              key="boot-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[60px]"
            >
              <p className="text-xl font-mono text-[#00ffff] typewriter">
                {currentText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Start Button */}
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleStart}
              className="
                px-12 py-6 text-2xl font-bold font-mono 
                bg-gradient-to-r from-[#00ffff] to-[#9d00ff]
                text-black rounded-lg
                hover:scale-110 hover:shadow-2xl
                transition-all duration-300
                border-2 border-[#00ffff]
                glow-animate
              "
            >
              <span className="inline-block mr-2">→</span>
              Begin Neural Sync
              <span className="inline-block ml-2">←</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-sm text-gray-400 font-mono max-w-2xl mx-auto"
        >
          Exploring the frontiers of AI, Robotics, and Intelligent Systems
        </motion.p>
      </div>

      {/* Floating Elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00ffff] rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

