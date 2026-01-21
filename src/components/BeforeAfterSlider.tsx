import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import beforeImage from '@/assets/before-dirty.png';
import afterImage from '@/assets/after-clean.jpg';

const BeforeAfterSlider = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle global mouse up to stop dragging
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <section className="relative py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-light chrome-text">
            {t.beforeAfterTitle}
          </h2>
          <p className="mt-6 text-frost/50 font-light max-w-xl mx-auto">
            {t.beforeAfterSubtitle}
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/2] max-w-4xl mx-auto cursor-ew-resize rounded-lg overflow-hidden glass-card select-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* Before image (dirty - full background on right) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <img 
              src={beforeImage} 
              alt="Dirty window view"
              className="h-full w-full object-contain select-none"
              draggable={false}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>

          {/* After image (clean - clipped from left) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={afterImage} 
              alt="Clean window view"
              className="h-full w-full object-contain select-none"
              draggable={false}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>

          {/* Divider line */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-frost/50 z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 w-2 -translate-x-1/2 bg-frost/20 blur-sm" />
          </div>

          {/* Drag handle */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <motion.div 
              className="relative"
              animate={{ scale: isDragging ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-golden/30 blur-xl scale-150" />
              
              {/* Handle */}
              <div className="relative w-14 h-14 rounded-full glass border border-frost/30 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-chrome/70 rounded-full" />
                  <div className="w-0.5 h-4 bg-chrome/70 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none select-none">
            <span className="px-3 py-1 text-xs tracking-[0.2em] text-frost/70 uppercase glass rounded-full">
              {t.before}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 z-10 pointer-events-none select-none">
            <span className="px-3 py-1 text-xs tracking-[0.2em] text-frost/70 uppercase glass rounded-full">
              {t.after}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
