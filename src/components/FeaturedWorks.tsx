"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ExternalLink, Download, Github } from "lucide-react";
import { projects, Project } from "@/data/projects";
import AllProjectsModal from "./AllProjectsModal";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};


export default function FeaturedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Exactly the 5 curated flagship platforms for the clean main scroll
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="work" className="w-full py-24 px-6 sm:px-10 max-w-[1340px] mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6"
      >
        <div>
          <span className="text-[12px] font-semibold tracking-wider text-mutedText uppercase mb-2 block">
            Portfolio &amp; Flagship Systems
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-medium text-primaryText tracking-[-0.025em]">
            Featured Systems &amp; Platforms
          </h2>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-surface border border-borderHairline text-primaryText text-[14px] font-medium hover:bg-canvas hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
        >
          <Layers className="w-4 h-4 text-accentViolet" />
          <span>Explore All 10+ Systems</span>
          <ArrowUpRight className="w-4 h-4 text-mutedText" />
        </button>
      </motion.div>

      {/* Curated 2-Column Bento Grid matching Luzia 40px curvature */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer rounded-bento overflow-hidden bg-surface border border-borderHairline/80 shadow-luzia-subtle hover:shadow-luzia-card transition-shadow duration-300 flex flex-col"
          >
            {/* Visual Header / Mockup */}
            <div className="relative w-full h-[300px] sm:h-[360px] bg-darkCard overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center bg-[#181818] p-8 text-center text-surface/80">
                  <Layers className="w-10 h-10 text-accentGreen/80 mb-3" />
                  <span className="text-[13px] font-medium tracking-wide">
                    Systems Architecture Spec
                  </span>
                </div>
              )}

              {/* Top Overlay Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <span className="px-3 py-1 rounded-tag bg-darkCard/85 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10 shadow-sm">
                  {project.category}
                </span>

                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-tag bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-semibold hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Suite</span>
                  </a>
                )}
              </div>

              {/* Glassmorphic Tag Badges at Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-tag bg-surface/90 backdrop-blur-md text-primaryText text-[11px] font-medium border border-borderHairline shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-tag bg-darkCard/90 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 hover:bg-darkCard transition-colors shadow-sm"
                    >
                      <Github className="w-3 h-3" />
                      <span>Source</span>
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-tag bg-accentGreen/90 backdrop-blur-md text-darkCard text-[11px] font-semibold shadow-sm hover:bg-accentGreen transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-darkCard animate-pulse" />
                      <span>Live Platform</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[20px] sm:text-[22px] font-medium text-primaryText tracking-tight group-hover:text-accentViolet transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-mutedText group-hover:bg-accentViolet group-hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-[14px] sm:text-[15px] text-mutedText leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Stack Pills */}
              <div className="pt-6 border-t border-borderHairline/60 flex flex-wrap gap-2 mt-6">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] text-mutedText font-medium px-2.5 py-1 rounded-md bg-canvas"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-[12px] text-mutedText/80 font-medium px-2 py-1">
                    +{project.stack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Detail Modal & All Projects Drawer */}
      <AllProjectsModal
        isOpen={modalOpen || selectedProject !== null}
        onClose={() => {
          setModalOpen(false);
          setSelectedProject(null);
        }}
        initialProject={selectedProject}
      />
    </section>
  );
}