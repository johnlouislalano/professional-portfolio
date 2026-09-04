"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import TechBackground from "./TechBackground";
import { HERO_STATS, SITE } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pt-28">
      {/* background photo, falls back to grid treatment if not present */}
      <div className="absolute inset-0">
        {!photoFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/assets/hero.jpg"
            alt="Louis at the Shell Eco-marathon Autonomous Driving Competition"
            className="h-full w-full object-cover opacity-45"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(80%_60%_at_75%_0%,rgba(51,164,132,0.16),transparent_60%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      <TechBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-16 sm:px-10 sm:pb-20"
      >
        <div className="flex flex-col items-start gap-8 sm:items-end sm:text-right">
          <motion.p variants={item} className="font-mono text-xs tracking-[0.2em] text-accent-bright">
            {SITE.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[15vw] font-black uppercase leading-[0.86] tracking-tight text-ivory sm:text-[6.4rem] lg:text-[7.5rem]"
          >
            {SITE.displayName.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="max-w-md text-balance text-base text-mist sm:text-lg">
            {SITE.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 sm:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel/60 px-5 py-2.5 text-sm font-semibold text-ivory backdrop-blur transition-colors hover:border-accent/60"
            >
              <FileDown size={15} />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-2 gap-2.5 sm:mt-16 sm:grid-cols-4 sm:gap-3"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink-line bg-ink-panel/70 px-4 py-4 text-center backdrop-blur"
            >
              <div className="font-display text-2xl font-extrabold text-accent-bright sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-mist">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
