import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Okello",
    role: "CEO, Okello Enterprises Ltd",
    avatar: "DO",
    color: "#207BA1",
    rating: 5,
    text: "BGIMAHOOD TECHNOLOGIES built us a powerful web portal that streamlined all our operations. Delivery was fast and the team was professional throughout. Highly recommended!",
    service: "Web Portal Development",
  },
  {
    id: 2,
    name: "Sarah Namukasa",
    role: "Event Coordinator, Pearl Events",
    avatar: "SN",
    color: "#a855f7",
    rating: 5,
    text: "We hired their Admark sound system for our corporate conference and it was absolutely perfect. Crystal clear audio, professional setup, and the team arrived on time. Will use them again!",
    service: "Sound System Hire",
  },
  {
    id: 3,
    name: "John Mugisha",
    role: "Business Owner, Kampala",
    avatar: "JM",
    color: "#10b981",
    rating: 5,
    text: "BGIMAHOOD configured a simple operations dashboard for our team and trained everyone quickly. We finally have clear visibility on daily work.",
    service: "Operations Software",
  },
  {
    id: 4,
    name: "Grace Atim",
    role: "Founder, GraceWorks SaaS",
    avatar: "GA",
    color: "#f59e0b",
    rating: 5,
    text: "They developed our entire SaaS platform from scratch — frontend, backend, and APIs. The product is robust and our users love it. The team's expertise is unmatched in Uganda.",
    service: "SaaS Development",
  },
  {
    id: 5,
    name: "Robert Ssemakula",
    role: "Wedding Couple, Kampala",
    avatar: "RS",
    color: "#ec4899",
    rating: 5,
    text: "BGIMAHOOD managed our entire wedding including Admark sound, lighting, and event coordination. Everything was flawless. Our guests were amazed! Thank you so much!",
    service: "Wedding Management",
  },
  {
    id: 6,
    name: "Harriet Nabukeera",
    role: "HR Manager, Tech Corp Uganda",
    avatar: "HN",
    color: "#00d4ff",
    rating: 5,
    text: "They rolled out our internal staff portal with clean permissions, document access, and reporting. The support after launch has been excellent.",
    service: "Client Portal Product",
  },
];

export function Testimonials() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  return (
    <>
      <section className="py-24 bg-[#0B171C] relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-80 bg-[#207BA1]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded-full text-[#f59e0b] text-sm font-medium mb-4">
              <Star size={14} className="fill-[#f59e0b]" /> Client Testimonials
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Real feedback from real clients across Uganda who've experienced
              our services firsthand.
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
              >
                {visible.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 relative hover:border-white/20 transition-all"
                  >
                    <Quote
                      size={32}
                      className="text-white/10 absolute top-4 right-4"
                    />
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="text-[#f59e0b] fill-[#f59e0b]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                        }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {t.name}
                        </div>
                        <div className="text-gray-500 text-xs">{t.role}</div>
                      </div>
                      <div
                        className="ml-auto text-xs px-2 py-1 rounded-full"
                        style={{ color: t.color, background: `${t.color}18` }}
                      >
                        {t.service}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrent((c) => (c - 1 + total) % total)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "w-6 h-2 bg-[#207BA1]"
                        : "w-2 h-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % total)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
