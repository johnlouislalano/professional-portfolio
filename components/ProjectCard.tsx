"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import ProjectImage from "./ProjectImage";
import { CATEGORY_LABEL, Project } from "@/lib/types";
import { FilterValue } from "./ProjectFilters";

export default function ProjectCard({
  project,
  index,
  activeFilter,
}: {
  project: Project;
  index: number;
  activeFilter?: FilterValue;
}) {
  const showAnalysis = activeFilter === "simulation-analysis" && !!project.analysisImage;
  const displayImage = showAnalysis ? project.analysisImage! : project.hero;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.min(index, 7) * 0.06 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-ink-line bg-ink-panel transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayImage.file}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <ProjectImage
                slug={project.slug}
                file={displayImage.file}
                alt={displayImage.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
          </AnimatePresence>
          {showAnalysis && (
            <span className="absolute left-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-accent-soft/95 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-ivory shadow-sm backdrop-blur">
              <FlaskConical size={10} />
              Simulation
            </span>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-panel via-ink-panel/10 to-transparent" />
        </div>

        <div className="relative flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-accent-bright">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="text-ink-line">/</span>
            <span>{project.categories.map((c) => CATEGORY_LABEL[c]).join(" \u00b7 ")}</span>
          </div>
          <div className="mt-2 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-bold text-ivory sm:text-xl">{project.title}</h3>
              <p className="mt-1 text-xs text-mist">{project.type}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-bright"
            />
          </div>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-mist">{project.summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}
