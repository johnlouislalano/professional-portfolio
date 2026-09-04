import SectionReveal from "./SectionReveal";
import StaggerItem from "./StaggerItem";
import { ABOUT, SKILLS } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="relative border-t border-ink-line bg-grid-fade">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionReveal className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <span className="eyebrow-pill">{ABOUT.eyebrow}</span>
            <h2 className="mt-6 max-w-xl text-balance font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
              {ABOUT.headline}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-mist">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow-pill">Skills</span>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SKILLS.map((group, i) => (
                <StaggerItem key={group.title} index={i}>
                  <div className="panel panel-glow h-full p-5 transition-transform duration-300 hover:-translate-y-0.5">
                    <h3 className="relative font-display text-sm font-semibold text-ivory">
                      {group.title}
                    </h3>
                    <p className="relative mt-2 font-mono text-[11px] leading-relaxed text-mist">
                      {group.items.join(" \u00b7 ")}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
