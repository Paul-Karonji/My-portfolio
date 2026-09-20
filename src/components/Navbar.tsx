"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-luzia-subtle py-3 border-b border-borderHairline/40"
          : "bg-surface/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-[15px] sm:text-[16px] font-medium text-primaryText hover:opacity-80 transition-opacity tracking-tight"
        >
          {profile.name}
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface px-4 py-1.5 rounded-full border border-borderHairline/60 shadow-sm">
          <Link
            href="#work"
            className="px-3.5 py-1 text-[14px] text-primaryText/80 hover:text-primaryText font-medium transition-colors rounded-full hover:bg-canvas"
          >
            Work
          </Link>
          <Link
            href="#services"
            className="px-3.5 py-1 text-[14px] text-primaryText/80 hover:text-primaryText font-medium transition-colors rounded-full hover:bg-canvas"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="px-3.5 py-1 text-[14px] text-primaryText/80 hover:text-primaryText font-medium transition-colors rounded-full hover:bg-canvas"
          >
            Process
          </Link>
          <Link
            href="#faqs"
            className="px-3.5 py-1 text-[14px] text-primaryText/80 hover:text-primaryText font-medium transition-colors rounded-full hover:bg-canvas"
          >
            FAQs
          </Link>
          <Link
            href="#contact"
            className="px-3.5 py-1 text-[14px] text-primaryText/80 hover:text-primaryText font-medium transition-colors rounded-full hover:bg-canvas"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download="Paul-Karonji-Waithaka-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-darkCard text-surface text-[13px] sm:text-[14px] font-medium shadow-luzia-btn hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-4 h-4 text-accentGreen" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-btn bg-canvas text-primaryText hover:bg-borderHairline/30 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer — animated slide-down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-surface/98 backdrop-blur-xl border-b border-borderHairline px-6 py-6 space-y-4"
          >
            <nav className="flex flex-col space-y-3">
              <Link
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-primaryText py-1"
              >
                Featured Systems
              </Link>
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-primaryText py-1"
              >
                Services & Architecture
              </Link>
              <Link
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-primaryText py-1"
              >
                Engineering Process
              </Link>
              <Link
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-primaryText py-1"
              >
                FAQs
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-primaryText py-1"
              >
                Contact
              </Link>
            </nav>
            <div className="pt-2 border-t border-borderHairline">
              <a
                href={profile.resumeUrl}
                download="Paul-Karonji-Waithaka-Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-darkCard text-surface text-[14px] font-medium shadow-luzia-btn"
              >
                <Download className="w-4 h-4 text-accentGreen" />
                <span>Download Full Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

