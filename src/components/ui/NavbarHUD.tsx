"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

export const NavbarHUD: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Honors & Awards", id: "achievements" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "chronicles" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Sleek Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled ? "glass-panel shadow-lg" : "bg-white/[0.03] border border-white/10"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 text-left"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_10px_#00F2FE]" />
            <span className="font-sans font-bold text-sm sm:text-base tracking-wide text-white">
              RUTHRAN<span className="text-cyan font-normal">.DEV</span>
            </span>
          </button>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${
            scrolled ? "glass-panel shadow-lg" : "bg-white/[0.03] border border-white/10"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </motion.nav>

        {/* Right Action Button & Mobile Menu Trigger */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? "glass-panel shadow-lg" : "bg-white/[0.03] border border-white/10"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-obsidian font-bold text-xs shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Mail className="w-3.5 h-3.5 text-obsidian" />
            <span>Get in Touch</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pointer-events-auto mt-3 mx-2 glass-panel rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="flex flex-col py-4 px-6 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-sm font-medium text-zinc-300 hover:text-white border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 w-full py-2.5 rounded-xl bg-white text-center text-xs font-bold text-obsidian shadow-lg"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
