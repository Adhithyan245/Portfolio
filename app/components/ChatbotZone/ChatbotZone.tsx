'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const systemPrompt = `You are an AI representation of Adhithyan Aravind, an AI researcher and engineer specializing in Artificial Intelligence, Robotics, and Game AI. 

Key Information:
- Education: MS in AI at Northeastern University (starting Sept 2025), B.Tech from Rajalakshmi Engineering College
- Experience: AI Engineer at Learn Flu (Oct 2024 - Feb 2025), ML Intern at Kairos Kinetics
- Skills: Python, TensorFlow, PyTorch, Robotics, Reinforcement Learning, Deep Learning
- Projects: Intelligent Perception System for Robots, AI for Airport Security, Stutterio
- Certifications: IBM AI Professional, DeepLearning.AI Specialization, Google Advanced ML

Maintain a professional yet engaging tone. Answer questions about his experience, projects, skills, and goals. If asked something you don't know, politely say you need to consult the main system.`;

export default function ChatbotZone() {
  const { showChatbot, toggleChatbot } = useAppStore();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Greetings! I'm Adhithyan's AI assistant. How can I help you learn more about his work?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate AI response (replace with actual OpenAI API call)
      // For now, we'll use a mock response
      const response = await mockAIResponse(userMessage.content);
      
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm experiencing technical difficulties. Please refer to the website for detailed information." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const mockAIResponse = async (userInput: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('project')) {
      return "Adhithyan has worked on several exciting projects including an Intelligent Perception System for Autonomous Robots using PyTorch and Unity ML-Agents, an AI system for Airport Security that reduces false alarms by 30%, and Stutterio - an ML-based stuttering detection web app. Would you like details about any specific project?";
    }
    
    if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "Adhithyan worked as an AI Engineer at Learn Flu where he engineered TensorFlow models improving accuracy by 15% and automated ML pipelines. Before that, he was an ML Intern at Kairos Kinetics where he built predictive AI models for PCOD diagnosis and contributed to a patent.";
    }
    
    if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
      return "Adhithyan's expertise spans Python, TensorFlow, PyTorch for AI/ML development, along with CNNs, NLP, and model deployment. He's also skilled in Robotics, Reinforcement Learning, Deep Learning, and tools like Docker, Git, and Linux.";
    }
    
    if (lowerInput.includes('education') || lowerInput.includes('degree')) {
      return "Adhithyan completed his B.Tech in Computer Science and Business Systems from Rajalakshmi Engineering College and is set to begin his MS in Artificial Intelligence at Northeastern University in September 2025.";
    }
    
    if (lowerInput.includes('goal') || lowerInput.includes('future')) {
      return "Adhithyan aims to bridge the gap between cutting-edge AI research and practical applications, particularly in robotics and intelligent systems. His upcoming Master's program will allow him to dive deeper into neural networks, reinforcement learning, and agent-based systems.";
    }
    
    return "I'm here to answer questions about Adhithyan's experience, projects, skills, and goals. What would you like to know?";
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!showChatbot && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={toggleChatbot}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#00ffff] to-[#9d00ff] rounded-full shadow-2xl z-50 flex items-center justify-center text-3xl hover:scale-110 transition-transform"
          >
            🤖
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-[#0a0015] border-4 border-[#00ffff] rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00ffff] to-[#9d00ff] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <div className="font-bold text-black">AI Assistant</div>
                  <div className="text-xs text-black/70">Online</div>
                </div>
              </div>
              <button
                onClick={toggleChatbot}
                className="text-black hover:text-red-500 text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[#00ffff] to-[#9d00ff] text-black'
                        : 'bg-[#001122] text-[#00ffff] border border-[#00ffff]/30'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#001122] text-[#00ffff] border border-[#00ffff]/30 p-3 rounded-lg">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black/30 border-t border-[#00ffff]/30 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 bg-black/50 border border-[#00ffff]/30 rounded px-4 py-2 text-white placeholder-gray-400 focus:border-[#00ffff] focus:outline-none font-mono text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="bg-gradient-to-r from-[#00ffff] to-[#9d00ff] text-black font-bold px-4 py-2 rounded hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

