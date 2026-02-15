import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Globe, Shield, X } from 'lucide-react';

const categories = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & ML",
    description: "Develop innovative solutions using artificial intelligence and machine learning",
    challenges: [
      "Build an AI-powered personal assistant",
      "Create a machine learning model for climate prediction",
      "Develop a natural language processing solution"
    ]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web/App Development",
    description: "Create cutting-edge web and mobile applications",
    challenges: [
      "Design a progressive web app for education",
      "Build a real-time collaboration platform",
      "Develop a sustainable living app"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Tackle modern security challenges and protect digital assets",
    challenges: [
      "Create a secure authentication system",
      "Develop a threat detection solution",
      "Build a privacy-focused communication tool"
    ]
  }
];

const Problems = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-black/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-8">Problem Statements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(index)}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm cursor-pointer 
                         hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-[#00FFFF] mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-[#00FFFF] mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCategory !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-850 p-8 rounded-lg max-w-lg w-full mx-4 relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-[#00FFFF] mb-4">
                  {categories[selectedCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-[#00FFFF] mb-4">
                  {categories[selectedCategory].title}
                </h3>
                <div className="space-y-4">
                  {categories[selectedCategory].challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/10 p-4 rounded-lg"
                    >
                      <p className="text-white">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Problems;