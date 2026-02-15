import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-black/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-6">About the Hackathon</h2>
        
        <div className="space-y-6 text-white">
          <p className="text-lg leading-relaxed">
            Welcome to our innovative hackathon experience! We bring together creative minds, 
            technical expertise, and groundbreaking ideas in a unique virtual environment.
          </p>

          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-[#00FFFF] mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To foster innovation, collaboration, and technological advancement by providing 
              a platform where developers, designers, and innovators can come together to create 
              solutions that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-[#00FFFF] mb-3">Who Can Participate?</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Students</li>
                <li>Professional Developers</li>
                <li>UI/UX Designers</li>
                <li>Product Managers</li>
                <li>Tech Enthusiasts</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-[#00FFFF] mb-3">What to Expect</h4>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Engaging Challenges</li>
                <li>Mentorship Opportunities</li>
                <li>Networking Events</li>
                <li>Workshops & Learning Sessions</li>
                <li>Amazing Prizes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-[#00FFFF] mb-4">Why Join Us?</h3>
            <p className="text-gray-200">
              This isn't just another hackathon – it's an opportunity to push boundaries, 
              learn new skills, and make meaningful connections in the tech community. 
              Whether you're a seasoned developer or just starting your journey, 
              there's a place for you here.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;