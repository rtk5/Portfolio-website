import { Metadata } from 'next';
import { SpecialtyHero } from '@/components/specialties/specialty-hero';
import { SpecialtyFeatures } from '@/components/specialties/specialty-features';
import { SpecialtyTestimonials } from '@/components/specialties/specialty-testimonials';
import { SpecialtyCTA } from '@/components/specialties/specialty-cta';

export const metadata: Metadata = {
  title: 'Physiotherapy Clinic Management Software - Appointik',
  description: 'Specialized physiotherapy practice management with exercise tracking, progress monitoring, and treatment planning. Perfect for physio clinics.',
};

const physiotherapyData = {
  hero: {
    title: 'Physiotherapy practice management made simple',
    subtitle: 'Specialized tools for physiotherapists to track patient progress and manage treatments effectively',
    image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { value: '300+', label: 'Physio Clinics' },
      { value: '80%', label: 'Better Progress Tracking' },
      { value: '4 hours', label: 'Weekly Time Saved' }
    ]
  },
  features: [
    {
      title: 'Exercise Prescription',
      description: 'Create and track customized exercise programs for each patient',
      icon: 'Activity',
      benefits: [
        'Exercise library with video demonstrations',
        'Customizable exercise programs',
        'Progress tracking and adjustments',
        'Home exercise plan generation'
      ]
    },
    {
      title: 'Progress Monitoring',
      description: 'Track patient improvements with detailed assessments',
      icon: 'TrendingUp',
      benefits: [
        'Range of motion measurements',
        'Pain scale tracking over time',
        'Functional assessment tools',
        'Progress reports for patients and doctors'
      ]
    },
    {
      title: 'Treatment Planning',
      description: 'Comprehensive treatment plans with goal setting',
      icon: 'Target',
      benefits: [
        'SMART goal setting framework',
        'Treatment protocol templates',
        'Session planning and notes',
        'Outcome measurement tracking'
      ]
    },
    {
      title: 'Equipment Management',
      description: 'Track equipment usage and maintenance schedules',
      icon: 'Package',
      benefits: [
        'Equipment booking and scheduling',
        'Maintenance reminder system',
        'Usage analytics and reporting',
        'Inventory management for supplies'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Dr. Meera Patel',
      title: 'Physiotherapist',
      clinic: 'Rehab Plus, Delhi',
      image: 'https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The progress tracking features help me provide better care. Patients can see their improvement clearly, which motivates them to continue treatment.',
      results: ['90% better treatment tracking', '60% improved patient compliance', '3 hours saved weekly']
    },
    {
      name: 'Dr. Arjun Singh',
      title: 'Sports Physiotherapist',
      clinic: 'Active Recovery Center, Pune',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The exercise prescription module is fantastic. I can create detailed programs and track patient compliance easily.',
      results: ['75% better exercise compliance', '50% faster treatment planning', '40% more efficient sessions']
    }
  ]
};

export default function PhysiotherapyPage() {
  return (
    <div className="pt-16">
      <SpecialtyHero data={physiotherapyData.hero} />
      <SpecialtyFeatures features={physiotherapyData.features} />
      <SpecialtyTestimonials testimonials={physiotherapyData.testimonials} />
      <SpecialtyCTA specialty="physiotherapy" />
    </div>
  );
}