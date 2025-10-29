'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/app/data/personalData';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function ProjectsZone() {
  const { addVisitedZone } = useAppStore();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    addVisitedZone('projects');
  }, [addVisitedZone]);

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
          RESEARCH ARCHIVES
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedProject(project.id)}
              className="
                relative bg-gradient-to-br from-[#001122] to-[#0a0015]
                border-2 border-[#00ffff] rounded-lg p-6
                cursor-pointer transform transition-all duration-300
                hover:scale-105 hover:border-[#9d00ff] hover:shadow-2xl hover:shadow-[#9d00ff]/50
                ${selectedProject === project.id ? 'border-[#9d00ff] shadow-2xl shadow-[#9d00ff]/50' : ''}
              "
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/10 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
              
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#9d00ff]/20 text-[#9d00ff] text-xs font-bold rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#00ffff] mb-3 neon-cyan">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-black/50 text-[#00ffff] text-xs rounded border border-[#00ffff]/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-gray-400 text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Access Granted Effect */}
              {selectedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 border-4 border-[#00ffff] rounded-lg animate-pulse"
                />
              )}

              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffff] to-[#9d00ff] rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (() => {
          const project = personalData.projects.find(p => p.id === selectedProject);
          if (!project) return null;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-[#0a0015] border-4 border-[#00ffff] rounded-lg p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-[#00ffff] hover:text-[#9d00ff] text-3xl font-bold"
                >
                  ×
                </button>

                {/* Header */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#9d00ff]/20 text-[#9d00ff] text-sm font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h2 className="text-4xl font-bold text-[#00ffff] mb-3 neon-cyan">
                    {project.title}
                  </h2>
                </div>

                {/* Full Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl text-[#9d00ff] font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-black/50 text-[#00ffff] text-sm rounded border border-[#00ffff]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2 text-[#00ffff]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold">{project.status}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

