import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 rounded-3xl border border-frost/10 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-golden/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-chrome/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            {/* Section header */}
            <span className="text-xs tracking-[0.3em] text-golden uppercase font-light">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4 mb-8">
              Meet Crystalline
            </h2>

            {/* Content */}
            <div className="space-y-4 text-frost/70 font-light leading-relaxed max-w-2xl mx-auto">
              <p>
                Founded in 2020, Crystalline began with a simple belief: every window deserves to be crystal clear, and every client deserves exceptional service.
              </p>
              <p>
                We're a locally-owned team of trained professionals who take genuine pride in transforming your home or business. With over 500 satisfied clients across the region, we've built our reputation on reliability, attention to detail, and respect for your property.
              </p>
              <p className="text-frost">
                Our values are simple: <span className="text-golden">show up on time</span>, <span className="text-golden">do exceptional work</span>, and <span className="text-golden">leave every client smiling</span>.
              </p>
            </div>

            {/* Signature line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-chrome to-transparent mx-auto"
            />

            <p className="mt-6 text-chrome-dim text-sm tracking-widest uppercase font-light">
              — The Crystalline Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
