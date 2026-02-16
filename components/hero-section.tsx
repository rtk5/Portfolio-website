'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const roles = [
  'software engineer',
  'CTF creator',
  'ML enthusiast',
  'Applied Machine Learning Engineer',
  'full-stack developer',
  'Tech Innovator'
];

const quickActions = [
  { label: 'WHOAMI', href: '/about', key: '1', description: 'learn about me' },
  { label: 'PROJECTS', href: '/projects', key: '2', description: 'view my work' },
  { label: 'BLOG', href: '/blog', key: '3', description: 'read my thoughts' },
];

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const typeText = async () => {
      const currentRoleText = roles[currentRole];
      
      // Typing effect
      for (let i = 0; i <= currentRoleText.length; i++) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Deleting effect
      for (let i = currentRoleText.length; i >= 0; i--) {
        setDisplayText(currentRoleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setCurrentRole((prev) => (prev + 1) % roles.length);
    };

    typeText();
  }, [currentRole, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const action = quickActions.find(action => action.key === e.key);
      if (action) {
        window.location.href = action.href;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isMounted]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Background grid animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          className="terminal-window max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 font-mono text-sm text-cyber-primary">rithvik@portfolio:~$</span>
          </div>

          {/* Terminal Content */}
          <div className="terminal-content space-y-6">
            {/* Command Prompt */}
            <motion.div
              className="font-mono text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-cyber-secondary">rithvik_</span>
              <span className="text-cyber-primary"> $ whoami</span>
            </motion.div>

            {/* Typewriter Text */}
            <motion.div
              className="font-mono text-2xl md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-cyber-primary">I am a </span>
              <span className="text-cyber-secondary font-bold">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </span>
            </motion.div>

            {/* ASCII Art Divider */}
            <motion.div
              className="font-mono text-xs text-cyber-gray py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <pre className="text-center">
{`════════════════════════════════════════
 ╔══════════════════════════════════════╗
 ║  Welcome to the digital frontier...  ║
 ╚══════════════════════════════════════╝
════════════════════════════════════════`}
              </pre>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid md:grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={action.href}
                    className="cyber-button block text-center group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{action.label}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-xs mt-1 text-cyber-gray group-hover:text-cyber-primary transition-colors">
                      {action.description} ({action.key})
                    </div>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-cyber-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Command Hint */}
            <motion.div
              className="font-mono text-sm text-cyber-gray pt-6 border-t border-cyber-gray"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <p>Press <kbd className="px-2 py-1 bg-cyber-gray rounded text-cyber-primary">1</kbd>, <kbd className="px-2 py-1 bg-cyber-gray rounded text-cyber-primary">2</kbd>, or <kbd className="px-2 py-1 bg-cyber-gray rounded text-cyber-primary">3</kbd> for quick navigation</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 border border-cyber-primary/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-16 h-16 border border-cyber-secondary/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
}