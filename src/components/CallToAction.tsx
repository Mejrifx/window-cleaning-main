import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-golden/5 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-light text-frost">
            Ready for <span className="chrome-text">Crystal-Clear</span> Windows?
          </h2>
          <p className="text-frost/60 mt-6 font-light text-lg max-w-xl mx-auto">
            Get your free, no-obligation quote today. We respond within hours.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+15551234567"
              className="btn-luxury text-golden tracking-widest text-sm uppercase font-light flex items-center gap-3 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg glass border border-frost/20 text-frost/80 tracking-widest text-sm uppercase font-light flex items-center gap-3 hover:border-frost/40 transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              WhatsApp Us
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-golden/30 bg-golden/10 text-golden tracking-widest text-sm uppercase font-light flex items-center gap-3 hover:bg-golden/20 transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
