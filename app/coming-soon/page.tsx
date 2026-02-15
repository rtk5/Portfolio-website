import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coming Soon - Appointik',
  description: 'This feature is coming soon. Stay tuned for updates from Appointik.',
};

export default function ComingSoonPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-white shadow-2xl rounded-3xl border-0">
            <div className="w-20 h-20 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-royal-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We're working hard to bring you this feature. Stay tuned for updates!
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-royal-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">In the meantime:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">Download the Appointik app and start your free trial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-700">Explore our existing features and pricing plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-700">Contact us if you have specific feature requests</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold"
                >
                  <Link href="/" className="flex items-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-3 border-2 border-gray-200 hover:border-royal-200 font-semibold"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download App
                  </a>
                </Button>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4">
                  Have questions or suggestions? We'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a 
                    href="mailto:appointikteam@gmail.com" 
                    className="flex items-center space-x-2 text-royal-600 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    <span>appointikteam@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+919663144725" 
                    className="flex items-center space-x-2 text-royal-600 hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 96631 44725</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}