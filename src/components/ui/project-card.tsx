"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const isPlaceholder = project.title.includes("Coming Soon");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(featured && "sm:col-span-2 lg:col-span-3")}
    >
      <Link
        href={isPlaceholder ? "#" : `/projects/${project.slug}`}
        className={cn(
          "block glass rounded-xl overflow-hidden card-hover group",
          isPlaceholder && "pointer-events-none opacity-50"
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            featured ? "h-48 sm:h-64" : "h-40"
          )}
        >
          {!isPlaceholder ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Screenshot coming soon</span>
            </div>
          )}
          {featured && (
            <div className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
              Featured Project
            </div>
          )}
          <div className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur text-foreground border border-border">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className={cn(
              "font-semibold text-foreground mb-2 group-hover:text-primary transition-colors",
              featured ? "text-xl" : "text-base"
            )}
          >
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > (featured ? 6 : 4) && (
              <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                +{project.techStack.length - (featured ? 6 : 4)} more
              </span>
            )}
          </div>

          {/* Link */}
          {!isPlaceholder && (
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </span>
              {project.liveUrl && (
                <span className="text-muted-foreground flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> Live
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
