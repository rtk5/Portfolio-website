import { Metadata } from 'next';
import { SpecialtyHero } from '@/components/specialties/specialty-hero';
import { SpecialtyFeatures } from '@/components/specialties/specialty-features';
import { SpecialtyTestimonials } from '@/components/specialties/specialty-testimonials';
import { SpecialtyCTA } from '@/components/specialties/specialty-cta';

export const metadata: Metadata = {
  title: 'Ayurveda Clinic Management Software - Appointik',
  description: 'Traditional Ayurveda practice management with Prakriti analysis, herbal prescriptions, and Panchakarma treatment tracking.',
};

const ayurvedaData = {
  hero: {
    title: 'Ayurveda practice management with traditional wisdom',
    subtitle: 'Blend ancient Ayurvedic principles with modern clinic management technology',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { value: '200+', label: 'Ayurveda Clinics' },
      { value: '85%', label: 'Better Treatment Tracking' },
      { value: '2.5 hours', label: 'Daily Time Saved' }
    ]
  },
  features: [
    {
      title: 'Prakriti Assessment',
      description: 'Digital constitution analysis and dosha evaluation tools',
      icon: 'User',
      benefits: [
        'Comprehensive Prakriti questionnaire',
        'Automated dosha analysis',
        'Constitutional type recommendations',
        'Lifestyle and diet suggestions'
      ]
    },
    {
      title: 'Herbal Prescriptions',
      description: 'Extensive database of Ayurvedic medicines and formulations',
      icon: 'Leaf',
      benefits: [
        'Classical formulation database',
        'Herb interaction checking',
        'Dosage calculation by constitution',
        'Seasonal prescription adjustments'
      ]
    },
    {
      title: 'Panchakarma Management',
      description: 'Track detoxification treatments and therapy schedules',
      icon: 'Calendar',
      benefits: [
        'Treatment protocol templates',
        'Therapy scheduling and tracking',
        'Progress monitoring during treatments',
        'Post-treatment follow-up planning'
      ]
    },
    {
      title: 'Pulse Diagnosis Records',
      description: 'Digital documentation of Nadi Pariksha findings',
      icon: 'Heart',
      benefits: [
        'Pulse pattern documentation',
        'Historical pulse analysis',
        'Correlation with symptoms',
        'Treatment response tracking'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Dr. Ramesh Vaidya',
      title: 'Ayurveda Physician',
      clinic: 'Traditional Wellness Center, Rishikesh',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Appointik respects our traditional methods while making clinic management efficient. The Prakriti assessment tool is particularly valuable.',
      results: ['70% more accurate assessments', '50% faster consultations', '90% better record keeping']
    },
    {
      name: 'Dr. Kavitha Sharma',
      title: 'Panchakarma Specialist',
      clinic: 'Ayur Healing Center, Kerala',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The Panchakarma management features help us track complex treatment protocols effectively. Patients appreciate the detailed care.',
      results: ['85% better treatment tracking', '40% improved patient outcomes', '60% more efficient scheduling']
    }
  ]
};

export default function AyurvedaPage() {
  return (
    <div className="pt-16">
      <SpecialtyHero data={ayurvedaData.hero} />
      <SpecialtyFeatures features={ayurvedaData.features} />
      <SpecialtyTestimonials testimonials={ayurvedaData.testimonials} />
      <SpecialtyCTA specialty="ayurveda" />
    </div>
  );
}