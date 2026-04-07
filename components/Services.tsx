"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Anchor,
  Activity,
  AlignCenter,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-300",
    accentColor: "text-amber-600",
    title: "Teeth Whitening",
    titleTa: "பல் வெண்மையாக்கல்",
    description:
      "Professional-grade whitening that removes years of staining in a single session, leaving you with a naturally bright smile.",
    descTa:
      "ஒரே அமர்வில் வருடங்கள் கறை நீக்கி இயற்கையான ஒளிரும் புன்னகை.",
    benefits: ["Up to 8 shades brighter", "Safe & painless", "Long-lasting results"],
    benefitsTa: ["8 நிழல் வரை பிரகாசமாகும்", "பாதுகாப்பான & வலியற்றது", "நீடித்த முடிவுகள்"],
    duration: "60 min",
    price: "From ₹4,999",
  },
  {
    icon: Anchor,
    color: "bg-primary-50 text-primary-600",
    borderColor: "hover:border-primary-300",
    accentColor: "text-primary-600",
    title: "Dental Implants",
    titleTa: "பல் இம்ப்ளான்ட்",
    description:
      "Permanent tooth replacement that looks, feels, and functions exactly like your natural tooth — for a lifetime.",
    descTa:
      "உங்கள் இயற்கை பல்லைப் போலவே இருக்கும் நிரந்தர பல் மாற்று — வாழ்நாள் முழுவதும்.",
    benefits: ["Permanent solution", "Titanium-grade implant", "Natural appearance"],
    benefitsTa: ["நிரந்தர தீர்வு", "டைட்டானியம் தர இம்ப்ளான்ட்", "இயற்கையான தோற்றம்"],
    duration: "2–3 visits",
    price: "From ₹25,000",
  },
  {
    icon: Activity,
    color: "bg-rose-50 text-rose-600",
    borderColor: "hover:border-rose-300",
    accentColor: "text-rose-600",
    title: "Root Canal",
    titleTa: "வேர் கால் சிகிச்சை",
    description:
      "Modern, virtually painless root canal treatment that saves your infected tooth and eliminates pain fast.",
    descTa:
      "நவீன, கிட்டத்தட்ட வலியற்ற வேர் கால் சிகிச்சை — தொற்று பல்லை காத்து வலியை நீக்கும்.",
    benefits: ["Painless procedure", "Single session available", "Preserves natural tooth"],
    benefitsTa: ["வலியற்ற சிகிச்சை", "ஒரே அமர்வில் கிடைக்கும்", "இயற்கை பல் பாதுகாக்கப்படும்"],
    duration: "90 min",
    price: "From ₹6,000",
  },
  {
    icon: AlignCenter,
    color: "bg-teal-50 text-teal-600",
    borderColor: "hover:border-teal-300",
    accentColor: "text-teal-600",
    title: "Braces & Aligners",
    titleTa: "பல் சீராக்கி",
    description:
      "From traditional braces to invisible clear aligners — we straighten your smile with the approach that fits your lifestyle.",
    descTa:
      "பாரம்பரிய பிரேஸ்கள் முதல் தெளிவான அலைனர்கள் வரை — உங்கள் வாழ்க்கை முறைக்கு பொருத்தமான அணுகுமுறை.",
    benefits: ["Clear aligner option", "All age groups", "Discreet treatment"],
    benefitsTa: ["தெளிவான அலைனர் விருப்பம்", "அனைத்து வயதினரும்", "விவேகமான சிகிச்சை"],
    duration: "12–18 months",
    price: "From ₹18,000",
  },
];

export default function Services() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Our Treatments</p>
          <h2 className="section-title mb-4">
            Everything Your Smile Needs
          </h2>
          <p className="section-sub">
            Comprehensive dental care backed by the latest technology and a
            gentle, patient-first approach.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 ${service.borderColor} cursor-default`}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${service.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-neutral-900 leading-tight">
                      {language === "ta" ? service.titleTa : service.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-neutral-400 font-medium">
                        {service.duration}
                      </span>
                      <span className="text-xs font-semibold text-neutral-700 bg-neutral-50 px-2 py-0.5 rounded-full border border-neutral-100">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {language === "ta" ? service.descTa : service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-1.5 mb-5">
                  {(language === "ta" ? service.benefitsTa : service.benefits).map(
                    (b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-neutral-600"
                      >
                        <CheckCircle
                          size={14}
                          className={`flex-shrink-0 ${service.accentColor}`}
                        />
                        {b}
                      </li>
                    )
                  )}
                </ul>

                <button
                  onClick={() => scrollTo("#appointment")}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accentColor} hover:gap-2.5 transition-all`}
                >
                  Book This Treatment
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-primary-600 to-teal-500 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-white font-bold text-lg">
              Not sure which treatment you need?
            </p>
            <p className="text-primary-100 text-sm mt-1">
              Book a free consultation — our doctors will guide you.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#appointment")}
            className="btn-outline flex-shrink-0"
          >
            Book Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
