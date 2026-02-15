'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Clock, Star, Shield, Globe } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Healthcare Professionals',
    description: 'Trust Appointik for their daily operations',
    color: 'bg-royal-100 text-royal-600'
  },
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Average No-Show Reduction',
    description: 'With automated SMS reminders',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: Clock,
    value: '3 hours',
    label: 'Daily Time Saved',
    description: 'On average per clinic',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Star,
    value: '4.7★',
    label: 'Google Play Rating',
    description: 'From 1,000+ verified reviews',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Uptime Guarantee',
    description: 'Reliable and secure platform',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries',
    description: 'Serving healthcare globally',
    color: 'bg-purple-100 text-purple-600'
  }
];

export function MetricsOverview() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by healthcare professionals worldwide
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform delivers measurable results that matter to your practice
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl border-0 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${metric.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600">
                  {metric.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}