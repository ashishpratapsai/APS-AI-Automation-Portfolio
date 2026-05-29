"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ title, description, index }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-8 card-hover group relative overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Number */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary font-mono text-sm font-semibold">
            {number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
