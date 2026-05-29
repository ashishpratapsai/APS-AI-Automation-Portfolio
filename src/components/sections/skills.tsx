"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILL_CATEGORIES } from "@/lib/constants";

// Orbital layout for key tech badges
const orbitingTools = [
  { label: "n8n", angle: 0, ring: 1 },
  { label: "OpenAI", angle: 60, ring: 1 },
  { label: "Claude AI", angle: 120, ring: 1 },
  { label: "Supabase", angle: 180, ring: 1 },
  { label: "Python", angle: 240, ring: 1 },
  { label: "TypeScript", angle: 300, ring: 1 },
  { label: "Next.js", angle: 30, ring: 2 },
  { label: "PostgreSQL", angle: 110, ring: 2 },
  { label: "Notion", angle: 200, ring: 2 },
  { label: "Razorpay", angle: 290, ring: 2 },
];

function OrbitingBadges() {
  const ring1Radius = 160;
  const ring2Radius = 260;

  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto hidden lg:block">
      {/* Dashed orbit rings */}
      <div
        className="orbit-ring absolute"
        style={{
          width: ring1Radius * 2,
          height: ring1Radius * 2,
          top: `calc(50% - ${ring1Radius}px)`,
          left: `calc(50% - ${ring1Radius}px)`,
        }}
      />
      <div
        className="orbit-ring absolute"
        style={{
          width: ring2Radius * 2,
          height: ring2Radius * 2,
          top: `calc(50% - ${ring2Radius}px)`,
          left: `calc(50% - ${ring2Radius}px)`,
        }}
      />

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <div className="text-5xl sm:text-6xl font-bold text-foreground/10 uppercase tracking-wider leading-tight">
            AI
            <br />
            Automation
            <br />
            Expert
          </div>
        </div>
      </div>

      {/* Orbiting badges */}
      {orbitingTools.map((tool, i) => {
        const radius = tool.ring === 1 ? ring1Radius : ring2Radius;
        const angleRad = (tool.angle * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        return (
          <motion.div
            key={tool.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="px-4 py-2 rounded-lg glass text-xs sm:text-sm font-medium text-foreground/80"
            >
              {tool.label}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="The tools and technologies I use to build automation workflows."
        />

        {/* Orbiting badges visual (desktop) */}
        <OrbitingBadges />

        {/* Category grid (always visible, but primary on mobile) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 lg:mt-16">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <h3 className="font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
