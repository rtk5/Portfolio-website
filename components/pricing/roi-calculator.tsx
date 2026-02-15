'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, Clock, IndianRupee } from 'lucide-react';

export function ROICalculator() {
  const [patientsPerDay, setPatientsPerDay] = useState([25]);
  const [noShowRate, setNoShowRate] = useState([15]);
  const [consultationFee, setConsultationFee] = useState(500);
  const [workingDays, setWorkingDays] = useState(25);

  const calculateROI = () => {
    const dailyPatients = patientsPerDay[0];
    const noShowPercentage = noShowRate[0];
    const monthlySMSCost = 375; // SMS Plan cost
    
    // Calculate losses due to no-shows
    const dailyNoShows = (dailyPatients * noShowPercentage) / 100;
    const monthlyNoShows = dailyNoShows * workingDays;
    const monthlyLossWithoutSMS = monthlyNoShows * consultationFee;
    
    // With SMS reminders, assume 50% reduction in no-shows
    const reducedNoShows = monthlyNoShows * 0.5;
    const monthlySavings = reducedNoShows * consultationFee;
    const netSavings = monthlySavings - monthlySMSCost;
    const roi = ((netSavings / monthlySMSCost) * 100);
    
    return {
      monthlyLoss: monthlyLossWithoutSMS,
      monthlySavings,
      netSavings,
      roi: Math.max(roi, 0),
      paybackDays: monthlySMSCost / (monthlySavings / 30)
    };
  };

  const results = calculateROI();

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Calculate your ROI
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how much you can save by reducing no-shows with automated SMS reminders
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Calculator Inputs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-3xl shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-royal-100 rounded-2xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-royal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Clinic Details</h3>
            </div>

            <div className="space-y-8">
              {/* Patients per day */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Average patients per day: <span className="text-royal-600 font-bold">{patientsPerDay[0]}</span>
                </Label>
                <Slider
                  value={patientsPerDay}
                  onValueChange={setPatientsPerDay}
                  max={100}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5</span>
                  <span>100</span>
                </div>
              </div>

              {/* No-show rate */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Current no-show rate: <span className="text-red-600 font-bold">{noShowRate[0]}%</span>
                </Label>
                <Slider
                  value={noShowRate}
                  onValueChange={setNoShowRate}
                  max={40}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5%</span>
                  <span>40%</span>
                </div>
              </div>

              {/* Consultation fee */}
              <div className="space-y-2">
                <Label htmlFor="consultation-fee" className="text-base font-medium">
                  Average consultation fee (₹)
                </Label>
                <Input
                  id="consultation-fee"
                  type="number"
                  value={consultationFee}
                  onChange={(e) => setConsultationFee(Number(e.target.value))}
                  className="rounded-xl"
                />
              </div>

              {/* Working days */}
              <div className="space-y-2">
                <Label htmlFor="working-days" className="text-base font-medium">
                  Working days per month
                </Label>
                <Input
                  id="working-days"
                  type="number"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(Number(e.target.value))}
                  className="rounded-xl"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-3xl shadow-lg bg-gradient-to-br from-royal-50 to-teal-50 border-royal-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Potential Savings</h3>
            </div>

            <div className="space-y-6">
              {/* Current Loss */}
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                <div className="flex items-center space-x-2 mb-2">
                  <IndianRupee className="w-5 h-5 text-red-600" />
                  <span className="text-red-900 font-medium">Monthly Loss (No-Shows)</span>
                </div>
                <div className="text-2xl font-bold text-red-700">
                  ₹{results.monthlyLoss.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Potential Savings */}
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-green-900 font-medium">Monthly Savings with SMS</span>
                </div>
                <div className="text-2xl font-bold text-green-700">
                  ₹{results.monthlySavings.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Net Benefit */}
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Calculator className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-900 font-medium">Net Monthly Benefit</span>
                </div>
                <div className="text-2xl font-bold text-teal-700">
                  ₹{results.netSavings.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-teal-600 mt-1">
                  After SMS plan cost (₹375/month)
                </div>
              </div>

              {/* ROI */}
              <div className="p-4 bg-royal-50 rounded-2xl border border-royal-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-royal-600" />
                  <span className="text-royal-900 font-medium">Return on Investment</span>
                </div>
                <div className="text-2xl font-bold text-royal-700">
                  {results.roi.toFixed(0)}%
                </div>
                <div className="text-sm text-royal-600 mt-1">
                  Payback in {Math.ceil(results.paybackDays)} days
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Assumptions:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SMS reminders reduce no-shows by 50%</li>
                <li>• Using SMS Plan (₹375/month)</li>
                <li>• Based on industry averages</li>
              </ul>
            </div>

            <Button 
              asChild
              className="w-full mt-6 bg-royal-500 hover:bg-royal-600 text-white rounded-2xl py-3 font-semibold"
            >
              <a href="/pricing">Start Saving Today</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}