import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck, Sparkles, Smile } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Request a Quote',
    description: 'Call, text, or fill out our form. Takes 30 seconds.'
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'We Confirm',
    description: 'We agree on a time and price that works for you.'
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'We Clean',
    description: 'Our team arrives on time and gets to work.'
  },
  {
    icon: Smile,
    step: '04',
    title: 'You Enjoy',
    description: 'Crystal-clear windows. That simple.'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-muted/30" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Simple Process</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            How It Works
          </h2>
          <p className="mt-4 text-frost/50 font-light max-w-lg mx-auto">
            Four easy steps to sparkling windows
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-frost/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number background */}
                <div className="relative z-10 inline-flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-golden/20 blur-xl scale-150" />
                    <div className="relative w-20 h-20 rounded-full glass border border-frost/20 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-golden" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-golden/50 flex items-center justify-center">
                      <span className="text-xs font-medium text-golden">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-frost">{step.title}</h3>
                  <p className="mt-2 text-frost/50 text-sm">
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
