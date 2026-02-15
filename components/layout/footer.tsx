import Link from 'next/link';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Appointik', href: 'https://play.google.com/store/apps/details?id=com.samrithtech.appointik' },
    { name: 'Appointik G', href: 'https://play.google.com/store/apps/details?id=com.samrithtech.appointikg' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Integrations', href: '/coming-soon' },
  ],
  solutions: [
    { name: 'Dental Clinics', href: '/specialties/dental' },
    { name: 'Physiotherapy', href: '/specialties/physiotherapy' },
    { name: 'Ayurveda', href: '/specialties/ayurveda' },
    { name: 'Paediatrics', href: '/specialties/paediatrics' },
  ],
  resources: [
    { name: 'Blog', href: '/coming-soon' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Support', href: '/coming-soon' },
    { name: 'Compare', href: '/coming-soon' },
  ],
  company: [
    { name: 'About Us', href: '/coming-soon' },
    { name: 'Contact', href: '/coming-soon' },
    { name: 'Privacy Policy', href: '/coming-soon' },
    { name: 'Terms of Service', href: '/coming-soon' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-royal-500 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Appointik</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Lightweight clinic management software trusted by 5,000+ healthcare professionals across India and beyond.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>appointikteam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 96631 44725</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-royal-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-royal-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-royal-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-royal-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-royal-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Appointik. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>🇮🇳 Made in India</span>
              <span>• HIPAA Grade Security</span>
              <span>• ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}