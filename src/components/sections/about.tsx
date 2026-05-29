"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  "n8n workflow design and deployment (webhooks, scheduled flows, error handling, self-hosting)",
  "AI agent integration (LLM APIs, RAG pipelines, prompt engineering, document AI)",
  "Full-stack SaaS development (Next.js, TypeScript, PostgreSQL, Supabase)",
  "API integrations (OpenAI, Claude, Notion, Gmail, Google Drive, Razorpay, vector DBs)",
  "Business process automation (lead gen, invoicing, onboarding, reporting, data sync)",
];

const techGroups = [
  { label: "Automation", tools: ["n8n", "Webhooks", "Cron Jobs", "Custom Nodes"] },
  { label: "AI", tools: ["OpenAI API", "Claude API", "RAG", "AI Agents", "Prompt Engineering"] },
  { label: "Backend", tools: ["Next.js", "TypeScript", "Python", "Node.js"] },
  { label: "Data", tools: ["PostgreSQL", "Supabase", "Prisma", "Vector DBs"] },
  { label: "Integrations", tools: ["Notion", "Gmail", "Google Drive", "Razorpay", "REST APIs"] },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          label="ABOUT"
          title="What I do"
          align="left"
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I design and build end-to-end AI automation systems. My work
                sits at the intersection of{" "}
                <span className="text-foreground">workflow automation</span>,{" "}
                <span className="text-foreground">artificial intelligence</span>,
                and{" "}
                <span className="text-foreground">software engineering</span>.
              </p>
              <p>
                I help businesses identify manual bottlenecks and replace them
                with intelligent, self-running workflows. The goal is always the
                same: less manual work, more output, fewer errors.
              </p>
              <p>
                I also built{" "}
                <span className="text-foreground">Institura</span>, a
                production SaaS platform serving as an AI-powered operating
                system for coaching institutes, with 30+ modules, AI timetable
                generation, online testing, and Razorpay-powered billing.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                Capabilities
              </h3>
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-1 text-xs">&#9656;</span>
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">
              Tech Stack
            </h3>
            <div className="space-y-6">
              {techGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs rounded-md border border-border text-foreground/70 bg-muted/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
