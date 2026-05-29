"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { SITE_CONFIG } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="text-primary font-medium text-sm font-mono mb-6 tracking-wide"
            >
              AI Automation Expert · Mumbai
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground"
            >
              I build AI automation
              <br />
              systems that save
              <br />
              businesses{" "}
              <span className="text-primary">hours every week.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
            >
              I design n8n workflows, integrate AI agents, and build full-stack
              products that eliminate manual operations and save real money.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                View work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
              >
                Get in touch
              </button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={item}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Workflows shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Hours saved / week</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1</div>
                <div className="text-xs text-muted-foreground mt-0.5">SaaS product live</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo with orbiting tool labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Spinning orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[40px] rounded-full border border-dashed border-border/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-5px] rounded-full border border-dashed border-border/15"
              />

              {/* Center photo — white bg removed via mix-blend-screen */}
              <div className="absolute inset-[60px] rounded-full overflow-hidden bg-background">
                <Image
                  src="/images/ashish-headshot.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover object-top dark:mix-blend-screen"
                  priority
                  sizes="300px"
                />
              </div>

              {/* Orbiting text labels - inner ring (spins slowly) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { label: "n8n", angle: 0 },
                  { label: "OpenAI", angle: 72 },
                  { label: "Claude", angle: 144 },
                  { label: "Gemini", angle: 216 },
                  { label: "Airtable", angle: 288 },
                ].map((tool) => {
                  const r = 175;
                  const x = Math.cos((tool.angle * Math.PI) / 180) * r;
                  const y = Math.sin((tool.angle * Math.PI) / 180) * r;
                  return (
                    <motion.div
                      key={tool.label}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="px-3 py-1 text-[10px] font-medium rounded-full bg-background/80 border border-border/50 text-foreground/70 backdrop-blur-sm whitespace-nowrap">
                        {tool.label}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Orbiting text labels - outer ring (spins opposite) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { label: "Slack", angle: 36 },
                  { label: "Stripe", angle: 108 },
                  { label: "Gmail", angle: 180 },
                  { label: "Supabase", angle: 252 },
                  { label: "Calendly", angle: 324 },
                ].map((tool) => {
                  const r = 215;
                  const x = Math.cos((tool.angle * Math.PI) / 180) * r;
                  const y = Math.sin((tool.angle * Math.PI) / 180) * r;
                  return (
                    <motion.div
                      key={tool.label}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="px-2.5 py-1 text-[9px] font-medium rounded-full bg-background/60 border border-border/40 text-foreground/50 backdrop-blur-sm whitespace-nowrap">
                        {tool.label}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
