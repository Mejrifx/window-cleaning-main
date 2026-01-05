import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-golden/5 blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Ready?</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light chrome-text">
            Get Your Free Quote
          </h2>
          <p className="mt-6 text-frost/60 max-w-lg mx-auto">
            No obligation. No pressure. Just honest pricing for spotless windows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+447123456789"
            className="btn-luxury flex items-center gap-3 text-frost hover:text-golden transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="tracking-wide">07123 456 789</span>
          </a>
          
          <a
            href="https://wa.me/447123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury flex items-center gap-3 text-frost hover:text-golden transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="tracking-wide">WhatsApp Us</span>
          </a>
          
          <a
            href="mailto:hello@crystalline.co.uk"
            className="btn-luxury flex items-center gap-3 text-frost hover:text-golden transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="tracking-wide">Email Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
