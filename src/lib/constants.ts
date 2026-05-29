export const SITE_CONFIG = {
  name: "Ashish Pratap Singh",
  title: "AI Automation Expert",
  tagline:
    "I build intelligent automation workflows that save businesses hours every week.",
  url: "https://ashishpratapsingh.com",
  email: "ashishprataps.ai@gmail.com",
  location: "Mumbai, India",
  socials: {
    github: "https://github.com/ashishpratapsingh",
    linkedin: "https://www.linkedin.com/in/aiaps",
    youtube: "https://youtube.com/@automatewithashish",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const SKILL_CATEGORIES = [
  {
    name: "n8n Automation",
    skills: [
      "Workflow Design",
      "Custom Nodes",
      "Webhooks",
      "Error Handling",
      "Scheduled Flows",
      "Triggered Flows",
      "Self-Hosting",
    ],
  },
  {
    name: "AI Integration",
    skills: [
      "LLM / API Integration",
      "AI Agents",
      "RAG Pipelines",
      "Prompt Engineering",
      "Chatbots",
      "Document AI",
    ],
  },
  {
    name: "Integrations",
    skills: [
      "OpenAI API",
      "Claude API",
      "Supabase",
      "Notion",
      "Gmail",
      "Google Drive",
      "Razorpay",
      "Vector DBs",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "Languages & Tools",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
] as const;

export const SERVICES = [
  {
    title: "Custom n8n Workflows",
    description:
      "End-to-end workflow automation using n8n. From lead capture to CRM sync, invoice processing to report generation, I design and deploy production-ready automation.",
    icon: "Workflow" as const,
  },
  {
    title: "AI Agent Integration",
    description:
      "Build and integrate AI agents into your business processes. LLM-powered document analysis, smart chatbots, and automated decision-making workflows.",
    icon: "Bot" as const,
  },
  {
    title: "Business Process Automation",
    description:
      "Identify bottlenecks in your operations and automate them. Onboarding, billing, notifications, data sync, and reporting on autopilot.",
    icon: "Zap" as const,
  },
  {
    title: "API Integrations",
    description:
      "Connect your tools and platforms. Custom integrations between any combination of SaaS tools, databases, and internal systems using REST and GraphQL APIs.",
    icon: "Plug" as const,
  },
] as const;
