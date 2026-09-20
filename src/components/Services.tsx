"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 sm:px-10 max-w-[1340px] mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-3xl mb-16"
      >
        <span className="text-[12px] font-semibold tracking-wider text-mutedText uppercase mb-2 block">
          Architectural Capabilities
        </span>
        <h2 className="text-[32px] sm:text-[40px] font-medium text-primaryText tracking-[-0.025em] leading-[1.18]">
          Engineering solutions that scale effortlessly, handle offline realities, and automate critical operations
        </h2>
      </motion.div>

      {/* Staggered 3-card grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((s) => {
          const isFeatured = s.featured;

          return (
            <motion.div
              key={s.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className={`rounded-card sm:rounded-bento p-8 sm:p-9 flex flex-col justify-between transition-shadow duration-300 ${
                isFeatured
                  ? "bg-darkCard text-surface shadow-xl ring-1 ring-white/10"
                  : "bg-surface text-primaryText border border-borderHairline/80 shadow-luzia-subtle hover:shadow-luzia-card"
              }`}
            >
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isFeatured
                        ? "bg-white/10 text-surface/80"
                        : "bg-canvas text-mutedText border border-borderHairline"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] sm:text-[24px] font-medium leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[14px] sm:text-[15px] leading-relaxed ${
                    isFeatured ? "text-surface/85" : "text-mutedText"
                  }`}
                >
                  {s.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <span
                    className={`text-[12px] font-semibold uppercase tracking-wider block ${
                      isFeatured ? "text-surface/60" : "text-primaryText"
                    }`}
                  >
                    Key Deliverables:
                  </span>
                  <div className="space-y-2">
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accentGreen" />
                        <span
                          className={`text-[13px] leading-snug ${
                            isFeatured ? "text-surface/90" : "text-primaryText/90"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tags & CTA */}
              <div
                className={`pt-6 mt-8 border-t ${
                  isFeatured ? "border-white/15" : "border-borderHairline/60"
                }`}
              >
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${
                        isFeatured
                          ? "bg-white/10 text-surface/80"
                          : "bg-canvas text-mutedText"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-[14px] font-medium transition-colors ${
                    isFeatured
                      ? "text-surface hover:text-surface/75"
                      : "text-primaryText hover:text-darkCard"
                  }`}
                >
                  <span>Inquire About Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
