"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { Project } from "@/types/project";

// Typing animation for the tagline
function TypedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 15);

    return () => clearTimeout(timer);
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-pulse align-text-bottom" />
      )}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-8">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-medium mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>
      </motion.div>

      {/* Project info */}
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Category */}
        <motion.div variants={item}>
          <span className="text-primary font-mono text-xs uppercase tracking-widest font-medium">
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 tracking-tight leading-[1.1]"
        >
          {project.title}
        </motion.h1>

        {/* Tagline with typing animation */}
        <motion.p
          variants={item}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed mb-6"
        >
          <TypedText text={project.tagline} delay={600} />
        </motion.p>

        {/* Tech badges */}
        <motion.div variants={item} className="flex flex-wrap gap-2 mb-6">
          {project.integrations.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[11px] font-mono rounded border border-border text-foreground/70"
            >
              {tech}
            </span>
          ))}
          {project.integrations.length > 8 && (
            <span className="px-3 py-1 text-[11px] font-mono rounded border border-border text-muted-foreground">
              +{project.integrations.length - 8}
            </span>
          )}
        </motion.div>

        {/* Links */}
        <motion.div variants={item} className="flex items-center gap-3 mb-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              <Code className="h-3.5 w-3.5" />
              Source Code
            </a>
          )}
        </motion.div>
      </motion.div>

      {/* Hero: video embed if available, otherwise image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="rounded-xl border border-border overflow-hidden bg-muted/50"
      >
        {project.demoVideo ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.demoVideo}?rel=0`}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <Image
            src={project.heroImage}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        )}
      </motion.div>
    </div>
  );
}
