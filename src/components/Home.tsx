import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="title text-6xl md:text-8xl text-center mb-4 glitch-text text-[#00FFFF]"
      >
        Gradient Ascent
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-center mb-12"
      >
        Where You Maximize
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mb-12"
      >
        <div className="text-4xl font-mono mb-2">
          <span className="text-[#00FFFF]">48:00:00</span>
        </div>
        <p className="text-gray-400">Until Launch</p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#00FFFF] text-black px-8 py-4 rounded-full font-bold text-lg mb-12
                 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
      >
        REGISTER NOW
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 flex items-center text-[#00FFFF]"
      >
        <span className="mr-2">Spin Cube to Begin</span>
        <ChevronRight className="animate-bounce" />
      </motion.div>
    </div>
  );
}

export default Home;