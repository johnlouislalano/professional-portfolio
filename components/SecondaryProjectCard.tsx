"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import ProjectImage from "./ProjectImage";
import { CATEGORY_LABEL, Project } from "@/lib/types";
import { FilterValue } from "./ProjectFilters";

export default function SecondaryProjectCard({
  project,
  index = 0,
  activeFilter,
}: {
  project: Project;
  index?: number;
  activeFilter?: FilterValue;
}) {
  const showAnalysis = activeFilter === "simulation-analysis" && !!project.analysisImage;
  const displayImage = showAnalysis ? project.analysisImage! : project.hero;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: Math.min(index, 7) * 0.05 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-line bg-ink-panel transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
      >
        <div className="relative h-32 overflow-hidden">
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
            <span className="absolute left-1.5 top-1.5 z-10 inline-flex items-center gap-1 rounded-full bg-accent-soft/95 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wide text-ivory shadow-sm backdrop-blur">
              <FlaskConical size={9} />
              Sim
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <span className="font-mono text-[10px] uppercase tracking-wide text-accent-bright">
            {project.categories.map((c) => CATEGORY_LABEL[c]).join(" \u00b7 ")}
          </span>
          <div className="mt-1.5 flex items-start justify-between gap-2">
            <h4 className="font-display text-sm font-bold text-ivory">{project.title}</h4>
            <ArrowUpRight
              size={14}
              className="mt-0.5 shrink-0 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-bright"
            />
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-mist">{project.type}</p>
        </div>
      </Link>
    </motion.div>
  );
}
