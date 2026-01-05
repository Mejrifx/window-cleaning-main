import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const serviceTypes = [
  'Residential',
  'Commercial',
  'High-Rise',
  'One-Time Clean',
  'Regular Maintenance',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            Request Your Free Quote
          </h2>
        </motion.div>

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
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a href="tel:+15551234567" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                    <Phone className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">Phone</p>
                    <p className="text-frost font-light">+1 (555) 123-4567</p>
                  </div>
                </a>

                <a href="mailto:hello@crystalline.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center group-hover:border-golden/40 transition-colors">
                    <Mail className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">Email</p>
                    <p className="text-frost font-light">hello@crystalline.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass border border-golden/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-golden" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-frost/50 text-sm font-light">Service Areas</p>
                    <p className="text-frost font-light">Downtown, Riverside, Hillside & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="glass-card p-6 rounded-2xl border border-golden/20 bg-golden/5">
              <p className="text-golden text-center font-light">
                ⚡ We respond to all inquiries within 2 hours during business hours
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-frost/10 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.2em] text-chrome-dim uppercase mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-frost/10 text-frost placeholder:text-frost/30 focus:border-golden/50 focus:outline-none transition-colors font-light"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs tracking-[0.2em] text-chrome-dim uppercase mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-frost/10 text-frost placeholder:text-frost/30 focus:border-golden/50 focus:outline-none transition-colors font-light"
                  placeholder="Your phone number"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-xs tracking-[0.2em] text-chrome-dim uppercase mb-2">
                  Address / Postcode *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-frost/10 text-frost placeholder:text-frost/30 focus:border-golden/50 focus:outline-none transition-colors font-light"
                  placeholder="Your address or postcode"
                />
              </div>

              {/* Service type */}
              <div>
                <label htmlFor="service" className="block text-xs tracking-[0.2em] text-chrome-dim uppercase mb-2">
                  Type of Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-frost/10 text-frost focus:border-golden/50 focus:outline-none transition-colors font-light appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background">Select a service</option>
                  {serviceTypes.map(service => (
                    <option key={service} value={service} className="bg-background">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs tracking-[0.2em] text-chrome-dim uppercase mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-frost/10 text-frost placeholder:text-frost/30 focus:border-golden/50 focus:outline-none transition-colors font-light resize-none"
                  placeholder="Any additional details..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className={`w-full py-4 rounded-lg border transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitted
                    ? 'border-green-500/50 bg-green-500/10 text-green-400'
                    : 'btn-luxury border-golden/30 text-golden'
                }`}
                whileHover={!isSubmitted ? { scale: 1.01 } : {}}
                whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-sm tracking-widest uppercase font-light">
                      Message Sent!
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-sm tracking-widest uppercase font-light">
                      Get My Free Quote
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
