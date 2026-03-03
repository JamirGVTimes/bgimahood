import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { CheckCircle2, Target, Eye, Zap } from "lucide-react";

const features = [
  "Registered & certified company since 2022",
  "Expert team of developers & engineers",
  "Affordable pricing with premium quality",
  "24/7 customer support & maintenance",
  "Government-level online service expertise",
  "Trusted by 150+ businesses in Uganda",
];

export function About() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <section id="about" className="py-24 bg-[#020818] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1677ff]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="col-span-2 h-52 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="h-40 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                  alt="VS Code React Development"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="h-40 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1544717305-f9c88f2897bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                  alt="Online Services"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-br from-[#1677ff] to-[#00d4ff] rounded-2xl flex flex-col items-center justify-center shadow-2xl"
            >
              <span className="text-white font-black text-3xl">3+</span>
              <span className="text-white/90 text-xs text-center leading-tight">Years of<br />Excellence</span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1677ff]/15 border border-[#1677ff]/30 rounded-full text-[#1677ff] text-sm font-medium mb-5">
              About Us
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Uganda's Premier Technology & Services Company
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2022, <strong className="text-white">BGIMAHOOD TECHNOLOGIES</strong> is a registered company based in Uganda
              that delivers comprehensive technology solutions. From cutting-edge software development to sound system hiring
              and government online services — we are your trusted all-in-one partner.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of passionate professionals combines technical expertise with deep knowledge of Uganda's business
              ecosystem to deliver solutions that truly make a difference for our clients.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#1677ff] shrink-0" size={18} />
                  <span className="text-gray-300 text-sm">{f}</span>
                </motion.div>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Target size={20} />, title: "Our Mission", text: "Empower businesses with smart tech" },
                { icon: <Eye size={20} />, title: "Our Vision", text: "Leading tech hub in East Africa" },
                { icon: <Zap size={20} />, title: "Our Edge", text: "Fast, affordable, reliable delivery" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px #1677ff22" }}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-center transition-all"
                >
                  <div className="text-[#1677ff] mb-2 flex justify-center">{item.icon}</div>
                  <div className="text-white text-xs font-semibold mb-1">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
