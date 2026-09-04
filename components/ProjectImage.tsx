"use client";

import { useState } from "react";
import { Aperture } from "lucide-react";

interface ProjectImageProps {
  slug: string;
  file: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** defaults to /assets/projects — pass "/assets/experience" etc. to reuse elsewhere */
  basePath?: string;
}

/**
 * Tries to load `${basePath}/<slug>/<file>` (default basePath: /assets/projects). If that
 * asset hasn't been exported yet, falls back to a labeled technical placeholder instead of a
 * broken image or an unrelated stock photo.
 */
export default function ProjectImage({
  slug,
  file,
  alt,
  className = "",
  basePath = "/assets/projects",
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const src = `${basePath}/${slug}/${file}`;

  if (failed) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-ink-raised ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(51,164,132,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(51,164,132,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        role="img"
        aria-label={alt}
      >
        <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-accent/50" />
        <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-accent/50" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-accent/50" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-accent/50" />
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <Aperture className="h-5 w-5 text-accent/70" strokeWidth={1.5} />
          <span className="max-w-[220px] font-mono text-[10px] leading-relaxed text-mist">
            {src}
          </span>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
