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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-700 text-white text-sm py-2 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-primary-100">
            Puzhal, Chennai &nbsp;|&nbsp; Mon – Sat: 9:00 AM – 7:00 PM
          </span>
          <a
            href="tel:+919789969383"
            className="flex items-center gap-1.5 font-semibold hover:text-primary-200 transition-colors"
          >
            <Phone size={14} />
            +91 97899 69383
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: 0 }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-100"
            : "bg-white"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8 2 5 5 5 8c0 2.5 1 5.5 2 8l1.5 4.5c.3.8 1 1.5 1.9 1.5h3.2c.9 0 1.6-.7 1.9-1.5L17 16c1-2.5 2-5.5 2-8 0-3-3-6-7-6z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg text-neutral-900 leading-none block">
                Care N Cure
              </span>
              <span className="text-xs text-primary-600 font-medium leading-none">
                Dental Centre
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-150"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ta" : "en")}
              className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <ChevronDown size={12} />
              {language === "en" ? "EN | த" : "த | EN"}
            </button>

            <a href="tel:+919789969383" className="btn-secondary text-sm py-2">
              <Phone size={14} />
              {t.nav.call}
            </a>
            <button
              onClick={() => scrollTo("#appointment")}
              className="btn-primary text-sm py-2"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
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
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-neutral-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-neutral-100 space-y-2">
                  <a
                    href="tel:+919789969383"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
                  >
                    <Phone size={16} />
                    +91 97899 69383
                  </a>
                  <button
                    onClick={() => scrollTo("#appointment")}
                    className="btn-primary w-full text-sm"
                  >
                    {t.nav.book}
                  </button>
                  <button
                    onClick={() => setLanguage(language === "en" ? "ta" : "en")}
                    className="w-full text-center text-xs font-semibold px-3 py-2 rounded-lg border border-neutral-200 text-neutral-500"
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
