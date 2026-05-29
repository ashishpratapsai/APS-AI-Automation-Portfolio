"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectNavProps {
  prev?: Project;
  next?: Project;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <div className="flex items-stretch justify-between gap-4 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="flex-1 glass rounded-xl p-4 hover:bg-muted/50 transition-colors group"
        >
          <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="flex-1 glass rounded-xl p-4 hover:bg-muted/50 transition-colors group text-right"
        >
          <span className="text-xs text-muted-foreground flex items-center justify-end gap-1 mb-1">
            Next <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
