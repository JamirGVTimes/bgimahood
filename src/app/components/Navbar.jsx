import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import bgimaLogo from "../../images/bgimahood_logo.png";
import { navLinks } from "../config/site.js";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#071921]/95 shadow-2xl backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.04 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img src={bgimaLogo} alt="Bgima Logo" className="w-35 h-20" />

              <div className="hidden sm:block">
                <div className="text-white font-black text-xl leading-tight">
                  BGIMAHOOD
                </div>
                <div className="text-[#207BA1] text-[10px] font-semibold tracking-widest">
                  TECHNOLOGIES
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-[#207BA1]"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="block px-5 py-2 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-[#207BA1]/40 transition-shadow"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#113747]/98 border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#207BA1] bg-[#207BA1]/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 px-5 py-3 bg-gradient-to-r from-[#207BA1] to-[#00d4ff] text-white text-sm font-semibold rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
