"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { GlowCard } from "@/components/ui/glow-card";

export function ProjectResults({ project }: { project: Project }) {
  if (project.results.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
        The Results
      </h2>

      <p className="text-sm text-muted-foreground mb-8">
        Estimated impact based on real deployment data and industry benchmarks:
      </p>

      {/* Metric tiles with glow */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {project.results.map((result, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <GlowCard className="p-5">
              <div className="text-xl font-bold text-foreground mb-1">
                {result.value}
              </div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                {result.label}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>

      {/* Detail bullets */}
      <ul className="space-y-4">
        {project.results.map((result, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="text-primary mt-0.5">&#8226;</span>
            <span>
              <span className="font-semibold text-foreground">
                {result.value}
              </span>{" "}
              {result.description}
            </span>
          </motion.li>
        ))}
      </ul>

      <p className="text-xs text-muted-foreground/60 mt-6 italic">
        Note: Estimates based on industry benchmarks and real deployment
        observations. Adjust for your specific use case.
      </p>
    </motion.div>
  );
}
