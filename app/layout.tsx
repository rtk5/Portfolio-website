import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Rithvik Matta | Cyberpunk Developer Portfolio',
  description: 'Software Engineer, CTF Creator, ML Enthusiast - Welcome to the digital frontier',
  keywords: ['developer', 'software engineer', 'cybersecurity', 'machine learning', 'portfolio'],
  authors: [{ name: 'Rithvik Matta' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00aaff',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-cyber-dark text-cyber-primary min-h-screen`}>
        <div className="relative min-h-screen bg-cyber-grid bg-grid scan-lines">
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}