import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Facebook, Instagram, Linkedin } from 'lucide-react';

const serviceAreas = ['Downtown', 'Riverside Heights', 'Hillside', 'Business District', 'Waterfront', 'Suburbs'];

const Footer = () => {
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
                CRYSTALLINE
              </span>
            </motion.a>
            <p className="mt-4 text-frost/60 text-sm font-light leading-relaxed">
              Premium window care for discerning clients. Crystal-clear results, every time.
            </p>
            
            {/* Insured badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-golden/20">
              <Shield className="w-4 h-4 text-golden" strokeWidth={1.5} />
              <span className="text-xs tracking-widest uppercase text-golden font-light">
                Fully Insured
              </span>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map(area => (
                <li key={area}>
                  <span className="text-frost/60 text-sm font-light hover:text-frost transition-colors cursor-default">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-frost/60 hover:text-frost transition-colors group">
                  <Phone className="w-4 h-4 text-golden" strokeWidth={1.5} />
                  <span className="text-sm font-light">+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@crystalline.com" className="flex items-center gap-3 text-frost/60 hover:text-frost transition-colors group">
                  <Mail className="w-4 h-4 text-golden" strokeWidth={1.5} />
                  <span className="text-sm font-light">hello@crystalline.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-frost/60">
                  <MapPin className="w-4 h-4 text-golden mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm font-light">
                    Serving the Greater Metro Area
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-chrome-dim uppercase mb-6">
              Follow Us
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
            © {new Date().getFullYear()} Crystalline Premium Window Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-frost/40 text-sm font-light">
            <a href="#" className="hover:text-frost transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-frost transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
