import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import before1 from '@/assets/before1.jpg';
import after1 from '@/assets/after1.jpg';
import before2 from '@/assets/before2.jpg';
import after2 from '@/assets/after2.jpg';
import before3 from '@/assets/before3.jpg';
import after3 from '@/assets/after3.jpg';
import before4 from '@/assets/before4.jpg';
import after4 from '@/assets/after4.jpg';

const galleryItems = [
  {
    id: 1,
    before: before1,
    after: after1,
    title: 'Reinigen van dakkapellen',
    location: '',
  },
  {
    id: 2,
    before: before2,
    after: after2,
    title: 'Schoonmaak van daken',
    location: '',
  },
  {
    id: 3,
    before: before3,
    after: after3,
    title: 'Schoonmaak van overstekken',
    location: '',
  },
  {
    id: 4,
    before: before4,
    after: after4,
    title: 'Reinigen van gevels',
    location: '',
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({});
  const [hasInteracted, setHasInteracted] = useState<{ [key: number]: boolean }>({});

  const toggleImage = (id: number) => {
    setShowAfter(prev => ({ ...prev, [id]: !prev[id] }));
    setHasInteracted(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
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
            {t.galleryTitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-frost mt-4">
            {t.gallerySubtitle}
          </h2>
          <p className="text-frost/60 mt-4 font-light max-w-xl mx-auto">
            {t.galleryDescription}
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => toggleImage(item.id)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-frost/10 hover:border-frost/20 transition-all duration-500">
                {/* Before image */}
                <motion.img
                  src={item.before}
                  alt={`Before - ${item.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: showAfter[item.id] ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* After image */}
                <motion.img
                  src={item.after}
                  alt={`After - ${item.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: showAfter[item.id] ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-frost font-display text-lg">{item.title}</p>
                      {item.location && <p className="text-frost/50 text-sm font-light">{item.location}</p>}
                    </div>
                    <div className={`px-4 py-2 rounded-full glass border text-xs tracking-widest uppercase font-light transition-all duration-300 ${
                      showAfter[item.id] 
                        ? 'border-golden/50 text-golden' 
                        : 'border-frost/20 text-frost/70'
                    }`}>
                      {showAfter[item.id] ? t.after : t.before}
                    </div>
                  </div>
                </div>

                {/* Tap hint - only show if user hasn't interacted with this image yet */}
                {!hasInteracted[item.id] && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="text-frost text-sm tracking-widest uppercase font-light">
                      {t.galleryTapToToggle}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
