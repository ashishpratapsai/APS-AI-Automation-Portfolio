import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  metadataBase: new URL("https://ashishpratapsingh.com"),
  title: {
    default: "Ashish Pratap Singh | AI Automation Expert & n8n Developer",
    template: "%s | Ashish Pratap Singh",
  },
  description:
    "AI automation expert specializing in n8n workflows, AI agent integration, and business process automation. Building intelligent automation that saves businesses hours every week.",
  keywords: [
    "AI automation expert",
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
    siteName: "Ashish Pratap Singh — AI Automation Expert",
    title: "Ashish Pratap Singh | AI Automation Expert & n8n Developer",
    description:
      "I build intelligent automation workflows that save businesses hours every week. Specializing in n8n, AI agents, and business process automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashish Pratap Singh — AI Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Pratap Singh | AI Automation Expert",
    description:
      "I build intelligent automation workflows that save businesses hours every week.",
    images: ["/og-image.png"],
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
