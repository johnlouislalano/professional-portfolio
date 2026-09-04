"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ProjectFilters, { FilterValue } from "./ProjectFilters";
import ProjectCard from "./ProjectCard";
import SecondaryProjectCard from "./SecondaryProjectCard";
import { FEATURED_PROJECTS, SECONDARY_PROJECTS } from "@/lib/projects";

export default function ProjectGrid() {
  const [active, setActive] = useState<FilterValue>("all");

  const featured = useMemo(
    () =>
      active === "all"
        ? FEATURED_PROJECTS
        : FEATURED_PROJECTS.filter((p) => p.categories.includes(active)),
    [active]
  );
  const secondary = useMemo(
    () =>
      active === "all"
        ? SECONDARY_PROJECTS
        : SECONDARY_PROJECTS.filter((p) => p.categories.includes(active)),
    [active]
  );

  const empty = featured.length === 0 && secondary.length === 0;

  return (
    <section id="work" className="relative border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionReveal>
          <span className="eyebrow-pill">Projects</span>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
            Mechanical design, simulation, and prototyping {"\u2014"} from how a problem is
            framed to how a solution is built, tested, and improved.
          </h2>
        </SectionReveal>

        <div className="mt-8">
          <ProjectFilters active={active} onChange={setActive} />
        </div>

        <div className="mt-8">
          <AnimatePresence mode="popLayout">
            {empty ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center font-mono text-sm text-mist"
              >
                No projects tagged for this category yet.
              </motion.p>
            ) : (
              <motion.div key="results">
                {featured.length > 0 && (
                  <motion.div
                    layout
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
                  >
                    <AnimatePresence mode="popLayout">
                      {featured.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} activeFilter={active} />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}

                {secondary.length > 0 && (
                  <motion.div layout className="mt-5">
                    <p className="mb-4 font-mono text-xs uppercase tracking-wide text-mist">
                      Additional work
                    </p>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                      <AnimatePresence mode="popLayout">
                        {secondary.map((project, i) => (
                          <SecondaryProjectCard key={project.slug} project={project} index={i} activeFilter={active} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
