'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CheckCircle, FileText, User, Calendar, CreditCard, Activity, TrendingUp, Target, Package, Shield, MessageSquare, Calculator, Heart, Leaf } from 'lucide-react';

const iconMap = {
  FileText,
  User,
  Calendar,
  CreditCard,
  Activity,
  TrendingUp,
  Target,
  Package,
  Shield,
  MessageSquare,
  Calculator,
  Heart,
  Leaf
};

interface SpecialtyFeaturesProps {
  features: Array<{
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  }>;
}

export function SpecialtyFeatures({ features }: SpecialtyFeaturesProps) {
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
          Specialized features for your practice
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Purpose-built tools designed specifically for your medical specialty
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap] || FileText;
          
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl border-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-royal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-royal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}