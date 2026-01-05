import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import beforeImage from '@/assets/before-dirty.jpg';
import afterImage from '@/assets/after-clean.jpg';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
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
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">The Transformation</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light chrome-text">
            Witness The Difference
          </h2>
          <p className="mt-6 text-frost/50 font-light max-w-xl mx-auto">
            Drag to reveal the stunning transformation. Watch as grime dissolves into crystal clarity.
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] cursor-ew-resize rounded-lg overflow-hidden glass-card"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After image (clean - full background) */}
          <div className="absolute inset-0">
            <img 
              src={afterImage} 
              alt="Clean window view"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          {/* Before image (dirty - clipped from left) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={beforeImage} 
              alt="Dirty window view"
              className="h-full w-full object-cover"
              draggable={false}
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
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 text-xs tracking-[0.2em] text-frost/70 uppercase glass rounded-full">
              Before
            </span>
          </div>
          <div className="absolute bottom-4 right-4 z-10">
            <span className="px-3 py-1 text-xs tracking-[0.2em] text-frost/70 uppercase glass rounded-full">
              After
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
