import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, Calendar, Clock, CheckCircle } from 'lucide-react';

const ContactBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = [
    { day: 'Mon', date: '30' },
    { day: 'Tue', date: '31' },
    { day: 'Wed', date: '1' },
    { day: 'Thu', date: '2' },
    { day: 'Fri', date: '3' },
  ];

  const times = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className="h-20" />

      {/* Fixed bar */}
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ 
              y: 20, 
              opacity: 0,
              filter: "blur(10px)",
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50"
          >
            <div className="frosted-bar py-4 px-6 md:px-12">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Contact info */}
                <div className="flex items-center gap-8 md:gap-12">
                  <a 
                    href="tel:+1234567890"
                    className="group flex items-center gap-3 text-frost/70 hover:text-frost transition-colors"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-golden/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Phone className="relative w-5 h-5 text-chrome-dim group-hover:text-golden transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="hidden md:inline text-sm tracking-wide font-light">
                      +1 (555) 123-4567
                    </span>
                  </a>

                  <a 
                    href="mailto:concierge@crystalline.com"
                    className="group flex items-center gap-3 text-frost/70 hover:text-frost transition-colors"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-golden/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Mail className="relative w-5 h-5 text-chrome-dim group-hover:text-golden transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="hidden md:inline text-sm tracking-wide font-light">
                      concierge@crystalline.com
                    </span>
                  </a>
                </div>

                {/* Book button */}
                <motion.button
                  onClick={() => setIsExpanded(true)}
                  className="btn-luxury text-chrome tracking-widest text-xs uppercase font-light flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  <span className="hidden sm:inline">Book Consultation</span>
                  <span className="sm:hidden">Book</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="calendar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50"
          >
            {/* Ripple effect container */}
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-ice/20"
            />

            <div className="frosted-bar py-8 px-6 md:px-12">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-display text-2xl font-light text-frost">
                      Schedule Your Consultation
                    </h3>
                    <p className="text-sm text-frost/50 mt-1 font-light">
                      Select a date and time that works for you
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    className="w-10 h-10 rounded-full glass border border-frost/20 flex items-center justify-center text-chrome-dim hover:text-frost transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" strokeWidth={1.5} />
                  </motion.button>
                </div>

                {/* Date selection */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-chrome-dim" strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.2em] text-chrome-dim uppercase">Select Date</span>
                  </div>
                  <div className="flex gap-3">
                    {dates.map((d) => (
                      <motion.button
                        key={d.date}
                        onClick={() => setSelectedDate(d.date)}
                        className={`flex-1 py-4 rounded-lg glass border transition-all duration-300 ${
                          selectedDate === d.date 
                            ? 'border-golden/50 bg-golden/10' 
                            : 'border-frost/10 hover:border-frost/30'
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-xs text-frost/50 uppercase tracking-wide">{d.day}</div>
                        <div className={`text-lg font-display mt-1 ${
                          selectedDate === d.date ? 'text-golden' : 'text-frost'
                        }`}>
                          {d.date}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Time selection */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-chrome-dim" strokeWidth={1.5} />
                    <span className="text-xs tracking-[0.2em] text-chrome-dim uppercase">Select Time</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {times.map((time) => (
                      <motion.button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-6 py-3 rounded-lg glass border transition-all duration-300 ${
                          selectedTime === time 
                            ? 'border-golden/50 bg-golden/10' 
                            : 'border-frost/10 hover:border-frost/30'
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className={`text-sm ${
                          selectedTime === time ? 'text-golden' : 'text-frost/70'
                        }`}>
                          {time}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Confirm button */}
                <motion.button
                  className={`w-full py-4 rounded-lg border transition-all duration-300 flex items-center justify-center gap-3 ${
                    selectedDate && selectedTime
                      ? 'btn-luxury border-golden/30 text-golden'
                      : 'border-frost/10 text-frost/30 cursor-not-allowed'
                  }`}
                  whileHover={selectedDate && selectedTime ? { scale: 1.01 } : {}}
                  whileTap={selectedDate && selectedTime ? { scale: 0.99 } : {}}
                  disabled={!selectedDate || !selectedTime}
                >
                  <CheckCircle className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-sm tracking-widest uppercase font-light">
                    Confirm Appointment
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBar;
