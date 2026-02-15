'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Pallavi Matta',
    specialty: 'General Physician',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Appointik has transformed how I manage my clinic. The offline capability is a game-changer during network issues, and my patients love the online booking system.',
    rating: 5,
    metric: 'Reduced no-shows by 45%'
  },
  {
    name: 'Dr. Gokula Kannan',
    specialty: 'Cardiologist',
    location: 'Chennai',
    image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The EMR system is intuitive and the prescription module saves me hours every day. Patient records are always accessible and well-organized.',
    rating: 5,
    metric: 'Saves 3 hours daily'
  },
  {
    name: 'Dr. Thabani Thata',
    specialty: 'Pediatrician',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Perfect for small clinics like mine. The pricing is very reasonable and the features are exactly what I need. Highly recommended for fellow practitioners.',
    rating: 5,
    metric: 'Increased efficiency by 60%'
  },
  {
    name: 'Dr. Sunita Rao',
    specialty: 'Dermatologist',
    location: 'Bangalore',
    image: 'https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The inventory management feature is excellent. I can track all my supplies and get alerts when stock is low. Everything is so well integrated.',
    rating: 5,
    metric: 'Zero stock-outs since adoption'
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedic Surgeon',
    location: 'Pune',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Outstanding customer support and regular updates. The team truly understands healthcare workflows. This software has made my practice more efficient.',
    rating: 5,
    metric: 'Patient satisfaction up 35%'
  },
  {
    name: 'Dr. Meera Patel',
    specialty: 'Gynecologist',
    location: 'Ahmedabad',
    image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The billing system is GST compliant and makes accounting so much easier. Insurance claim processing is seamless. Excellent value for money.',
    rating: 5,
    metric: 'Billing errors reduced by 90%'
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-container bg-gradient-to-br from-royal-50 to-teal-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by healthcare professionals across India
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See what doctors are saying about their experience with Appointik
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main Testimonial */}
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white shadow-lg hover:shadow-xl focus-outline"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-white shadow-lg hover:shadow-xl focus-outline"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all focus-outline ${
                index === currentIndex
                  ? 'bg-royal-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative overflow-hidden rounded-2xl aspect-square focus-outline ${
              index === currentIndex ? 'ring-2 ring-royal-500' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover transition-all group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
                <div className="font-medium truncate">{testimonial.name}</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="p-8 md:p-12 bg-white shadow-2xl border-0">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Quote Content */}
        <div className="space-y-6">
          <Quote className="w-12 h-12 text-royal-200" />
          
          <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="flex items-center space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <div className="space-y-2">
            <div className="font-semibold text-gray-900 text-lg">
              {testimonial.name}
            </div>
            <div className="text-gray-600">
              {testimonial.specialty} • {testimonial.location}
            </div>
            <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
              {testimonial.metric}
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-900/20 to-transparent"></div>
          </div>
          
          {/* Floating Metric Card */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border">
            <div className="text-2xl font-bold text-royal-600">⭐ 5.0</div>
            <div className="text-sm text-gray-600">Patient Rating</div>
          </div>
        </div>
      </div>
    </Card>
  );
}