import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payment Successful - Welcome to Appointik',
  description: 'Your payment was successful. Download the app and start managing your clinic efficiently.',
};

export default function PaymentSuccessPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-white shadow-2xl rounded-3xl border-0">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Appointik! Your subscription is now active and you can start managing your clinic efficiently.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-royal-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">Download the Appointik app from Google Play Store</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-700">Set up your clinic profile and preferences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-royal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-700">Start adding patients and scheduling appointments</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-8 py-3 font-semibold"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download App</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-3 border-2 border-gray-200 hover:border-royal-200 font-semibold"
                >
                  <Link href="/support" className="flex items-center space-x-2">
                    <span>Get Support</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-gray-600">
                  Need help getting started? Contact our support team at{' '}
                  <a href="mailto:appointikteam@gmail.com" className="text-royal-600 hover:underline">
                    appointikteam@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+919663144725" className="text-royal-600 hover:underline">
                    +91 96631 44725
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}