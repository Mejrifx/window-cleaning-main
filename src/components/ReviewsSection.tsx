import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    area: 'Kensington',
    rating: 5,
    text: "Best window cleaners we've ever had. They're punctual, professional, and the results are incredible. Been using them for 2 years now."
  },
  {
    name: 'James T.',
    area: 'Chelsea',
    rating: 5,
    text: "Finally found a reliable window cleaner! They actually turn up when they say they will. Windows have never looked better."
  },
  {
    name: 'Linda P.',
    area: 'Fulham',
    rating: 5,
    text: "Transformed my conservatory. I can actually see through the glass now! Friendly team and very reasonable prices."
  },
  {
    name: 'Michael B.',
    area: 'Notting Hill',
    rating: 5,
    text: "Professional from start to finish. They cleaned frames and sills without me even asking. Highly recommend."
  },
  {
    name: 'Emma W.',
    area: 'Hammersmith',
    rating: 5,
    text: "Quick, efficient, and left no mess. The eco-friendly approach is a bonus. Will definitely use again."
  },
  {
    name: 'David R.',
    area: 'Wimbledon',
    rating: 5,
    text: "Our office windows look brand new. Great for business image. Staff love the natural light now."
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-golden text-golden' : 'text-frost/20'}`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8" id="reviews">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] text-chrome-dim uppercase">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light chrome-text">
            What Our Customers Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            <span className="text-frost/70 text-sm">5.0 on Google Reviews</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-frost/10" />
              <StarRating rating={review.rating} />
              <p className="mt-4 text-frost/70 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-frost/10">
                <p className="text-frost font-medium">{review.name}</p>
                <p className="text-frost/50 text-xs">{review.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
