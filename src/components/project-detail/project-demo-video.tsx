"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";

export function ProjectDemoVideo({ project }: { project: Project }) {
  if (!project.demoVideo) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Product Demo
      </h2>

      <div className="rounded-xl border border-border overflow-hidden bg-muted/50">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${project.demoVideo}?rel=0`}
            title={`${project.title} demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
