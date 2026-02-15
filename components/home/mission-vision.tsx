'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export function MissionVision() {
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
          Our commitment to healthcare
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built by healthcare professionals, for healthcare professionals
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 h-full bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-royal-500 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-royal-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower healthcare providers with simple, affordable, and reliable technology that enhances patient care while reducing administrative burden. We believe every clinic, regardless of size, deserves access to world-class management tools.
            </p>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 h-full bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-100 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a future where healthcare providers can focus entirely on patient care, while technology seamlessly handles all administrative tasks. We envision a healthcare ecosystem where efficiency and compassion work hand in hand.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Card className="p-8 bg-gradient-to-r from-gray-50 to-white border-gray-200 rounded-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-500 to-teal-500 rounded-2xl mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: 'Trust',
                description: 'Your data security and privacy are our top priorities. We maintain the highest standards of data protection.'
              },
              {
                title: 'Simplicity',
                description: 'We believe powerful software should be easy to use. No complex training or technical expertise required.'
              },
              {
                title: 'Affordability',
                description: 'Quality healthcare technology should be accessible to all practitioners, regardless of clinic size or budget.'
              },
              {
                title: 'Continuous Care',
                description: 'We provide ongoing support and regular updates to ensure your clinic always has the latest features.'
              }
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}