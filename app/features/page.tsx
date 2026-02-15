import { Metadata } from 'next';
import { FeaturesSection } from '@/components/features/features-section';

export const metadata: Metadata = {
  title: 'Features - Complete Clinic Management Suite',
  description: 'Explore all features of Appointik: Patient Management, Appointment Scheduling, EMR/EHR, Billing, E-Prescription, and more.',
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <FeaturesSection />
    </div>
  );
}