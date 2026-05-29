import { SITE_CONFIG } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from "@/components/ui/social-icons";

const socialLinks = [
  { icon: GitHubIcon, href: SITE_CONFIG.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: SITE_CONFIG.socials.linkedin, label: "LinkedIn" },
  { icon: YouTubeIcon, href: SITE_CONFIG.socials.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
