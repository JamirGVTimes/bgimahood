import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, Volume2, Speaker, Music } from "lucide-react";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 4,
}));

const TYPED_WORDS = [
  "Inventory Management Systems",
  "Payment Gateway Integrations",
  "Custom Software Solutions",
  "Cloud-Based Applications",
  "Microservices APIs",
  "Progressive Web Apps (PWAs)",
  "Workflow Automation Systems",
  "RESTful APIs",
  "SaaS Platforms",
  "RealTime Apps",
  "Digital Solutions",
];

const ADMARK_PRODUCTS = [
  {
    id: 1,
    name: "Admark ADM-15S",
    type: '15" Subwoofer',
    power: "1200W Peak",
    image:
      "https://images.unsplash.com/photo-1645536729519-134e3b7e9e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    badge: "Bass King",
    color: "#a855f7",
  },
  {
    id: 2,
    name: "Admark ADM-PA2",
    type: "Line Array Tower",
    power: "2000W RMS",
    image:
      "https://images.unsplash.com/photo-1634041322596-61ff0de5af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    badge: "Event Pro",
    color: "#1677ff",
  },
  {
    id: 3,
    name: "Admark ADM-C12",
    type: "Concert Speaker",
    power: "800W Program",
    image:
      "https://images.unsplash.com/photo-1587817020884-6a2f41f97e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    badge: "Top Seller",
    color: "#f59e0b",
  },
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [admarkIdx, setAdmarkIdx] = useState(0);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout;
    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  useEffect(() => {
    const t = setInterval(
      () => setAdmarkIdx((i) => (i + 1) % ADMARK_PRODUCTS.length),
      3500,
    );
    return () => clearInterval(t);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#020818]"
    >
      {/* ===== ADMARK SOUND SYSTEMS BANNER — TOP ===== */}
      <div className="relative z-20 w-full bg-gradient-to-r from-[#0a0f2e] via-[#1a0a35] to-[#0a0f2e] border-b border-[#a855f7]/30 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Section Label */}
          {/* <div className="flex items-center justify-between mb-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#a855f7]/15 border border-[#a855f7]/40 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
                <span className="text-[#a855f7] text-sm font-bold tracking-wide">
                  🔊 ADMARK SOUND SYSTEMS — Available for Hire
                </span>
              </div>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.04 }}
              onClick={() =>
                document
                  .querySelector("#events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#a855f7] text-white text-xs font-semibold rounded-full shadow-lg shadow-[#a855f7]/30"
            >
              Book Now <ArrowRight size={12} />
            </motion.button>
          </div> */}

          {/* Product Cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ADMARK_PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 20px 40px ${product.color}33`,
                  }}
                  className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all cursor-pointer group"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/90 via-[#0a0f2e]/30 to-transparent" />
                    // Badge 
                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}, ${product.color}99)`,
                      }}
                    >
                      {product.badge}
                    </div>
                    // Admark Logo pill 
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                      <span className="text-white font-black text-xs tracking-widest">
                        ADMARK
                      </span>
                    </div>
                  </div>
                  // Info 
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">
                        {product.name}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        {product.type}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="font-bold text-sm"
                        style={{ color: product.color }}
                      >
                        {product.power}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs justify-end mt-0.5">
                        <Volume2 size={10} /> For Hire
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}

          {/* // Specs ticker 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-gray-500"
            >
              {[
                "Line Arrays",
                "Column Speakers",
                "Subwoofers",
                "Wireless Mics",
                "Digital Mixers",
                "Amplifiers",
                "Stage Monitors",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]/60" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        // ===== HERO MAIN CONTENT =====
        <div className="relative flex-1 flex items-center">
        // Gradient Orbs 
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1677ff]/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00d4ff]/15 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0a0f2e]/80 blur-[60px]" />
            // Grid
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(#1677ff22 1px, transparent 1px), linear-gradient(90deg, #1677ff22 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            // Particles 
            {PARTICLES.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-[#1677ff]"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                }}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div> */}

          <div className="relative z-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-white mb-6"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                    lineHeight: 1.2,
                    fontWeight: 900,
                  }}
                >
                  We Craft <br />
                  <span className="bg-gradient-to-r from-[#1677ff] to-[#00d4ff] bg-clip-text text-transparent">
                    {displayed}
                    <span className="animate-pulse">|</span>
                  </span>
                  <br />
                  that transform Organizations
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
                >
                  BGIMAHOOD TECHNOLOGIES — your all-in-one technology partner
                  for software development, sound systems, event management, and
                  government online services across Uganda.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px #1677ff55",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1677ff] to-[#00d4ff] text-white font-semibold rounded-full shadow-xl"
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
                  >
                    Our Services
                  </motion.button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-8 pt-6 border-t border-white/10"
                >
                  {[
                    { num: "200+", label: "Projects Done" },
                    { num: "150+", label: "Happy Clients" },
                    { num: "3+", label: "Years Active" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-white font-black text-2xl">
                        {s.num}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right — Floating Cards with VS Code + Admark */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative hidden lg:block h-[520px]"
              >
                {/* VS Code screenshot top */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1 right-0 w-[340px] h-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                    alt="VS Code Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#1677ff] rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-black">
                        VS
                      </span>
                    </div>
                    <span className="text-white font-semibold text-sm">
                      VS Code · React Dev
                    </span>
                  </div>
                </motion.div>

                {/* Admark speaker bottom left */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="absolute bottom-12 left-0 w-[260px] h-[190px] rounded-2xl overflow-hidden shadow-2xl border border-[#a855f7]/30"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={admarkIdx}
                      src={ADMARK_PRODUCTS[admarkIdx].image}
                      alt={ADMARK_PRODUCTS[admarkIdx].name}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/90 to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 rounded-full border border-white/20">
                    <span className="text-white font-black text-[10px] tracking-widest">
                      ADMARK
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white font-semibold text-sm">
                      {ADMARK_PRODUCTS[admarkIdx].name}
                    </div>
                    <div className="text-[#a855f7] text-xs">
                      {ADMARK_PRODUCTS[admarkIdx].power}
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-1/2 right-[-20px] bg-gradient-to-br from-[#1677ff] to-[#00d4ff] text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl"
                >
                  <div className="text-sm font-medium">✓ Certified Company</div>
                </motion.div>

                {/* Glow ring */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#1677ff]/20 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollDown}
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </div>
  );
}
