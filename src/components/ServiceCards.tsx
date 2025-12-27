import { motion } from 'framer-motion';
import { Building2, Home, Building } from 'lucide-react';

const services = [
  {
    title: "Residential",
    subtitle: "Private Estates & Homes",
    description: "Bespoke window care for discerning homeowners. Every pane receives meticulous attention.",
    icon: Home,
  },
  {
    title: "Commercial",
    subtitle: "Office & Retail Spaces",
    description: "Elevate your business presence. Crystal-clear facades that reflect your commitment to excellence.",
    icon: Building2,
  },
  {
    title: "High-Rise",
    subtitle: "Architectural Monuments",
    description: "Specialized teams for the city's most demanding structures. No height is beyond our reach.",
    icon: Building,
  },
];

const ServiceCards = () => {
  return (
    <section className="relative py-32 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Our Services</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light chrome-text">
            Precision Crafted Care
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="group relative h-[420px] glass-card shimmer-hover cursor-pointer overflow-hidden"
                whileHover={{ 
                  y: -12,
                  boxShadow: "0 30px 80px hsl(200 30% 5% / 0.5)"
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Glass highlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-frost/5 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className="mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 blur-xl bg-golden/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <service.icon 
                        className="relative w-12 h-12 text-chrome-dim group-hover:text-chrome transition-colors duration-500" 
                        strokeWidth={1}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-3xl font-light text-frost mb-2">
                    {service.title}
                  </h3>
                  <span className="text-xs tracking-[0.2em] text-golden/80 uppercase mb-6">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-frost/60 font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Bottom line */}
                  <div className="mt-8 pt-6 border-t border-frost/10">
                    <span className="text-xs tracking-[0.3em] text-chrome-dim uppercase group-hover:text-chrome transition-colors duration-500 flex items-center gap-3">
                      Explore
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>

                {/* Edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chrome/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
