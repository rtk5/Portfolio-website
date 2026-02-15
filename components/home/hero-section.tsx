'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-royal-50 text-royal-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 5,000+ healthcare professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Run your clinic on{' '}
              <span className="text-royal-500">autopilot</span>
              —appointments, EMR & billing in one lightweight app.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Loved by 5,000+ healthcare professionals across India & beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all focus-outline"
              >
                <Link href="/pricing" className="flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="rounded-2xl px-8 py-3 border-2 border-gray-200 hover:border-royal-200 font-semibold focus-outline"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch 90-sec Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.7 on Google Play</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>HIPAA-grade encryption</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mock App Screenshot */}
              <div className="bg-gradient-to-br from-royal-500 to-teal-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Today's Appointments</h3>
                  <div className="bg-white/20 rounded-lg px-3 py-1 text-sm">
                    12 patients
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { time: '9:00 AM', patient: 'Rajesh Kumar', status: 'Confirmed' },
                    { time: '10:30 AM', patient: 'Priya Sharma', status: 'In Progress' },
                    { time: '11:45 AM', patient: 'Dr. Consultation', status: 'Pending' },
                  ].map((appointment, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-xl p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{appointment.patient}</div>
                        <div className="text-white/70 text-sm">{appointment.time}</div>
                      </div>
                      <div className="bg-teal-400 text-teal-900 px-3 py-1 rounded-full text-xs font-medium">
                        {appointment.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-teal-500 text-white rounded-2xl p-4 shadow-lg"
            >
              <div className="text-sm font-medium">Revenue This Month</div>
              <div className="text-2xl font-bold">₹2,45,000</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border"
            >
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-royal-600">98%</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1346FF_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
    </section>
  );
}