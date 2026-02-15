import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, HelpCircle } from 'lucide-react';

const FAQs = [
  {
    question: "How do I register for the hackathon?",
    answer: "Click the 'Register Now' button on the home page and follow the instructions to create your team and submit your details."
  },
  {
    question: "What team size is allowed?",
    answer: "Teams can have 2-4 members. Solo participation is also allowed but team participation is encouraged."
  },
  {
    question: "Is this a virtual or in-person event?",
    answer: "This is a hybrid event. You can participate either virtually or join us at our venue."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any other devices you need. For in-person participants, we'll provide food and refreshments."
  }
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-black/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-[#00FFFF] mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF] h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00FFFF] text-black font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors duration-300"
              >
                <Send className="w-4 h-4 inline-block mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Quick Contact */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[#00FFFF] mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-[#00FFFF]" />
                  <span>support@gradientascent.dev</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-[#00FFFF]" />
                  <span>+91 (123) 456-7890</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageSquare className="w-5 h-5 mr-3 text-[#00FFFF]" />
                  <span>@GradientAscent</span>
                </div>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[#00FFFF] mb-6">
                <HelpCircle className="w-6 h-6 inline-block mr-2" />
                FAQs
              </h2>
              <div className="space-y-4">
                {FAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-0 pb-4">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full text-left flex justify-between items-center text-gray-300 hover:text-white"
                    >
                      <span>{faq.question}</span>
                      <span className="transform transition-transform duration-200">
                        {openFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-gray-400 mt-2 pl-4"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;