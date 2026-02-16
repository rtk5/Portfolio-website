'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Filter, X } from 'lucide-react';
import { getGitHubRepos, getGitHubStats, GitHubRepo } from '@/lib/github';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const filters = ['All', 'Web', 'ML', 'Hardware', 'CTF'];

const projects = [
  {
    id: 1,
    title: 'Neural Security Scanner',
    description: 'AI-powered vulnerability scanner that uses machine learning to detect zero-day exploits',
    category: 'ML',
    tags: ['Python', 'TensorFlow', 'Cybersecurity', 'Neural Networks'],
    stars: 342,
    forks: 89,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/neural-security-scanner',
    featured: true,
  },
  {
    id: 2,
    title: 'CyberCTF Platform',
    description: 'Full-stack CTF platform with dynamic challenge generation and real-time scoring',
    category: 'CTF',
    tags: ['React', 'Node.js', 'Docker', 'MongoDB'],
    stars: 256,
    forks: 67,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/cyberctf-platform',
    featured: true,
  },
  {
    id: 3,
    title: 'IoT Honeypot Network',
    description: 'Distributed honeypot system for IoT device security research and threat intelligence',
    category: 'Hardware',
    tags: ['Raspberry Pi', 'Python', 'Docker', 'Network Security'],
    stars: 198,
    forks: 45,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/iot-honeypot',
    featured: false,
  },
  {
    id: 4,
    title: 'Quantum Cryptography Simulator',
    description: 'Educational tool for understanding quantum key distribution and post-quantum cryptography',
    category: 'Web',
    tags: ['JavaScript', 'WebGL', 'Quantum Computing', 'Cryptography'],
    stars: 423,
    forks: 112,
    image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/quantum-crypto-sim',
    featured: true,
  },
  {
    id: 5,
    title: 'Smart Contract Auditor',
    description: 'Automated smart contract analysis tool using symbolic execution and formal verification',
    category: 'Web',
    tags: ['Solidity', 'Python', 'Blockchain', 'Security'],
    stars: 387,
    forks: 94,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/smart-contract-auditor',
    featured: false,
  },
  {
    id: 6,
    title: 'Malware Classification Engine',
    description: 'Deep learning model for automated malware family classification and behavior analysis',
    category: 'ML',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Malware Analysis'],
    stars: 289,
    forks: 73,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    demoUrl: '#',
    githubUrl: 'https://github.com/rtk5/malware-classifier',
    featured: false,
  },
];

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [githubStats, setGithubStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [repos, stats] = await Promise.all([
          getGitHubRepos(),
          getGitHubStats()
        ]);
        setGithubRepos(repos);
        setGithubStats(stats);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);
  useEffect(() => {
    if (selectedFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedFilter));
    }
  }, [selectedFilter]);

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
            <span className="glitch" data-text="PROJECTS">PROJECTS</span>
          </h1>
          <p className="text-cyber-gray font-mono">$ ls -la ~/workspace/</p>
        </motion.div>

        {/* GitHub Stats */}
        {githubStats && (
          <motion.div
            className="mb-8 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {[
              { label: 'Repos', value: githubStats.public_repos },
              { label: 'Stars', value: githubStats.total_stars },
              { label: 'Forks', value: githubStats.total_forks },
              { label: 'Followers', value: githubStats.followers },
              { label: 'Following', value: githubStats.following },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 bg-cyber-charcoal border border-cyber-gray rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-cyber-primary font-mono font-bold text-lg">
                  {stat.value}
                </div>
                <div className="text-cyber-gray font-mono text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-cyber-primary text-cyber-dark'
                  : 'bg-transparent text-cyber-primary border border-cyber-primary hover:bg-cyber-primary hover:text-cyber-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4 inline-block mr-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="cyber-card group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                onClick={() => setSelectedProject(project)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-cyber-secondary text-cyber-dark font-mono text-xs">
                      FEATURED
                    </Badge>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-cyber-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <span className="font-mono text-white font-bold">OPEN PROJECT</span>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="font-mono font-bold text-cyber-primary text-lg group-hover:text-cyber-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyber-gray text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs font-mono">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-cyber-gray text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="bg-cyber-charcoal border-cyber-gray max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-mono text-cyber-primary text-2xl">
                    $ npx {selectedProject.title.toLowerCase().replace(/\s+/g, '-')}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-mono text-cyber-primary text-xl font-bold">
                        Description
                      </h3>
                      <p className="text-cyber-gray leading-relaxed">
                        {selectedProject.description}
                      </p>

                      <div>
                        <h4 className="font-mono text-cyber-primary mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <Badge key={tag} className="bg-cyber-gray/20 text-cyber-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-mono text-cyber-primary">Repository Stats</h4>
                        <div className="flex items-center gap-4 text-cyber-gray">
                          {githubRepos.find(repo => repo.name === selectedProject.title.toLowerCase().replace(/\s+/g, '-')) && (
                            <>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-cyber-secondary" />
                            <span>{githubRepos.find(repo => repo.name === selectedProject.title.toLowerCase().replace(/\s+/g, '-'))?.stargazers_count || selectedProject.stars} stars</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4 text-cyber-secondary" />
                            <span>{githubRepos.find(repo => repo.name === selectedProject.title.toLowerCase().replace(/\s+/g, '-'))?.forks_count || selectedProject.forks} forks</span>
                          </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-mono text-cyber-primary">Links</h4>
                        <div className="flex gap-4">
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button text-sm flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                          <a
                            href={selectedProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-button text-sm flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Output Simulation */}
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                      <span className="ml-4 font-mono text-sm text-cyber-primary">
                        project-info.log
                      </span>
                    </div>
                    <div className="terminal-content">
                      <div className="font-mono text-sm space-y-1">
                        <div className="text-cyber-secondary">$ git clone {selectedProject.githubUrl}</div>
                        <div className="text-cyber-green">✓ Repository cloned successfully</div>
                        <div className="text-cyber-secondary">$ cd {selectedProject.title.toLowerCase().replace(/\s+/g, '-')}</div>
                        <div className="text-cyber-secondary">$ npm install</div>
                        <div className="text-cyber-green">✓ Dependencies installed</div>
                        <div className="text-cyber-secondary">$ npm start</div>
                        <div className="text-cyber-green">✓ Project running on localhost:3000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}