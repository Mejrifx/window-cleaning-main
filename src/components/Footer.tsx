import { Phone, Mail, MapPin, Shield, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const serviceAreas = ['Kensington', 'Chelsea', 'Fulham', 'Hammersmith', 'Notting Hill', 'Wimbledon', 'Richmond', 'Putney'];

  return (
    <footer className="relative py-16 px-4 md:px-8 border-t border-frost/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl chrome-text mb-4">Crystalline</h3>
            <p className="text-frost/50 text-sm leading-relaxed mb-4">
              Premium window cleaning for homes and businesses across London.
            </p>
            <div className="flex items-center gap-2 text-golden text-sm">
              <Shield className="w-4 h-4" />
              <span>Fully Insured</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-frost font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+447123456789" className="flex items-center gap-2 text-frost/60 hover:text-golden transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  07123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:hello@crystalline.co.uk" className="flex items-center gap-2 text-frost/60 hover:text-golden transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  hello@crystalline.co.uk
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-frost/60 text-sm">
                  <MapPin className="w-4 h-4" />
                  Greater London
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-frost font-medium mb-4">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map(area => (
                <li key={area} className="text-frost/50 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-frost font-medium mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-lg glass border border-frost/10 text-frost/60 hover:text-golden hover:border-golden/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg glass border border-frost/10 text-frost/60 hover:text-golden hover:border-golden/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-frost/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-frost/40 text-sm">
            © {new Date().getFullYear()} Crystalline Window Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-frost/40 hover:text-frost/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-frost/40 hover:text-frost/70 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
