import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-frost/20 text-frost/70 hover:text-frost hover:border-frost/40 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" strokeWidth={1.5} />
      <span className="text-xs tracking-widest uppercase font-light">
        {language === 'en' ? 'NL' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;


