import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-golden uppercase font-light">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            Request Your Free Quote
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl border border-frost/10">
                <h3 className="font-display text-2xl font-light text-frost mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <a href="tel:+15551234567" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                      <Phone className="w-5 h-5 text-golden" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-frost/50 text-sm font-light">Phone</p>
                      <p className="text-frost font-light">+1 (555) 123-4567</p>
                    </div>
                  </a>

                  <a href="mailto:hello@crystalline.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                      <Mail className="w-5 h-5 text-golden" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-frost/50 text-sm font-light">Email</p>
                      <p className="text-frost font-light">hello@crystalline.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-golden" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-frost/50 text-sm font-light">Service Areas</p>
                      <p className="text-frost font-light">Downtown, Riverside, Hillside & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response promise */}
              <div className="glass-card p-6 rounded-2xl border border-golden/20 bg-golden/5">
                <p className="text-golden text-center font-light">
                  ⚡ We respond to all inquiries within 2 hours during business hours
                </p>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card p-8 rounded-2xl border border-frost/10 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full glass border border-golden/30 flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-golden" strokeWidth={1.5} />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-2xl font-light text-frost mb-3">
                    Get Your Free Quote
                  </h3>
                  <p className="text-frost/60 font-light text-sm">
                    Contact us via WhatsApp for instant response and personalized service
                  </p>
                </div>

                <motion.a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury text-golden tracking-widest text-sm uppercase font-light flex items-center justify-center gap-3 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  Message Us on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
