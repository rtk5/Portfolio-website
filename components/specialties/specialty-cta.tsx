'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface SpecialtyCTAProps {
  specialty: string;
}

const specialtyBenefits = {
  dental: [
    'Reduce no-shows by 95%',
    'Streamline treatment planning',
    'Automate insurance claims'
  ],
  physiotherapy: [
    'Track patient progress effectively',
    'Manage exercise programs',
    'Improve treatment outcomes'
  ],
  ayurveda: [
    'Digital Prakriti assessment',
    'Herbal prescription management',
    'Panchakarma treatment tracking'
  ],
  paediatrics: [
    'Monitor child development',
    'Automate vaccination schedules',
    'Engage parents effectively'
  ]
};

export function SpecialtyCTA({ specialty }: SpecialtyCTAProps) {
  const benefits = specialtyBenefits[specialty as keyof typeof specialtyBenefits] || [];

  return (
    <section className="section-container bg-gradient-to-br from-royal-50 to-teal-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-12 bg-white shadow-2xl rounded-3xl border-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your {specialty} practice?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of {specialty} professionals who have already revolutionized their clinics with Appointik.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 justify-center"
              >
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
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
              className="rounded-2xl px-8 py-3 border-2 border-royal-200 hover:bg-royal-50 font-semibold"
            >
              <Link href="/success-stories">View Success Stories</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            No setup fees • Cancel anytime • 24/7 support
          </p>
        </Card>
      </motion.div>
    </section>
  );
}