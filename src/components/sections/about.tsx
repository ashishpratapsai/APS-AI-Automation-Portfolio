"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  "n8n workflow design and deployment (webhooks, scheduled flows, error handling, conditional logic, sub-workflows)",
  "AI agent integration (connecting OpenAI, Claude, Gemini APIs into business workflows with prompt engineering)",
  "Multi-tool orchestration (connecting 5-10+ tools in a single automated pipeline with zero manual steps)",
  "Business process automation (lead gen, proposal generation, meeting capture, content creation, onboarding)",
  "API integrations (connecting any SaaS tool via REST APIs, webhooks, and OAuth)",
];

interface Tool {
  name: string;
  icon: string; // simple-icons slug or full URL
}

const toolGroups: { label: string; tools: Tool[] }[] = [
  {
    label: "Automation",
    tools: [
      { name: "n8n", icon: "n8n" },
      { name: "Webhooks", icon: "webhook" },
      { name: "REST APIs", icon: "openapiinitiative" },
      { name: "OAuth", icon: "auth0" },
    ],
  },
  {
    label: "AI Tools",
    tools: [
      { name: "OpenAI", icon: "openai" },
      { name: "Claude", icon: "claude" },
      { name: "Gemini", icon: "googlegemini" },
      { name: "Whisper", icon: "openai" },
      { name: "Prompt Engineering", icon: "openai" },
    ],
  },
  {
    label: "CRM & Data",
    tools: [
      { name: "Airtable", icon: "airtable" },
      { name: "Google Sheets", icon: "googlesheets" },
      { name: "Supabase", icon: "supabase" },
      { name: "Notion", icon: "notion" },
    ],
  },
  {
    label: "Sales & Outreach",
    tools: [
      { name: "PandaDoc", icon: "pandadoc" },
      { name: "Calendly", icon: "calendly" },
      { name: "Instantly", icon: "minutemailer" },
      { name: "Stripe", icon: "stripe" },
      { name: "Razorpay", icon: "razorpay" },
    ],
  },
  {
    label: "Communication",
    tools: [
      { name: "Slack", icon: "slack" },
      { name: "Gmail", icon: "gmail" },
      { name: "Google Drive", icon: "googledrive" },
      { name: "Fathom", icon: "fathom" },
    ],
  },
  {
    label: "Scraping & Research",
    tools: [
      { name: "Apify", icon: "apify" },
      { name: "SerpAPI", icon: "google" },
      { name: "HTTP Scraping", icon: "curl" },
    ],
  },
];

function ToolIcon({ slug }: { slug: string }) {
  return (
    <Image
      src={`https://cdn.simpleicons.org/${slug}/_/dark`}
      alt=""
      width={14}
      height={14}
      className="opacity-70 dark:invert"
      unoptimized
    />
  );
}

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
                I automate business operations by connecting tools, APIs, and AI
                into workflows that run themselves. My strength is taking a
                manual process that eats hours of someone&apos;s time and turning
                it into an{" "}
                <span className="text-foreground">
                  automated pipeline that works 24/7
                </span>{" "}
                with zero human intervention.
              </p>
              <p>
                I work primarily with{" "}
                <span className="text-foreground">n8n</span> for workflow
                automation and integrate AI models (OpenAI, Claude, Gemini) to
                add intelligence to every step. From scraping and research agents
                to proposal generators and meeting capture systems, I build
                automation that saves real money.
              </p>
              <p>
                I also built{" "}
                <span className="text-foreground">Institura</span>, a full
                production SaaS platform for coaching institutes, with AI
                timetable generation, question paper creation, online testing,
                and Razorpay billing. Built it end-to-end using Claude Code.
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
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border border-border text-foreground/70 bg-muted/50"
                      >
                        <ToolIcon slug={tool.icon} />
                        {tool.name}
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
