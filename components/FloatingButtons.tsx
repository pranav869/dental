"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, X } from "lucide-react";

const WA_LINK =
  "https://wa.me/918056390607?text=Hi%20%F0%9F%91%8B%20I%20want%20to%20book%20an%20appointment%20at%20Care%20N%20Cure%20Dental%20Centre.";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("wa_popup_seen")) return;
    const timer = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("wa_popup_seen", "1");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">

      {/* Centered modal popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={closePopup}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.2)] w-full max-w-xs mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Green header strip */}
              <div className="bg-green-500 px-6 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">Care N Cure Dental</p>
                      <p className="text-green-100 text-xs">● Typically replies instantly</p>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                </div>
                {/* Chat bubble */}
                <div className="bg-white rounded-xl rounded-tl-none px-4 py-3">
                  <p className="text-sm font-semibold text-neutral-800">Hi there 👋</p>
                  <p className="text-sm text-neutral-600 mt-0.5">Need help booking an appointment?</p>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-sm text-neutral-500 text-center mb-5">
                  Chat with us on WhatsApp for quick assistance — we usually respond within minutes.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closePopup}
                  className="flex items-center justify-center gap-2.5 w-full bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_14px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.45)] transition-all duration-200 text-sm"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={closePopup}
                  className="w-full mt-3 text-xs text-neutral-400 hover:text-neutral-600 transition-colors py-1"
                >
                  No thanks
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={closePopup}
        className="relative group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-strong transition-all duration-200 hover:shadow-xl active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Live dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-200 border-2 border-green-500" />
        </span>
        <WhatsAppIcon />
        <span className="text-sm hidden sm:block">WhatsApp Us</span>
      </motion.a>

      {/* Call button */}
      <motion.a
        href="tel:08056390607"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-3 rounded-full shadow-strong transition-all duration-200 hover:shadow-xl active:scale-95"
        aria-label="Call us"
      >
        <Phone size={18} className="flex-shrink-0" />
        <span className="text-sm hidden sm:block">Call Now</span>
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-11 h-11 bg-white border border-neutral-200 text-neutral-600 hover:text-primary-600 hover:border-primary-300 rounded-full shadow-card flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
