'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, Tag, Filter, X } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Fuse from 'fuse.js';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    slug: 'neural-networks-cybersecurity',
    title: 'Neural Networks in Cybersecurity: A Deep Dive',
    date: '2024-01-15',
    excerpt: 'Exploring how machine learning algorithms can revolutionize threat detection and vulnerability assessment in modern security systems.',
    content: '',
    tags: ['Machine Learning', 'Cybersecurity', 'Neural Networks', 'AI'],
    readingTime: '8 min read',
    featured: true,
  },
  {
    slug: 'building-ctf-challenges',
    title: 'The Art of Building CTF Challenges',
    date: '2024-01-10',
    excerpt: 'A comprehensive guide to creating engaging and educational Capture The Flag challenges that test real-world security skills.',
    content: '',
    tags: ['CTF', 'Security', 'Education', 'Challenge Design'],
    readingTime: '12 min read',
    featured: true,
  },
  {
    slug: 'quantum-cryptography-future',
    title: 'Quantum Cryptography: Securing the Future',
    date: '2024-01-05',
    excerpt: 'Understanding quantum key distribution and its implications for post-quantum cryptography in an era of quantum computing.',
    content: '',
    tags: ['Quantum Computing', 'Cryptography', 'Security', 'Future Tech'],
    readingTime: '10 min read',
    featured: false,
  },
  {
    slug: 'iot-security-challenges',
    title: 'IoT Security: Challenges and Solutions',
    date: '2023-12-28',
    excerpt: 'Analyzing the security landscape of Internet of Things devices and practical approaches to securing connected systems.',
    content: '',
    tags: ['IoT', 'Security', 'Hardware', 'Network Security'],
    readingTime: '6 min read',
    featured: false,
  },
  {
    slug: 'malware-analysis-techniques',
    title: 'Advanced Malware Analysis Techniques',
    date: '2023-12-20',
    excerpt: 'Deep dive into static and dynamic analysis methods for understanding and reverse engineering malicious software.',
    content: '',
    tags: ['Malware Analysis', 'Reverse Engineering', 'Security Research'],
    readingTime: '15 min read',
    featured: false,
  },
];

export default function BlogPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'tags'],
    threshold: 0.3,
  });

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const lines = [
      '> Initializing blog system...',
      '> Loading posts from database...',
      '> Indexing content for search...',
      `> Found ${posts.length} posts`,
      '> System ready. Type "/" to search.',
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 200);
    });
  }, [isMounted]);

  useEffect(() => {
    let filtered = posts;

    if (searchQuery) {
      const results = fuse.search(searchQuery);
      filtered = results.map(result => result.item);
    }

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedTag]);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchFocused) {
        e.preventDefault();
        document.getElementById('search-input')?.focus();
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        setSelectedTag(null);
        document.getElementById('search-input')?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isSearchFocused, isMounted]);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-cyber-primary mb-4">
            <span className="glitch" data-text="BLOG">BLOG</span>
          </h1>
          <p className="text-cyber-gray font-mono">$ cat ~/thoughts/*.md</p>
        </motion.div>

        {/* Terminal Status */}
        <motion.div
          className="terminal-window mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 font-mono text-sm text-cyber-primary">blog.log</span>
          </div>
          <div className="terminal-content max-h-32 overflow-y-auto">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                className="font-mono text-sm text-cyber-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyber-gray" />
            <input
              id="search-input"
              type="text"
              placeholder="Search posts... (Press / to focus)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-10 pr-4 py-3 bg-cyber-charcoal border border-cyber-gray rounded-lg font-mono text-cyber-primary placeholder-cyber-gray focus:border-cyber-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-xs font-mono transition-all duration-300 ${
                !selectedTag
                  ? 'bg-cyber-primary text-cyber-dark'
                  : 'bg-transparent text-cyber-primary border border-cyber-primary hover:bg-cyber-primary hover:text-cyber-dark'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-xs font-mono transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-cyber-secondary text-cyber-dark'
                    : 'bg-transparent text-cyber-primary border border-cyber-primary hover:bg-cyber-secondary hover:text-cyber-dark'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedTag) && (
            <div className="flex justify-center gap-2">
              {searchQuery && (
                <Badge className="bg-cyber-primary/20 text-cyber-primary">
                  Search: "{searchQuery}"
                  <X
                    className="w-3 h-3 ml-1 cursor-pointer"
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedTag && (
                <Badge className="bg-cyber-secondary/20 text-cyber-secondary">
                  Tag: {selectedTag}
                  <X
                    className="w-3 h-3 ml-1 cursor-pointer"
                    onClick={() => setSelectedTag(null)}
                  />
                </Badge>
              )}
            </div>
          )}
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                className="cyber-card group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-cyber-secondary text-cyber-dark font-mono text-xs">
                        FEATURED
                      </Badge>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="space-y-4">
                    <h2 className="font-mono font-bold text-cyber-primary text-xl group-hover:text-cyber-secondary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-cyber-gray text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-cyber-gray text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs font-mono">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs font-mono">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="pt-2 border-t border-cyber-gray">
                      <span className="font-mono text-sm text-cyber-primary group-hover:text-cyber-secondary transition-colors">
                        $ cat {post.slug}.md →
                      </span>
                    </div>
                  </div>

                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal-window max-w-md mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 font-mono text-sm text-cyber-primary">404.log</span>
              </div>
              <div className="terminal-content text-center">
                <div className="font-mono text-cyber-gray">
                  <p>$ find . -name "*{searchQuery || selectedTag}*"</p>
                  <p className="text-red-400 mt-2">No matching posts found.</p>
                  <p className="text-cyber-secondary mt-2">Try adjusting your search or filters.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}