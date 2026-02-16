'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Barcode as Decode } from 'lucide-react';
import Image from 'next/image';

const terminalLog = [
  '> Initializing user profile...',
  '> Loading personal data...',
  '> Scanning digital footprint...',
  '',
  'USER: Rithvik Matta',
  'STATUS: Online',
  'LOCATION: Digital Frontier',
  '',
  '> Biography loading...',
  '',
  'Hey there! I\'m Rithvik, a passionate software engineer who lives at the intersection',
  'of technology and creativity. My journey started with a curiosity about how things',
  'work under the hood, which led me down the rabbit hole of cybersecurity and',
  'machine learning.',
  '',
  'When I\'m not crafting code or hunting vulnerabilities, you\'ll find me creating',
  'CTF challenges that push the boundaries of what\'s possible. I believe in learning',
  'by doing, teaching by sharing, and growing by challenging myself with complex',
  'problems.',
  '',
  'My expertise spans full-stack development, AI/ML implementations, and security',
  'research. I\'m particularly fascinated by the evolving landscape of machine learning',
  'and how we can build more resilient systems for the future.',
  '',
  '> Skills initialized:',
  '  - Software Engineering: ████████████ 95%',
  '  - Cybersecurity: ██████████ 58%',
  '  - Machine Learning: ██████████ 82%',
  '  - CTF Creation: ████████████ 52%',
  '  - Problem Solving: ████████████████ 98%',
  '',
  '> Loading complete. Type "decode" to reveal hidden message...',
];

const encodedBio = 'SGV5IHRoZXJlISBJZiB5b3UncmUgcmVhZGluZyB0aGlzLCB5b3UgZm91bmQgdGhlIEVhc3RlciBlZ2chIEknbSBhbHdheXMgaGlkaW5nIGxpdHRsZSBzdXJwcmlzZXMgaW4gbXkgY29kZS4gS2VlcCBleHBsb3JpbmchIDo=';

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDecoded, setIsDecoded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (currentLineIndex < terminalLog.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, terminalLog[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'd' && e.ctrlKey) {
        e.preventDefault();
        setIsDecoded(!isDecoded);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDecoded, isMounted]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const decodeMessage = () => {
    try {
      return atob(encodedBio);
    } catch {
      return 'Decoding failed. Try again later.';
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-cyber-primary mb-4">
            <span className="glitch" data-text="WHOAMI">WHOAMI</span>
          </h1>
          <p className="text-cyber-gray font-mono">$ cat /home/rithvik/bio.txt</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Log */}
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-4 font-mono text-sm text-cyber-primary">bio.log</span>
            </div>
            
            <div className="terminal-content max-h-96 overflow-y-auto">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  className="font-mono text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {line.startsWith('>') ? (
                    <span className="text-cyber-secondary">{line}</span>
                  ) : line.includes('████') ? (
                    <span className="text-cyber-green">{line}</span>
                  ) : line.startsWith('USER:') || line.startsWith('STATUS:') || line.startsWith('LOCATION:') ? (
                    <span className="text-cyber-primary font-bold">{line}</span>
                  ) : (
                    <span className="text-cyber-primary">{line}</span>
                  )}
                </motion.div>
              ))}
              {currentLineIndex >= terminalLog.length && (
                <motion.span
                  className="text-cyber-primary animate-cursor-blink"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  _
                </motion.span>
              )}
            </div>

            {/* Decode Button */}
            {currentLineIndex >= terminalLog.length && (
              <motion.div
                className="p-4 border-t border-cyber-gray"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button
                  onClick={() => setIsDecoded(!isDecoded)}
                  className="cyber-button text-sm flex items-center gap-2"
                >
                  <Decode className="w-4 h-4" />
                  {isDecoded ? 'ENCODE' : 'DECODE'} (Ctrl+D)
                </button>
                
                {isDecoded && (
                  <motion.div
                    className="mt-4 p-3 bg-cyber-gray/20 rounded border border-cyber-primary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-mono text-sm text-cyber-green">
                      {decodeMessage()}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div 
              className="relative group cursor-none"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="relative w-80 h-96 bg-cyber-charcoal rounded-lg p-4 shadow-2xl transform-gpu"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* Polaroid Frame */}
                <div className="w-full h-full bg-white rounded p-3 shadow-lg">
                  <div className="w-full h-5/6 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded mb-3 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual photo */}
                    <div className="w-full h-full bg-gradient-to-br from-cyber-primary/10 to-cyber-secondary/10 flex items-center justify-center">
                      <span className="text-cyber-dark font-mono text-lg">
                        [PHOTO_PLACEHOLDER]
                      </span>
                    </div>
                  </div>
                  
                  {/* Polaroid Caption */}
                  <div className="text-center">
                    <p className="font-mono text-cyber-dark text-sm">
                      rithvik@digital_frontier
                    </p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-primary/20 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-cyber-primary font-mono text-xs">ML</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-cyber-secondary/20 rounded-full flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-cyber-secondary font-mono text-xs">CTF</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { label: 'Years Coding', value: '5+', icon: '⚡' },
            { label: 'CTFs Created', value: '50+', icon: '🏴' },
            { label: 'Coffee Consumed', value: '∞', icon: '☕' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="cyber-card text-center"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-mono font-bold text-cyber-primary mb-1">
                {stat.value}
              </div>
              <div className="text-cyber-gray font-mono text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}