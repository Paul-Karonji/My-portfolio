"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, Phone, Github, Linkedin, ArrowUpRight, Globe } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-canvas pt-12 pb-16 px-6 sm:px-10">
      <div className="max-w-[1340px] mx-auto space-y-16">
        {/* Large Closing Bento Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-bento p-10 sm:p-16 lg:p-20 bg-darkCard text-surface bg-noise text-center relative overflow-hidden flex flex-col items-center justify-center space-y-8"
        >
          {/* Pulsing ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-white rounded-full blur-3xl pointer-events-none"
          />

          {/* Minimal Status Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[12px] font-medium text-surface/90 border border-white/10 relative z-10">
            <span className="w-2 h-2 rounded-full bg-accentGreen" />
            <span>Open for Enterprise Collaboration</span>
          </div>

          {/* Display Headline */}
          <div className="max-w-2xl space-y-3 relative z-10">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-medium leading-[1.1] tracking-[-0.03em]">
              Ready to architect and scale your next system?
            </h2>
            <p className="text-[15px] sm:text-[18px] text-surface/75">
              Book a call or email me with your requirements, and I’ll take care of the rest.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <a
              href={`mailto:${profile.email}?subject=Architecture%20Call%20Request%20-%20Paul%20Karonji`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-surface text-darkCard text-[15px] font-medium hover:bg-canvas transition-all shadow-luzia-btn hover:scale-[1.03] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-accentViolet" />
              <span>Schedule Architecture Call</span>
            </a>

            <a
              href={profile.resumeUrl}
              download="Paul-Karonji-Waithaka-Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-btn bg-white/10 hover:bg-white/15 text-surface text-[15px] font-medium border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-accentGreen" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </motion.div>

        {/* 4-Column Directory Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-8 border-t border-borderHairline/80">
          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-semibold text-primaryText uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="#" className="text-mutedText hover:text-primaryText transition-colors">
                  Home (Top)
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-mutedText hover:text-primaryText transition-colors">
                  Featured Works
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-mutedText hover:text-primaryText transition-colors">
                  Services & Architecture
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-mutedText hover:text-primaryText transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-mutedText hover:text-primaryText transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Flagship Systems */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-semibold text-primaryText uppercase tracking-wider">
              Core Systems
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              {projects.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href="#work"
                    className="text-mutedText hover:text-primaryText transition-colors line-clamp-1"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-semibold text-primaryText uppercase tracking-wider">
              Connect & Code
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-mutedText hover:text-primaryText transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub (@Paul-Karonji)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-mutedText hover:text-primaryText transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://wiktechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-mutedText hover:text-primaryText transition-colors"
                >
                  <Globe className="w-4 h-4 text-accentViolet" />
                  <span>WIK Technologies</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-semibold text-primaryText uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 text-mutedText hover:text-primaryText transition-colors"
                >
                  <Mail className="w-4 h-4 text-accentGreen" />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-mutedText hover:text-primaryText transition-colors"
                >
                  <Phone className="w-4 h-4 text-accentViolet" />
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li className="text-[13px] text-mutedText pt-2">
                Based in Nairobi, Kenya (UTC+3) · Available for remote & hybrid worldwide.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-borderHairline/60 text-[13px] text-mutedText">
          <div>
            © {new Date().getFullYear()} Paul Karonji Waithaka. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Architected with Next.js 15, React 19 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
