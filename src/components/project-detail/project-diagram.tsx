"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

export function ProjectDiagram({ project }: { project: Project }) {
  if (!project.diagramImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-foreground mb-8">
        Workflow Diagram
      </h2>

      <div className="glass rounded-xl p-4 overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image
            src={project.diagramImage}
            alt={`${project.title} workflow diagram`}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
    </motion.div>
  );
}
