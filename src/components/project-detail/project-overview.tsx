"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { ScrollTypedText } from "@/components/ui/scroll-typed-text";

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
        <ScrollTypedText
          text={project.problem}
          speed={8}
          className="text-muted-foreground leading-relaxed text-base sm:text-lg"
        />
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
        <ScrollTypedText
          text={project.solution}
          speed={6}
          className="text-muted-foreground leading-relaxed text-base sm:text-lg"
        />
      </motion.div>
    </div>
  );
}
