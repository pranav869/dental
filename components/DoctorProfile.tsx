"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Award,
  Clock,
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
  { icon: Clock, value: "8+", label: "Years of Practice" },
  { icon: Star, value: "4.9", label: "Patient Rating" },
  { icon: Award, value: "50+", label: "Happy Patients" },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">About Us</p>
          <h2 className="section-title mb-4">Why Patients Trust Us</h2>
          <p className="section-sub">
            Care N Cure Multi-Speciality Dental Centre — trusted by families in
            Puzhal, Chennai for over 8 years.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — doctor visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Placeholder doctor card */}
            <div className="relative bg-gradient-to-br from-primary-100 to-teal-100 rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto">
              {/* Decorative background shapes */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-primary-600/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Doctor silhouette SVG placeholder */}
                <svg
                  viewBox="0 0 200 280"
                  className="w-4/5 h-4/5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Lab coat body */}
                  <path
                    d="M40 280 L40 180 Q40 160 60 155 L80 145 L100 170 L120 145 L140 155 Q160 160 160 180 L160 280 Z"
                    fill="white"
                    opacity="0.9"
                  />
                  {/* Scrubs/shirt underneath */}
                  <path
                    d="M75 155 L100 165 L125 155 L120 145 L100 155 L80 145 Z"
                    fill="#0ea5e9"
                    opacity="0.6"
                  />
                  {/* Head */}
                  <circle cx="100" cy="90" r="42" fill="#FDDBB4" />
                  {/* Hair */}
                  <path
                    d="M60 75 Q62 45 100 48 Q138 45 140 75 Q135 55 100 52 Q65 55 60 75Z"
                    fill="#3d2b1f"
                    opacity="0.85"
                  />
                  {/* Eyes */}
                  <ellipse cx="87" cy="88" rx="5" ry="6" fill="#3d2b1f" />
                  <ellipse cx="113" cy="88" rx="5" ry="6" fill="#3d2b1f" />
                  <circle cx="89" cy="86" r="1.5" fill="white" />
                  <circle cx="115" cy="86" r="1.5" fill="white" />
                  {/* Smile */}
                  <path
                    d="M88 105 Q100 115 112 105"
                    stroke="#c0825a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Stethoscope */}
                  <path
                    d="M85 150 Q80 175 75 185 Q70 200 80 205 Q90 210 95 200"
                    stroke="#0284c7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="95" cy="198" r="6" fill="#0284c7" opacity="0.7" />
                </svg>
              </div>
              {/* Name card overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-4 border-t border-white/50">
                <p className="font-bold text-neutral-900 text-lg">
                  Care N Cure Dental
                </p>
                <p className="text-primary-600 text-sm font-medium">
                  Multi-Speciality Dental Centre
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs text-neutral-500 ml-1">
                    4.9 · 50+ reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 sm:-right-6 bg-white shadow-card rounded-2xl p-4 border border-neutral-100 max-w-[140px]">
              <div className="flex items-center gap-2 mb-1">
                <Award size={16} className="text-primary-600" />
                <span className="text-xs font-bold text-neutral-900">
                  8+ Years
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-tight">
                Trusted dental care in Puzhal, Chennai
              </p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-neutral-100 p-4 text-center shadow-soft"
                >
                  <Icon
                    size={18}
                    className="text-primary-600 mx-auto mb-2"
                  />
                  <p className="font-bold text-xl text-neutral-900">{value}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-3">About Care N Cure</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Care N Cure Multi-Speciality Dental Centre is a trusted dental
                clinic in Puzhal, Chennai, known for providing painless
                treatments and personalised care. With over 8 years of
                experience, the clinic focuses on patient comfort, modern dental
                technology, and clear treatment explanations.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-primary-600" />
                Our Standards & Approach
              </h3>
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-teal-500 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-neutral-700">
                        {c.label}
                      </p>
                      <p className="text-xs text-neutral-400">{c.year}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-soft">
              <h3 className="font-bold text-neutral-900 mb-3">Specializations</h3>
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
