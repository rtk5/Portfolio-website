import { Metadata } from 'next';
import { SpecialtyHero } from '@/components/specialties/specialty-hero';
import { SpecialtyFeatures } from '@/components/specialties/specialty-features';
import { SpecialtyTestimonials } from '@/components/specialties/specialty-testimonials';
import { SpecialtyCTA } from '@/components/specialties/specialty-cta';

export const metadata: Metadata = {
  title: 'Pediatric Clinic Management Software - Appointik',
  description: 'Child-friendly clinic management with growth tracking, vaccination schedules, and parent communication tools. Perfect for pediatricians.',
};

const paediatricsData = {
  hero: {
    title: 'Pediatric practice management for growing children',
    subtitle: 'Specialized tools for pediatricians to track child development and manage family care',
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [
      { value: '400+', label: 'Pediatric Clinics' },
      { value: '95%', label: 'Vaccination Compliance' },
      { value: '3.5 hours', label: 'Daily Time Saved' }
    ]
  },
  features: [
    {
      title: 'Growth Tracking',
      description: 'Monitor child development with WHO growth charts and milestones',
      icon: 'TrendingUp',
      benefits: [
        'WHO growth chart integration',
        'Developmental milestone tracking',
        'Growth percentile calculations',
        'Visual growth trend analysis'
      ]
    },
    {
      title: 'Vaccination Management',
      description: 'Complete immunization tracking and reminder system',
      icon: 'Shield',
      benefits: [
        'National immunization schedule',
        'Automated vaccination reminders',
        'Vaccine inventory management',
        'Adverse event tracking'
      ]
    },
    {
      title: 'Parent Communication',
      description: 'Keep parents informed with detailed reports and reminders',
      icon: 'MessageSquare',
      benefits: [
        'Parent portal access',
        'Development report sharing',
        'Appointment reminders to parents',
        'Educational content delivery'
      ]
    },
    {
      title: 'Pediatric Dosing',
      description: 'Age and weight-based medication dosing calculations',
      icon: 'Calculator',
      benefits: [
        'Weight-based dosing calculator',
        'Age-appropriate medication database',
        'Pediatric formulation preferences',
        'Safety alerts for children'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Dr. Sunita Rao',
      title: 'Pediatrician',
      clinic: 'Little Angels Clinic, Bangalore',
      image: 'https://images.pexels.com/photos/5207267/pexels-photo-5207267.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The growth tracking and vaccination reminders have made my practice so much more efficient. Parents love the detailed reports.',
      results: ['95% vaccination compliance', '80% better growth monitoring', '50% fewer missed appointments']
    },
    {
      name: 'Dr. Amit Gupta',
      title: 'Child Specialist',
      clinic: 'Happy Kids Clinic, Chennai',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The pediatric dosing calculator ensures medication safety. The parent communication features have improved family engagement significantly.',
      results: ['100% dosing accuracy', '70% better parent engagement', '60% more efficient consultations']
    }
  ]
};

export default function PaediatricsPage() {
  return (
    <div className="pt-16">
      <SpecialtyHero data={paediatricsData.hero} />
      <SpecialtyFeatures features={paediatricsData.features} />
      <SpecialtyTestimonials testimonials={paediatricsData.testimonials} />
      <SpecialtyCTA specialty="paediatrics" />
    </div>
  );
}