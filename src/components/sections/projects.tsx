"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { projects, getFeaturedProject } from "@/data/projects";

// Top 2 highlighted slugs (after Institura)
const HIGHLIGHTED_SLUGS = ["ai-proposal-generator", "ai-content-creation-system"];

function FeaturedProject() {
  const project = getFeaturedProject();
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <GlowCard className="grid lg:grid-cols-[1fr_1fr] gap-8 p-6 sm:p-8 rounded-2xl">
          <div className="rounded-xl overflow-hidden bg-muted/50">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-primary/10 text-primary border border-primary/20">
                Featured
              </span>
              <span className="text-xs text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {project.tagline}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.results.slice(0, 4).map((result) => (
                <div
                  key={result.label}
                  className="p-3 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="text-sm font-bold text-foreground">
                    {result.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] rounded border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span className="px-2 py-0.5 text-[10px] rounded border border-border text-muted-foreground">
                  +{project.techStack.length - 6}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all font-medium">
                Full breakdown <ArrowRight className="h-3.5 w-3.5" />
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground flex items-center gap-1 hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3 w-3" /> Live
                </a>
              )}
            </div>
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}

function HighlightedProject({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <GlowCard className="p-5 sm:p-6 rounded-2xl">
          {/* Workflow screenshot */}
          <div className="rounded-lg overflow-hidden bg-muted/50 mb-5">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-primary font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-muted-foreground mb-5 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>

          {/* Key metrics row */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.results.slice(0, 2).map((result) => (
              <div
                key={result.label}
                className="p-2.5 rounded-lg bg-muted/50 border border-border"
              >
                <div className="text-sm font-bold text-foreground">
                  {result.value}
                </div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all font-medium text-xs">
              Full breakdown <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}

export function Projects() {
  const highlighted = projects.filter((p) =>
    HIGHLIGHTED_SLUGS.includes(p.slug)
  );
  const activeRest = projects.filter(
    (p) => !p.featured && !HIGHLIGHTED_SLUGS.includes(p.slug)
  );

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02"
          label="WORK"
          title="Projects"
          subtitle="Automation workflows and products I've built."
          align="left"
        />

        {/* Tier 1: Featured (Institura) */}
        <FeaturedProject />

        {/* Tier 2: Highlighted projects (Proposal Generator + Content System) */}
        {highlighted.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {highlighted.map((project, i) => (
              <HighlightedProject
                key={project.slug}
                project={project}
                index={i}
              />
            ))}
          </div>
        )}

        {/* Tier 3: Other projects */}
        {activeRest.length > 0 && (
          <>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 mt-4">
              Other projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {activeRest.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group"
                  >
                    <GlowCard className="p-5">
                      <span className="text-xs text-muted-foreground">
                        {project.category}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors text-sm">
                        {project.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {project.tagline}
                      </p>
                      {project.results[0] && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-foreground">
                            {project.results[0].value}
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase">
                            {project.results[0].label}
                          </span>
                        </div>
                      )}
                    </GlowCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
