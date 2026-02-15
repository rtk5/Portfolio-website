'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  UserCheck, 
  FileText, 
  CreditCard, 
  Pill, 
  Video, 
  Package, 
  Globe, 
  BarChart3,
  CheckCircle
} from 'lucide-react';

const features = [
  {
    id: 'patient-management',
    title: 'Patient Management',
    icon: Users,
    description: 'Complete patient profiles with medical history',
    videoUrl: '/videos/patient-management.mp4',
    features: [
      'Comprehensive patient profiles with photos and contact details',
      'Complete medical history tracking with chronological records',
      'Family medical history and genetic predisposition tracking',
      'Insurance information and claim history management',
      'Document storage for lab reports, X-rays, and other medical files',
      'Patient communication history and preferences',
      'Emergency contact information and medical alerts',
      'Multi-location patient access across clinic branches'
    ]
  },
  {
    id: 'appointment-scheduling',
    title: 'Appointment Scheduling',
    icon: Calendar,
    description: 'Smart scheduling with automated reminders',
    videoUrl: '/videos/appointment-scheduling.mp4',
    features: [
      'Drag-and-drop calendar interface for easy scheduling',
      'Automated SMS and WhatsApp appointment reminders',
      'Online booking portal for patients with real-time availability',
      'Recurring appointment setup for regular patients',
      'Waiting list management with automatic notifications',
      'Multi-doctor scheduling with conflict detection',
      'Appointment type categorization (consultation, follow-up, emergency)',
      'Time slot customization based on appointment types'
    ]
  },
  {
    id: 'doctors-consultants',
    title: 'Doctors & Consultants',
    icon: UserCheck,
    description: 'Multi-doctor practice management',
    videoUrl: '/videos/doctors-management.mp4',
    features: [
      'Multiple doctor profiles with individual schedules',
      'Specialist referral system with tracking',
      'Doctor performance analytics and patient feedback',
      'Individual doctor billing and commission tracking',
      'Consultation notes sharing between doctors',
      'Doctor availability management and leave tracking',
      'Telemedicine integration for remote consultations',
      'Role-based access control for clinic staff'
    ]
  },
  {
    id: 'emr-ehr',
    title: 'EMR/EHR',
    icon: FileText,
    description: 'Electronic medical records system',
    videoUrl: '/videos/emr-system.mp4',
    features: [
      'Comprehensive electronic medical records with templates',
      'Clinical decision support with drug interaction alerts',
      'Progress notes and treatment plan documentation',
      'Vital signs tracking with graphical trends',
      'Lab results integration with normal range indicators',
      'Medical imaging storage and viewer integration',
      'ICD-10 coding support for standardized diagnoses',
      'HIPAA-compliant data storage and access controls'
    ]
  },
  {
    id: 'billing',
    title: 'Billing',
    icon: CreditCard,
    description: 'Integrated billing and payment tracking',
    videoUrl: '/videos/billing-system.mp4',
    features: [
      'GST-compliant invoice generation with automatic calculations',
      'Insurance claim processing and tracking',
      'Multiple payment method support (cash, card, UPI)',
      'Outstanding payments tracking with automated follow-ups',
      'Detailed financial reports and analytics',
      'Discount and package deal management',
      'Recurring billing for subscription-based services',
      'Integration with popular accounting software'
    ]
  },
  {
    id: 'e-prescription',
    title: 'E-Prescription',
    icon: Pill,
    description: 'Digital prescription with drug database',
    videoUrl: '/videos/e-prescription.mp4',
    features: [
      'Comprehensive drug database with dosage recommendations',
      'Drug interaction and allergy checking',
      'Electronic signature integration for legal compliance',
      'Prescription templates for common conditions',
      'Pharmacy integration for direct medication ordering',
      'Prescription history tracking for each patient',
      'Dosage calculation tools for pediatric and geriatric patients',
      'Multi-language prescription support'
    ]
  },
  {
    id: 'online-consultations',
    title: 'Online Consultations',
    icon: Video,
    description: 'Telemedicine and virtual appointments',
    videoUrl: '/videos/telemedicine.mp4',
    features: [
      'Built-in video consultation platform',
      'WhatsApp and Google Meet integration',
      'Screen sharing for reviewing reports and images',
      'Digital prescription delivery during online consultations',
      'Consultation recording for future reference (with consent)',
      'Payment gateway integration for online consultation fees',
      'Waiting room feature for virtual appointments',
      'Technical support for patients during consultations'
    ]
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    icon: Package,
    description: 'Medicine and supplies tracking',
    videoUrl: '/videos/inventory.mp4',
    isNew: true,
    features: [
      'Real-time inventory tracking with automatic stock alerts',
      'Expiry date monitoring with advance notifications',
      'Supplier management with purchase order automation',
      'Barcode scanning for quick inventory updates',
      'Cost tracking and profit margin analysis',
      'Batch number tracking for medicine traceability',
      'Low stock alerts with reorder point customization',
      'Integration with prescription module for automatic stock deduction'
    ]
  },
  {
    id: 'web-portal',
    title: 'Custom Web Portal',
    icon: Globe,
    description: 'Patient portal and online presence',
    videoUrl: '/videos/web-portal.mp4',
    features: [
      'Branded patient portal with your clinic information',
      'Online appointment booking with real-time availability',
      'Patient login for viewing medical history and reports',
      'Prescription and lab report downloads',
      'Appointment history and upcoming appointment reminders',
      'Online consultation booking and payment',
      'Feedback and rating system for quality improvement',
      'SEO-optimized clinic website with contact information'
    ]
  },
  {
    id: 'reports-letters',
    title: 'Reports & Letters',
    icon: BarChart3,
    description: 'Analytics and business intelligence',
    videoUrl: '/videos/reports.mp4',
    features: [
      'Comprehensive business analytics and performance metrics',
      'Patient flow analysis with peak time identification',
      'Revenue reports with detailed breakdown by services',
      'Doctor performance reports and patient satisfaction scores',
      'Medical certificate and referral letter generation',
      'Insurance claim reports and reimbursement tracking',
      'Inventory reports with expiry and reorder analysis',
      'Custom report builder for specific clinic needs'
    ]
  }
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Complete clinic management suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to run a modern healthcare practice, all in one integrated platform
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 h-auto p-1 bg-gray-100 rounded-2xl mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex flex-col items-center p-4 space-y-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-xl transition-all"
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium text-center leading-tight">
                  {feature.title}
                </span>
                {feature.isNew && (
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700 text-xs px-2 py-0">
                    NEW
                  </Badge>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Feature Details */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-royal-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-royal-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        {feature.title}
                        {feature.isNew && (
                          <Badge className="bg-teal-500 hover:bg-teal-600 text-white">
                            NEW
                          </Badge>
                        )}
                      </h2>
                      <p className="text-xl text-gray-600 mt-2">{feature.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <div className="grid gap-3">
                      {feature.features.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature Demo/Video */}
                <div className="relative">
                  <Card className="p-8 bg-gradient-to-br from-gray-50 to-white shadow-2xl rounded-3xl border-0">
                    <div className="aspect-video bg-gradient-to-br from-royal-100 to-teal-100 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                          <Icon className="w-10 h-10 text-royal-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title} Demo
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Interactive demo coming soon
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Floating Feature Badge */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border">
                    <div className="text-sm text-gray-600 mb-1">Feature Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-700">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}