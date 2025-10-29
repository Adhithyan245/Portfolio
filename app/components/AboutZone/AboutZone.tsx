'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/app/data/personalData';
import { useAppStore } from '@/lib/store';
import { useEffect } from 'react';

export default function AboutZone() {
  const { addVisitedZone } = useAppStore();

  useEffect(() => {
    addVisitedZone('about');
  }, [addVisitedZone]);

  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Terminal Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#001122] border-2 border-[#00ffff] rounded-t-lg p-4 mb-0"
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-[#00ffff] font-mono">[TERMINAL - Origin Protocol v2.0]</span>
          </div>
        </motion.div>

        {/* Terminal Body */}
        <div className="bg-[#0a0015] border-2 border-t-0 border-[#00ffff] rounded-b-lg p-8 font-mono">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-[#00ffff] mb-8 neon-cyan"
          >
            $ cat about.txt
          </motion.h2>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-2xl text-[#9d00ff] mb-4 font-bold">[EDUCATION]</h3>
            <div className="space-y-4 text-[#00ffff]">
              {personalData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-[#00ffff] pl-4">
                  <p className="font-bold text-xl">{edu.degree}</p>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400">Period: {edu.period}</p>
                  {edu.status && (
                    <span className="inline-block mt-1 px-2 py-1 bg-[#9d00ff]/20 text-[#9d00ff] text-xs rounded">
                      {edu.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl text-[#9d00ff] mb-4 font-bold">[NEURAL PROTOCOL]</h3>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                {'>'} Welcome to the Origin Terminal. I am{' '}
                <span className="text-[#00ffff] font-bold">Adhithyan Aravind</span>, 
                an AI researcher and engineer specializing in{' '}
                <span className="text-[#9d00ff]">Artificial Intelligence</span>,{' '}
                <span className="text-[#9d00ff]">Robotics</span>, and{' '}
                <span className="text-[#9d00ff]">Game AI</span>.
              </p>
              <p>
                {'>'} My journey spans from building{' '}
                <span className="text-[#00ffff]">intelligent perception systems</span> for 
                autonomous robots to developing{' '}
                <span className="text-[#00ffff]">Vision Transformer</span> models for 
                real-world applications.
              </p>
              <p>
                {'>'} Currently preparing to embark on my{' '}
                <span className="text-[#9d00ff]">Master's in AI</span> at 
                Northeastern University, where I'll dive deeper into the frontiers 
                of neural networks, reinforcement learning, and agent-based systems.
              </p>
              <p>
                {'>'} My mission: Bridge the gap between cutting-edge AI research 
                and practical applications that transform how machines perceive, 
                learn, and interact with the world.
              </p>
            </div>
          </motion.div>

          {/* Experience Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl text-[#9d00ff] mb-4 font-bold">[CURRENT STATUS]</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              {personalData.experience.map((exp, index) => (
                <div key={index} className="bg-[#001122] border border-[#00ffff]/30 p-4 rounded">
                  <p className="text-[#00ffff] font-bold">{exp.role} @ {exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Cursor */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-3 h-6 bg-[#00ffff] ml-1"
          />
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
}

