import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `hover:text-[#0ea771] transition ${
      isActive ? "text-[#0ea771]" : ""
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 lg:px-16
        ${
          isScrolled
            ? "py-4 bg-white/70 backdrop-blur-xl border-b border-stone-200/50"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0ea771] flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-serif text-xl text-stone-900">
                DAIRY<span className="italic text-[#0ea771]">CO</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-600">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About Program</NavLink>
            <NavLink to="/structure" className={navClass}>Structure</NavLink>

            {/* Modules Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#0ea771]">
                Modules
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="absolute left-0 top-full mt-6 w-80 bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 space-y-3">
                <Link to="/module-1" className="block hover:bg-stone-50 p-3 rounded-xl">
                  <p className="font-semibold">Module 1: Dairy Farming Basics</p>
                  <p className="text-xs text-stone-500">Animal health & milking</p>
                </Link>
                <Link to="/module-2" className="block hover:bg-stone-50 p-3 rounded-xl">
                  <p className="font-semibold">Module 2: Business & Enterprise</p>
                  <p className="text-xs text-stone-500">Finance & supply chain</p>
                </Link>
                <Link to="/module-3" className="block hover:bg-stone-50 p-3 rounded-xl">
                  <p className="font-semibold">Module 3: Community Development</p>
                  <p className="text-xs text-stone-500">Leadership & growth</p>
                </Link>
              </div>
            </div>

            {/* <NavLink to="/methodology" className={navClass}>Methodology</NavLink> */}
            <NavLink to="/impact" className={navClass}>Impact</NavLink>
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-6">
            <Link
              to="/enroll"
              className="hidden sm:inline-flex px-7 py-3 bg-stone-900 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#0ea771] transition"
            >
              Enroll Now
            </Link>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[70] bg-white p-10"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl"
            >
              ✕
            </button>

            <div className="mt-20 space-y-8 text-4xl font-serif">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/structure" onClick={() => setIsMobileMenuOpen(false)}>Structure</Link>

              <div className="space-y-4 text-2xl pl-4">
                <Link to="/module-1" onClick={() => setIsMobileMenuOpen(false)}>Module 1</Link>
                <Link to="/module-2" onClick={() => setIsMobileMenuOpen(false)}>Module 2</Link>
                <Link to="/module-3" onClick={() => setIsMobileMenuOpen(false)}>Module 3</Link>
              </div>

              {/* <Link to="/methodology" onClick={() => setIsMobileMenuOpen(false)}>Methodology</Link> */}
              <Link to="/impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
