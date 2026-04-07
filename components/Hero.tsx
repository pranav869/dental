"use client";

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-50" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/60 rounded-full blur-3xl -translate-x-1/3" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(to right, #0ea5e9 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <Shield size={14} className="text-primary-600" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-6"
            >
              {t.hero.title}{" "}
              <span className="text-primary-600 relative">
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
              className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg"
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
                href="tel:+919789969383"
                className="btn-secondary text-base px-8 py-3.5"
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
              className="flex flex-wrap items-center gap-5 text-sm text-neutral-500"
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
                <span className="font-medium text-neutral-700">4.9/5</span>
                <span>from 50+ reviews</span>
              </div>
              <span className="text-neutral-200">|</span>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-teal-500" />
                <span>8+ Years Trusted Care</span>
              </div>
            </motion.div>
          </div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-strong border border-neutral-100 overflow-hidden">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-primary-600 to-teal-500 p-6 pb-16">
                <p className="text-white/80 text-sm font-medium mb-1">
                  Next Available Slot
                </p>
                <p className="text-white text-2xl font-bold">Today, 3:00 PM</p>
              </div>
              {/* Card body */}
              <div className="-mt-8 mx-4 bg-white rounded-2xl shadow-card p-5 border border-neutral-100 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                    Dr
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Care N Cure Dental
                    </p>
                    <p className="text-sm text-neutral-500">
                      Multi-Speciality — 8+ years exp.
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-neutral-700">
                      4.9
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {["9 AM", "11 AM", "3 PM", "5 PM"].map((slot) => (
                    <button
                      key={slot}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        slot === "3 PM"
                          ? "bg-primary-600 text-white border-primary-600"
                          : "border-neutral-200 text-neutral-600 hover:border-primary-300"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div className="px-4 pb-5">
                <button
                  onClick={() => scrollTo("#appointment")}
                  className="btn-primary w-full"
                >
                  <Calendar size={16} />
                  Book This Slot
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
