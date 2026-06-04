"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";

function RichText({ text }: { text: string }) {
  // Split by newlines to get bullet points
  const lines = text.split("\n").filter((l) => l.trim());

  // If there are multiple lines, render as bullet list
  if (lines.length > 1) {
    return (
      <ul className="space-y-3">
        {lines.map((line, i) => {
          const clean = line.replace(/^[-•]\s*/, "");
          return (
            <li
              key={i}
              className="flex items-start gap-3 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              <span className="text-primary mt-1.5 text-xs flex-shrink-0">&#9656;</span>
              <span dangerouslySetInnerHTML={{ __html: formatHighlights(clean) }} />
            </li>
          );
        })}
      </ul>
    );
  }

  // Single paragraph
  return (
    <p
      className="text-muted-foreground leading-relaxed text-base sm:text-lg"
      dangerouslySetInnerHTML={{ __html: formatHighlights(text) }}
    />
  );
}

function formatHighlights(text: string): string {
  // Convert **text** to highlighted spans
  return text.replace(
    /\*\*(.+?)\*\*/g,
    '<span class="text-foreground font-medium">$1</span>'
  );
}

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="space-y-16">
      {/* The Problem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          The Problem
        </h2>
        <RichText text={project.problem} />
      </motion.div>

      {/* What I Built */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          What I Built
        </h2>
        <RichText text={project.solution} />
      </motion.div>
    </div>
  );
}
