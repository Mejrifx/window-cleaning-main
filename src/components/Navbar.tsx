import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { t } = useLanguage();
  
  const navLinks = [
    { label: t.navServices, href: '#services' },
    { label: t.navWhyUs, href: '#why-us' },
    { label: t.navGallery, href: '#gallery' },
    { label: t.navProcess, href: '#process' },
    { label: t.navAbout, href: '#about' },
    { label: t.navContact, href: '#contact' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'frosted-bar py-3' 
            : 'py-6'
        }`}
        style={{
          backdropFilter: isScrolled ? undefined : 'blur(8px)',
          WebkitBackdropFilter: isScrolled ? undefined : 'blur(8px)',
          backgroundColor: isScrolled 
            ? undefined 
            : 'hsl(var(--glass-dark) / 0.15)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Logo - Hidden on mobile */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="relative group flex-shrink-0 hidden md:block"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg md:text-xl font-light tracking-widest chrome-text">
                VERSTRAETE
              </span>
              <span className="font-display text-lg md:text-xl font-light tracking-widest chrome-text">
                CLEANING
              </span>
            </div>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-golden to-transparent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Mobile Toggles - Show on mobile only, in place of logo */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="relative px-3 py-2 group whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className={`text-xs tracking-[0.15em] uppercase font-light transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-golden'
                    : 'text-frost/60 group-hover:text-frost'
                }`}>
                  {link.label}
                </span>
                
                {/* Active indicator */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-golden"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === link.href.replace('#', '') ? '60%' : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-golden/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Desktop Language Toggle & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full glass border border-frost/20 flex items-center justify-center text-chrome-dim"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 glass border-l border-frost/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left py-4 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-golden/10 text-golden'
                        : 'text-frost/70 hover:bg-frost/5 hover:text-frost'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-sm tracking-[0.15em] uppercase font-light">
                      {link.label}
                    </span>
                  </motion.button>
                ))}

                <div className="mt-6 space-y-3">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
