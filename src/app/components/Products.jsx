import React, { useEffect, useState } from "react";
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

const categories = ["All", "Operations", "Education", "Payments", "Real-Time"];
const PRODUCT_HEADLINE = "Products Built for Growing Teams";
const PRODUCT_HEADLINE_ACCENT = "Products";

const softwareTypes = [
  "Business management systems",
  "Inventory and stock systems",
  "School management portals",
  "Payment and billing platforms",
  "Client self-service portals",
  "Booking and event systems",
  "Admin dashboards",
  "Real-time tracking apps",
];

const apiCapabilities = [
  "REST API development",
  "Payment API integrations",
  "Authentication and user roles",
  "Database-backed services",
  "Third-party platform integrations",
  "Real-time API updates",
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "Firebase",
];

const products = [
  {
    id: 1,
    title: "BgimaOps Hub",
    category: "Operations",
    features: ["Workflows", "Approvals", "Reports"],
    desc: "A configurable operations platform for teams that need requests, approvals, records, and dashboards in one place.",
    image:
      "https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "Operations dashboard",
    color: "#10b981",
    icon: <Globe size={16} />,
  },
  {
    id: 2,
    title: "SchoolSync Portal",
    category: "Education",
    features: ["Students", "Parents", "Finance"],
    desc: "A school management product with admin, teacher, parent, fee, attendance, and reporting tools.",
    image:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "School command center",
    color: "#207BA1",
    icon: <LayoutDashboard size={16} />,
  },
  {
    id: 3,
    title: "PayFlow Suite",
    category: "Payments",
    features: ["Invoices", "Receipts", "Reconciliation"],
    desc: "A payment and billing product for SMEs that need clean invoicing, receipts, balances, and finance visibility.",
    image:
      "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "Finance workspace",
    color: "#f59e0b",
    icon: <Code2 size={16} />,
  },
  {
    id: 4,
    title: "LiveOps Tracker",
    category: "Real-Time",
    features: ["Live status", "Alerts", "Field updates"],
    desc: "A real-time tracking product for field teams, assets, deliveries, and operational activity.",
    image:
      "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "Live monitoring",
    color: "#a855f7",
    icon: <Wifi size={16} />,
  },
  {
    id: 5,
    title: "ClientPortal Pro",
    category: "Operations",
    features: ["Accounts", "Tickets", "Documents"],
    desc: "A secure client portal product for businesses that need customer accounts, documents, support, and self-service access.",
    image:
      "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    color: "#ec4899",
    icon: <Globe size={16} />,
  },
  {
    id: 6,
    title: "EventDesk Manager",
    category: "Real-Time",
    features: ["Ticketing", "Guests", "Analytics"],
    desc: "An event operations product for ticketing, guest lists, vendor coordination, and live event reporting.",
    image:
      "https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    imageLabel: "Event control room",
    color: "#00d4ff",
    icon: <LayoutDashboard size={16} />,
  },
];

export function Products() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");
  const [typedHeadline, setTypedHeadline] = useState("");
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);

  const filtered =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);
  const headlineAccent = typedHeadline.slice(
    0,
    PRODUCT_HEADLINE_ACCENT.length,
  );
  const headlineRest = typedHeadline.slice(PRODUCT_HEADLINE_ACCENT.length);

  useEffect(() => {
    let timeout;

    if (!isDeletingHeadline && typedHeadline === PRODUCT_HEADLINE) {
      timeout = setTimeout(() => setIsDeletingHeadline(true), 1500);
    } else if (isDeletingHeadline && typedHeadline === "") {
      timeout = setTimeout(() => setIsDeletingHeadline(false), 350);
    } else {
      timeout = setTimeout(
        () => {
          const nextLength = isDeletingHeadline
            ? typedHeadline.length - 1
            : typedHeadline.length + 1;

          setTypedHeadline(PRODUCT_HEADLINE.slice(0, nextLength));
        },
        isDeletingHeadline ? 38 : 78,
      );
    }

    return () => clearTimeout(timeout);
  }, [isDeletingHeadline, typedHeadline]);

  return (
    <div id="products" className="py-24 bg-[#071921] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#207BA1]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#207BA1]/15 border border-[#207BA1]/30 rounded-full text-[#207BA1] text-sm font-medium mb-4">
            Software Products
          </div>
          <h2
            aria-label={PRODUCT_HEADLINE}
            className="mb-4 min-h-[2.3em] sm:min-h-[1.2em]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
            }}
          >
            <span className="text-[#f59e0b]">{headlineAccent}</span>
            <span className="text-white">{headlineRest}</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-1 bg-[#f59e0b] animate-pulse"
            />
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Practical software platforms, APIs, dashboards, and integrations
            for operations, schools, payments, client service, and real-time
            team coordination.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[#207BA1]/15 text-[#00d4ff] flex items-center justify-center">
                <LayoutDashboard size={18} />
              </span>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Types of Software
                </h3>
                <p className="text-gray-500 text-xs">
                  Products we design, build, and customize for Clients
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {softwareTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-[#207BA1]/30 bg-[#207BA1]/10 px-3 py-1.5 text-xs text-gray-200"
                >
                  {type}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center">
                <Code2 size={18} />
              </span>
              <div>
                <h3 className="text-white font-bold text-lg">
                  APIs & Integrations
                </h3>
                <p className="text-gray-500 text-xs">
                  Clean backends that connect apps, payments, data, and users.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {apiCapabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1.5 text-xs text-gray-200"
                >
                  {capability}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-300 transition-all hover:-translate-y-0.5 hover:border-[#00d4ff]/40 hover:text-white hover:bg-[#00d4ff]/10"
              >
                {tech}
              </span>
            ))}
          </div>
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
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
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
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a] to-transparent" />
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: `${product.color}cc` }}
                  >
                    {product.category}
                  </div>
                  {product.imageLabel && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Monitor size={10} className="text-[#207BA1]" />
                      <span className="text-white text-[10px] font-medium">
                        {product.imageLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          color: product.color,
                          background: `${product.color}18`,
                        }}
                      >
                        {product.icon}
                      </span>
                      <h3 className="text-white font-bold text-base">
                        {product.title}
                      </h3>
                    </div>
                    <motion.button
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md border"
                        style={{
                          color: product.color,
                          borderColor: `${product.color}44`,
                          background: `${product.color}11`,
                        }}
                      >
                        {feature}
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
