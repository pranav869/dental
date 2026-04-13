"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <Image
          src="/clinic-hero.webp"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Left-side gradient fade for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full">
        <div>
          {/* Content */}
          <div>
            {/* Open Now + Trust badge row */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Open Now · Closes at 9 PM
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Shield size={13} className="text-white" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[28px] sm:text-4xl lg:text-[60px] font-bold text-white leading-[1.15] mb-4 sm:mb-6"
            >
              {t.hero.title}{" "}
              <span className="text-primary-300 relative whitespace-nowrap">
                {t.hero.titleHighlight}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 via-primary-300 to-transparent rounded-full opacity-70" />
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-lg text-white/80 leading-relaxed mb-4 max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Trust checklist */}
            <motion.div
              custom={2.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-white/75 mb-8"
            >
              {["Experienced Doctors", "Modern Equipment", "Pain-Free Treatment"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-teal-400 font-bold">✔</span>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("#appointment")}
                className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto min-h-[48px]"
              >
                <Calendar size={18} />
                {t.hero.bookCta}
              </button>
              <a
                href="tel:08056390607"
                className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto min-h-[48px]"
              >
                <Phone size={18} />
                {t.hero.callCta}
              </a>
            </motion.div>

            {/* Google rating */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
            >
              <span className="flex">
                {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-base">★</span>)}
              </span>
              <span className="text-white font-semibold">5/5</span>
              <span>from 29+ Google Reviews</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
