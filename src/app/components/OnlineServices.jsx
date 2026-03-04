import React from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  FileText,
  Car,
  Building2,
  Receipt,
  ShieldCheck,
  Globe,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Space } from "antd";

const services = [
  {
    icon: <FileText size={24} />,
    color: "#10b981",
    title: "URA TIN Registration",
    desc: "We create Tax Identification Numbers (TINs) on the URA portal for individuals and businesses. Fast, accurate, and hassle-free.",
    details: ["Individual TIN", "Business TIN", "Amendment of details"],
  },
  {
    icon: <Car size={24} />,
    color: "#1677ff",
    title: "Vehicle Logbook Transfer",
    desc: "Transfer ownership of vehicles and motorcycles quickly through the URSB/URA system with full documentation support.",
    details: [
      "Car logbook transfer",
      "Motorcycle logbook",
      "Change of ownership",
    ],
  },
  {
    icon: <Receipt size={24} />,
    color: "#f59e0b",
    title: "Tax Returns Filing",
    desc: "We prepare and file your annual or periodic tax returns on URA's e-Tax portal accurately and on time.",
    details: ["Individual returns", "Corporate tax filing", "VAT filing"],
  },
  {
    icon: <Building2 size={24} />,
    color: "#a855f7",
    title: "URSB Company Registration",
    desc: "Register your business or company with the Uganda Registration Services Bureau (URSB) professionally.",
    details: ["Sole proprietor", "Limited company", "Partnership registration"],
  },
  {
    icon: <ShieldCheck size={24} />,
    color: "#ec4899",
    title: "NIRA Services",
    desc: "National Identification & Registration Authority services including National ID applications and civil registration.",
    details: [
      "National ID application",
      "Birth certificate",
      "Death certificate",
    ],
  },
  {
    icon: <Globe size={24} />,
    color: "#00d4ff",
    title: "Other Online Services",
    desc: "We assist with NSSF, UMRA, KCCA, and many other government and private web-based services.",
    details: ["NSSF registration", "UMRA licensing", "KCCA payments"],
  },
];

const steps = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Visit our office or call/WhatsApp us with your documents",
  },
  {
    step: "02",
    title: "Document Review",
    desc: "We review your requirements and needed documents",
  },
  {
    step: "03",
    title: "Processing",
    desc: "We handle all the online submissions on your behalf",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "You receive your completed documents or confirmation",
  },
];

export function OnlineServices() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        id="online-services"
        className="py-24 bg-[#020818] relative overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#10b981]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/15 border border-[#10b981]/30 rounded-full text-[#10b981] text-sm font-medium mb-4">
              <Globe size={14} /> Government Online Services
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              We Handle Your
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#00d4ff] bg-clip-text text-transparent">
                Government Online Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Save time and avoid frustration. Our experts handle all your URA,
              URSB, NIRA, NSSF, and other government online services quickly and
              accurately.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${svc.color}22` }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20 group"
              >
                <Space>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${svc.color}22` }}
                  >
                    <span style={{ color: svc.color }}>{svc.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {svc.title}
                  </h3>{" "}
                </Space>

                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {svc.desc}
                </p>
                <div className="space-y-1.5">
                  {svc.details.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 text-gray-400 text-xs"
                    >
                      <CheckCircle2 size={12} style={{ color: svc.color }} />
                      {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#10b981]/10 to-[#00d4ff]/5 border border-[#10b981]/20 rounded-3xl p-8"
          >
            <h3 className="text-white font-bold text-xl text-center mb-8">
              How It Works
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#00d4ff] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-black text-sm shadow-lg">
                    {s.step}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {s.title}
                  </div>
                  <div className="text-gray-500 text-xs">{s.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock size={16} className="text-[#10b981]" />
                <span>Same-day processing available</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Users size={16} className="text-[#10b981]" />
                <span>500+ clients served</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10b981] to-[#00d4ff] text-white text-sm font-semibold rounded-full shadow-lg"
              >
                Use Our Services <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
