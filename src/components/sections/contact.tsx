"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONFIG } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from "@/components/ui/social-icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          label="GET IN TOUCH"
          title="Let's work together"
          align="left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Have a process that needs automating? A workflow that&apos;s
            eating your team&apos;s time? Let&apos;s talk about what I can
            build for you.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              <span className="text-sm">{SITE_CONFIG.email}</span>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              <span className="text-sm">{SITE_CONFIG.phone}</span>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <LinkedInIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              <span className="text-sm">LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{SITE_CONFIG.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE_CONFIG.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
