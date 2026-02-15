'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Smartphone, MessageSquare, ArrowRight, Globe, MapPin } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    id: 'pay-as-you-go',
    name: 'Pay-As-You-Go',
    icon: Zap,
    description: 'Perfect for small clinics with occasional SMS needs',
    price: {
      monthly: 175,
      annual: 175,
      currency: '₹',
      unit: 'per 100 SMS credits',
      validity: '1-month validity'
    },
    features: [
      'Unlimited appointments and patients',
      'Complete EMR/EHR system',
      'Digital prescriptions',
      'Billing and invoicing',
      'Patient management',
      'Offline capability with sync',
      'Online booking portal',
      'Buy SMS credits as needed',
      'Email support',
      'Data backup and security'
    ],
    smsCredits: 'Buy 100 credits',
    trial: '25 free SMS + 1 week trial',
    region: '🇮🇳 India only',
    popular: false,
    cta: 'Start Free Trial',
    razorpayPlanId: 'pl_NJM96x5IsgKJwt'
  },
  {
    id: 'own-device',
    name: 'Own-Device',
    icon: Smartphone,
    description: 'Use your phone for SMS - most popular choice',
    price: {
      monthly: 175,
      annual: 149, // ~15% discount
      currency: '₹',
      unit: 'per month',
      usdEquivalent: '~$2.5'
    },
    features: [
      'Everything in Pay-As-You-Go',
      'Unlimited SMS via your phone',
      'WhatsApp integration',
      'Multi-device sync',
      'Priority support',
      'Advanced reporting',
      'Custom templates',
      'API access',
      'White-label portal',
      'Extended backup retention'
    ],
    smsCredits: 'Unlimited via your phone',
    trial: '1 month free on annual plan',
    region: '🌎 Available worldwide',
    popular: true,
    cta: 'Start Free Month',
    razorpayPlanId: 'pl_Q1DhFG4bNjunj5'
  },
  {
    id: 'sms-plan',
    name: 'SMS Plan',
    icon: MessageSquare,
    description: 'Includes SMS credits for high-volume practices',
    price: {
      monthly: 375,
      annual: 319, // ~15% discount
      currency: '₹',
      unit: 'per month',
      included: '500 SMS included'
    },
    features: [
      'Everything in Own-Device plan',
      '500 SMS credits included monthly',
      'Automated appointment reminders',
      'Follow-up SMS campaigns',
      'SMS analytics and reporting',
      'Bulk SMS for announcements',
      'SMS templates library',
      'Delivery confirmation',
      'Advanced scheduling',
      'Dedicated account manager'
    ],
    addOns: [
      { name: '250 additional SMS', price: '₹95' },
      { name: '1000 additional SMS', price: '₹350' }
    ],
    smsCredits: '500 SMS included',
    trial: '1 week free trial',
    region: '🇮🇳 India only',
    popular: false,
    cta: 'Start Free Week',
    razorpayPlanId: 'pl_Q1DrVwVzFzSBTE'
  }
];

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = (planId: string, planName: string, amount: number) => {
    if (!isRazorpayLoaded || !window.Razorpay) {
      alert('Payment system is loading. Please try again in a moment.');
      return;
    }

    const options = {
      key: 'rzp_test_9999999999', // Replace with your actual Razorpay key
      subscription_id: planId,
      name: 'Appointik',
      description: `${planName} Subscription`,
      image: '/logo.png',
      handler: function (response: any) {
        // Redirect to success page
        window.open('/payment-success', '_blank');
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#1346FF'
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled');
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your clinic. All plans include core features with flexible SMS options.
        </p>
        
        {/* Annual/Monthly Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-royal-500"
          />
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
            Save 15%
          </Badge>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const price = isAnnual ? plan.price.annual : plan.price.monthly;
          
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`relative p-8 h-full ${
                  plan.popular 
                    ? 'bg-white border-2 border-royal-200 shadow-2xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                } rounded-3xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-royal-500 text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-royal-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      plan.popular ? 'text-royal-600' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price.currency}{price || plan.price.monthly}
                    </span>
                    <span className="text-gray-600">
                      {plan.price.unit}
                    </span>
                  </div>
                  
                  {plan.price.usdEquivalent && (
                    <div className="text-sm text-gray-500 mt-1">
                      {plan.price.usdEquivalent}
                    </div>
                  )}
                  
                  {plan.price.validity && (
                    <div className="text-sm text-gray-500 mt-1">
                      {plan.price.validity}
                    </div>
                  )}

                  {plan.price.included && (
                    <div className="text-sm text-teal-600 font-medium mt-2">
                      {plan.price.included}
                    </div>
                  )}
                </div>

                {/* Key Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">SMS Credits</span>
                    <span className="text-sm font-medium">{plan.smsCredits}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Free Trial</span>
                    <span className="text-sm font-medium">{plan.trial}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm text-gray-600">Availability</span>
                    <span className="text-sm font-medium">{plan.region}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                {plan.addOns && (
                  <div className="mb-8 p-4 bg-teal-50 rounded-2xl">
                    <h4 className="font-medium text-teal-900 mb-3">Add-on Options:</h4>
                    <div className="space-y-2">
                      {plan.addOns.map((addon, addonIndex) => (
                        <div key={addonIndex} className="flex items-center justify-between text-sm">
                          <span className="text-teal-700">{addon.name}</span>
                          <span className="font-medium text-teal-900">{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  onClick={() => handlePayment(plan.razorpayPlanId, plan.name, price || plan.price.monthly)}
                  className={`w-full rounded-2xl py-3 font-semibold ${
                    plan.popular
                      ? 'bg-royal-500 hover:bg-royal-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Card className="p-8 bg-gradient-to-r from-royal-50 to-teal-50 border-royal-100 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer enterprise plans for hospitals and large clinic chains with custom features, dedicated support, and volume discounts.
          </p>
          <Button 
            asChild
            variant="outline" 
            className="border-royal-200 hover:bg-royal-50 rounded-2xl"
          >
            <Link href="/coming-soon">Contact Sales</Link>
          </Button>
        </Card>
      </motion.div>
    </section>
  );
}