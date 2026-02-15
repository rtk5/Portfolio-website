import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Users, Trophy, Lightbulb, Flag } from 'lucide-react';

const timelineEvents = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Registration Opens",
    date: "March 15, 2025",
    description: "Begin your journey by registering your team"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Formation",
    date: "March 20, 2025",
    description: "Find your perfect teammates and brainstorm ideas"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Opening Ceremony",
    date: "March 25, 2025",
    description: "Join us for the grand kickoff and problem statement reveal"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Hacking Begins",
    date: "March 25, 2025",
    description: "48 hours of intense innovation starts now"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Judging Round",
    date: "March 27, 2025",
    description: "Present your solution to our expert panel"
  },
  {
    icon: <Flag className="w-6 h-6" />,
    title: "Awards Ceremony",
    date: "March 28, 2025",
    description: "Celebration and recognition of top projects"
  }
];

const Timeline = () => {
  return (
    <div className="h-full w-full p-8 overflow-y-auto bg-black/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#00FFFF] mb-8">Event Timeline</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#00FFFF]/30"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Event Node */}
                <div className="absolute left-0 w-8 h-8 rounded-full bg-black border-2 border-[#00FFFF] flex items-center justify-center text-[#00FFFF]">
                  {event.icon}
                </div>

                {/* Event Content */}
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-[#00FFFF]">{event.title}</h3>
                  <p className="text-sm text-[#00FFFF]/70 mt-1">{event.date}</p>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;