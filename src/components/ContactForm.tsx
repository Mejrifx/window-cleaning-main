import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  phone: z.string().trim().min(1, 'Phone is required').max(20),
  postcode: z.string().trim().min(1, 'Postcode is required').max(10),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().max(500).optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    postcode: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section className="relative py-24 px-4 md:px-8 bg-muted/30" id="quote">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-golden mx-auto mb-6" />
            <h3 className="font-display text-3xl text-frost mb-4">Thank You!</h3>
            <p className="text-frost/60">
              We've received your request and will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 px-4 md:px-8 bg-muted/30" id="quote">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            Request a Quote
          </h2>
          <p className="mt-4 text-frost/50 font-light">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-frost/70 mb-2">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/50 border border-frost/10 rounded-lg text-frost placeholder:text-frost/30 focus:outline-none focus:border-golden/50 transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm text-frost/70 mb-2">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/50 border border-frost/10 rounded-lg text-frost placeholder:text-frost/30 focus:outline-none focus:border-golden/50 transition-colors"
                placeholder="07xxx xxxxxx"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            {/* Postcode */}
            <div>
              <label htmlFor="postcode" className="block text-sm text-frost/70 mb-2">Postcode *</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/50 border border-frost/10 rounded-lg text-frost placeholder:text-frost/30 focus:outline-none focus:border-golden/50 transition-colors"
                placeholder="SW1A 1AA"
              />
              {errors.postcode && <p className="mt-1 text-sm text-red-400">{errors.postcode}</p>}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm text-frost/70 mb-2">Service Type *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/50 border border-frost/10 rounded-lg text-frost focus:outline-none focus:border-golden/50 transition-colors"
              >
                <option value="" className="bg-background">Select a service</option>
                <option value="residential" className="bg-background">Residential Cleaning</option>
                <option value="commercial" className="bg-background">Commercial Cleaning</option>
                <option value="interior-exterior" className="bg-background">Interior & Exterior</option>
                <option value="gutter-fascia" className="bg-background">Gutter & Fascia</option>
                <option value="regular" className="bg-background">Regular Cleans</option>
                <option value="other" className="bg-background">Other</option>
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-frost/70 mb-2">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-background/50 border border-frost/10 rounded-lg text-frost placeholder:text-frost/30 focus:outline-none focus:border-golden/50 transition-colors resize-none"
                placeholder="Any additional details..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-luxury flex items-center justify-center gap-2 text-frost hover:text-golden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span className="tracking-wide">Get My Free Quote</span>
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
