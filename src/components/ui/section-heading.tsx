"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {(number || label) && (
        <div className="flex items-center gap-3 mb-4 justify-start">
          {number && (
            <span className="text-primary font-mono text-sm font-medium">
              {number}
            </span>
          )}
          {number && label && <span className="text-muted-foreground/30">/</span>}
          {label && (
            <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
              {label}
            </span>
          )}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
