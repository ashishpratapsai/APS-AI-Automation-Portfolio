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
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
              >
                View resume
              </a>
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

          {/* Right: Photo with orbiting tool logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-[380px] h-[380px]">
              {/* Orbit rings */}
              <div className="absolute inset-[30px] rounded-full border border-dashed border-border/30" />
              <div className="absolute inset-[-10px] rounded-full border border-dashed border-border/20" />

              {/* Center photo */}
              <div className="absolute inset-[50px] rounded-full overflow-hidden border-2 border-border">
                <Image
                  src="/images/ashish-headshot.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="280px"
                />
              </div>

              {/* Orbiting logos - inner ring */}
              {[
                { slug: "n8n", angle: 0, ring: 155 },
                { slug: "openai", angle: 72, ring: 155 },
                { slug: "claude", angle: 144, ring: 155 },
                { slug: "googlegemini", angle: 216, ring: 155 },
                { slug: "airtable", angle: 288, ring: 155 },
              ].map((tool, i) => (
                <motion.div
                  key={tool.slug}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos((tool.angle * Math.PI) / 180) * tool.ring}px - 16px)`,
                    top: `calc(50% + ${Math.sin((tool.angle * Math.PI) / 180) * tool.ring}px - 16px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tool.slug}.svg`}
                      alt=""
                      width={14}
                      height={14}
                      className="opacity-60 dark:invert"
                    />
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbiting logos - outer ring */}
              {[
                { slug: "slack", angle: 36, ring: 200 },
                { slug: "stripe", angle: 108, ring: 200 },
                { slug: "gmail", angle: 180, ring: 200 },
                { slug: "supabase", angle: 252, ring: 200 },
                { slug: "calendly", angle: 324, ring: 200 },
              ].map((tool, i) => (
                <motion.div
                  key={tool.slug}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${Math.cos((tool.angle * Math.PI) / 180) * tool.ring}px - 14px)`,
                    top: `calc(50% + ${Math.sin((tool.angle * Math.PI) / 180) * tool.ring}px - 14px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-7 w-7 rounded-full bg-background border border-border flex items-center justify-center shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tool.slug}.svg`}
                      alt=""
                      width={12}
                      height={12}
                      className="opacity-50 dark:invert"
                    />
                  </motion.div>
                </motion.div>
              ))}

              {/* Status badge - bottom center */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
