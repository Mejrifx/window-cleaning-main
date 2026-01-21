import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, MessageSquare, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();

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
            {t.contactSubtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            {t.contactTitle}
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
                {t.contactInfo}
              </h3>
              
              <div className="space-y-6">
                <a href="tel:+31653853437" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                    <Phone className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">{t.contactPhone}</p>
                    <p className="text-frost font-light">+31 6 53853437</p>
                  </div>
                </a>

                <a href="mailto:contact@verstraete-cleaning.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                    <Mail className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">{t.contactEmail}</p>
                    <p className="text-frost font-light">contact@verstraete-cleaning.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">{t.contactAreas}</p>
                    <p className="text-frost font-light">Transportweg 13-010, 4501 PS Oostburg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="glass-card p-6 rounded-2xl border border-golden/20 bg-golden/5">
              <p className="text-golden text-center font-light">
                {t.contactResponse}
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
                    {t.contactWhatsAppTitle}
                  </h3>
                  <p className="text-frost/60 font-light text-sm">
                    {t.contactWhatsAppDesc}
                  </p>
                </div>

                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfi4yEvRvt1aifJqudkHT0vGUGSeW1-1-G7yGVxrCeu3p4eww/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury text-golden tracking-widest text-sm uppercase font-light flex items-center justify-center gap-3 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                  {t.contactWhatsAppButton}
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.a
              href="https://wa.me/31653853437"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass border border-frost/10 flex items-center justify-center text-frost/60 hover:text-golden hover:border-golden/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/verstraetecleaning"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass border border-frost/10 flex items-center justify-center text-frost/60 hover:text-golden hover:border-golden/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/verstraetecleaning/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass border border-frost/10 flex items-center justify-center text-frost/60 hover:text-golden hover:border-golden/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@verstraetecleaning7862"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass border border-frost/10 flex items-center justify-center text-frost/60 hover:text-golden hover:border-golden/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
