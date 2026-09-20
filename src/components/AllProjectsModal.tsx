"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, Github, ExternalLink, Download, Terminal, Shield, Layers } from "lucide-react";
import { projects, Project } from "@/data/projects";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject: Project | null;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
  initialProject,
}: AllProjectsModalProps) {
  const [activeProject, setActiveProject] = useState<Project>(
    initialProject || projects[0]
  );

  useEffect(() => {
    if (initialProject) {
      setActiveProject(initialProject);
    }
  }, [initialProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-darkCard/60 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-surface rounded-card sm:rounded-bento shadow-2xl border border-borderHairline flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:px-8 border-b border-borderHairline flex items-center justify-between bg-canvas/40">
          <div>
            <span className="text-[12px] font-semibold text-accentViolet uppercase tracking-wider block">
              Systems Architecture Archive
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-medium text-primaryText">
              All Production Systems &amp; Platforms
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface border border-borderHairline flex items-center justify-center text-primaryText hover:bg-canvas transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Master-Detail Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Visual List of Projects with Thumbnails */}
          <div className="md:col-span-5 border-r border-borderHairline p-3 sm:p-4 space-y-2 bg-canvas/30 overflow-y-auto max-h-[260px] md:max-h-[620px]">
            {projects.map((p) => {
              const isSelected = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                  className={`w-full text-left p-3 rounded-btn transition-all flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-darkCard text-surface shadow-sm ring-1 ring-white/10"
                      : "hover:bg-surface text-primaryText"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-12 h-12 rounded-md overflow-hidden bg-darkCard/40 flex-shrink-0 border border-borderHairline/60">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-accentViolet">
                        <Layers className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[13px] font-medium leading-snug line-clamp-1">
                        {p.title}
                      </span>
                      {p.featured && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-semibold flex-shrink-0 ${
                            isSelected
                              ? "bg-accentGreen text-darkCard"
                              : "bg-accentGreenLight text-accentGreen"
                          }`}
                        >
                          Flagship
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-[11px] block truncate mt-0.5 ${
                        isSelected ? "text-surface/70" : "text-mutedText"
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[620px]">
            {/* Project Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[12px] font-medium px-3 py-1 rounded-full bg-accentVioletLight text-accentViolet">
                  {activeProject.category}
                </span>
                {activeProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] font-medium px-2.5 py-1 rounded-full bg-canvas text-mutedText border border-borderHairline/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h4 className="text-[22px] sm:text-[26px] font-medium text-primaryText leading-tight">
                {activeProject.title}
              </h4>
            </div>

            {/* Visual Preview */}
            {activeProject.image ? (
              <div className="relative w-full h-[220px] sm:h-[280px] rounded-card overflow-hidden bg-darkCard border border-borderHairline/60">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="relative w-full h-[220px] sm:h-[280px] rounded-card overflow-hidden bg-[#141416] border border-white/10 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accentGreen animate-pulse" />
                    <span className="text-[12px] font-mono text-white/70 uppercase tracking-wider">
                      Architecture &amp; System Spec
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/40 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Production Core
                  </span>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accentGreen">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[15px] font-medium text-white">
                        {activeProject.title}
                      </div>
                      <div className="text-[12px] text-white/60 font-mono">
                        {activeProject.tags.join(" • ")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] text-white/40 border-t border-white/10 pt-3">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Shield className="w-3.5 h-3.5 text-accentViolet" /> Enterprise / Internal Engine
                  </span>
                  <span className="font-mono text-white/60">
                    Proprietary Deployment
                  </span>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h5 className="text-[14px] font-semibold text-primaryText uppercase tracking-wider">
                System Overview &amp; Rationale
              </h5>
              <p className="text-[15px] text-mutedText leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-3">
              <h5 className="text-[14px] font-semibold text-primaryText uppercase tracking-wider">
                Key Engineering Deliverables
              </h5>
              <div className="grid grid-cols-1 gap-2.5">
                {activeProject.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-btn bg-canvas/60 border border-borderHairline/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accentGreen mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-primaryText leading-normal">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="space-y-2 pt-2 border-t border-borderHairline">
              <h5 className="text-[13px] font-semibold text-mutedText uppercase tracking-wider">
                Production Technology Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[12px] font-medium px-3 py-1 rounded-md bg-darkCard text-surface"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-borderHairline/60">
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-accentGreen text-darkCard font-semibold text-[14px] hover:bg-accentGreen/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>
                    {activeProject.link.includes("onrender.com") || activeProject.link.includes("demo")
                      ? "Launch Live Demo"
                      : "Visit Live Platform"}
                  </span>
                </a>
              )}

              {activeProject.downloadUrl && (
                <a
                  href={activeProject.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-blue-600 text-white font-semibold text-[14px] hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Installers (wiktechnologies.com)</span>
                </a>
              )}

              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-darkCard text-surface text-[14px] font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}