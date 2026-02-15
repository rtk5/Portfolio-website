import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Briefcase } from 'lucide-react';

const Prizes = () => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-black/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-8">Prize Pool</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Prize */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative bg-gradient-to-b from-[#FFD700]/20 to-transparent 
                       p-6 rounded-lg border border-[#FFD700] backdrop-blur-sm"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Trophy className="w-12 h-12 text-[#FFD700]" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-[#FFD700]">First Prize</h3>
              <p className="text-4xl font-bold mt-4">₹5,000</p>
              <p className="text-gray-400 mt-2">Radiant</p>
            </div>
          </motion.div>

          {/* Second Prize */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-b from-[#C0C0C0]/20 to-transparent 
                       p-6 rounded-lg border border-[#C0C0C0] backdrop-blur-sm"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Award className="w-12 h-12 text-[#C0C0C0]" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-[#C0C0C0]">Second Prize</h3>
              <p className="text-4xl font-bold mt-4">₹3,000</p>
              <p className="text-gray-400 mt-2">Immortal</p>
            </div>
          </motion.div>

          {/* Third Prize */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-b from-[#CD7F32]/20 to-transparent 
                       p-6 rounded-lg border border-[#CD7F32] backdrop-blur-sm"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Medal className="w-12 h-12 text-[#CD7F32]" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-[#CD7F32]">Third Prize</h3>
              <p className="text-4xl font-bold mt-4">₹2,000</p>
              <p className="text-gray-400 mt-2">Diamond</p>
            </div>
          </motion.div>
        </div>

        {/* Internship Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-[#00FFFF] mr-4" />
            <h3 className="text-2xl font-bold text-[#00FFFF]">Internship Opportunities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Summer Internship Program</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• 3-month paid internship</li>
                <li>• Mentorship from industry experts</li>
                <li>• Real-world project experience</li>
                <li>• Flexible work hours</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Research Fellowship</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• 6-month research position</li>
                <li>• Publication opportunities</li>
                <li>• Access to advanced resources</li>
                <li>• Industry connections</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Prizes;