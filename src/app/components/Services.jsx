import React, { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  LayoutDashboard,
  Wifi,
  Music2,
  Mic2,
  PartyPopper,
  CalendarCheck2,
  FileText,
  Car,
  Building2,
  Receipt,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const serviceCategories = [
  {
    id: "software",
    icon: <Code2 size={28} />,
    color: "#1677ff",
    bgColor: "from-[#1677ff]/20 to-[#00d4ff]/10",
    title: "Software Development",
    subtitle: "Custom digital solutions built to scale",
    image:
      "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    services: [
      {
        icon: <Globe size={18} />,
        name: "Web Applications",
        desc: "Modern, responsive web apps with latest technologies",
      },
      {
        icon: <LayoutDashboard size={18} />,
        name: "SaaS Platforms",
        desc: "Scalable software-as-a-service solutions",
      },
      {
        icon: <Wifi size={18} />,
        name: "Real-Time Apps",
        desc: "Live chat, dashboards, collaboration tools",
      },
      {
        icon: <Database size={18} />,
        name: "Web Portals",
        desc: "B2B, B2C portals with admin dashboards",
      },
      {
        icon: <Smartphone size={18} />,
        name: "Progressive Web Apps",
        desc: "App-like experience in the browser",
      },
      {
        icon: <ShieldCheck size={18} />,
        name: "API Development",
        desc: "RESTful & GraphQL APIs with documentation",
      },
    ],
  },
  {
    id: "sound",
    icon: <Music2 size={28} />,
    color: "#a855f7",
    bgColor: "from-[#a855f7]/20 to-[#ec4899]/10",
    title: "Sound Systems for Hire",
    subtitle: "Premium audio for every occasion",
    image:
      "https://images.unsplash.com/photo-1634041322596-61ff0de5af09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    services: [
      {
        icon: <Mic2 size={18} />,
        name: "PA Systems",
        desc: "Professional public address systems for all venues",
      },
      {
        icon: <Music2 size={18} />,
        name: "DJ Equipment",
        desc: "Full DJ setup with mixers and sound boards",
      },
      {
        icon: <PartyPopper size={18} />,
        name: "Wedding Audio",
        desc: "Crystal clear audio for your special day",
      },
      {
        icon: <Users size={18} />,
        name: "Conference Systems",
        desc: "Microphones & audio for corporate meetings",
      },
      {
        icon: <CalendarCheck2 size={18} />,
        name: "Outdoor Events",
        desc: "Powerful systems for large outdoor gatherings",
      },
      {
        icon: <Mic2 size={18} />,
        name: "Church & Worship",
        desc: "Dedicated sound solutions for religious events",
      },
    ],
  },
  {
    id: "events",
    icon: <CalendarCheck2 size={28} />,
    color: "#f59e0b",
    bgColor: "from-[#f59e0b]/20 to-[#ef4444]/10",
    title: "Event Management",
    subtitle: "Seamless events from concept to execution",
    image:
      "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    services: [
      {
        icon: <PartyPopper size={18} />,
        name: "Corporate Events",
        desc: "Conferences, product launches, award nights",
      },
      {
        icon: <CalendarCheck2 size={18} />,
        name: "Wedding Planning",
        desc: "Full wedding coordination & management",
      },
      {
        icon: <Users size={18} />,
        name: "Concerts & Shows",
        desc: "Live concerts and entertainment shows",
      },
      {
        icon: <Building2 size={18} />,
        name: "Venue Sourcing",
        desc: "Find the perfect venue for your event",
      },
      {
        icon: <ShieldCheck size={18} />,
        name: "Event Security",
        desc: "Professional security coordination",
      },
      {
        icon: <Mic2 size={18} />,
        name: "Entertainment",
        desc: "DJs, MCs, performers for any event",
      },
    ],
  },
  {
    id: "online",
    icon: <FileText size={28} />,
    color: "#10b981",
    bgColor: "from-[#10b981]/20 to-[#06b6d4]/10",
    title: "Online Government Services",
    subtitle: "Fast & reliable e-government assistance",
    image:
      "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    services: [
      {
        icon: <FileText size={18} />,
        name: "URA TIN Registration",
        desc: "Tax Identification Number creation on URA portal",
      },
      {
        icon: <Car size={18} />,
        name: "Logbook Transfers",
        desc: "Vehicle & motorcycle logbook transfer services",
      },
      {
        icon: <Receipt size={18} />,
        name: "Tax Return Filing",
        desc: "URA tax returns filing for individuals & businesses",
      },
      {
        icon: <Building2 size={18} />,
        name: "URSB Registrations",
        desc: "Company & business registration with URSB",
      },
      {
        icon: <ShieldCheck size={18} />,
        name: "NIRA Services",
        desc: "National ID and civil registration assistance",
      },
      {
        icon: <Globe size={18} />,
        name: "Other Online Services",
        desc: "NSSF, UMRA, and various online activities",
      },
    ],
  },
];

export function Services() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("software");
  const current = serviceCategories.find((s) => s.id === active);

  return (
    <div id="services" className="py-24 bg-[#050c1a] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#1677ff]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1677ff]/15 border border-[#1677ff]/30 rounded-full text-[#1677ff] text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
            }}
          >
            Our Core Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From cutting-edge software to live events and government services —
            one company, endless solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all border ${
                active === cat.id
                  ? "bg-gradient-to-r text-white border-transparent shadow-xl"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
              style={
                active === cat.id
                  ? {
                      background: `linear-gradient(135deg, ${cat.color}cc, ${cat.color}88)`,
                      borderColor: "transparent",
                    }
                  : {}
              }
            >
              <span style={{ color: active === cat.id ? "white" : cat.color }}>
                {cat.icon}
              </span>
              {cat.title.split(" ").slice(0, 2).join(" ")}
            </motion.button>
          ))}
        </div>

        {/* Active Service Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-5 gap-8 items-start"
        >
          {/* Image + Intro */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-5 h-52">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`bg-gradient-to-br ${current.bgColor} border border-white/10 rounded-2xl p-5`}
            >
              <div style={{ color: current.color }} className="mb-2">
                {current.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">
                {current.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{current.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white"
                style={{ background: current.color }}
              >
                Inquire Now <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>

          {/* Service Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {current.services.map((svc, i) => (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 10px 30px ${current.color}22`,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 cursor-default transition-all hover:border-white/20"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${current.color}22` }}
                >
                  <span style={{ color: current.color }}>{svc.icon}</span>
                </div>
                <div className="text-white text-sm font-semibold mb-1">
                  {svc.name}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">
                  {svc.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
