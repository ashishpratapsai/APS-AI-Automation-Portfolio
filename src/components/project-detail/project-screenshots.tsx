"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

export function ProjectScreenshots({ project }: { project: Project }) {
  if (project.screenshots.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Screenshots
      </h2>

      <div className="space-y-4">
        {project.screenshots.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="rounded-xl border border-border overflow-hidden bg-muted/50"
          >
            <Image
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
