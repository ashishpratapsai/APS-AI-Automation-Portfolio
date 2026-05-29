"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/ui/glow-card";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          label="SERVICES"
          title="How I can help"
          align="left"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlowCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6 bg-primary" />
                  <span className="text-primary font-mono text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                  {service.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
