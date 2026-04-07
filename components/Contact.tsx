"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97899 69383",
    sub: "Call us to book an appointment",
    href: "tel:+919789969383",
    color: "bg-primary-50 text-primary-600",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Open — Contact for timings",
    sub: "Mon – Sat: 9:00 AM – 7:00 PM",
    href: "tel:+919789969383",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "St. Anthony's Hospital, 1st Cross Street",
    sub: "St Anthony Nagar Camp, Puzhal, Chennai – 600066",
    href: "https://www.google.com/maps/search/Care+N+Cure+Dental+Puzhal+Chennai",
    color: "bg-rose-50 text-rose-600",
  },
];

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Contact for timings" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Find Us</p>
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="section-sub">
            We&apos;re here for you. Visit us, call us, or send a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — contact info + hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-4 p-5 bg-white border border-neutral-100 rounded-2xl shadow-soft hover:shadow-card hover:border-neutral-200 transition-all group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {item.value}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-neutral-300 group-hover:text-neutral-500 transition-colors flex-shrink-0 mt-1"
                  />
                </a>
              );
            })}

            {/* Working hours */}
            <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-primary-600" />
                <h3 className="font-bold text-neutral-900">Working Hours</h3>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-neutral-600">{h.day}</span>
                    <span className="font-semibold text-neutral-900">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                  <span className="text-sm text-teal-600 font-medium">
                    Open now — closes at 7:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-teal-500 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-white font-bold">Ready to book?</p>
                <p className="text-primary-100 text-sm">
                  Same-week appointments available
                </p>
              </div>
              <button
                onClick={() => scrollTo("#appointment")}
                className="btn-outline text-sm flex-shrink-0"
              >
                Book Now
              </button>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-soft h-[400px] sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.089374694985!2d80.25616731482218!3d12.97912899084848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d32b4b8db63%3A0x7c2c8a4a4f4f4f4f!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmileCare Dental Clinic Location"
              />
            </div>

            {/* Directions card */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 flex items-start gap-3">
              <MapPin size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-900 mb-0.5">
                  SmileCare Dental Clinic
                </p>
                <p className="text-xs text-neutral-600">
                  42, Gandhi Nagar Main Road, Adyar, Chennai – 600 020
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Landmark: Opposite to Adyar Bus Terminus · 5 min walk from
                  Adyar signal
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-primary-600 hover:text-primary-700 whitespace-nowrap flex items-center gap-1"
              >
                Directions
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
