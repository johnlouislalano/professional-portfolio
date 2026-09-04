"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import ProjectImage from "./ProjectImage";
import { GalleryImage } from "@/lib/types";

export default function ProjectMedia({
  slug,
  hero,
  gallery,
  summary,
}: {
  slug: string;
  hero: GalleryImage;
  gallery: GalleryImage[];
  summary: string;
}) {
  const rest = gallery.filter((g) => g.file !== hero.file);
  const allImages = [hero, ...rest];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = allImages[activeIndex];

  const close = useCallback(() => setLightboxOpen(false), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [allImages.length]
  );
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % allImages.length), [allImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, close, prev, next]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative overflow-hidden rounded-xl border border-ink-line text-left"
        aria-label={`View ${active.alt} fullscreen`}
      >
        <ProjectImage
          key={active.file}
          slug={slug}
          file={active.file}
          alt={active.alt}
          className="aspect-[4/3] w-full animate-fade-up object-cover"
        />
        <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] font-medium text-ivory opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Maximize2 size={12} />
          View full image
        </span>
      </button>

      <div className="flex flex-col">
        <p className="text-[15px] leading-relaxed text-mist lg:text-base">{summary}</p>

        {allImages.length > 1 && (
          <div className="mt-6">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wide text-mist">
              Project Gallery
            </p>
            <div className="grid grid-cols-3 gap-2">
              {allImages.map((img, i) => {
                const isActive = i === activeIndex;
                const shortCaption = img.caption && img.caption.length <= 34 ? img.caption : null;
                const longCaption = img.caption && img.caption.length > 34 ? img.caption : null;
                return (
                  <button
                    key={img.file}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`group relative aspect-square overflow-hidden rounded-lg border text-left transition-colors ${
                      isActive ? "border-accent" : "border-ink-line hover:border-accent/50"
                    }`}
                  >
                    <ProjectImage
                      slug={slug}
                      file={img.file}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    {shortCaption && (
                      <span className="absolute left-1.5 top-1.5 rounded-full bg-accent-soft/95 px-2 py-0.5 text-[9px] font-medium leading-none text-ivory shadow-sm backdrop-blur">
                        {shortCaption}
                      </span>
                    )}
                    {longCaption && (
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-1.5 font-mono text-[8px] leading-tight text-mist">
                        {longCaption}
                      </span>
                    )}
                    <span
                      className={`pointer-events-none absolute inset-0 ring-2 ring-inset transition-opacity ${
                        isActive ? "opacity-100 ring-accent" : "opacity-0 ring-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-panel text-ivory"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-ink-panel text-ivory sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-ink-panel text-ivory sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <motion.div
              key={active.file}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-xl border border-ink-line">
                <ProjectImage
                  slug={slug}
                  file={active.file}
                  alt={active.alt}
                  className="max-h-[75vh] w-full object-contain bg-ink-panel"
                />
              </div>
              {active.caption && (
                <p className="mt-3 text-center font-mono text-xs text-mist">{active.caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
