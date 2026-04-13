"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar, Star, Shield } from "lucide-react";
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div>
          {/* Content */}
          <div>
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <Shield size={14} className="text-white" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6"
            >
              {t.hero.title}{" "}
              <span className="text-primary-300 relative">
                {t.hero.titleHighlight}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 4 100 2 150 3C200 4 250 7 298 9"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo("#appointment")}
                className="btn-primary text-base px-8 py-3.5"
              >
                <Calendar size={18} />
                {t.hero.bookCta}
              </button>
              <a
                href="tel:08056390607"
                className="btn-outline text-base px-8 py-3.5"
              >
                <Phone size={18} />
                {t.hero.callCta}
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-5 text-sm text-white/70"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="font-medium text-white">5.0/5</span>
                <span>from 7+ reviews</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-teal-300" />
                <span>8+ Years Trusted Care</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
