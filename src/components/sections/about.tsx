"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  "End-to-end content pipelines (research, scripting, thumbnails, captions, metadata, all automated)",
  "AI agent integration (OpenAI, Claude, Gemini APIs wired into real business workflows)",
  "Full-stack SaaS development (built a 30+ module production platform from scratch)",
  "Multi-tool orchestration (connecting 5-10+ tools in a single pipeline with zero manual steps)",
  "n8n workflow design and deployment (webhooks, scheduled flows, error handling, sub-workflows)",
  "Web scraping and prospect research automation at scale",
];

interface Tool {
  name: string;
  icon: string | null;
  color?: string;
}

const toolGroups: { label: string; tools: Tool[] }[] = [
  {
    label: "Automation",
    tools: [
      { name: "n8n", icon: "n8n", color: "#EA4B71" },
      { name: "Webhooks", icon: null },
    ],
  },
  {
    label: "AI",
    tools: [
      { name: "OpenAI", icon: "openai", color: "#412991" },
      { name: "Claude", icon: "claude", color: "#D97757" },
      { name: "Gemini", icon: "googlegemini", color: "#8E75B2" },
    ],
  },
  {
    label: "CRM & Data",
    tools: [
      { name: "Airtable", icon: "airtable", color: "#18BFFF" },
      { name: "Google Sheets", icon: "googlesheets", color: "#34A853" },
      { name: "Supabase", icon: "supabase", color: "#3FCF8E" },
      { name: "Notion", icon: "notion", color: "#000000" },
    ],
  },
  {
    label: "Sales & Payments",
    tools: [
      { name: "Calendly", icon: "calendly", color: "#006BFF" },
      { name: "PandaDoc", icon: null },
      { name: "Stripe", icon: "stripe", color: "#635BFF" },
      { name: "Razorpay", icon: "razorpay", color: "#0C2451" },
    ],
  },
  {
    label: "Communication",
    tools: [
      { name: "Slack", icon: "slack", color: "#4A154B" },
      { name: "Gmail", icon: "gmail", color: "#EA4335" },
      { name: "Google Drive", icon: "googledrive", color: "#4285F4" },
    ],
  },
  {
    label: "Scraping",
    tools: [
      { name: "Apify", icon: null },
      { name: "SerpAPI", icon: null },
    ],
  },
];

function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border text-foreground/70 bg-muted/50">
      {tool.icon && (
        <span
          className="inline-block w-3.5 h-3.5 flex-shrink-0"
          style={{
            backgroundColor: tool.color || "currentColor",
            maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tool.icon}.svg)`,
            WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tool.icon}.svg)`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      )}
      {tool.name}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          label="ABOUT"
          title="Why I build AI systems"
          align="left"
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16">
          {/* Left: Story + capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We get maybe 80 years. Most of that time, people spend doing the
                same thing over and over:{" "}
                <span className="text-foreground">
                  work that a computer could handle in seconds
                </span>
                . I think about that a lot. If something can be delegated to a
                system that never gets tired, never forgets, and runs 24/7, why
                are humans still doing it?
              </p>
              <p>
                That thinking comes from real experience. I spent{" "}
                <span className="text-foreground">8 years inside coaching institutes</span>,
                watching talented people burn hours on scheduling, fee tracking,
                and question paper formatting instead of teaching. On the side, I
                was{" "}
                <span className="text-foreground">creating content for 3 years</span>,
                losing 12-20 hours every week to research, scripting, thumbnails,
                and metadata before I could even hit record.
              </p>
              <p>
                So I stopped accepting that as normal. I built an{" "}
                <span className="text-foreground">
                  autonomous content pipeline
                </span>{" "}
                that handles research, scripting, thumbnail generation, captions,
                and YouTube metadata across two YouTube channels and LinkedIn. I
                built a{" "}
                <span className="text-foreground">
                  second brain in Notion
                </span>{" "}
                that captures every idea, task, and project. Then I connected it
                all to AI through an{" "}
                <span className="text-foreground">
                  AI Operating System
                </span>{" "}
                where Claude has a live map of my priorities, content pipeline,
                journals, and decision history, so it works with full context,
                not generic prompts.
              </p>
              <p>
                Then I did the same for institute operations: a full SaaS platform
                with 30+ modules. Now I do it for others. Find the repetitive work
                that eats your time, and replace it with a system that frees you
                up to do what actually matters.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                What I bring to the table
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

          {/* Right: Tools I work with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">
              Tools I work with
            </h3>
            <div className="space-y-6">
              {toolGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2.5">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <ToolBadge key={tool.name} tool={tool} />
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
