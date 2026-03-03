import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Users, FolderOpen, Star, Clock, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: <FolderOpen size={28} />,
    value: 200,
    suffix: "+",
    label: "Projects Delivered",
    color: "#1677ff",
  },
  {
    icon: <Users size={28} />,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    color: "#10b981",
  },
  {
    icon: <Star size={28} />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "#f59e0b",
  },
  {
    icon: <Clock size={28} />,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    color: "#a855f7",
  },
  {
    icon: <Award size={28} />,
    value: 50,
    suffix: "+",
    label: "Events Managed",
    color: "#ec4899",
  },
  {
    icon: <Zap size={28} />,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    color: "#00d4ff",
  },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [active, target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function Stats() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="py-20 bg-[#020818] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1677ff] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1677ff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-white mb-2"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}
          >
            Numbers That Speak
          </h2>
          <p className="text-gray-500 text-sm">
            Our track record of excellence in Uganda and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${stat.color}22` }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center transition-all hover:border-white/20"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${stat.color}20` }}
              >
                <span style={{ color: stat.color }}>{stat.icon}</span>
              </div>
              <div
                className="font-black text-2xl mb-1"
                style={{ color: stat.color }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                />
              </div>
              <div className="text-gray-400 text-xs leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
