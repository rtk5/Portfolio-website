'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Mock blog post data
const mockPost = {
  slug: 'neural-networks-cybersecurity',
  title: 'Neural Networks in Cybersecurity: A Deep Dive',
  date: '2024-01-15',
  content: `
# Neural Networks in Cybersecurity: A Deep Dive

In the ever-evolving landscape of cybersecurity, traditional rule-based systems are increasingly inadequate against sophisticated threats. Enter neural networks – a paradigm shift that's revolutionizing how we detect, analyze, and respond to cyber threats.

## The Challenge with Traditional Security

Traditional security systems rely on signature-based detection and predefined rules. While effective against known threats, they struggle with:

- **Zero-day exploits** that haven't been seen before
- **Polymorphic malware** that changes its signature
- **Advanced persistent threats** that use novel attack vectors
- **False positives** that overwhelm security teams

## How Neural Networks Transform Security

Neural networks excel at pattern recognition and can identify subtle anomalies that traditional systems miss. Here's how they're being applied:

### 1. Anomaly Detection

\`\`\`python
import tensorflow as tf
from tensorflow.keras import layers

# Simple autoencoder for network anomaly detection
def create_anomaly_detector(input_dim):
    encoder = tf.keras.Sequential([
        layers.Dense(64, activation='relu', input_shape=(input_dim,)),
        layers.Dense(32, activation='relu'),
        layers.Dense(16, activation='relu')
    ])
    
    decoder = tf.keras.Sequential([
        layers.Dense(32, activation='relu', input_shape=(16,)),
        layers.Dense(64, activation='relu'),
        layers.Dense(input_dim, activation='sigmoid')
    ])
    
    autoencoder = tf.keras.Sequential([encoder, decoder])
    return autoencoder
\`\`\`

### 2. Malware Classification

Deep learning models can analyze malware samples and classify them into families, helping security researchers understand attack patterns and develop countermeasures.

### 3. Phishing Detection

Natural language processing models can analyze email content, URLs, and website structures to identify phishing attempts with high accuracy.

## Real-World Applications

Several organizations are already leveraging neural networks for cybersecurity:

- **Darktrace** uses unsupervised learning to detect insider threats
- **CylancePROTECT** employs machine learning for endpoint protection
- **IBM QRadar** integrates AI for security information and event management

## Challenges and Limitations

While promising, neural networks in cybersecurity face several challenges:

1. **Adversarial attacks** can fool ML models
2. **Data quality** is crucial for model performance
3. **Interpretability** remains a significant concern
4. **Computational overhead** can impact real-time detection

## The Future of AI-Powered Security

As we look ahead, several trends are emerging:

- **Federated learning** for privacy-preserving threat intelligence sharing
- **Explainable AI** to help security analysts understand model decisions
- **Automated response systems** that can react to threats in real-time
- **Quantum-resistant algorithms** to prepare for the post-quantum era

## Conclusion

Neural networks represent a powerful tool in the cybersecurity arsenal, but they're not a silver bullet. The most effective security strategies combine AI capabilities with human expertise, creating a defense-in-depth approach that can adapt to emerging threats.

The future of cybersecurity lies not in replacing human analysts, but in augmenting their capabilities with intelligent systems that can process vast amounts of data and identify patterns at superhuman speed.

---

*What are your thoughts on AI in cybersecurity? Have you implemented neural networks in your security stack? Let's discuss in the comments below.*`,
  tags: ['Machine Learning', 'Cybersecurity', 'Neural Networks', 'AI'],
  readingTime: '8 min read',
  featured: true,
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isMounted, setIsMounted] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLightMode, setIsLightMode] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const lines = [
      `> Opening ${params.slug}.md...`,
      '> Parsing markdown content...',
      '> Rendering with syntax highlighting...',
      '> Ready to read!',
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 300);
    });
  }, [params.slug, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const formatContent = (content: string) => {
    // Simple markdown-like formatting for demo
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-mono font-bold text-cyber-primary mb-6 mt-8">
              {line.slice(2)}
            </h1>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-mono font-bold text-cyber-secondary mb-4 mt-6">
              {line.slice(3)}
            </h2>
          );
        }
        if (line.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-mono font-bold text-cyber-primary mb-3 mt-4">
              {line.slice(4)}
            </h3>
          );
        }
        if (line.startsWith('```')) {
          return (
            <div key={index} className="bg-cyber-charcoal border border-cyber-gray rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto">
              <pre className="text-cyber-green">{line}</pre>
            </div>
          );
        }
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-cyber-gray mb-2 ml-4">
              <span className="text-cyber-primary">▸</span> {line.slice(2)}
            </li>
          );
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        if (line.startsWith('*') && line.endsWith('*')) {
          return (
            <p key={index} className="text-cyber-gray italic text-center border-t border-cyber-gray pt-4 mt-8">
              {line.slice(1, -1)}
            </p>
          );
        }
        return (
          <p key={index} className="text-cyber-gray leading-relaxed mb-4">
            {line}
          </p>
        );
      });
  };

  return (
    <div className={`min-h-screen pt-20 px-4 transition-colors duration-500 ${
      isLightMode ? 'bg-white text-gray-900' : 'bg-cyber-dark text-cyber-primary'
    }`}>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-cyber-primary z-50"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${readingProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyber-secondary hover:text-cyber-primary transition-colors font-mono text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            $ cd ../blog
          </Link>

          <h1 className={`text-3xl md:text-5xl font-mono font-bold mb-4 ${
            isLightMode ? 'text-gray-900' : 'text-cyber-primary'
          }`}>
            {mockPost.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-4 text-sm mb-6 ${
            isLightMode ? 'text-gray-600' : 'text-cyber-gray'
          }`}>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(mockPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{mockPost.readingTime}</span>
            </div>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="flex items-center gap-1 hover:text-cyber-primary transition-colors"
            >
              {isLightMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isLightMode ? 'Dark' : 'Light'} Mode</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {mockPost.tags.map((tag) => (
              <Badge
                key={tag}
                className={`font-mono ${
                  isLightMode
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-cyber-gray/20 text-cyber-primary'
                }`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Terminal Status */}
        <motion.div
          className="terminal-window mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 font-mono text-sm text-cyber-primary">
              {params.slug}.md
            </span>
          </div>
          <div className="terminal-content">
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

        {/* Article Content */}
        <motion.article
          className={`prose prose-lg max-w-none ${
            isLightMode
              ? 'prose-gray'
              : 'prose-invert prose-headings:text-cyber-primary prose-a:text-cyber-secondary'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={`${isLightMode ? 'bg-white' : 'bg-cyber-dark'} rounded-lg p-8`}>
            {formatContent(mockPost.content)}
          </div>
        </motion.article>

        {/* Navigation */}
        <motion.div
          className="mt-12 pt-8 border-t border-cyber-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="cyber-button text-sm flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="text-center">
              <p className={`font-mono text-sm ${
                isLightMode ? 'text-gray-600' : 'text-cyber-gray'
              }`}>
                Reading Progress: {Math.round(readingProgress)}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}