'use client';

import { motion } from 'framer-motion';
import { personalData } from '@/app/data/personalData';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';

export default function ContactZone() {
  const { addVisitedZone, toggleChatbot } = useAppStore();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    addVisitedZone('contact');
  }, [addVisitedZone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend API
    console.log('Form submitted:', formData);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadResume = () => {
    // Create a simple text-based resume
    const resumeContent = `
ADHITHYAN ARAVIND
Email: ${personalData.email}
Phone: ${personalData.phone}
LinkedIn: ${personalData.linkedin}
GitHub: ${personalData.github}

EDUCATION
${personalData.education.map(e => `${e.degree}\n${e.institution} - ${e.period}`).join('\n\n')}

EXPERIENCE
${personalData.experience.map(e => `${e.role} @ ${e.company}\n${e.period}\n${e.achievements.join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
Languages: ${personalData.technicalSkills.languages.join(', ')}
AI/ML: ${personalData.technicalSkills.aiMl.join(', ')}
Tools: ${personalData.technicalSkills.tools.join(', ')}
Areas: ${personalData.technicalSkills.areas.join(', ')}

CERTIFICATIONS
${personalData.certifications.map(c => `${c.name} - ${c.issuer} (${c.year})`).join('\n')}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Adhithyan_Aravind_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

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
          COMMAND CHAMBER
        </motion.h1>

        {/* Control Panel */}
        <div className="bg-gradient-to-br from-[#001122] to-[#0a0015] border-4 border-[#00ffff] rounded-lg p-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#9d00ff] mb-6">OPERATOR CREDENTIALS</h2>
            <div className="space-y-4 text-gray-300 font-mono">
              <p><span className="text-[#00ffff]">Email:</span> {personalData.email}</p>
              <p><span className="text-[#00ffff]">Phone:</span> {personalData.phone}</p>
              <p><span className="text-[#00ffff]">LinkedIn:</span> <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#9d00ff] hover:text-[#00ffff] transition-colors">{personalData.linkedin}</a></p>
              <p><span className="text-[#00ffff]">GitHub:</span> <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="text-[#9d00ff] hover:text-[#00ffff] transition-colors">{personalData.github}</a></p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={downloadResume}
              className="
                bg-gradient-to-r from-[#00ffff] to-[#9d00ff]
                text-black font-bold py-4 px-6 rounded-lg
                hover:scale-105 hover:shadow-xl hover:shadow-[#00ffff]/50
                transition-all duration-300
                text-xl
              "
            >
              📄 Extract Data
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => toggleChatbot()}
              className="
                bg-gradient-to-r from-[#9d00ff] to-[#ff00ff]
                text-white font-bold py-4 px-6 rounded-lg
                hover:scale-105 hover:shadow-xl hover:shadow-[#9d00ff]/50
                transition-all duration-300
                text-xl
              "
            >
              🤖 AI Interface
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => window.open(personalData.linkedin, '_blank')}
              className="
                bg-gradient-to-r from-[#00ffff] to-[#00ffff]
                text-black font-bold py-4 px-6 rounded-lg
                hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50
                transition-all duration-300
                text-xl
              "
            >
              🌐 Access Links
            </motion.button>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-black/30 border border-[#00ffff]/30 rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-[#00ffff] mb-6">SEND TRANSMISSION</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-mono">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-[#00ffff]/30 rounded px-4 py-2 text-white focus:border-[#00ffff] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-mono">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-[#00ffff]/30 rounded px-4 py-2 text-white focus:border-[#00ffff] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-mono">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-black/50 border border-[#00ffff]/30 rounded px-4 py-2 text-white focus:border-[#00ffff] focus:outline-none resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full bg-gradient-to-r from-[#00ffff] to-[#9d00ff]
                  text-black font-bold py-3 px-6 rounded-lg
                  hover:shadow-xl hover:shadow-[#00ffff]/50
                  transition-all duration-300
                "
              >
                SEND TRANSMISSION
              </motion.button>
            </form>

            {/* Success Message */}
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded text-center"
              >
                Transmission sent successfully!
              </motion.div>
            )}
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xl text-gray-300 font-mono">
              Mission Complete. The Architect Awaits Your Signal.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated Grid */}
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

