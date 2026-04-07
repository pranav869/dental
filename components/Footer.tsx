"use client";

import { Phone, Mail, MapPin, Heart } from "lucide-react";

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Braces & Clear Aligners",
  "Dental Crowns",
  "Tooth Extraction",
  "Pediatric Dentistry",
  "Oral Surgery",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Doctor", href: "#doctor" },
  { label: "Patient Info", href: "#patient-info" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8 2 5 5 5 8c0 2.5 1 5.5 2 8l1.5 4.5c.3.8 1 1.5 1.9 1.5h3.2c.9 0 1.6-.7 1.9-1.5L17 16c1-2.5 2-5.5 2-8 0-3-3-6-7-6z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-white leading-none block">
                  SmileCare
                </span>
                <span className="text-xs text-primary-400 font-medium leading-none">
                  Dental Clinic
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Advanced Dental Care You Can Trust. Compassionate, modern dentistry
              in the heart of Chennai.
            </p>
            {/* Contact in footer */}
            <div className="space-y-2.5">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-primary-400" />
                +91 98765 43210
              </a>
              <a
                href="mailto:care@smilecaredental.in"
                className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-primary-400" />
                care@smilecaredental.in
              </a>
              <div className="flex items-start gap-2.5 text-sm text-neutral-400">
                <MapPin size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>42, Gandhi Nagar Main Road, Adyar, Chennai – 600 020</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + certifications */}
          <div>
            <h4 className="font-semibold text-white mb-4">Working Hours</h4>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between text-neutral-400">
                <span>Mon – Fri</span>
                <span>9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Saturday</span>
                <span>9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Sunday</span>
                <span>10:00 AM – 2:00 PM</span>
              </div>
            </div>

            {/* Certifications */}
            <h4 className="font-semibold text-white mb-3">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001", "IDA Member", "FICOI", "WHO Compliant"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-700"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} SmileCare Dental Clinic, Chennai. All
            rights reserved.
          </p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            Made with <Heart size={11} className="text-rose-500 fill-rose-500" /> for
            healthier smiles
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
