import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-ice/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-golden/5 blur-3xl" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">The Art of Clarity</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light chrome-text">
            Perfection In Motion
          </h2>
        </motion.div>

        {/* Video container - simulated with animated elements */}
        <motion.div
          style={{ opacity }}
          className="relative aspect-video rounded-lg overflow-hidden glass-card"
        >
          {/* Simulated video with CSS animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-glass-dark to-background">
            {/* City silhouette background */}
            <div className="absolute inset-0 flex items-end justify-center opacity-30">
              <div className="flex items-end gap-2 mb-8">
                {[60, 80, 50, 90, 70, 85, 55, 75, 65, 95, 45, 80].map((height, i) => (
                  <div 
                    key={i}
                    className="bg-chrome/30"
                    style={{ 
                      width: '12px', 
                      height: `${height}%`,
                      borderRadius: '2px 2px 0 0'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Water droplet animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ y: -200, opacity: 0 }}
                animate={{ 
                  y: [null, 0, 150],
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeIn"
                }}
              >
                {/* Droplet */}
                <div className="relative">
                  <div className="w-4 h-6 bg-gradient-to-b from-frost/80 to-ice/60 rounded-full shadow-lg" 
                    style={{ 
                      clipPath: 'ellipse(50% 70% at 50% 70%)',
                      boxShadow: '0 0 20px hsl(200 50% 85% / 0.5)'
                    }}
                  />
                  {/* Highlight */}
                  <div className="absolute top-1 left-1 w-1.5 h-2 bg-frost/90 rounded-full blur-sm" />
                </div>
              </motion.div>
            </div>

            {/* Focus transition effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/50"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-frost/5 via-transparent to-transparent" />

          {/* Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-20 h-20 rounded-full glass border border-frost/20 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-0 h-0 border-l-[14px] border-l-frost/80 border-y-[10px] border-y-transparent ml-1" />
            </motion.div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-frost/60 font-light italic">
              "A single drop traces its path down pristine glass, the city below snapping into perfect focus..."
            </p>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 text-frost/40 font-light tracking-wide"
        >
          Every window tells a story of meticulous care
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
