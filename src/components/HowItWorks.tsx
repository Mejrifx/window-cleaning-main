import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles, Smile } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      number: '02',
      icon: Calendar,
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      number: '03',
      icon: Sparkles,
      title: t.step3Title,
      description: t.step3Desc,
    },
    {
      number: '04',
      icon: Smile,
      title: t.step4Title,
      description: t.step4Desc,
    },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-golden/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-golden uppercase font-light">
            {t.howItWorksHeader}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            {t.howItWorksTitle}
          </h2>
          <p className="text-frost/60 mt-4 font-light max-w-xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chrome/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="glass-card p-8 rounded-2xl border border-frost/10 hover:border-golden/30 transition-all duration-500 text-center relative overflow-hidden h-full">
                  {/* Shimmer */}
                  <div className="absolute inset-0 shimmer-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step number */}
                  <motion.div
                    className="relative mb-6 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-20 h-20 rounded-full glass border border-golden/20 flex items-center justify-center mx-auto relative">
                      <span className="font-display text-2xl text-golden">{step.number}</span>
                      <step.icon className="absolute -bottom-1 -right-1 w-8 h-8 p-1.5 rounded-full bg-background border border-golden/30 text-golden" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-golden/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  <h3 className="font-display text-xl font-light text-frost mb-3 relative">
                    {step.title}
                  </h3>
                  <p className="text-sm text-frost/60 font-light leading-relaxed relative">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
