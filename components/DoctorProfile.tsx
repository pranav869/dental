"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Star,
  CheckCircle,
  Calendar,
} from "lucide-react";

const credentials = [
  { label: "BDS — Qualified Dental Surgeon", year: "" },
  { label: "Multi-Speciality Dental Practice", year: "" },
  { label: "Advanced Painless Treatment Techniques", year: "" },
  { label: "Modern Dental Equipment & Technology", year: "" },
];

const highlights = [
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Star, value: "7+", label: "Reviews" },
  { icon: GraduationCap, value: "100%", label: "Painless Focus" },
];

const specializations = [
  "Painless Treatments",
  "Teeth Cleaning & Prevention",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Clear Aligners",
  "Cosmetic Dentistry",
];

export default function DoctorProfile() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="doctor" className="section-padding bg-neutral-50" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — full-height clinic photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
              <Image
                src="/clinic-doctor.webp"
                alt="Dr. Basheera BDS — Care N Cure Dental Centre"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 62%" }}
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <p className="section-label mb-2">Meet Our Doctor</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-2">
                Dr. Basheera BDS
              </h2>
              <p className="text-primary-600 font-semibold text-base">
                Multi-Speciality Dental Surgeon · Care N Cure Dental Centre
              </p>
            </div>

            {/* Stats — inline premium style */}
            <div className="flex gap-8 border-y border-neutral-200 py-6">
              {highlights.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-neutral-900">{value}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-neutral-600 text-base leading-relaxed">
              Dr. Basheera brings expertise and compassionate care to every
              patient at Care N Cure Multi-Speciality Dental Centre, Puzhal,
              Chennai. Known for painless treatments and clear explanations, she
              makes every visit comfortable and stress-free.
            </p>

            {/* Credentials */}
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-teal-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{c.label}</span>
                </li>
              ))}
            </ul>

            {/* Specializations */}
            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full border border-primary-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTo("#appointment")}
              className="btn-primary w-full sm:w-auto"
            >
              <Calendar size={16} />
              Book Your Appointment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
