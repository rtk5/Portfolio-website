'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Pallavi Matta',
    specialty: 'General Physician',
    location: 'Delhi',
    quote: 'Appointik has transformed how I manage my clinic. The offline capability is a game-changer during network issues, and my patients love the online booking system.',
    rating: 5,
    metrics: [
      { label: 'No-shows reduced', value: '45%' },
      { label: 'Time saved daily', value: '2 hours' },
      { label: 'Patient satisfaction', value: '98%' }
    ]
  },
  {
    name: 'Dr. Gokula Kannan',
    specialty: 'Cardiologist',
    location: 'Chennai',
    quote: 'The EMR system is intuitive and the prescription module saves me hours every day. Patient records are always accessible and well-organized.',
    rating: 5,
    metrics: [
      { label: 'Daily time saved', value: '3 hours' },
      { label: 'Record accuracy', value: '99.8%' },
      { label: 'Prescription speed', value: '5x faster' }
    ]
  },
  {
    name: 'Dr. Thabani Thata',
    specialty: 'Pediatrician',
    location: 'Mumbai',
    quote: 'Perfect for small clinics like mine. The pricing is very reasonable and the features are exactly what I need. Highly recommended for fellow practitioners.',
    rating: 5,
    metrics: [
      { label: 'Efficiency increase', value: '60%' },
      { label: 'Cost savings', value: '₹15,000/mo' },
      { label: 'Setup time', value: '1 day' }
    ]
  },
  {
    name: 'Dr. Sunita Rao',
    specialty: 'Dermatologist',
    location: 'Bangalore',
    quote: 'The inventory management feature is excellent. I can track all my supplies and get alerts when stock is low. Everything is so well integrated.',
    rating: 5,
    metrics: [
      { label: 'Stock-outs eliminated', value: '100%' },
      { label: 'Inventory accuracy', value: '99.5%' },
      { label: 'Ordering efficiency', value: '80% faster' }
    ]
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedic Surgeon',
    location: 'Pune',
    quote: 'Outstanding customer support and regular updates. The team truly understands healthcare workflows. This software has made my practice more efficient.',
    rating: 5,
    metrics: [
      { label: 'Patient satisfaction', value: '35% ↑' },
      { label: 'Revenue growth', value: '25%' },
      { label: 'Support response', value: '<2 hours' }
    ]
  },
  {
    name: 'Dr. Meera Patel',
    specialty: 'Gynecologist',
    location: 'Ahmedabad',
    quote: 'The billing system is GST compliant and makes accounting so much easier. Insurance claim processing is seamless. Excellent value for money.',
    rating: 5,
    metrics: [
      { label: 'Billing errors reduced', value: '90%' },
      { label: 'Claim processing', value: '3x faster' },
      { label: 'Accounting time saved', value: '70%' }
    ]
  }
];

export function SuccessStoriesSection() {
  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="bg-teal-100 text-teal-700 mb-4">Success Stories</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Real results from healthcare professionals
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how 5,000+ doctors across India are transforming their clinics with Appointik
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl border-0">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.specialty}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="grid grid-cols-3 gap-4">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="font-bold text-royal-600 text-lg">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}