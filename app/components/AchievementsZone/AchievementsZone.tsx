'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/app/data/personalData';
import { useAppStore } from '@/lib/store';
import { useEffect } from 'react';

export default function AchievementsZone() {
  const { addVisitedZone } = useAppStore();

  useEffect(() => {
    addVisitedZone('achievements');
  }, [addVisitedZone]);

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 neon-cyan"
        >
          THE NEURAL NETWORK
        </motion.h1>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {personalData.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2 }}
              className="
                relative bg-gradient-to-br from-[#001122] to-[#0a0015]
                border-2 border-[#00ffff] rounded-lg p-8
                transform transition-all duration-300 hover:scale-105
                hover:border-[#9d00ff] hover:shadow-2xl hover:shadow-[#9d00ff]/50
                group
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Node Circle */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00ffff] rounded-full flex items-center justify-center border-4 border-black">
                <div className="w-3 h-3 bg-[#00ffff] rounded-full animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#00ffff] neon-cyan group-hover:text-[#9d00ff] transition-colors">
                    {cert.name}
                  </h3>
                  <div className="text-4xl">🏆</div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-300 font-mono">
                    <span className="text-[#9d00ff]">Issued by:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-300 font-mono">
                    <span className="text-[#9d00ff]">Year:</span> {cert.year}
                  </p>
                </div>

                {/* Connecting Line Animation */}
                {index < personalData.certifications.length - 1 && index % 2 === 0 && (
                  <motion.div
                    className="absolute -bottom-8 right-1/2 w-0.5 h-8 bg-gradient-to-b from-[#00ffff] to-transparent hidden md:block"
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-br from-[#001122] to-[#0a0015] border-2 border-[#9d00ff] rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-[#9d00ff] mb-6 text-center">
            Additional Milestones
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00ffff] mb-2">2+</div>
              <div className="text-gray-300 font-mono">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00ffff] mb-2">4</div>
              <div className="text-gray-300 font-mono">Certifications</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00ffff] mb-2">3+</div>
              <div className="text-gray-300 font-mono">Major Projects</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Connecting Lines Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100 + '%'}
              y1={Math.random() * 100 + '%'}
              x2={Math.random() * 100 + '%'}
              y2={Math.random() * 100 + '%'}
              stroke="#00ffff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

