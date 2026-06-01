import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Code2,
  Speaker,
} from "lucide-react";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 4,
}));

const TYPED_WORDS = [
  "Inventory Systems",
  "Payment Integrations",
  "Custom Software",
  "Cloud Applications",
  "Microservice APIs",
  "Progressive Web Apps",
  "Workflow Automation",
  "REST APIs",
  "SaaS Platforms",
  "Real-Time Apps",
  "Digital Products",
];

const HOME_PHOTOS = [
  {
    title: "Beautiful Business Dashboard",
    label: "Live Analytics",
    description: "Clean reporting interfaces for operations teams",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    icon: <BarChart3 size={16} />,
    color: "#207BA1",
  },
  {
    title: "Admark Bass Box",
    label: "Sound Hire",
    description: "Deep bass support for events and outdoor functions",
    image:
      "https://images.unsplash.com/photo-1645536729519-134e3b7e9e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    icon: <Speaker size={16} />,
    color: "#a855f7",
  },
  {
    title: "React Code",
    label: "Frontend Builds",
    description: "Modern React interfaces built for speed and scale",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    icon: <Code2 size={16} />,
    color: "#10b981",
  },
];

export function Hero() {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  const scrollDown = () => {
    navigate("/about");
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B3240]"
    >
      <div className="relative z-20 w-full bg-gradient-to-tr from-[#0B171C] via-[#05141A] to-[#0B3240] border-b border-[#05141A]/30 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative z-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-white mb-6 max-w-xl text-3xl sm:text-4xl lg:text-5xl"
                  style={{
                    lineHeight: 1.15,
                    fontWeight: 800,
                    paddingLeft: "0.85rem",
                    borderLeft: "4px solid #207BA1",
                  }}
                >
                  <span className="block">
                    We Build{" "}
                    <span className="inline-block min-h-[1.1em] text-[#00d4ff]">
                      {displayed}
                      <span className="animate-pulse">|</span>
                    </span>
                  </span>
                  <span className="block text-white/90">For Modern Teams</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed"
                  style={{ lineHeight: 1.5 }}
                >
                  BGIMAHOOD TECHNOLOGIES — your all-in-one technology partner
                  for software development, software products, sound systems,
                  and event management across Uganda.
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
                      boxShadow: "0 0 30px #207BA155",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/contact")}
                    className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] text-white font-semibold rounded-full shadow-xl"
                  >
                    Get a Free Quote <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/services")}
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

              {/* Right — Home photo showcase */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {HOME_PHOTOS.map((photo, index) => (
                  <motion.div
                    key={photo.title}
                    animate={{ y: [0, index === 1 ? 10 : -10, 0] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group ${
                      index === 0
                        ? "h-64 sm:col-span-2 lg:h-72"
                        : "h-52 lg:h-56"
                    }`}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020818]/95 via-[#020818]/35 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/55 border border-white/15 px-3 py-1.5 backdrop-blur-sm">
                      <span style={{ color: photo.color }}>{photo.icon}</span>
                      <span className="text-white text-xs font-semibold">
                        {photo.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-base mb-1">
                        {photo.title}
                      </div>
                      <div className="text-gray-300 text-xs leading-relaxed max-w-sm">
                        {photo.description}
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute -right-3 top-1/2 bg-gradient-to-br from-[#207BA1] to-[#00d4ff] text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl"
                >
                  <div className="text-sm font-medium">Visual Tech Partner</div>
                </motion.div>
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
