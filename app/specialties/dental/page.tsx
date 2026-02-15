import { Metadata } from 'next';
import { SpecialtyHero } from '@/components/specialties/specialty-hero';
import { SpecialtyFeatures } from '@/components/specialties/specialty-features';
import { SpecialtyTestimonials } from '@/components/specialties/specialty-testimonials';
import { SpecialtyCTA } from '@/components/specialties/specialty-cta';

export const metadata: Metadata = {
  title: 'Dental Clinic Management Software - Appointik',
  description: 'Complete dental practice management software with appointment scheduling, patient records, treatment plans, and billing. Trusted by dental professionals.',
};

const dentalData = {
  hero: {
    title: 'Complete dental practice management software',
    subtitle: 'Streamline your dental clinic with specialized features for modern dental practices',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { value: '500+', label: 'Dental Clinics' },
      { value: '95%', label: 'Reduced No-Shows' },
      { value: '3 hours', label: 'Daily Time Saved' }
    ]
  },
  features: [
    {
      title: 'Treatment Planning',
      description: 'Create detailed treatment plans with cost estimates and timeline tracking',
      icon: 'FileText',
      benefits: [
        'Visual treatment planning tools',
        'Cost estimation and insurance verification',
        'Progress tracking and follow-up scheduling',
        'Patient education materials integration'
      ]
    },
    {
      title: 'Dental Records Management',
      description: 'Comprehensive dental charts, X-rays, and treatment history',
      icon: 'User',
      benefits: [
        'Digital dental charts and periodontal charts',
        'X-ray and image storage with viewer',
        'Treatment history and notes',
        'Insurance claim management'
      ]
    },
    {
      title: 'Appointment Scheduling',
      description: 'Smart scheduling optimized for dental procedures',
      icon: 'Calendar',
      benefits: [
        'Procedure-based time blocking',
        'Automated appointment reminders',
        'Recall system for regular checkups',
        'Emergency appointment handling'
      ]
    },
    {
      title: 'Billing & Insurance',
      description: 'Streamlined billing with dental insurance support',
      icon: 'CreditCard',
      benefits: [
        'Dental procedure coding (CDT codes)',
        'Insurance pre-authorization tracking',
        'Payment plans and financing options',
        'Automated insurance claim submission'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Dental Surgeon',
      clinic: 'Smile Dental Care, Bangalore',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Appointik has revolutionized our dental practice. The treatment planning tools and automated reminders have eliminated no-shows completely.',
      results: ['95% reduction in no-shows', '30% increase in revenue', '2 hours saved daily']
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Orthodontist',
      clinic: 'Perfect Smile Orthodontics, Mumbai',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The digital charts and X-ray management make patient consultations so much more efficient. Patients love seeing their treatment progress.',
      results: ['50% faster consultations', '40% better patient engagement', '100% digital records']
    }
  ]
};

export default function DentalPage() {
  return (
    <div className="pt-16">
      <SpecialtyHero data={dentalData.hero} />
      <SpecialtyFeatures features={dentalData.features} />
      <SpecialtyTestimonials testimonials={dentalData.testimonials} />
      <SpecialtyCTA specialty="dental" />
    </div>
  );
}