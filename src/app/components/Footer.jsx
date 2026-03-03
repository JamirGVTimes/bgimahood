import React from "react";
import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const links = {
  Services: [
    "Software Development",
    "Sound Systems",
    "Event Management",
    "URA TIN Registration",
    "Logbook Transfer",
    "Tax Filing",
    "URSB Registration",
  ],
  Company: ["About Us", "Our Team", "Portfolio", "Blog", "Careers", "Press"],
  Support: [
    "Contact Us",
    "FAQ",
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
  ],
};

const socials = [
  { Icon: Facebook, href: "#", color: "#1877f2" },
  { Icon: Twitter, href: "#", color: "#1da1f2" },
  { Icon: Instagram, href: "#", color: "#e1306c" },
  { Icon: Linkedin, href: "#", color: "#0a66c2" },
  { Icon: Youtube, href: "#", color: "#ff0000" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-[#020818] border-t border-white/10">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#0a0f2e] via-[#1677ff]/20 to-[#0a0f2e] py-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-white font-black text-2xl mb-1">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 text-sm">
                Contact us today and let's build something amazing together.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-[#1677ff] to-[#00d4ff] text-white font-semibold rounded-full shadow-xl text-sm"
              >
                Get Free Quote
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/256768683090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full shadow-xl text-sm flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1677ff] to-[#00d4ff] flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-sm">BT</span>
                </div>
                <div>
                  <div className="text-white font-black text-sm leading-tight">
                    BGIMAHOOD
                  </div>
                  <div className="text-[#1677ff] text-[10px] font-semibold tracking-widest">
                    TECHNOLOGIES
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
                Uganda's premier technology company delivering software
                development, sound systems, event management, and government
                online services since 2022.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <MapPin size={12} className="text-[#1677ff]" /> Kampala,
                  Uganda, East Africa
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Phone size={12} className="text-[#1677ff]" /> +256 768 683
                  090
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Mail size={12} className="text-[#1677ff]" />{" "}
                  info@bgimahood.com
                </div>
              </div>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, color }) => (
                  <motion.a
                    key={href + color}
                    href={href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <div className="text-white font-semibold text-sm mb-4">
                  {category}
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 3 }}
                        className="text-gray-500 hover:text-[#1677ff] text-xs transition-colors block"
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-600 text-xs">
              © {new Date().getFullYear()} BGIMAHOOD TECHNOLOGIES. All rights
              reserved. | Registered in Uganda, 2022.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xs">🇺🇬 Made in Uganda</span>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollTop}
                className="w-9 h-9 bg-[#1677ff] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#1677ff]/30"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
