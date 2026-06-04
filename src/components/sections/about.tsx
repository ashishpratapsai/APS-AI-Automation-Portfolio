"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  "n8n workflow design and deployment (webhooks, scheduled flows, error handling, conditional logic, sub-workflows)",
  "AI agent integration (connecting OpenAI, Claude, Gemini APIs into business workflows)",
  "Multi-tool orchestration (connecting 5-10+ tools in a single automated pipeline with zero manual steps)",
  "Business process automation (lead gen, proposal generation, meeting capture, content creation, onboarding)",
  "Web scraping and research automation at scale",
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
                I spent{" "}
                <span className="text-foreground">8 years working inside coaching institutes</span>,
                watching smart people burn hours on scheduling, fee tracking,
                question paper formatting, and data entry. The same tasks, every
                week, eating up time that should have gone into teaching.
              </p>
              <p>
                When I discovered AI and automation, everything clicked. All that
                grunt work? It could run itself. I could{" "}
                <span className="text-foreground">
                  build systems that handle the repetitive stuff
                </span>{" "}
                so people focus on what actually matters.
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
