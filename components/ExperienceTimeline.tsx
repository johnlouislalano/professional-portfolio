import SectionReveal from "./SectionReveal";
import StaggerItem from "./StaggerItem";
import ProjectImage from "./ProjectImage";
import { EXPERIENCE } from "@/lib/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative border-t border-ink-line bg-grid-fade">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionReveal>
          <span className="eyebrow-pill">Experience</span>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
            From the racetrack to real-world engineering.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mist">
            Experience across competition vehicles, product development, and technical
            training.
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-6">
          {EXPERIENCE.map((entry, idx) => (
            <StaggerItem key={entry.organization} index={idx}>
              <div className="panel panel-glow grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
                <div className="relative">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-line pb-5">
                    <h3 className="font-display text-lg font-bold text-ivory sm:text-xl">
                      {entry.organization}
                    </h3>
                    <span className="font-mono text-xs text-mist">
                      {entry.duration}
                      {entry.location ? ` \u00b7 ${entry.location}` : ""}
                    </span>
                  </div>

                  <ol className="mt-6 space-y-6 border-l border-ink-line pl-6">
                    {entry.roles.map((role) => (
                      <li key={role.title} className="relative">
                        <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink-panel" />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h4 className="font-semibold text-ivory">{role.title}</h4>
                          <span className="font-mono text-[11px] text-mist">{role.dates}</span>
                        </div>
                        {(role.employment || role.location) && (
                          <p className="mt-0.5 text-xs text-mist">
                            {[role.employment, role.location].filter(Boolean).join(" \u00b7 ")}
                          </p>
                        )}
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist">
                          {role.description}
                        </p>
                        {role.skills && (
                          <p className="mt-2 font-mono text-[11px] text-accent-bright">{role.skills}</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                {entry.photos && entry.photos.length > 0 && (
                  <div
                    className={`relative grid gap-2 self-start ${
                      entry.photos.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {entry.photos.map((photo) => (
                      <div
                        key={photo.file}
                        className={`overflow-hidden rounded-xl border border-ink-line ${
                          entry.photos!.length === 1 ? "aspect-[4/3]" : "aspect-square"
                        }`}
                      >
                        <ProjectImage
                          slug={entry.slug}
                          file={photo.file}
                          alt={photo.alt}
                          basePath="/assets/experience"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
