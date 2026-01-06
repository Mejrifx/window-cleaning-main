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
              {t.since}
            </span>
          </div>
        </motion.div>

        {/* Main title with glass-wipe effect */}
        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: showTitle ? 1 : 0 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide"
          >
            <span 
              className="chrome-text inline-block"
              style={{
                animation: showTitle ? 'glass-wipe 1.2s ease-out forwards' : 'none',
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
          className="mt-6 text-lg md:text-xl tracking-[0.3em] text-frost/70 font-light uppercase"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: showTitle ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-chrome to-transparent"
        />

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/31653853437"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="btn-luxury mt-12 text-chrome tracking-widest text-sm uppercase font-light"
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
