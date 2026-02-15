'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface SpecialtyTestimonialsProps {
  testimonials: Array<{
    name: string;
    title: string;
    clinic: string;
    image: string;
    quote: string;
    results: string[];
  }>;
}

export function SpecialtyTestimonials({ testimonials }: SpecialtyTestimonialsProps) {
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
          Success stories from specialists
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how professionals in your field are achieving remarkable results
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full bg-white shadow-lg rounded-3xl border-0">
              <Quote className="w-10 h-10 text-royal-200 mb-6" />
              
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-gray-500">{testimonial.clinic}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center p-3 bg-teal-50 rounded-xl">
                    <div className="text-sm font-medium text-teal-700">
                      {result}
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