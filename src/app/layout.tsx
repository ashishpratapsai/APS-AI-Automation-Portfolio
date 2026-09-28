import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Ashish Pratap Singh | AI Automation Engineer & LLM Systems",
    template: "%s | Ashish Pratap Singh",
  },
  description:
    "I build autonomous AI systems and LLM-powered applications that serve businesses. Built Institura solo, a live SaaS for 2 coaching institutes with 600+ students, replacing ₹10L+/yr in staff cost per institute. Available for AI automation engineering roles and consulting.",
  keywords: [
    "AI Engineer",
    "AI automation engineer",
    "LLM engineering",
    "Python AI agents",
    "n8n developer",
    "workflow automation",
    "AI integration",
    "business automation",
    "n8n workflows",
    "AI agents",
    "automation consultant",
  ],
  authors: [{ name: "Ashish Pratap Singh" }],
  creator: "Ashish Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ashish Pratap Singh | AI Automation Engineer & LLM Systems",
    title: "Ashish Pratap Singh | AI Automation Engineer & LLM Systems",
    description:
      "I build autonomous AI systems and LLM-powered applications that serve businesses. Built Institura solo, a live SaaS for 2 coaching institutes with 600+ students, replacing ₹10L+/yr in staff cost per institute. Available for AI automation engineering roles and consulting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Pratap Singh | AI Automation Engineer & LLM Systems",
    description:
      "I build autonomous AI systems and LLM-powered applications that serve businesses. Built Institura solo, a live SaaS for 2 coaching institutes with 600+ students, replacing ₹10L+/yr in staff cost per institute.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
          {children}
      </body>
    </html>
  );
}
