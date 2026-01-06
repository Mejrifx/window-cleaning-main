import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import heroImageDark from '@/assets/hero-glass.jpg';
import heroImageLight from '@/assets/hero-glass-light.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const tiltY = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowTitle(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Select image based on theme
  const heroImage = mounted && theme === 'light' ? heroImageLight : heroImageDark;

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
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Logo and title */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        style={{ opacity }}
      >
        {/* Chrome logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 md:mb-8"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-chrome/20 scale-150" />
            <span 
              className="relative text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] chrome-text uppercase font-light text-center"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
              }}
            >
              {t.since}
            </span>
          </div>
        </motion.div>

        {/* Main title with glass-wipe effect */}
        <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showTitle ? 1 : 0 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight sm:tracking-normal md:tracking-wide text-center px-2"
          >
            <span 
              className="chrome-text inline-block"
              style={{
                animation: showTitle ? 'glass-wipe 1.2s ease-out forwards' : 'none',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
              }}
            >
              {t.businessName}
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-frost font-light uppercase text-center px-4 max-w-2xl"
          style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
          }}
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: showTitle ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 sm:mt-8 md:mt-10 h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-chrome to-transparent"
        />

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/31653853437"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="btn-luxury mt-8 sm:mt-10 md:mt-12 text-chrome tracking-widest text-xs sm:text-sm uppercase font-light px-6 sm:px-8 py-2.5 sm:py-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t.heroCta}
        </motion.a>
      </motion.div>

    </section>
  );
};

export default HeroSection;
