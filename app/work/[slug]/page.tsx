import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectMedia from "@/components/ProjectMedia";
import DetailBlock from "@/components/DetailBlock";
import { PROJECTS, getProject } from "@/lib/projects";
import { CATEGORY_LABEL } from "@/lib/types";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: `${project.title} \u2014 Louis Alano`, description: project.summary };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="relative bg-ink">
      <Navbar />

      <section className="px-3 pb-16 pt-24 sm:px-6 sm:pt-28">
        <div className="panel panel-glow mx-auto max-w-6xl p-6 sm:p-10 lg:p-14">
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <span key={c} className="font-mono text-[11px] uppercase tracking-wide text-accent-bright">
                    {CATEGORY_LABEL[c]}
                  </span>
                ))}
              </div>
              <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] text-ivory sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-mist sm:text-base">{project.type}</p>
            </div>
            <Link
              href="/#work"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink-line bg-ink-raised px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:border-accent/60"
            >
              <ArrowLeft size={13} />
              Close
            </Link>
          </div>

          <div className="relative mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mt-8">
            <ProjectMedia
              slug={project.slug}
              hero={project.hero}
              gallery={project.gallery}
              summary={project.summary}
            />
          </div>

          {!project.sourceVerified && (
            <p className="relative mt-6 font-mono text-[11px] text-mist/70">
              Note: full case-study copy for this project is still being pulled from the source
              deck {"\u2014"} the sections below reflect what has been confirmed so far.
            </p>
          )}

          {(project.problem || project.role) && (
            <div className="relative mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {project.problem && (
                <DetailBlock heading="The Problem">
                  <ul className="space-y-2.5 text-sm leading-relaxed text-mist">
                    {project.problem.map((line, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-bright" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              )}
              {project.role && (
                <DetailBlock heading="My Role">
                  <p className="mb-3 text-sm font-semibold text-ivory">{project.role.title}</p>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-mist">
                    {project.role.points.map((line, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-bright" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              )}
            </div>
          )}

          {project.results && (
            <div className="relative mt-5">
              <DetailBlock heading="Key Results">
                <ul className="space-y-3 text-sm leading-relaxed text-mist">
                  {project.results.map((line, i) => (
                    <li key={i} className="flex gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-bright" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            </div>
          )}

          {project.approach && (
            <div className="relative mt-5">
              <DetailBlock heading="Design Approach">
                <p className="font-display text-sm font-semibold text-ivory sm:text-base">
                  {project.approach.flow}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{project.approach.body}</p>
              </DetailBlock>
            </div>
          )}

          {project.parameters && (
            <div className="relative mt-5">
              <DetailBlock heading={project.parameters.heading}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-ink-line text-xs uppercase tracking-wide text-mist">
                        <th className="py-2 pr-4 font-medium">Parameter</th>
                        <th className="py-2 pr-4 font-medium">Symbol</th>
                        <th className="py-2 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.parameters.rows.map((row) => (
                        <tr key={row.label} className="border-b border-ink-line/60 last:border-none">
                          <td className="py-2 pr-4 text-mist">{row.label}</td>
                          <td className="py-2 pr-4 font-mono text-accent-bright">{row.symbol}</td>
                          <td className="py-2 font-mono text-ivory">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DetailBlock>
            </div>
          )}

          {project.sections?.map((section) => (
            <div key={section.heading} className="relative mt-5">
              <DetailBlock heading={section.heading}>
                <div className="space-y-2.5 text-sm leading-relaxed text-mist">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </DetailBlock>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}
