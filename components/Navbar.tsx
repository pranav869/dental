"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#doctor" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-neutral-100"
          : "bg-white border-b border-neutral-100/60"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">

        {/* Left — Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center gap-3 group flex-shrink-0"
        >
          <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8 2 5 5 5 8c0 2.5 1 5.5 2 8l1.5 4.5c.3.8 1 1.5 1.9 1.5h3.2c.9 0 1.6-.7 1.9-1.5L17 16c1-2.5 2-5.5 2-8 0-3-3-6-7-6z" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-bold text-[17px] text-neutral-900 tracking-tight block">Care N Cure</span>
            <span className="text-[10px] text-primary-600 font-semibold tracking-widest uppercase">Dental Centre</span>
          </div>
        </a>

        {/* Center — Nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="relative px-3.5 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-500 rounded-full transition-all duration-200 group-hover:w-4/5" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right — Open Now + Call + Book */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Open Now badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Open Now
          </span>

          {/* Call Now */}
          <a
            href="tel:08056390607"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-neutral-700 border border-neutral-200 rounded-xl hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            <Phone size={14} />
            Call Now
          </a>

          {/* Book Appointment */}
          <button
            onClick={() => scrollTo("#appointment")}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl shadow-[0_3px_12px_rgba(14,165,233,0.3)] hover:bg-primary-700 hover:shadow-[0_4px_18px_rgba(14,165,233,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Calendar size={14} />
            Book Appointment
          </button>
        </div>

        {/* Mobile — hamburger */}
        <button
          className="lg:hidden p-2.5 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
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
            className="lg:hidden border-t border-neutral-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {/* Open Now in mobile */}
              <div className="flex items-center gap-1.5 px-4 py-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                <span className="text-xs font-semibold text-green-700">Open Now · Closes at 9 PM</span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-150"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-1 border-t border-neutral-100 space-y-2">
                <a
                  href="tel:08056390607"
                  className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-primary-600 border border-primary-200 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors"
                >
                  <Phone size={15} />
                  080563 90607 · Call Now
                </a>
                <button
                  onClick={() => scrollTo("#appointment")}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-primary-600 rounded-xl shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:bg-primary-700 transition-all"
                >
                  <Calendar size={15} />
                  {t.nav.book}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
