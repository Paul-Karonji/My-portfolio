"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven progress bar for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const steps = [
    {
      num: "1",
      title: "Architecture & Discovery Call",
      desc: "We analyze your system requirements, throughput goals, offline or compliance constraints, and technology dependencies to align on technical feasibility and architecture.",
    },
    {
      num: "2",
      title: "System Design & Technical Spec",
      desc: "I deliver a concrete technical design document specifying data models, API contracts, sequence diagrams, failure recovery modes, and milestone deliverables.",
    },
    {
      num: "3",
      title: "High-Velocity Build & Testing",
      desc: "Fast, iterative development with strict test-driven methodologies, continuous linting, and CI/CD security checks. Regular staging deployments keep you in the loop.",
    },
    {
      num: "4",
      title: "Deployment & Production CI/CD",
      desc: "Zero-downtime containerized production releases with automated database migrations, Docker Compose orchestration, SSL edge reverse proxying, and credential vaulting.",
    },
    {
      num: "5",
      title: "Observability & SLA Support",
      desc: "Comprehensive post-launch operational monitoring, automated error telemetry, and dedicated support to guarantee high availability and seamless developer handoff.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="w-full py-28 px-6 sm:px-10 bg-darkCard text-surface bg-noise relative"
    >
      {/* Scroll-driven vertical progress bar on the left edge */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accentGreen rounded-full"
      />

      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <span className="text-[12px] font-semibold tracking-wider text-accentGreen uppercase block">
            How It Works
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-medium leading-[1.18] tracking-[-0.025em]">
            A rigorous and transparent engineering workflow to bring your system vision to life with speed and precision.
          </h2>
        </motion.div>

        {/* Staggered step cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
              className="p-8 rounded-card bg-[#181818] border border-white/10 flex flex-col justify-between hover:border-accentGreen/50 transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accentGreen font-bold text-[16px]">
                  {step.num}
                </div>
                <h3 className="text-[20px] font-medium text-surface">
                  {step.title}
                </h3>
                <p className="text-[14px] text-surface/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <span className="text-[11px] font-semibold text-accentGreen uppercase tracking-wider">
                  Phase 0{step.num}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
