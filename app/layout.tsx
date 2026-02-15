import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Appointik - Lightweight Clinic Management Software',
    default: 'Appointik - Run Your Clinic on Autopilot',
  },
  description: 'Lightweight clinic management software loved by 5,000+ healthcare professionals. Appointments, EMR & billing in one app. Starting at ₹175/month.',
  keywords: [
    'clinic management software',
    'appointment scheduling',
    'EMR software',
    'healthcare software',
    'clinic software India',
    'patient management',
    'medical billing software',
  ],
  authors: [{ name: 'Appointik' }],
  creator: 'Appointik',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://appointik.com',
    title: 'Appointik - Run Your Clinic on Autopilot',
    description: 'Lightweight clinic management software loved by 5,000+ healthcare professionals. Appointments, EMR & billing in one app.',
    siteName: 'Appointik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Appointik - Clinic Management Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appointik - Run Your Clinic on Autopilot',
    description: 'Lightweight clinic management software loved by 5,000+ healthcare professionals.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}