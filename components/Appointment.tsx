"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  User,
  Phone,
  Stethoscope,
  Calendar,
  CheckCircle,
  Loader2,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  treatment: string;
  date: string;
  message: string;
};

const treatments = [
  "Routine Check-up & Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Braces / Clear Aligners",
  "Dental Crowns & Bridges",
  "Tooth Extraction",
  "Other / Consultation",
];


export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "bookings"), {
        name: data.name,
        phone: data.phone,
        problem: data.treatment,
        date: data.date,
        notes: data.message || "",
        status: "pending",
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("Booking save error:", err);
    } finally {
      setLoading(false);
    }
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <section
      id="appointment"
      className="section-padding bg-gradient-to-br from-primary-600 to-teal-600 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <p className="text-primary-200 text-sm font-semibold uppercase tracking-widest mb-3">
              Book Appointment
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Schedule Your Visit
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed mb-8">
              Takes less than 2 minutes. We&apos;ll confirm your slot within the
              hour.
            </p>

            {/* Why book */}
            <div className="space-y-4">
              {[
                {
                  title: "No waiting lists",
                  desc: "Slots available same week for most treatments",
                },
                {
                  title: "Flexible scheduling",
                  desc: "Morning, afternoon & evening appointments available",
                },
                {
                  title: "Easy rescheduling",
                  desc: "Cancel or reschedule up to 2 hours before your slot",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-teal-300 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-primary-200 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact option */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-white text-sm font-medium mb-1">
                Prefer to call?
              </p>
              <a
                href="tel:08056390607"
                className="text-white font-bold text-lg hover:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Phone size={18} />
                080563 90607
              </a>
              <p className="text-primary-200 text-xs mt-1">
                Mon–Sat: 10 AM–2:30 PM, 4:30–9 PM
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-strong p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-teal-500" />
                  </div>
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">
                    Appointment Requested!
                  </h3>
                  <p className="text-neutral-500 text-sm mb-6">
                    We&apos;ve received your request and will confirm within the hour
                    via WhatsApp or call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="font-bold text-neutral-900 text-lg mb-1">
                    Book an Appointment
                  </h3>
                  <p className="text-neutral-500 text-sm mb-4">
                    Fill in your details below and we&apos;ll be in touch shortly.
                  </p>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        {...register("name", {
                          required: "Name is required",
                          minLength: { value: 2, message: "Name too short" },
                        })}
                        type="text"
                        placeholder="Your full name"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                          errors.name
                            ? "border-rose-300 bg-rose-50"
                            : "border-neutral-200 bg-white focus:border-primary-400"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Enter a valid 10-digit mobile number",
                          },
                        })}
                        type="tel"
                        placeholder="10-digit mobile number"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                          errors.phone
                            ? "border-rose-300 bg-rose-50"
                            : "border-neutral-200 bg-white focus:border-primary-400"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Treatment Required *
                    </label>
                    <div className="relative">
                      <Stethoscope
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <select
                        {...register("treatment", {
                          required: "Please select a treatment",
                        })}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm appearance-none bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                          errors.treatment
                            ? "border-rose-300 bg-rose-50"
                            : "border-neutral-200 focus:border-primary-400"
                        }`}
                      >
                        <option value="">Select treatment...</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.treatment && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.treatment.message}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        {...register("date", { required: "Please select a date" })}
                        type="date"
                        min={minDateStr}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                          errors.date
                            ? "border-rose-300 bg-rose-50"
                            : "border-neutral-200 bg-white focus:border-primary-400"
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-xs text-rose-500 mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Additional Notes
                      <span className="text-neutral-400 font-normal ml-1">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={2}
                      placeholder="Any concerns or special requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar size={18} />
                        Book Appointment
                      </>
                    )}
                  </button>

                  <p className="text-xs text-neutral-400 text-center">
                    By booking, you agree to our{" "}
                    <a href="#" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </a>
                    . We do not share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
