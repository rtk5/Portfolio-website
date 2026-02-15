'use client';

import { motion } from 'framer-motion';
import { Shield, Star, Globe, Users, Clock, Zap } from 'lucide-react';

const badges = [
  {
    icon: Star,
    title: '4.7★ Google Play',
    description: '1000+ reviews',
  },
  {
    icon: Shield,
    title: 'HIPAA Grade',
    description: 'Bank-level security',
  },
  {
    icon: Users,
    title: '5,000+',
    description: 'Healthcare professionals',
  },
  {
    icon: Globe,
    title: '99.9% Uptime',
    description: 'Reliable & fast',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always here to help',
  },
  {
    icon: Zap,
    title: 'Works Offline',
    description: 'Syncs when online',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-royal-50 rounded-2xl mb-3 group-hover:bg-royal-100 transition-colors">
                  <Icon className="w-6 h-6 text-royal-600" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {badge.title}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {badge.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}