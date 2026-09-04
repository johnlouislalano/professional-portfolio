import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { CONTACT, SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink-line bg-grid-fade">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionReveal className="panel panel-glow flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative">
            <span className="eyebrow-pill">{CONTACT.eyebrow}</span>
            <h2 className="mt-6 max-w-lg text-balance font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
              {CONTACT.headline}
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-mist">
              <MapPin size={13} />
              {SITE.location}
            </p>
          </div>

          <div className="relative flex flex-col gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center justify-between gap-6 rounded-full bg-ivory px-5 py-3 text-sm font-semibold text-ink"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={15} />
                {SITE.email}
              </span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
              className="group inline-flex items-center justify-between gap-6 rounded-full border border-ink-line bg-ink-raised px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:border-accent/60"
            >
              <span className="inline-flex items-center gap-2">
                <Phone size={15} />
                {SITE.phone}
              </span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-6 rounded-full border border-ink-line bg-ink-raised px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:border-accent/60"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin size={15} />
                {SITE.linkedin}
              </span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
