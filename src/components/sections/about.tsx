"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const valuePoints = [
  {
    heading: "High Agency and Drive",
    bullets: [
      "I don't wait for specs. I identify the problem, scope the solution, and ship it.",
      "Speed matters. I move fast without cutting corners on quality.",
      "High standards are non-negotiable. Every system I build is production-grade, not a demo.",
    ],
  },
  {
    heading: "Technical Depth",
    bullets: [
      "End-to-end content pipelines: from idea capture to published video with zero manual steps.",
      "Second brain architecture: a structured system in Notion that captures every idea, task, and project so nothing falls through the cracks.",
      "AI systems with feedback loops: autonomous agents that learn from outputs, so the system keeps improving over time. Built with Claude Code, n8n, OpenAI, Gemini, Supabase, Airtable, and more.",
    ],
  },
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
                Over the last{" "}
                <span className="text-foreground font-semibold">eight years working with coaching institutes</span>
                {" "}and{" "}
                <span className="text-foreground font-semibold">three years creating content</span>,
                I realized how most people waste enormous amounts of time on
                scheduling, tracking, and formatting instead of actually spending
                time on thinking and creating valuable assets. That&apos;s when I
                decided I would automate all of it.
              </p>
              <p>
                So I built a{" "}
                <span className="text-foreground font-semibold">
                  full SaaS platform
                </span>{" "}
                with 30+ modules that runs every aspect of institute operations. An{" "}
                <span className="text-foreground font-semibold">
                  AI Operating System and second brain
                </span>{" "}
                where Claude has a live map of my priorities, content pipeline,
                and decision history, and Notion captures every idea, task, and
                project. And an{" "}
                <span className="text-foreground font-semibold">
                  autonomous content generation pipeline
                </span>{" "}
                across two YouTube channels and LinkedIn that takes any idea from
                raw input to published video with zero manual steps.
              </p>
              <p>
                Now I do the same for others. Find the repetitive work eating
                your time, replace it with a system that runs itself.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                What I bring to the table
              </h3>
              {valuePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {point.heading}
                  </h4>
                  <ul className="space-y-2">
                    {point.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1 text-xs">&#9656;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
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
