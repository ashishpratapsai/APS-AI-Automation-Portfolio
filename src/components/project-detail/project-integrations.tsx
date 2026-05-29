"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";

export function ProjectIntegrations({ project }: { project: Project }) {
  if (project.integrations.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Tech Stack & Integrations
      </h2>

      <div className="flex flex-wrap gap-3">
        {project.integrations.map((integration) => (
          <span
            key={integration}
            className="px-4 py-2 rounded-lg glass text-sm text-foreground font-medium"
          >
            {integration}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
