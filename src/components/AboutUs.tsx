import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 rounded-3xl border border-frost/10 relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-golden/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-chrome/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            {/* Section header */}
            <span className="text-xs tracking-[0.3em] text-golden uppercase font-light">
              {t.aboutSubtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4 mb-8">
              {t.aboutTitle}
            </h2>

            {/* Content */}
            <div className="space-y-4 text-frost/70 font-light leading-relaxed max-w-2xl mx-auto">
              <p>
                {t.aboutContent1}
              </p>
              <p>
                {t.aboutContent2}
              </p>
              <p className="text-frost">
                {t.aboutContent3}
              </p>
            </div>

            {/* Signature line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-chrome to-transparent mx-auto"
            />

            <p className="mt-6 text-chrome-dim text-sm tracking-widest uppercase font-light">
              {t.aboutTeam}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
