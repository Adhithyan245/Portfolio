'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/app/data/personalData';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function SkillsZone() {
  const { addVisitedZone } = useAppStore();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    addVisitedZone('skills');
  }, [addVisitedZone]);

  const allSkills = [
    ...personalData.technicalSkills.languages.map(s => ({ name: s, category: 'Languages', level: 95 })),
    ...personalData.technicalSkills.aiMl.map(s => ({ name: s, category: 'AI/ML', level: 85 })),
    ...personalData.technicalSkills.tools.map(s => ({ name: s, category: 'Tools', level: 80 })),
    ...personalData.technicalSkills.areas.map(s => ({ name: s, category: 'Areas', level: 90 })),
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 neon-purple"
        >
          THE ROBOTICS CORE
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="
                relative bg-gradient-to-br from-[#001122] to-[#0a0015]
                border-2 border-[#00ffff] rounded-lg p-6
                transform transition-all duration-300
                hover:scale-105 hover:border-[#9d00ff] hover:shadow-2xl hover:shadow-[#9d00ff]/50
              "
            >
              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-[#9d00ff]/20 text-[#9d00ff] text-xs font-bold rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-[#00ffff] mb-4">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative h-3 bg-black/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-[#00ffff] to-[#9d00ff]"
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  {skill.level}%
                </div>
              </div>

              {/* Glow Effect on Hover */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -inset-1 bg-gradient-to-r from-[#00ffff] to-[#9d00ff] rounded-lg blur-lg -z-10"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Skill Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { title: 'Languages', skills: personalData.technicalSkills.languages.length, color: '#00ffff' },
            { title: 'AI/ML', skills: personalData.technicalSkills.aiMl.length, color: '#9d00ff' },
            { title: 'Tools', skills: personalData.technicalSkills.tools.length, color: '#ff00ff' },
            { title: 'Areas', skills: personalData.technicalSkills.areas.length, color: '#00ffff' },
          ].map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-[#001122] to-[#0a0015] border-2 border-[#00ffff] rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: category.color }}>
                {category.skills}
              </div>
              <div className="text-gray-300 font-mono text-sm">{category.title}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-[#00ffff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

