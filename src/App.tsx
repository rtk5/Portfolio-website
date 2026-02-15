import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, RotateCcw } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import Problems from './components/Problems';
import Prizes from './components/Prizes';
import Contact from './components/Contact';

type CubeRotation = {
  x: number;
  y: number;
};

function App() {
  const [rotation, setRotation] = useState<CubeRotation>({ x: 0, y: 0 });
  const [currentFace, setCurrentFace] = useState('front');
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          rotateCube('left');
          break;
        case 'ArrowRight':
          rotateCube('right');
          break;
        case 'ArrowUp':
          rotateCube('up');
          break;
        case 'ArrowDown':
          rotateCube('down');
          break;
        case 'Escape':
          resetCube();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotation]);

  const rotateCube = (direction: string) => {
    const newRotation = { ...rotation };
    
    switch (direction) {
      case 'left':
        newRotation.y = rotation.y - 90;
        setCurrentFace('right');
        break;
      case 'right':
        newRotation.y = rotation.y + 90;
        setCurrentFace('left');
        break;
      case 'up':
        newRotation.x = rotation.x - 90;
        setCurrentFace('bottom');
        break;
      case 'down':
        newRotation.x = rotation.x + 90;
        setCurrentFace('top');
        break;
    }

    setRotation(newRotation);
  };

  const resetCube = () => {
    setRotation({ x: 0, y: 0 });
    setCurrentFace('front');
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPosition.x;
    const deltaY = e.clientY - startPosition.y;

    if (Math.abs(deltaX) > 100) {
      rotateCube(deltaX > 0 ? 'left' : 'right');
      setIsDragging(false);
    } else if (Math.abs(deltaY) > 100) {
      rotateCube(deltaY > 0 ? 'up' : 'down');
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0a0a0a]">
      <div className="cosmic-background" />
      <div className="grid-lines" />
      
      {/* Navigation Controls */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => rotateCube('left')}
          className="p-2 rounded-full bg-black/50 border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/20"
        >
          <ArrowLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => rotateCube('right')}
          className="p-2 rounded-full bg-black/50 border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/20"
        >
          <ArrowRight />
        </motion.button>
      </div>

      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => rotateCube('up')}
          className="p-2 rounded-full bg-black/50 border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/20"
        >
          <ArrowUp />
        </motion.button>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => rotateCube('down')}
          className="p-2 rounded-full bg-black/50 border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/20"
        >
          <ArrowDown />
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={resetCube}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/50 border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/20"
      >
        <RotateCcw />
      </motion.button>

      <div
        className="cube-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="cube-face front neon-border">
            <Home />
          </div>
          <div className="cube-face back neon-border">
            <Timeline />
          </div>
          <div className="cube-face right neon-border">
            <About />
          </div>
          <div className="cube-face left neon-border">
            <Problems />
          </div>
          <div className="cube-face top neon-border">
            <Prizes />
          </div>
          <div className="cube-face bottom neon-border">
            <Contact />
          </div>
        </div>
      </div>

      {/* Mini Cube Map */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/50 p-2 rounded-lg border border-[#00FFFF]">
        <div className="text-[#00FFFF] text-xs">Current Face:</div>
        <div className="text-white font-bold">{currentFace.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default App;