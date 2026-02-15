'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

const caseStudies = [
  {
    title: 'Multi-Specialty Clinic Reduces Wait Times by 60%',
    clinic: 'HealthCare Plus, Mumbai',
    specialty: 'Multi-Specialty',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'Long patient wait times and inefficient appointment scheduling',
    solution: 'Implemented Appointik\'s smart scheduling and automated reminders',
    results: [
      { metric: '60%', label: 'Reduction in wait times' },
      { metric: '40%', label: 'Increase in patient satisfaction' },
      { metric: '25%', label: 'More appointments per day' }
    ],
    testimonial: 'Appointik transformed our clinic operations. Patients are happier and our staff is more efficient.',
    doctor: 'Dr. Priya Sharma, Chief Medical Officer'
  },
  {
    title: 'Dental Practice Eliminates No-Shows Completely',
    clinic: 'Smile Dental Care, Bangalore',
    specialty: 'Dental',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'High no-show rates affecting revenue and scheduling',
    solution: 'Automated SMS reminders and online booking portal',
    results: [
      { metric: '95%', label: 'Reduction in no-shows' },
      { metric: '30%', label: 'Increase in revenue' },
      { metric: '50%', label: 'Less time on phone bookings' }
    ],
    testimonial: 'We went from 20% no-shows to almost zero. The ROI was immediate and substantial.',
    doctor: 'Dr. Rajesh Kumar, Dental Surgeon'
  },
  {
    title: 'Physiotherapy Center Streamlines Patient Records',
    clinic: 'Rehab Plus, Delhi',
    specialty: 'Physiotherapy',
    image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'Paper-based records and difficulty tracking patient progress',
    solution: 'Digital EMR system with progress tracking and treatment plans',
    results: [
      { metric: '80%', label: 'Faster record access' },
      { metric: '90%', label: 'Improved treatment tracking' },
      { metric: '3 hours', label: 'Daily time saved' }
    ],
    testimonial: 'The EMR system helps us provide better care with complete patient history at our fingertips.',
    doctor: 'Dr. Meera Patel, Physiotherapist'
  }
];

export function CaseStudiesGrid() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Detailed case studies
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deep dive into how different types of clinics achieved remarkable results
        </p>
      </motion.div>

      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-white shadow-lg rounded-3xl border-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.clinic}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                    {study.specialty}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-royal-600 font-medium mb-6">{study.clinic}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-teal-50 rounded-2xl">
                            <div className="text-2xl font-bold text-teal-600 mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-royal-200 pl-4 italic text-gray-700">
                      "{study.testimonial}"
                      <footer className="text-sm text-gray-600 mt-2">
                        — {study.doctor}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="p-8 bg-gradient-to-r from-royal-50 to-teal-50 border-royal-100 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to write your success story?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of healthcare professionals who have transformed their clinics with Appointik.
          </p>
          <Button 
            asChild
            className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold"
          >
            <a href="/pricing" className="flex items-center space-x-2">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </Card>
      </motion.div>
    </section>
  );
}