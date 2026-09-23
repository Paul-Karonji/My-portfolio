"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Mail, ArrowDown, Terminal, Cpu } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for dynamic 3D tilt & parallax on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const moveX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden bg-surface"
    >
      {/* Subtle ambient lighting gradients in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentViolet/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] bg-accentGreen/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ opacity: heroOpacity, y: heroParallaxY }}
        className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text Content Column: Next to the picture on desktop (lg:col-span-7), below picture on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas/80 backdrop-blur-sm border border-borderHairline shadow-sm hover:scale-[1.02] transition-transform duration-200"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentGreen opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accentGreen" />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium text-primaryText tracking-tight">
                {profile.statusBadge}
              </span>
            </motion.div>

            {/* Display Headline — word-by-word clip reveal */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="text-[34px] sm:text-[44px] md:text-[48px] lg:text-[50px] xl:text-[56px] font-medium text-primaryText leading-[1.1] tracking-[-0.03em]"
            >
              {[
                "I", "ship", "production", "systems",
                "with", "live", "users", "—",
                "payments,", "health,", "fleet,", "AI",
              ].map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: "110%", opacity: 0 },
                      show: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>


            {/* Narrative Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[15px] sm:text-[17px] text-mutedText leading-relaxed max-w-2xl"
            >
              Full-stack engineer shipping production systems with live users: a hospital platform running in 3 hospitals, SaaS products processing real card payments, and an offline-first POS suite with KRA eTIMS fiscalization. 3+ years across Kenya&apos;s payment rails, offline-first architecture, real-time systems, and MCP AI tooling.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href={`mailto:${profile.email}?subject=Architecture%20Inquiry%20-%20Paul%20Karonji`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-darkCard text-surface text-[14px] font-medium shadow-luzia-btn hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-accentGreen" />
                <span>Email Me</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-btn bg-canvas text-primaryText text-[14px] font-medium border border-borderHairline/80 hover:bg-borderHairline/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Systems</span>
                <ArrowDown className="w-4 h-4 text-mutedText" />
              </a>
            </motion.div>

            {/* Quick Architecture Proof Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="pt-4 border-t border-borderHairline/60 flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] text-mutedText"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accentViolet" />
                <span>10+ Production Systems</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGreen" />
                <span>KRA eTIMS &amp; M-Pesa Rails</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-darkCard" />
                <span>MCP AI Agent Tooling</span>
              </span>
            </motion.div>
          </div>

          {/* Picture Column: Next to the words on desktop (lg:col-span-5), on top on mobile */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient Radiant Glow behind Paul */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[280px] sm:w-[380px] lg:w-[440px] h-[340px] sm:h-[460px] lg:h-[540px] rounded-full bg-gradient-to-tr from-accentViolet/20 via-accentGreen/15 to-accentViolet/20 blur-3xl pointer-events-none"
            />

            {/* Interactive 3D Parallax & Floating Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                perspective: 1000,
                rotateX,
                rotateY,
                x: moveX,
                y: moveY,
              }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex justify-center items-center"
            >
              {/* Continuous Breathing / Floating Motion */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] sm:w-[360px] lg:w-[420px] xl:w-[460px] h-[360px] sm:h-[460px] lg:h-[540px] xl:h-[580px]"
              >
                <Image
                  src="/images/hero-cutout.webp"
                  alt={profile.name}
                  fill
                  priority
                  className="object-contain object-bottom select-none pointer-events-none drop-shadow-sm"
                />

                {/* Floating Micro-Badge: Top Right (Systems Architect) */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-8 sm:top-12 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-borderHairline shadow-luzia-subtle hidden sm:flex items-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-accentViolet" />
                  <span className="text-[11px] font-medium text-primaryText">
                    Full-Stack Engineer
                  </span>
                </motion.div>

                {/* Floating Micro-Badge: Bottom Left (Distributed & Offline) */}
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-12 sm:bottom-16 -left-2 sm:-left-6 px-3.5 py-1.5 rounded-full bg-darkCard/90 backdrop-blur-md border border-white/10 text-surface shadow-luzia-card hidden sm:flex items-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-accentGreen" />
                  <span className="text-[11px] font-mono">
                    Go · Next.js · Electron · Expo
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}