"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#doctor" },
    { label: t.nav.patient, href: "#patient-info" },
    { label: t.nav.reviews, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-700 text-white py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-primary-100">
            <span>📍 Puzhal, Chennai</span>
            <span className="text-primary-500">|</span>
            <span>🕐 Mon–Sat: 10 AM–2:30 PM, 4:30–9 PM &nbsp;|&nbsp; Sun: 10 AM–2 PM</span>
          </div>
          <a
            href="tel:08056390607"
            className="flex items-center gap-1.5 text-xs font-semibold hover:text-primary-200 transition-colors duration-200"
          >
            <Phone size={12} />
            080563 90607
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: 0 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-neutral-100/80"
            : "bg-white border-b border-neutral-100"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-primary-200 group-hover:scale-105 transition-all duration-200">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8 2 5 5 5 8c0 2.5 1 5.5 2 8l1.5 4.5c.3.8 1 1.5 1.9 1.5h3.2c.9 0 1.6-.7 1.9-1.5L17 16c1-2.5 2-5.5 2-8 0-3-3-6-7-6z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-neutral-900 leading-none block tracking-tight">
                Care N Cure
              </span>
              <span className="text-xs text-primary-600 font-semibold leading-none tracking-wide uppercase">
                Dental Centre
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-600 rounded-full transition-all duration-250 group-hover:w-4/5" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-500 hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
            >
              <ChevronDown size={11} />
              {language === "en" ? "EN | த" : "த | EN"}
            </button>

            <a
              href="tel:08056390607"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-700 border border-neutral-200 rounded-xl hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
            >
              <Phone size={14} />
              {t.nav.call}
            </a>
            <button
              onClick={() => scrollTo("#appointment")}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl shadow-[0_4px_14px_rgba(14,165,233,0.35)] hover:bg-primary-700 hover:shadow-[0_4px_20px_rgba(14,165,233,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-0.5">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-150"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 mt-2 border-t border-neutral-100 space-y-2">
                  <a
                    href="tel:08056390607"
                    className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors"
                  >
                    <Phone size={16} />
                    080563 90607
                  </a>
                  <button
                    onClick={() => scrollTo("#appointment")}
                    className="w-full py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:bg-primary-700 transition-all"
                  >
                    {t.nav.book}
                  </button>
                  <button
                    onClick={() => setLanguage(language === "en" ? "ta" : "en")}
                    className="w-full text-center text-xs font-semibold px-3 py-2.5 rounded-xl border border-neutral-200 text-neutral-500 hover:border-primary-300 hover:text-primary-600 transition-all"
                  >
                    {language === "en" ? "Switch to தமிழ்" : "Switch to English"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
