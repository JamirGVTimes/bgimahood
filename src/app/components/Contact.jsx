import React, { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import axios from "axios";

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: "Our Office",
    value: "Kampala, Uganda",
    sub: "East Africa",
    color: "#207BA1",
  },
  {
    icon: <Phone size={20} />,
    label: "Call / WhatsApp",
    value: "+256 768 683090",
    sub: "Mon – Sat, 8am – 8pm",
    color: "#10b981",
  },
  {
    icon: <Mail size={20} />,
    label: "Email Us",
    value: "info@bgimahood.com",
    sub: "Reply within 24 hours",
    color: "#f59e0b",
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "Mon – Sat: 8am – 8pm",
    sub: "Sun: 10am – 4pm",
    color: "#a855f7",
  },
];

const services = [
  "Software Development",
  "Software Products",
  "Sound System Hire",
  "Event Management",
  "Other",
];

export function Contact() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted:", form);
    try {
      const ct = await axios.post(
        "https://personal-server-ten.vercel.app/api/messages",
        form,
      );
      console.log("Message sent successfully:", ct.data);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 bg-[#071921] relative overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#207BA1]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#10b981]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207BA1]/15 border border-[#207BA1]/30 rounded-full text-[#207BA1] text-sm font-medium mb-4">
              <MessageSquare size={14} /> Get In Touch
            </div>
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
              }}
            >
              Let's Talk
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Ready to work together? Contact us for a free consultation and
              quote tailored to your needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${info.color}22` }}
                  >
                    <span style={{ color: info.color }}>{info.icon}</span>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {info.value}
                    </div>
                    <div className="text-gray-600 text-xs">{info.sub}</div>
                  </div>
                </motion.div>
              ))}

              {/* Map placeholder */}
              {/* <div className="rounded-2xl overflow-hidden border border-white/10 h-44 bg-white/5 flex items-center justify-center relative">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(#207BA122 1px, transparent 1px), linear-gradient(90deg, #207BA122 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="text-center relative z-10">
                  <MapPin size={32} className="text-[#207BA1] mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">
                    Kampala, Uganda
                  </div>
                  <div className="text-gray-500 text-xs">East Africa Hub</div>
                </div>
              </div> */}
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                {sent ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-[#10b981]" size={32} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs mb-1.5 block">
                          Full Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="e.g. John Ssemakula"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#207BA1]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1.5 block">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#207BA1]/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs mb-1.5 block">
                          Phone / WhatsApp
                        </label>
                        <input
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="+256 7XX XXX XXX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#207BA1]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs mb-1.5 block">
                          Service Needed
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) =>
                            setForm({ ...form, service: e.target.value })
                          }
                          className="w-full bg-[#207BA1] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#207BA1]/50 transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs mb-1.5 block">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell us about your project or service request..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#207BA1]/50 transition-colors resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px #207BA144",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] text-white font-semibold rounded-xl shadow-xl"
                    >
                      <Send size={16} />
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
