import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '@/assets/hero-glass.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTitle, setShowTitle] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const tiltY = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image with parallax tilt */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale,
          rotateX: tiltY,
          transformPerspective: 1000,
          transformOrigin: "center bottom"
        }}
      >
        <img 
          src={heroImage} 
          alt="Pristine glass reflecting golden hour cityscape"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Logo and title */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ opacity }}
      >
        {/* Chrome logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-chrome/20 scale-150" />
            <span className="relative text-sm md:text-base tracking-[0.4em] text-chrome-dim uppercase font-light">
              Established 2024
            </span>
          </div>
        </motion.div>

        {/* Main title with glass-wipe effect */}
        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showTitle ? 1 : 0 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide"
          >
            <span 
              className="chrome-text inline-block"
              style={{
                animation: showTitle ? 'glass-wipe 1.2s ease-out forwards' : 'none',
              }}
            >
              CRYSTALLINE
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 text-lg md:text-xl tracking-[0.3em] text-frost/70 font-light uppercase"
        >
          Premium Window Care
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: showTitle ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-chrome to-transparent"
        />

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="btn-luxury mt-12 text-chrome tracking-widest text-sm uppercase font-light"
        >
          Discover Excellence
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-chrome-dim uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-chrome/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
