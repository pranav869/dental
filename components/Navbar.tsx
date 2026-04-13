"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useClinicStatus } from "@/hooks/useClinicStatus";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const clinic = useClinicStatus();

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
    <div className="sticky top-0 z-50 w-full">

      {/* ── Top info bar ── */}
      <div className="hidden sm:block bg-neutral-900 text-neutral-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          {/* Left — location + hours */}
          <div className="flex items-center gap-5 text-[11px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <span className="text-primary-400">📍</span>
              Puzhal, Chennai
            </span>
            <span className="w-px h-3 bg-neutral-700" />
            <span className="flex items-center gap-1.5">
              <span className="text-primary-400">🕐</span>
              Mon–Sat: 10 AM–2:30 PM &amp; 4:30–9 PM &nbsp;·&nbsp; Sun: 10 AM–2 PM
            </span>
          </div>
          {/* Right — phone */}
          <a
            href="tel:08056390607"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-white hover:text-primary-400 transition-colors duration-200"
          >
            <Phone size={11} />
            080563 90607
          </a>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <motion.header
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-b border-neutral-100"
            : "bg-white border-b border-neutral-100/80"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Left — Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 group-hover:opacity-90 transition-opacity duration-200">
              <Image
                src="/carencure.png"
                alt="Care N Cure Dental Centre"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-none">
              <span className="font-bold text-[16px] text-neutral-900 tracking-tight block">
                Care N Cure
              </span>
              <span className="text-[10px] font-semibold text-primary-600 tracking-[0.12em] uppercase">
                Dental Centre
              </span>
            </div>
          </a>

          {/* Center — Nav links */}
          <ul className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-[13.5px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-500 rounded-full transition-all duration-200 group-hover:w-3/4" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right — Open Now + Call + Book */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Open / Closed status */}
            <div className={`flex items-center gap-1.5 text-[11.5px] font-semibold px-3 py-1.5 rounded-full border ${clinic.isOpen ? "text-green-700 bg-green-50 border-green-200" : "text-red-600 bg-red-50 border-red-200"}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${clinic.isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
              {clinic.isOpen ? "Open Now" : "Closed"}
            </div>

            {/* Call Now — ghost */}
            <a
              href="tel:08056390607"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-neutral-700 rounded-xl border border-neutral-200 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/60 transition-all duration-200"
            >
              <Phone size={13} />
              Call Now
            </a>

            {/* Book Appointment — primary CTA */}
            <button
              onClick={() => scrollTo("#appointment")}
              className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-primary-600 rounded-xl shadow-[0_4px_16px_rgba(14,165,233,0.32)] hover:bg-primary-700 hover:shadow-[0_6px_22px_rgba(14,165,233,0.42)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden border-t border-neutral-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {/* Open / Closed strip */}
                <div className="flex items-center gap-2 px-3 py-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${clinic.isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                  <span className={`text-[11.5px] font-semibold ${clinic.isOpen ? "text-green-700" : "text-red-600"}`}>{clinic.label}</span>
                </div>

                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-[14px] font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-150"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-3 mt-2 border-t border-neutral-100 space-y-2.5">
                  <a
                    href="tel:08056390607"
                    className="flex items-center justify-center gap-2 w-full py-3 text-[13.5px] font-semibold text-primary-700 border-2 border-primary-200 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors"
                  >
                    <Phone size={15} />
                    080563 90607
                  </a>
                  <button
                    onClick={() => scrollTo("#appointment")}
                    className="w-full py-3.5 text-[14px] font-semibold text-white bg-primary-600 rounded-xl shadow-[0_4px_14px_rgba(14,165,233,0.3)] hover:bg-primary-700 active:scale-[0.98] transition-all"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
