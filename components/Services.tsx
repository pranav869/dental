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
  Wind,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    icon: Wind,
    color: "bg-sky-50 text-sky-600",
    borderColor: "hover:border-sky-300",
    accentColor: "text-sky-600",
    title: "Teeth Cleaning",
    titleTa: "பல் சுத்தப்படுத்தல்",
    description:
      "Professional cleaning that removes plaque, tartar, and stains for healthy gums and fresh breath. Recommended every 6 months.",
    descTa:
      "ஆரோக்கியமான ஒடுக்குகள் மற்றும் ஒளிரும் மூச்சுக்காக தொழில்முறை சுத்தப்படுத்தல்.",
    benefits: ["Removes plaque & tartar", "Fresh breath", "Prevents gum disease"],
    benefitsTa: ["தகடு & கறை நீக்கும்", "தாழ்கால மூச்சு", "ஒடு நோயை தடுக்கிறது"],
    duration: "45 min",
    price: "Affordable pricing",
  },
  {
    icon: Activity,
    color: "bg-rose-50 text-rose-600",
    borderColor: "hover:border-rose-300",
    accentColor: "text-rose-600",
    title: "Root Canal Treatment",
    titleTa: "வேர் கால் சிகிச்சை",
    description:
      "Pain-free root canal procedures using advanced techniques. Save your natural tooth and eliminate infection fast.",
    descTa:
      "நவீன தொழில்நுட்பம் பயன்படுத்தி வலியற்ற வேர் கால் சிகிச்சை.",
    benefits: ["Painless procedure", "Saves natural tooth", "Advanced techniques"],
    benefitsTa: ["வலியற்ற சிகிச்சை", "இயற்கை பல் பாதுகாக்கப்படும்", "மேம்பட்ட தொழில்நுட்பம்"],
    duration: "60–90 min",
    price: "Affordable pricing",
  },
  {
    icon: Anchor,
    color: "bg-primary-50 text-primary-600",
    borderColor: "hover:border-primary-300",
    accentColor: "text-primary-600",
    title: "Dental Implants",
    titleTa: "பல் இம்ப்ளான்ட்",
    description:
      "Permanent solution for missing teeth. Implants look, feel, and function exactly like your natural tooth.",
    descTa:
      "இழந்த பல்லுக்கு நிரந்தர தீர்வு. இயற்கை பல்லைப் போலவே தோற்றம் மற்றும் செயல்பாடு தரும்.",
    benefits: ["Permanent solution", "Natural look & feel", "Long-lasting results"],
    benefitsTa: ["நிரந்தர தீர்வு", "இயற்கையான தோற்றம்", "நீடித்த முடிவுகள்"],
    duration: "2–3 visits",
    price: "Contact for pricing",
  },
  {
    icon: AlignCenter,
    color: "bg-teal-50 text-teal-600",
    borderColor: "hover:border-teal-300",
    accentColor: "text-teal-600",
    title: "Braces & Aligners",
    titleTa: "பல் சீராக்கி",
    description:
      "Straighten your teeth with modern orthodontic solutions. We offer both traditional braces and clear aligner options.",
    descTa:
      "நவீன பல் சீராக்கி தீர்வுகள் மூலம் பல்லை சீராக்குங்கள்.",
    benefits: ["Traditional & clear options", "All age groups", "Improved confidence"],
    benefitsTa: ["பாரம்பரிய & தெளிவான விருப்பம்", "அனைத்து வயதினரும்", "தன்னம்பிக்கை மேம்படும்"],
    duration: "12–18 months",
    price: "Contact for pricing",
  },
  {
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600",
    borderColor: "hover:border-amber-300",
    accentColor: "text-amber-600",
    title: "Cosmetic Dentistry",
    titleTa: "பல் அழகியல்",
    description:
      "Enhance your smile with teeth whitening, veneers, and aesthetic dental treatments. Look and feel your confident best.",
    descTa:
      "பல் வெண்மையாக்கல், வினியர்கள் மற்றும் அழகியல் சிகிச்சைகள் மூலம் புன்னகையை மேம்படுத்துங்கள்.",
    benefits: ["Teeth whitening", "Smile makeover", "Aesthetic veneers"],
    benefitsTa: ["பல் வெண்மையாக்கல்", "புன்னகை மாற்றம்", "அழகியல் வினியர்கள்"],
    duration: "1–2 visits",
    price: "Affordable pricing",
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
