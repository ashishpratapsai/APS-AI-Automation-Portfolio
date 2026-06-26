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
          {/* Mobile photo with orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden flex justify-center mb-4"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              {/* Spinning orbit rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20px] sm:inset-[25px] rounded-full border border-dashed border-border/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-5px] rounded-full border border-dashed border-border/15"
              />

              {/* Center photo */}
              <div className="absolute inset-[40px] sm:inset-[45px] rounded-full overflow-hidden">
                <Image
                  src="/images/ashish-headshot.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="230px"
                />
              </div>

              {/* Orbiting logos - single ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { icon: "n8n", color: "#EA4B71", angle: 0 },
                  { icon: "openai", color: "#412991", angle: 60 },
                  { icon: "anthropic", color: "#D97757", angle: 120 },
                  { icon: "googlegemini", color: "#8E75B2", angle: 180 },
                  { icon: "slack", color: "#4A154B", angle: 240 },
                  { icon: "airtable", color: "#18BFFF", angle: 300 },
                ].map((tool) => {
                  const r = 130;
                  const x = Math.cos((tool.angle * Math.PI) / 180) * r;
                  const y = Math.sin((tool.angle * Math.PI) / 180) * r;
                  return (
                    <motion.div
                      key={tool.icon}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm">
                        <span
                          className="inline-block w-4 h-4 sm:w-4.5 sm:h-4.5"
                          style={{
                            backgroundColor: tool.color,
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
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </motion.div>

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
              AI Automation Expert
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground"
            >
              I Build AI Systems
              <br />
              That Serve{" "}
              <span className="text-primary">Businesses.</span>
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

              {/* Center photo */}
              <div className="absolute inset-[60px] rounded-full overflow-hidden">
                <Image
                  src="/images/ashish-headshot.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="300px"
                />
              </div>

              {/* Orbiting logos - inner ring (spins slowly) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { icon: "n8n", color: "#EA4B71", angle: 0 },
                  { icon: "openai", color: "#412991", angle: 72 },
                  { icon: "anthropic", color: "#D97757", angle: 144 },
                  { icon: "googlegemini", color: "#8E75B2", angle: 216 },
                  { icon: "airtable", color: "#18BFFF", angle: 288 },
                ].map((tool) => {
                  const r = 175;
                  const x = Math.cos((tool.angle * Math.PI) / 180) * r;
                  const y = Math.sin((tool.angle * Math.PI) / 180) * r;
                  return (
                    <motion.div
                      key={tool.icon}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm">
                        <span
                          className="inline-block w-5 h-5"
                          style={{
                            backgroundColor: tool.color,
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
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Orbiting logos - outer ring (spins opposite) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { icon: "slack", color: "#4A154B", angle: 36 },
                  { icon: "stripe", color: "#635BFF", angle: 108 },
                  { icon: "gmail", color: "#EA4335", angle: 180 },
                  { icon: "supabase", color: "#3FCF8E", angle: 252 },
                  { icon: "calendly", color: "#006BFF", angle: 324 },
                ].map((tool) => {
                  const r = 215;
                  const x = Math.cos((tool.angle * Math.PI) / 180) * r;
                  const y = Math.sin((tool.angle * Math.PI) / 180) * r;
                  return (
                    <motion.div
                      key={tool.icon}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background/60 border border-border/40 backdrop-blur-sm">
                        <span
                          className="inline-block w-4.5 h-4.5"
                          style={{
                            backgroundColor: tool.color,
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
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
