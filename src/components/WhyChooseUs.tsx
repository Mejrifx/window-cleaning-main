import { motion } from 'framer-motion';
import { Clock, Shield, Leaf, MapPin, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Reliable & On-Time',
    description: 'We show up when we say we will. Every single time.'
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete public liability coverage for your peace of mind.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Pure water technology. Safe for your family, pets, and plants.'
  },
  {
    icon: MapPin,
    title: 'Local & Trusted',
    description: 'Your neighbours already use us. We know this area.'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll come back and fix it. No questions asked."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-muted/30" id="why-us">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Why Us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            Why Choose Crystalline
          </h2>
          <p className="mt-4 text-frost/50 font-light max-w-lg mx-auto">
            Not just another window cleaner
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex p-4 rounded-full bg-golden/10 text-golden mb-4">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-frost mb-2">{reason.title}</h3>
              <p className="text-frost/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
