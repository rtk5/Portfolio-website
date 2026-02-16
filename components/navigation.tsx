'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'work', href: '/projects', key: '1' },
  { label: 'blog', href: '/blog', key: '2' },
  { label: 'find-me', href: '/contact', key: '3' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      const item = navItems.find(item => item.key === e.key);
      if (item) {
        window.location.href = item.href;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-gray' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors">
            <Terminal className="w-6 h-6" />
            <span className="font-mono font-bold">rithvik_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  className="font-mono text-sm text-cyber-primary hover:text-cyber-secondary transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-secondary group-hover:w-full transition-all duration-300"></span>
                  <span className="ml-2 text-xs text-cyber-gray">({item.key})</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/rtk5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-primary hover:text-cyber-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rithvik-matta-a8490b2ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-primary hover:text-cyber-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="text-cyber-primary hover:text-cyber-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-cyber-primary hover:text-cyber-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-cyber-dark/95 backdrop-blur-md border-t border-cyber-gray"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block font-mono text-cyber-primary hover:text-cyber-secondary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-cyber-gray">
                <a
                  href="https://github.com/rtk5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-primary hover:text-cyber-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rithvik-matta-a8490b2ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-primary hover:text-cyber-secondary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="text-cyber-primary hover:text-cyber-secondary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}