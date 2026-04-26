import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import {
  ExternalLink,
  Code2,
  Globe,
  LayoutDashboard,
  Wifi,
  Monitor,
} from "lucide-react";

const categories = ["All", "Web Apps", "SaaS", "Portals", "RealTime"];

const projects = [
  {
    id: 1,
    title: "AgriConnect Uganda",
    category: "Web Apps",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Farm-to-market platform connecting Ugandan farmers to buyers with real-time price updates.",
    image:
      "https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "VS Code · React Frontend",
    color: "#10b981",
    icon: <Globe size={16} />,
  },
  {
    id: 2,
    title: "SchoolSync Portal",
    category: "Portals",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
    desc: "Comprehensive school management portal with parent, teacher & admin dashboards.",
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    color: "#207BA1",
    icon: <LayoutDashboard size={16} />,
  },
  {
    id: 3,
    title: "PayFast SaaS",
    category: "SaaS",
    tech: ["React", "Stripe", "Firebase"],
    desc: "Multi-tenant payment processing SaaS for SMEs in East Africa.",
    image:
      "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "VS Code · Backend Dev",
    color: "#f59e0b",
    icon: <Code2 size={16} />,
  },
  {
    id: 4,
    title: "LiveStock Tracker",
    category: "RealTime",
    tech: ["Socket.io", "React", "Express"],
    desc: "Real-time livestock tracking & management system with GPS integration.",
    image:
      "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "VS Code · JavaScript",
    color: "#a855f7",
    icon: <Wifi size={16} />,
  },
  {
    id: 5,
    title: "TaxAssist Platform",
    category: "Web Apps",
    tech: ["Vue.js", "Django", "MySQL"],
    desc: "Online tax consultation and filing assistance platform for Ugandan taxpayers.",
    image:
      "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    color: "#ec4899",
    icon: <Globe size={16} />,
  },
  {
    id: 6,
    title: "EventPro Manager",
    category: "SaaS",
    tech: ["React", "Supabase", "Tailwind"],
    desc: "Event management SaaS with ticketing, attendee management, and live analytics.",
    image:
      "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    color: "#00d4ff",
    icon: <LayoutDashboard size={16} />,
  },
];

export function Portfolio() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div id="portfolio" className="py-24 bg-[#071921] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#207BA1]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207BA1]/15 border border-[#207BA1]/30 rounded-full text-[#207BA1] text-sm font-medium mb-4">
            Our Work
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
            }}
          >
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A selection of solutions we've built for clients across various
            industries in Uganda and East Africa.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === cat
                  ? "bg-[#207BA1] text-white border-[#207BA1] shadow-lg shadow-[#207BA1]/30"
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group cursor-default hover:border-white/20 transition-all"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a] to-transparent" />
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: `${project.color}cc` }}
                  >
                    {project.category}
                  </div>
                  {project.imageLabel && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Monitor size={10} className="text-[#207BA1]" />
                      <span className="text-white text-[10px] font-medium">
                        {project.imageLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-base">
                      {project.title}
                    </h3>
                    <motion.button
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md border"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}44`,
                          background: `${project.color}11`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
