import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useNavigate } from "react-router";
import {
  Music2,
  Mic2,
  Volume2,
  Headphones,
  Star,
  ArrowRight,
  CalendarCheck2,
  MapPin,
} from "lucide-react";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1763420952993-23a57c37c2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    label: "Concert Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    label: "Conference Event",
  },
  {
    src: "https://images.unsplash.com/photo-1770022006699-fd19b7c58244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    label: "Wedding Celebration",
  },
];

const equipment = [
  {
    icon: <Volume2 size={20} />,
    name: "Admark ADM-PA2 Line Arrays",
    desc: "2000W RMS line array tower systems",
  },
  {
    icon: <Music2 size={20} />,
    name: "Admark ADM-15S Subwoofers",
    desc: "1200W peak bass reinforcement units",
  },
  {
    icon: <Mic2 size={20} />,
    name: "Wireless Microphone Sets",
    desc: "Shure, Sennheiser, and AKG mics",
  },
  {
    icon: <Headphones size={20} />,
    name: "Digital Mixing Consoles",
    desc: "Yamaha & Allen & Heath sound boards",
  },
];

const admarkHighlights = [
  {
    label: "ADM-15S Subwoofer",
    power: "1200W Peak",
    img: "https://images.unsplash.com/photo-1645536729519-134e3b7e9e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
  },
  {
    label: "ADM-PA2 Line Array",
    power: "2000W RMS",
    img: "https://images.unsplash.com/photo-1634041322596-61ff0de5af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
  },
  {
    label: "ADM-C12 Concert",
    power: "800W Program",
    img: "https://images.unsplash.com/photo-1587817020884-6a2f41f97e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300",
  },
];

const eventTypes = [
  "Weddings & Introductions",
  "Corporate Events",
  "Concerts & Gigs",
  "Birthday Parties",
  "Church Services",
  "School Events",
  "Political Rallies",
  "Sports Events",
];

export function EventsSound() {
  const navigate = useNavigate();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        id="events"
        className="py-24 bg-[#09232E] relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/3 w-96 h-80 bg-[#a855f7]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a855f7]/15 border border-[#a855f7]/30 rounded-full text-[#a855f7] text-sm font-medium mb-4">
              <Music2 size={14} /> Sound & Events Division
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              Premium Sound Systems &<br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                Professional Event Management
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From intimate gatherings to massive concerts, we deliver
              world-class audio experiences and flawless event execution across
              Uganda.
            </p>
          </motion.div>

          {/* Admark Product Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="px-4 py-2 bg-black/60 border border-[#a855f7]/40 rounded-xl">
                <span className="text-white font-black text-base tracking-widest">
                  ADMARK
                </span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#a855f7]/40 to-transparent" />
              <span className="text-gray-500 text-xs">
                Featured Equipment Brand
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {admarkHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px #a855f733" }}
                  className="relative rounded-2xl overflow-hidden border border-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all group"
                >
                  <div className="relative h-44">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a]/95 via-[#050c1a]/40 to-transparent" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-white font-black text-[10px] tracking-widest">
                        ADMARK
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5">
                    <div className="text-white font-bold text-sm">
                      {item.label}
                    </div>
                    <div className="text-[#a855f7] text-xs font-semibold mt-0.5">
                      {item.power}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="col-span-2 h-52 rounded-2xl overflow-hidden relative group shadow-2xl"
                >
                  <img
                    src={gallery[0].src}
                    alt={gallery[0].label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-sm flex items-center gap-2">
                    <Music2 size={14} /> {gallery[0].label}
                  </div>
                </motion.div>
                {gallery.slice(1).map((img, i) => (
                  <motion.div
                    key={img.label}
                    animate={{ y: [0, i % 2 === 0 ? 8 : -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i,
                    }}
                    className="h-40 rounded-2xl overflow-hidden relative group shadow-xl"
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                      {img.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Rating */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#f59e0b] fill-[#f59e0b]"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    4.9/5 Rating
                  </div>
                  <div className="text-gray-500 text-xs">
                    Based on 120+ client reviews
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-white font-bold">50+</div>
                  <div className="text-gray-500 text-xs">Events Done</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Equipment + Event Types */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-xl mb-5">
                Our Equipment Fleet
              </h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {equipment.map((eq, i) => (
                  <motion.div
                    key={eq.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#a855f7]/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#a855f7]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#a855f7]">{eq.icon}</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {eq.name}
                      </div>
                      <div className="text-gray-500 text-xs">{eq.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-white font-bold text-xl mb-4">
                Events We Cover
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {eventTypes.map((ev, i) => (
                  <motion.div
                    key={ev}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-gray-300 text-xs border border-white/5"
                  >
                    <CalendarCheck2 size={12} className="text-[#a855f7]" />
                    {ev}
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 25px #a855f755" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-sm font-semibold rounded-full shadow-xl"
                >
                  Book Sound System <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 px-6 py-3 border border-[#a855f7]/40 text-[#a855f7] text-sm font-semibold rounded-full"
                >
                  <MapPin size={14} /> Get Quote
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
