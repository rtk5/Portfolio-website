'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

interface SpecialtyHeroProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
}

export function SpecialtyHero({ data }: SpecialtyHeroProps) {
  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-royal-50 text-royal-700 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>Specialized Solution</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all focus-outline"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl px-8 py-3 border-2 border-gray-200 hover:border-royal-200 font-semibold focus-outline"
            >
              <Link href="/features">View All Features</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {data.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-royal-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Card className="overflow-hidden rounded-3xl shadow-2xl border-0">
            <img
              src={data.image}
              alt="Specialty clinic"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-900/20 to-transparent"></div>
          </Card>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-teal-500 text-white rounded-2xl p-4 shadow-lg"
          >
            <div className="text-sm font-medium">Trusted by</div>
            <div className="text-xl font-bold">Healthcare Pros</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}