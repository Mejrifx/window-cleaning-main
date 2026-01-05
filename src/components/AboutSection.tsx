import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">About Us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            Meet Crystalline
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 glass-card p-8 md:p-12"
        >
          <p className="text-frost/80 text-lg leading-relaxed text-center">
            We're a family-run window cleaning business with over <span className="text-golden font-medium">10 years of experience</span> serving homes and businesses across London. What started as a one-man operation has grown into a trusted team of trained professionals.
          </p>
          <p className="mt-6 text-frost/60 text-center leading-relaxed">
            We take pride in our work, show up when we say we will, and treat every property—whether a small flat or a large office block—with the same care and attention. Our reputation is built on reliability, quality, and honest pricing.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-frost/10">
            <div className="text-center">
              <Award className="w-8 h-8 text-golden mx-auto mb-3" />
              <p className="text-2xl font-display text-frost">10+</p>
              <p className="text-frost/50 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-golden mx-auto mb-3" />
              <p className="text-2xl font-display text-frost">2,000+</p>
              <p className="text-frost/50 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-golden mx-auto mb-3" />
              <p className="text-2xl font-display text-frost">100%</p>
              <p className="text-frost/50 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
