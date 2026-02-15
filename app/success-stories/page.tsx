import { Metadata } from 'next';
import { SuccessStoriesSection } from '@/components/success-stories/success-stories-section';
import { CaseStudiesGrid } from '@/components/success-stories/case-studies-grid';
import { MetricsOverview } from '@/components/success-stories/metrics-overview';

export const metadata: Metadata = {
  title: 'Success Stories - Real Results from Healthcare Professionals',
  description: 'Discover how 5,000+ healthcare professionals are transforming their clinics with Appointik. Read testimonials and case studies.',
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-16">
      <SuccessStoriesSection />
      <MetricsOverview />
      <CaseStudiesGrid />
    </div>
  );
}