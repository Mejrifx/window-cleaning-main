import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-frost/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="text-center">
          <p className="text-frost/40 text-sm font-light">
            {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
