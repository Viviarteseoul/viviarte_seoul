import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import cinematicImage from 'figma:asset/bb068fc4e141b4e0ebb5c29089c9f7440dc948f5.png';
import logoImage from 'figma:asset/13bbee455f2109812acb3904553d19f3671c613d.png';

export function IntroPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Cinematic Background Image - 15 Second Slow Zoom Out */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.2 }}
        animate={{ scale: isLoaded ? 1 : 1.2 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <img
          src={cinematicImage}
          alt="Viviarte Seoul Intro"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Logo — centered, moved up from bottom */}
      <div className="absolute inset-x-0 bottom-[28%] sm:bottom-[20%] z-10 px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Link
              to="/home"
              className="group relative inline-block cursor-pointer"
            >
              <h1 className="text-white text-5xl md:text-8xl tracking-[0.06em] font-light transition-all duration-700 group-hover:opacity-80 text-center">
                VIVIARTE SEOUL
              </h1>
            </Link>
          </motion.div>

          {/* Click hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 text-white/60 text-xs tracking-[0.3em] uppercase"
          >
            Click to Enter
          </motion.p>
        </div>
      </div>
    </div>
  );
}