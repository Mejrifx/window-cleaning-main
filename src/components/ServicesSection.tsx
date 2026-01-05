import { motion } from 'framer-motion';
import { Home, Building2, Layers, Frame, Calendar, Droplets } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    benefit: 'Streak-free windows that let natural light flood your home',
    price: 'From £40'
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    benefit: 'Professional appearance that impresses clients and staff',
    price: 'Free Quote'
  },
  {
    icon: Layers,
    title: 'Interior & Exterior',
    benefit: 'Complete inside-out clean for maximum clarity',
    price: 'From £60'
  },
  {
    icon: Frame,
    title: 'Frames & Sills',
    benefit: 'Deep clean of all frames, tracks, and sills included',
    price: 'Included'
  },
  {
    icon: Calendar,
    title: 'Regular Cleans',
    benefit: 'Scheduled visits so you never have to think about it',
    price: 'Save 15%'
  },
  {
    icon: Droplets,
    title: 'Gutter & Fascia',
    benefit: 'Clear gutters and spotless fascias protect your property',
    price: 'From £80'
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">What We Do</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            Our Services
          </h2>
          <p className="mt-4 text-frost/50 font-light max-w-lg mx-auto">
            Professional window cleaning for every need
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card p-6 hover:border-chrome/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-golden/10 text-golden group-hover:bg-golden/20 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-frost mb-2">{service.title}</h3>
                  <p className="text-frost/60 text-sm leading-relaxed mb-3">
                    {service.benefit}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs tracking-wider text-golden bg-golden/10 rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
