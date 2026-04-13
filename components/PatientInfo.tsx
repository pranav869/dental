"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClipboardList,
  Stethoscope,
  HeartPulse,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Before Your Visit",
    color: "bg-primary-50 text-primary-600",
    items: [
      "Bring a valid government-issued ID",
      "Arrive 10 minutes early to complete forms",
      "List any medications you're currently taking",
      "Note any allergies, especially to anaesthetics",
      "Eat a light meal before your appointment",
    ],
  },
  {
    icon: Stethoscope,
    title: "During Treatment",
    color: "bg-teal-50 text-teal-600",
    items: [
      "Our staff will explain every step before proceeding",
      "Pain-free anaesthesia is available for all procedures",
      "You can pause or stop the procedure at any time",
      "X-rays and digital scans use minimal radiation",
      "Sterilised instruments are used for each patient",
    ],
  },
  {
    icon: HeartPulse,
    title: "After Your Visit",
    color: "bg-rose-50 text-rose-600",
    items: [
      "Written post-care instructions will be provided",
      "Avoid hard or sticky foods for 24 hours after procedures",
      "Take prescribed medications as directed",
      "Call us if you experience unusual pain or swelling",
      "Schedule your follow-up within the recommended timeframe",
    ],
  },
];

const faqs = [
  {
    q: "Is the treatment painful?",
    a: "Most modern dental procedures are virtually painless. We use advanced local anaesthesia and, for anxious patients, offer sedation dentistry. Your comfort is our top priority.",
  },
  {
    q: "How long does a routine check-up take?",
    a: "A standard check-up and cleaning takes 45–60 minutes. We'll examine your teeth, take digital X-rays if needed, and advise you on any treatments required.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a check-up every 6 months for most patients. Those with ongoing dental issues or gum disease may need more frequent visits.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately at 080563 90607. We reserve slots for dental emergencies every day. If you're in severe pain, go to the nearest emergency room.",
  },
  {
    q: "Are dental X-rays safe?",
    a: "Yes. Digital X-rays use up to 80% less radiation than traditional film X-rays. We only take X-rays when clinically necessary.",
  },
];

export default function PatientInfo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="patient-info" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Patient Information</p>
          <h2 className="section-title mb-4">What to Expect</h2>
          <p className="section-sub">
            We believe an informed patient is a confident patient. Here&apos;s
            everything you need to know before, during, and after your visit.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${step.color}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-neutral-900 mb-4">{step.title}</h3>
                <ul className="space-y-2.5">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={14}
                        className="text-teal-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-neutral-600 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Hygiene & Safety banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-teal-50 to-primary-50 border border-teal-100 rounded-2xl p-6 sm:p-8 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-white fill-current"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-neutral-900 text-lg mb-1">
                Your Safety is Our Priority
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our clinic follows strict WHO and IDA (Indian Dental Association)
                sterilisation protocols. All instruments are autoclave-sterilised
                between patients, treatment rooms are disinfected after every
                appointment, and our staff are fully vaccinated and trained in
                infection control.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {["ISO 9001", "IDA Member", "WHO Compliant"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold bg-white text-teal-700 px-3 py-1.5 rounded-full border border-teal-200 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-bold text-2xl text-neutral-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-100 rounded-xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-800 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
