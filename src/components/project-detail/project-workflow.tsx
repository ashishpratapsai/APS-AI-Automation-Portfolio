"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { GlowCard } from "@/components/ui/glow-card";

export function ProjectWorkflow({ project }: { project: Project }) {
  if (project.workflow.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        How It Works
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {project.workflow.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative pl-14"
            >
              {/* Step number */}
              <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                {i + 1}
              </div>

              <GlowCard className="p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
