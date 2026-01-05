import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Mitchell',
    location: 'Downtown',
    rating: 5,
    text: "Absolutely flawless work. They cleaned every window in our high-rise apartment, and the difference is stunning. Professional, punctual, and worth every penny.",
    source: 'Google',
  },
  {
    name: 'James & Emily Carter',
    location: 'Riverside Heights',
    rating: 5,
    text: "We've tried other services before, but Crystalline is in a different league. The attention to detail is remarkable—even cleaned the frames and sills.",
    source: 'Google',
  },
  {
    name: 'Michael Thompson',
    location: 'Business District',
    rating: 5,
    text: "Our office building has never looked better. The team was efficient, respectful of our workspace, and the results speak for themselves. Highly recommend.",
    source: 'Google',
  },
  {
    name: 'Lisa Park',
    location: 'Hillside',
    rating: 5,
    text: "Finally found a window cleaner I can trust. They arrive on time, use eco-friendly products, and leave my home spotless. Booking them quarterly now.",
    source: 'Google',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--chrome) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

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
            Client Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            Trusted by Hundreds
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-golden fill-golden" />
            ))}
            <span className="ml-2 text-frost/70 text-sm font-light">5.0 on Google</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card p-8 rounded-2xl border border-frost/10 hover:border-frost/20 transition-all duration-500 h-full relative">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-chrome/20" strokeWidth={1} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden fill-golden" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-frost/80 font-light leading-relaxed mb-6 text-sm md:text-base">
                  "{review.text}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-frost font-display text-lg">{review.name}</p>
                    <p className="text-frost/50 text-sm font-light">{review.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-frost/40 text-xs">
                    <span>via {review.source}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://google.com/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-chrome-dim hover:text-golden transition-colors text-sm tracking-widest uppercase font-light"
          >
            View All Reviews
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
