"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Award, ShieldCheck, Quote, TrendingUp } from "lucide-react";
import { profile } from "@/data/profile";

// ─── Animated counter that parses "10+", "200+", "100k", "99.9%" etc. ───────
function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    // Extract leading number + suffix ("+", "%", "k", etc.)
    const match = value.match(/^([\d.]+)([^\d.]*)$/);
    if (!match) {
      ref.current.textContent = value;
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const isDecimal = match[1].includes(".");
    const decimals = isDecimal ? (match[1].split(".")[1]?.length ?? 1) : 0;

    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 max-w-[1340px] mx-auto">
      {/* 3-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Credentials & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="rounded-bento p-8 sm:p-10 bg-surface border border-borderHairline/80 shadow-luzia-subtle flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-accentYellowLight flex items-center justify-center text-accentYellow">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-canvas text-mutedText border border-borderHairline">
                Verified
              </span>
            </div>

            <div>
              <h3 className="text-[20px] sm:text-[22px] font-medium text-primaryText mb-2">
                Certified & Production-Proven
              </h3>
              <p className="text-[14px] text-mutedText leading-relaxed">
                Proven track record in high-security architectures, fiscal compliance, and distributed engineering.
              </p>
            </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-[13px] text-primaryText">
              <ShieldCheck className="w-4 h-4 text-accentGreen" />
              <span>AI Fluency Certified — Anthropic (incl. Claude 101)</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-primaryText">
              <ShieldCheck className="w-4 h-4 text-accentGreen" />
              <span>IBM SkillsBuild Cybersecurity Certified</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-primaryText">
              <ShieldCheck className="w-4 h-4 text-accentGreen" />
              <span>KRA eTIMS Fiscalization · OSCU/VSCU</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-primaryText">
              <ShieldCheck className="w-4 h-4 text-accentGreen" />
              <span>Technical Lead · JHUB Africa (JKUAT Hub)</span>
            </div>
          </div>
          </div>

          <div className="pt-6 border-t border-borderHairline/60 mt-6">
            <span className="text-[12px] text-mutedText font-medium">
              BSc Software Development · KCA University (exp. July 2027)
            </span>
          </div>
        </motion.div>

        {/* Card 2: Real Client Reviews (from wiktechnologies.co.ke) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="rounded-bento p-8 sm:p-10 bg-accentVioletLight border border-accentViolet/15 shadow-luzia-subtle flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="space-y-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-accentViolet">
              <Quote className="w-5 h-5" />
            </div>

            <div>
              <p className="text-[14px] sm:text-[15px] text-primaryText/90 leading-relaxed">
                &ldquo;The system is reliable, user-friendly, and has transformed how we manage daily operations. The FEFO pharmacy module in particular has made medicine dispensing and prescription tracking seamless.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accentViolet flex items-center justify-center text-white font-semibold text-[12px] flex-shrink-0">
                  S
                </div>
                <div>
                  <div className="text-[13px] font-medium text-primaryText leading-tight">
                    Samy
                  </div>
                  <div className="text-[11px] text-mutedText leading-tight">
                    Lead Admin · Chidstal Healthcare (WIK HMS)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-accentViolet/15 relative z-10 mt-4">
            <p className="text-[14px] sm:text-[15px] text-primaryText/90 leading-relaxed">
              &ldquo;Working with WIK Technologies to build our custom platform was a great experience. They delivered a fast, clean, professional software architecture that genuinely grew our business.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accentGreen flex items-center justify-center text-white font-semibold text-[12px] flex-shrink-0">
                J
              </div>
              <div>
                <div className="text-[13px] font-medium text-primaryText leading-tight">
                  Jim
                </div>
                <div className="text-[11px] text-mutedText leading-tight">
                  Operations Manager · Custom Platform Client
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Quantitative Production Metrics — animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="rounded-bento p-8 sm:p-10 bg-surface border border-borderHairline/80 shadow-luzia-subtle flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-accentGreenLight flex items-center justify-center text-accentGreen">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-canvas text-mutedText border border-borderHairline">
                Track Record
              </span>
            </div>

            <h3 className="text-[20px] sm:text-[22px] font-medium text-primaryText">
              Engineering Impact
            </h3>

            <div className="grid grid-cols-2 gap-4 pt-1">
              {profile.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-btn bg-canvas border border-borderHairline/60">
                  <CountUp
                    value={m.value}
                    className="text-[24px] font-bold text-primaryText tracking-tight"
                  />
                  <div className="text-[12px] font-medium text-primaryText/80 leading-snug mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-borderHairline/60">
            <span className="text-[12px] text-mutedText">
              Zero-downtime deployments & high fault tolerance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
