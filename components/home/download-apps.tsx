'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Smartphone, Calendar } from 'lucide-react';

export function DownloadApps() {
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
          Download the App
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get started with our mobile apps designed for healthcare professionals
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Appointik - Main App */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-royal-50 to-blue-50 border-royal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-royal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Appointik – Medical Practice Management App
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Complete clinic management solution with EMR, billing, prescriptions, and patient management. Everything you need to run your practice efficiently.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 mx-auto"
              />
            </a>
          </Card>
        </motion.div>

        {/* Appointik G - Appointment App */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-100 rounded-3xl shadow-lg">
            <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Appointik G – Appointment Scheduling App
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Simplified appointment scheduling app focused on booking and managing patient appointments with automated reminders and calendar sync.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.samrithtech.appointikg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 mx-auto"
              />
            </a>
          </Card>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-royal-600 mb-1">4.7★</div>
            <div className="text-sm text-gray-600">Google Play Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-600 mb-1">5,000+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}