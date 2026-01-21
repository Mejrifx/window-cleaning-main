import { motion } from 'framer-motion';
import { Droplets, Sun, Blinds, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Custom Gutter Icon - represents an actual gutter with downspout (used for window cleaning)
const GutterIcon = ({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Roof edge above gutter */}
    <path d="M2 6 L22 6" />
    {/* Horizontal gutter channel (U-shaped trough) - front view */}
    <path d="M2 8 L2 10 L22 10 L22 8" />
    {/* Bottom of gutter channel */}
    <path d="M2 10 L22 10" />
    {/* Downspout pipe coming down from center of gutter */}
    <path d="M12 10 L12 18" />
    {/* Downspout opening/elbow at bottom */}
    <path d="M12 18 L14 20" />
    <path d="M10 20 L14 20" />
  </svg>
);

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: GutterIcon,
      title: t.featureReliable,
      description: t.featureReliableDesc,
    },
    {
      icon: Droplets,
      title: t.featureInsured,
      description: t.featureInsuredDesc,
    },
    {
      icon: Sun,
      title: t.featureEco,
      description: t.featureEcoDesc,
    },
    {
      icon: Blinds,
      title: t.featureLocal,
      description: t.featureLocalDesc,
    },
    {
      icon: Building2,
      title: t.featureSatisfaction,
      description: t.featureSatisfactionDesc,
    },
  ];
  return (
    <section id="why-us" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-golden/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-golden uppercase font-light">
            {t.whyChooseUsTitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            {t.whyChooseUsSubtitle}
          </h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-chrome to-transparent mx-auto" />
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full rounded-2xl border border-frost/10 hover:border-golden/30 transition-all duration-500 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-14 h-14 rounded-xl glass border border-golden/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-golden" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-golden/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                <h3 className="font-display text-xl font-light text-frost mb-3 relative">
                  {feature.title}
                </h3>
                <p className="text-sm text-frost/60 font-light leading-relaxed relative">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
