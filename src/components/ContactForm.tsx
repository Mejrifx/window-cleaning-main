import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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
              <WhatsAppIcon className="w-5 h-5" />
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
