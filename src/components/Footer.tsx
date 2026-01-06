import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-frost/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block"
            >
              <span className="font-display text-2xl font-light tracking-widest chrome-text">
                {t.businessName}
              </span>
            </motion.a>
            <p className="mt-4 text-frost/60 text-sm font-light leading-relaxed">
              {t.footerDescription}
            </p>
            
            {/* Insured badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-golden/20">
              <Shield className="w-4 h-4 text-golden" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase text-golden font-light">
                {t.footerInsured}
              </span>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              {t.footerServiceAreas}
            </h4>
            <div className="flex items-start gap-3 text-frost/60">
              <MapPin className="w-4 h-4 text-golden mt-0.5" strokeWidth={1.5} />
              <span className="text-sm font-light">
                Eurostraat 11, 4513AS Hoofdplaat
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              {t.footerContact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+31653853437" className="flex items-center gap-3 text-frost/60 hover:text-frost transition-colors group">
                  <Phone className="w-4 h-4 text-golden" strokeWidth={1.5} />
                  <span className="text-sm font-light">+31 6 53853437</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@verstraete-cleaning.com" className="flex items-center gap-3 text-frost/60 hover:text-frost transition-colors group">
                  <Mail className="w-4 h-4 text-golden" strokeWidth={1.5} />
                  <span className="text-sm font-light">contact@verstraete-cleaning.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-frost/60">
                  <MapPin className="w-4 h-4 text-golden mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm font-light">
                    Eurostraat 11, 4513AS Hoofdplaat
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              {t.footerFollow}
            </h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg glass border border-frost/10 flex items-center justify-center text-frost/60 hover:text-golden hover:border-golden/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-frost/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-frost/40 text-sm font-light">
            {t.footerCopyright}
          </p>
          <div className="flex gap-6 text-frost/40 text-sm font-light">
            <a href="#" className="hover:text-frost transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-frost transition-colors">{t.footerTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
