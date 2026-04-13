"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Patient",
    initials: "★",
    location: "Chennai",
    treatment: "Root Canal Treatment",
    rating: 5,
    date: "Recent",
    review:
      "Excellent treatment... I had painless rootcanal treatment.. thanks to doctor",
  },
  {
    name: "Google Reviewer",
    initials: "★",
    location: "Chennai",
    treatment: "Root Canal & Extraction",
    rating: 5,
    date: "Recent",
    review:
      "Went to Care N Cure for root canal treatment and tooth extraction. Thanks to Dr. Basheera. Such a great experience. Clinic is neatly maintained.",
  },
  {
    name: "Google Reviewer",
    initials: "★",
    location: "Chennai",
    treatment: "Root Canal Treatment",
    rating: 5,
    date: "Recent",
    review:
      "Exceptional service from start to finish ! Clinic is spotless. And Dr.Basheera is a master of their craft. Best ROOT CANAL EXPERT !!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(current + i) % reviews.length]);
    }
    return items;
  };

  const aggregateRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section
      id="testimonials"
      className="section-padding bg-neutral-50"
      ref={ref}
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="section-title mb-4">
            Real Reviews from Real Patients
          </h2>
          <p className="section-sub">
            Don&apos;t take our word for it — hear from the patients we&apos;ve had the
            privilege to treat.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-neutral-100 rounded-2xl px-6 py-3 shadow-soft mt-6">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-2xl text-neutral-900">
              {aggregateRating}
            </span>
            <span className="text-neutral-500 text-sm">
              from {reviews.length * 83}+ reviews
            </span>
          </div>
        </motion.div>

        {/* Cards — desktop: 3 visible */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {getVisible().map((review, i) => (
              <div
                key={review.name + i}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft flex flex-col"
              >
                <Quote size={24} className="text-primary-200 mb-3" />
                <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">
                          {review.name}
                        </p>
                        <p className="text-xs text-neutral-400">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                      {review.treatment}
                    </span>
                    <span className="text-xs text-neutral-400">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-primary-600"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile — single card */}
        <div className="md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft"
          >
            <Quote size={24} className="text-primary-200 mb-3" />
            <p className="text-neutral-600 text-sm leading-relaxed mb-5">
              &ldquo;{reviews[current].review}&rdquo;
            </p>
            <div className="border-t border-neutral-100 pt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm">
                    {reviews[current].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {reviews[current].name}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {reviews[current].location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: reviews[current].rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                {reviews[current].treatment}
              </span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm text-neutral-500">
              {current + 1} / {reviews.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
