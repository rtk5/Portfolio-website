'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! All plans come with free trials. Pay-As-You-Go includes 25 free SMS and 1 week trial. Own-Device plan offers 1 month free on annual subscription. SMS Plan includes 1 week free trial with full access to all features.'
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. If you switch from a higher to lower plan, the change will take effect at your next billing cycle. Upgrades are effective immediately with pro-rated billing.'
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data is always yours. If you cancel, you can export all your patient data, appointments, and records in standard formats. We provide 30 days after cancellation to download your data before permanent deletion.'
  },
  {
    question: 'Do you offer discounts for multiple clinics?',
    answer: 'Yes! We offer volume discounts for multiple clinic locations. Contact our sales team for custom pricing if you have 3+ clinics. Enterprise plans include centralized management and reporting across all locations.'
  },
  {
    question: 'Is my clinic data secure and compliant?',
    answer: 'Security is our top priority. We use bank-grade encryption, HIPAA-compliant infrastructure, and Indian data centers. All data is encrypted at rest and in transit. We also maintain regular security audits and certifications.'
  },
  {
    question: 'Can I use Appointik offline?',
    answer: 'Yes! Appointik works completely offline. You can manage appointments, add patient records, create prescriptions, and generate bills without internet. Everything syncs automatically when you\'re back online.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including UPI, debit/credit cards, net banking, and digital wallets. International customers can pay via Stripe with credit cards. All payments are processed securely.'
  },
  {
    question: 'How does the SMS system work?',
    answer: 'Pay-As-You-Go uses our SMS gateway with credit-based system. Own-Device plan uses your personal phone to send SMS (no per-SMS charges). SMS Plan includes 500 SMS credits monthly through our gateway with delivery confirmations.'
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Yes! We provide comprehensive onboarding, training videos, and 24/7 support via chat, email, and phone. SMS Plan includes dedicated account manager support. We also have an extensive knowledge base and video tutorials.'
  },
  {
    question: 'Can patients book appointments online?',
    answer: 'Yes! Each clinic gets a branded online booking portal where patients can see real-time availability and book appointments 24/7. The portal is mobile-optimized and can be embedded on your website or shared via link.'
  }
];

export function PricingFAQ() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently asked questions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about our pricing and plans
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="p-8 rounded-3xl shadow-lg bg-white border-0">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-royal-50 data-[state=open]:border-royal-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-royal-600 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </motion.div>

      {/* Still have questions CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Card className="p-8 bg-gradient-to-r from-teal-50 to-blue-50 border-teal-100 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you choose the right plan for your clinic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@appointik.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl font-medium transition-colors"
            >
              Email Support
            </a>
            <a 
              href="tel:+918040404040"
              className="inline-flex items-center justify-center px-6 py-3 border border-teal-200 hover:bg-teal-50 text-teal-700 rounded-2xl font-medium transition-colors"
            >
              Call Us
            </a>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}