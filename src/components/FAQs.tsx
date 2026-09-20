"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";
import { faqs } from "@/data/faqs";
import { profile } from "@/data/profile";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full py-28 px-6 sm:px-10 max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Contact Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
        >
          <span className="text-[12px] font-semibold tracking-wider text-mutedText uppercase block">
            Frequently Asked Questions
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-medium text-primaryText leading-[1.18] tracking-[-0.025em]">
            Answers to common questions about engineering, process, and collaboration
          </h2>
          <p className="text-[15px] text-mutedText leading-relaxed">
            Have a specific requirement or architecture challenge that isn’t covered here? Let’s talk through your system architecture.
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${profile.email}?subject=Architecture%20Question`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-darkCard text-surface text-[14px] font-medium shadow-luzia-btn hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4 text-accentGreen" />
              <span>Email Me Directly</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Accordions */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-7 space-y-3"
        >
          <div className="inline-block mb-3 px-3.5 py-1.5 rounded-full bg-darkCard text-surface text-[12px] font-medium shadow-sm">
            I’m here to help you
          </div>

          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-card border border-borderHairline/80 bg-surface overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-canvas/40 transition-colors"
                >
                  <span className="text-[16px] sm:text-[17px] font-medium text-primaryText leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-darkCard text-surface rotate-180"
                        : "bg-canvas text-mutedText rotate-0"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 text-[14px] sm:text-[15px] text-mutedText leading-relaxed border-t border-borderHairline/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
