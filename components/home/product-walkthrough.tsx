'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  User, 
  FileText, 
  CreditCard, 
  ChevronRight,
  Clock,
  Phone,
  CheckCircle
} from 'lucide-react';

const walkthrough = [
  {
    id: 'appointments',
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Smart scheduling with conflict detection and automated reminders',
    features: ['Drag & drop calendar', 'SMS/WhatsApp reminders', 'Online booking portal'],
    mockData: {
      title: 'Today\'s Schedule',
      items: [
        { time: '9:00 AM', patient: 'Rajesh Kumar', status: 'confirmed', type: 'Consultation' },
        { time: '10:30 AM', patient: 'Priya Sharma', status: 'in-progress', type: 'Follow-up' },
        { time: '12:00 PM', patient: 'Amit Patel', status: 'pending', type: 'New Patient' },
      ]
    }
  },
  {
    id: 'patient',
    icon: User,
    title: 'Patient Management',
    description: 'Complete patient profiles with medical history and treatment plans',
    features: ['Medical history', 'Treatment plans', 'Document storage'],
    mockData: {
      title: 'Patient Profile',
      patient: {
        name: 'Priya Sharma',
        age: '32 years',
        phone: '+91 98765 43210',
        lastVisit: '15 Dec 2024',
        condition: 'Hypertension',
        medications: ['Amlodipine 5mg', 'Losartan 50mg']
      }
    }
  },
  {
    id: 'prescription',
    icon: FileText,
    title: 'Digital Prescriptions',
    description: 'Generate professional prescriptions with drug interaction warnings',
    features: ['Drug database', 'Interaction alerts', 'Digital signatures'],
    mockData: {
      title: 'e-Prescription',
      prescription: {
        doctor: 'Dr. Ravi Mehta',
        patient: 'Priya Sharma',
        date: '20 Dec 2024',
        medications: [
          { name: 'Paracetamol 500mg', dosage: '1-0-1', duration: '5 days' },
          { name: 'Azithromycin 250mg', dosage: '1-0-0', duration: '3 days' }
        ]
      }
    }
  },
  {
    id: 'billing',
    icon: CreditCard,
    title: 'Integrated Billing',
    description: 'Generate invoices, track payments, and manage insurance claims',
    features: ['GST compliance', 'Insurance claims', 'Payment tracking'],
    mockData: {
      title: 'Invoice #INV-2024-001',
      invoice: {
        patient: 'Priya Sharma',
        amount: '₹1,500',
        items: [
          { service: 'Consultation', amount: '₹800' },
          { service: 'ECG', amount: '₹500' },
          { service: 'Medicine', amount: '₹200' }
        ],
        status: 'Paid'
      }
    }
  }
];

export function ProductWalkthrough() {
  const [activeStep, setActiveStep] = useState(0);

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
          See Appointik in action
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From appointment booking to billing - everything flows seamlessly in one integrated platform
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Navigation Steps */}
        <div className="space-y-4">
          {walkthrough.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-royal-50 border-royal-200 shadow-lg' 
                      : 'bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isActive ? 'bg-royal-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isActive ? 'text-royal-900' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-teal-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isActive ? 'rotate-90 text-royal-500' : 'text-gray-400'
                    }`} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mock Interface */}
        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
                {/* Render different interfaces based on active step */}
                {activeStep === 0 && (
                  <AppointmentInterface data={walkthrough[0].mockData} />
                )}
                {activeStep === 1 && (
                  <PatientInterface data={walkthrough[1].mockData} />
                )}
                {activeStep === 2 && (
                  <PrescriptionInterface data={walkthrough[2].mockData} />
                )}
                {activeStep === 3 && (
                  <BillingInterface data={walkthrough[3].mockData} />
                )}
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function AppointmentInterface({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
        <Button size="sm" className="bg-royal-500 hover:bg-royal-600 text-white rounded-xl">
          Add Appointment
        </Button>
      </div>
      <div className="space-y-3">
        {data.items.map((appointment: any, index: number) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-royal-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-royal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{appointment.patient}</div>
                <div className="text-sm text-gray-600">{appointment.time} • {appointment.type}</div>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
              appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
              'bg-yellow-100 text-yellow-700'
            }`}>
              {appointment.status.replace('-', ' ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PatientInterface({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
          PS
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{data.patient.name}</h4>
          <p className="text-gray-600">{data.patient.age} • {data.patient.phone}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-600 mb-1">Last Visit</div>
          <div className="font-medium">{data.patient.lastVisit}</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-600 mb-1">Condition</div>
          <div className="font-medium">{data.patient.condition}</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600 mb-2">Current Medications</div>
        <div className="space-y-2">
          {data.patient.medications.map((med: string, index: number) => (
            <div key={index} className="p-3 bg-teal-50 rounded-lg text-teal-800">
              {med}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrescriptionInterface({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div>Dr. {data.prescription.doctor}</div>
          <div>Patient: {data.prescription.patient}</div>
          <div>Date: {data.prescription.date}</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-600 mb-3">Medications</div>
        <div className="space-y-3">
          {data.prescription.medications.map((med: any, index: number) => (
            <div key={index} className="p-4 border border-gray-200 rounded-xl">
              <div className="font-medium text-gray-900 mb-2">{med.name}</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Dosage: </span>
                  <span className="font-medium">{med.dosage}</span>
                </div>
                <div>
                  <span className="text-gray-600">Duration: </span>
                  <span className="font-medium">{med.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button className="w-full bg-royal-500 hover:bg-royal-600 text-white rounded-xl">
        Generate & Send Prescription
      </Button>
    </div>
  );
}

function BillingInterface({ data }: { data: any }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">{data.title}</h3>
        <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          {data.invoice.status}
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Patient: {data.invoice.patient}
      </div>
      <div className="space-y-3">
        {data.invoice.items.map((item: any, index: number) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-900">{item.service}</span>
            <span className="font-medium">{item.amount}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total Amount</span>
          <span className="text-royal-600">{data.invoice.amount}</span>
        </div>
      </div>
      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-xl">
        Send Invoice
      </Button>
    </div>
  );
}