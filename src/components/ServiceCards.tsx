import { motion } from 'framer-motion';
import { Building2, Home, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCards = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t.residentialTitle,
      subtitle: t.residentialSubtitle,
      description: t.residentialDesc,
      icon: Home,
    },
    {
      title: t.commercialTitle,
      subtitle: t.commercialSubtitle,
      description: t.commercialDesc,
      icon: Building2,
    },
    {
      title: t.highRiseTitle,
      subtitle: t.highRiseSubtitle,
      description: t.highRiseDesc,
      icon: Building,
    },
  ];
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
          <span className="text-xs tracking-[0.4em] text-golden uppercase">{t.servicesTitle}</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light chrome-text">
            {t.servicesHeader}
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
                </div>

                {/* Edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chrome/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden glass-card border border-frost/10">
            <iframe
              src="https://www.youtube.com/embed/zM8nrS8YUdk"
              title="Verstraete Cleaning Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
