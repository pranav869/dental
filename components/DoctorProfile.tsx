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
            {/* Real clinic photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] max-w-sm mx-auto aspect-[4/5]">
              <Image
                src="/clinic-doctor.webp"
                alt="Dr. Basheera BDS — Care N Cure Dental Centre"
                fill
                className="object-cover object-center"
              />
              {/* Name card overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4 border-t border-white/50">
                <p className="font-bold text-neutral-900 text-base">
                  Dr. Basheera BDS
                </p>
                <p className="text-primary-600 text-xs font-semibold">
                  Care N Cure Multi-Speciality Dental Centre
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
                    5.0 · Google Reviews
                  </span>
                </div>
              </div>
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
            <div className="grid grid-cols-3 gap-4">
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
