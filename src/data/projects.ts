import { Project } from "@/types/project";

export const projects: Project[] = [
  // ============================================================
  // FEATURED PROJECT: Institura
  // ============================================================
  {
    slug: "institura",
    title: "Institura — AI Operating System for Coaching Institutes",
    tagline:
      "A production SaaS with 30+ modules, AI timetable generation, AI question paper creation with OCR, and a full partner sales CRM. Live at institura.com.",
    description:
      "Full-stack multi-tenant SaaS platform running on Next.js 16, PostgreSQL (Supabase with 64-table RLS), and dual AI engines (Claude + Gemini). Each institute gets a portal at [slug].institura.com. 29 development phases shipped. Real coaching centers use it daily.",
    featured: true,
    category: "SaaS Product",
    heroImage: "/images/projects/institura-hero.webp",
    screenshots: [
      "/images/projects/institura-timetable.webp",
      "/images/projects/institura-fees.webp",
      "/images/projects/institura-dashboard.webp",
      "/images/projects/institura-assignments.webp",
    ],
    problem:
      "A mid-size coaching institute spends Rs 8-10 lakh per year on operational staff: an admin to manage scheduling and attendance (Rs 15-20K/mo), a typist to create question papers by hand (Rs 10-15K/mo), and hours of owner time on fee tracking, payroll, and reporting. Despite this spend, timetables still have conflicts, question papers take days, fee registers miss GST calculations, and there is no centralized system for testing, homework, or financial visibility. The money is being spent, but the operations are still broken.",
    solution:
      "Built Institura as a single platform that replaces all of it. Two AI automations are the hero features: (1) AI Timetable Generation: Claude API takes teacher availability, room constraints, and subject requirements and produces a conflict-free timetable in 60 seconds. No competitor in India has this. (2) AI Question Paper Creator: teachers upload a raw document (PDF/DOCX), the system uses Mathpix OCR to extract questions, options, answers, and math formulas, auto-corrects formatting, generates a print-ready paper with the institute's logo and watermark, and lets teachers resize and crop diagram images inline. Beyond AI, 30+ modules cover fees (component bifurcation with per-item GST, Razorpay billing), online testing (JEE/NEET/Board formats), attendance, payroll, homework, syllabus tracking, expense management, and a full partner sales CRM with Google Maps lead discovery and Gemini-powered sales messaging in Hinglish.",
    workflow: [
      {
        title: "Multi-tenant onboarding",
        description:
          "Institute signs up, gets a subdomain at [slug].institura.com. Configures centers, batches (IIT-JEE, NEET, Board), teachers, classrooms, and time slots. Supabase RLS with orgId isolation across 64 tables ensures complete data separation.",
      },
      {
        title: "AI Timetable Generation",
        description:
          "Claude API ingests teacher availability (full-time/part-time schedules), room capacity per center, subject-batch assignments with syllabus hour weights, and generates an optimized, zero-conflict timetable. Currently handles 10 teachers, 15 batches, 8 classrooms, 7 time slots across 2 centers.",
      },
      {
        title: "AI Question Paper Creator",
        description:
          "Teachers upload a PDF or DOCX. Mathpix OCR extracts questions, options, answers, and LaTeX math formulas. The system auto-corrects formatting, applies the institute's logo and watermark, and renders a print-ready paper. Diagram images can be cropped and resized inline via the Diagram Review Tool.",
      },
      {
        title: "Fee management with GST",
        description:
          "Fee structures support named components (Tuition, Lab, Library) each with individual GST percentages. Supports flat and percentage discounts, advance payments with method tracking (Cash, UPI, Bank, Cheque), dynamic installment management, and Razorpay subscription billing. Receipts show full component-wise breakdown.",
      },
      {
        title: "Online testing engine",
        description:
          "Global question bank with nested folder hierarchy, 5 question types, difficulty levels, and diagram support. Configurable test templates for JEE Advanced, JEE Mains, NEET, Board exams. Auto-graded CBT with student attempt tracking. PDF question import via Mathpix (100+ pages).",
      },
      {
        title: "Partner Sales CRM",
        description:
          "Affiliate partners discover leads via Google Maps Places API, manage a 9-stage pipeline (NEW to WON/LOST) with lead locking and cooldown rules. Gemini AI generates 3 message variants (feature-led, pain-point-led, social-proof-led) in Hinglish or English across 6 message types. Kanban board, sales guide, training hub, and daily cron-based lifecycle automation (lock expiry, stale alerts).",
      },
    ],
    integrations: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Supabase (64 tables, RLS)",
      "Claude AI (Anthropic)",
      "Gemini AI (Google)",
      "Mathpix OCR",
      "Razorpay",
      "NextAuth.js",
      "Resend",
      "Google Maps API",
      "Sentry",
    ],
    results: [
      {
        label: "Annual staff cost saved",
        value: "Rs 8-10L/yr",
        description:
          "A mid-size coaching institute typically spends Rs 8-10 lakh/year on a dedicated admin (Rs 15-20K/mo), a typist for question papers (Rs 10-15K/mo), and staff time on scheduling, fee tracking, and attendance. Institura automates all three roles.",
      },
      {
        label: "Timetable generation",
        value: "60 sec",
        description:
          "Claude AI generates a conflict-free timetable in under a minute. Manually, this takes a senior admin 10-15 hours per term. At Rs 300/hr, that is Rs 3,000-4,500 saved per scheduling cycle.",
      },
      {
        label: "Question paper creation",
        value: "Days to minutes",
        description:
          "Teachers upload a PDF or DOCX, get a print-ready question paper with institute logo, watermark, and auto-corrected formatting. What used to take a typist 2-3 days now happens in minutes.",
      },
      {
        label: "Modules shipped",
        value: "30+",
        description:
          "Fees with GST, online testing (JEE/NEET/Board), attendance, payroll, homework, syllabus tracking, expense management, and a partner sales CRM. One platform for the entire institute.",
      },
    ],
    liveUrl: "https://institura.com",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Prisma ORM",
      "Supabase",
      "Claude AI",
      "Gemini AI",
      "Mathpix OCR",
      "Razorpay",
      "NextAuth.js",
      "Resend",
      "Sentry",
      "Radix UI",
    ],
  },

  // ============================================================
  // N8N WORKFLOW PROJECTS
  // ============================================================

  // PROJECT 2: Instagram Lead Scraper
  {
    slug: "instagram-lead-scraper",
    title: "Instagram Lead Scraper at Scale",
    tagline:
      "Automated influencer discovery that scrapes thousands of Instagram profiles in minutes, turning weeks of manual research into a single workflow trigger.",
    description:
      "Built for a marketing agency running influencer outreach at scale. The workflow automates the entire top-of-funnel: keyword + location input, paginated Google search via SerpAPI, intelligent Instagram profile extraction with follower count parsing, deduplication, and structured output to Google Sheets. What used to take a team member a full week now runs in the background while the team focuses on closing deals.",
    featured: false,
    category: "Lead Generation",
    heroImage: "/images/projects/instagram-scraper-hero.webp",
    screenshots: [],
    problem:
      "Influencer marketing agencies and D2C brands need to find and reach out to hundreds of Instagram creators every month to run campaigns. The manual process: Google a niche keyword + city, add 'site:instagram.com', open each result, verify it's a real profile, note username and follower count, paste into a spreadsheet, repeat. At 500+ influencers per campaign across multiple cities and niches, this bottleneck delays campaign launches by weeks and limits how many creators the team can evaluate. Every day spent on manual research is a day the campaign isn't running and revenue isn't coming in.",
    solution:
      "Built a 15-node n8n workflow that turns influencer discovery from a week-long manual grind into a background job. The client drops keyword + location pairs into a Google Sheet (e.g., 'fitness influencer, Mumbai' or 'skincare creator, Delhi'). The workflow loops through each keyword, builds a site-filtered Google search query with exclusion rules, hits SerpAPI with configurable pagination (scrape 5 pages or 50), and parses results using custom JavaScript. The code extracts Instagram usernames, profile URLs, page titles, bio snippets, and follower counts (with K/M suffix parsing, so '100.6K followers' becomes 100,600). A filter strips out non-profile URLs (explore, reels, stories, tags). Clean data is appended to the output sheet, the source keyword is marked done, and the workflow recursively calls itself for the next batch. Rate limiting prevents API throttling across large runs.",
    workflow: [
      {
        title: "Input from Google Sheets",
        description:
          "Client fills in keyword + location + page range in a 'Scraper_Parameters' sheet. Workflow reads rows where Status is empty (unprocessed keywords only).",
      },
      {
        title: "Query construction",
        description:
          "Code node builds a search query: 'site:instagram.com [keyword] [location] -inurl:explore -inurl:p/ -inurl:reel -inurl:stories -inurl:tags'. Generates one query per page for the configured page range.",
      },
      {
        title: "SerpAPI search with pagination",
        description:
          "HTTP Request hits SerpAPI's Google Search endpoint. Loop Over Items processes each page sequentially with Wait nodes between calls to respect rate limits.",
      },
      {
        title: "Profile extraction and parsing",
        description:
          "Custom JavaScript parses organic results. Extracts username via regex, filters out non-profile pages (explore, reel, stories, tags, help, legal), and parses follower counts from snippets using K/M suffix conversion. Each lead gets: username, profile URL, title, bio snippet, follower count, source keyword, location, and page number.",
      },
      {
        title: "Deduplication, output, and recursion",
        description:
          "Filter node removes invalid results. Clean leads are appended to the output Google Sheet. Source keyword row is marked 'Done' to prevent reprocessing. Workflow recursively calls itself to process the next keyword batch automatically.",
      },
    ],
    integrations: ["n8n", "SerpAPI", "Google Sheets", "JavaScript", "Webhooks"],
    results: [
      {
        label: "Profiles scraped",
        value: "1000s in minutes",
        description:
          "Each keyword x location generates 10 results per page across configurable page depth. 20 keywords x 50 pages = 10,000 results in a single run. Runs unattended.",
      },
      {
        label: "Manual research replaced",
        value: "Weeks to minutes",
        description:
          "A team manually finding 1,000 Instagram profiles takes 1-2 weeks. This workflow does it in minutes, freeing the team to focus on outreach and closing.",
      },
      {
        label: "Revenue impact",
        value: "Rs 10-50L/mo",
        description:
          "Assuming the agency reaches out to 1,000+ influencers, closes 20-50 partnerships at Rs 50K-1L average deal size. The scraper is the top of that funnel. Bigger pipeline, faster campaigns, more revenue.",
      },
      {
        label: "Data points per lead",
        value: "7",
        description:
          "Username, profile URL, page title, bio snippet, parsed follower count, source keyword, and location. Structured and ready for CRM import or outreach sequencing.",
      },
    ],
    techStack: ["n8n", "SerpAPI", "Google Sheets", "JavaScript"],
  },

  // PROJECT 3: AI Content Creation System for Creators
  {
    slug: "ai-content-creation-system",
    title: "AI Content Creation System — From Any Inspiration to Production-Ready Script",
    tagline:
      "Drop a YouTube link, Instagram post, voice note, image, or text idea into Slack. Get back a full video script in your voice, 5 thumbnail titles, captions, and YouTube metadata. The entire content research-to-script pipeline, automated.",
    description:
      "Built for content creators who spend more time researching and scripting than actually creating. This 43-node n8n workflow turns any form of inspiration into a production-ready content package. See a great YouTube video? Paste the link. Have a thought in the shower? Send a voice note. Spot an interesting Instagram post? Drop the URL. The system figures out what you sent, processes it (transcribes audio, analyzes images, scrapes videos, extracts text), researches the topic, and generates a complete script written in the creator's voice with hook, body, CTA, thumbnail titles, and captions.",
    featured: false,
    category: "Content Automation",
    heroImage: "/images/projects/slack-pipeline-hero.webp",
    screenshots: [],
    problem:
      "Content creators producing 3-5 videos per week spend 60-70% of their time on everything except creating. The breakdown: finding inspiration (scrolling YouTube, Instagram, articles), researching the topic, transcribing reference content, writing the script, crafting a hook that stops the scroll, coming up with thumbnail titles, writing captions, and drafting YouTube descriptions. For a single video, this research-to-script process takes 3-5 hours. At 4 videos per week, that's 12-20 hours per week spent on pre-production. A creator charging Rs 50K-1L per brand deal is spending their highest-value time on tasks that can be automated. The real cost isn't just time — it's the videos that never get made because the creator ran out of bandwidth.",
    solution:
      "Built a 43-node Slack-native content creation system. The creator drops any type of input into a dedicated Slack channel — a YouTube URL, Instagram post link, voice note, image, or plain text idea. The workflow detects the input type and routes it through the right processing branch. YouTube and Instagram URLs are scraped via Apify to extract the original script/caption/transcript. Audio files are downloaded from Slack and transcribed via OpenAI Whisper. Images are analyzed via Google Gemini for context. Plain text is passed through directly. The processed content then feeds into a Script Agent (Anthropic Claude) that generates a complete video script with hook (designed to stop the scroll in 3 seconds), body (using the S.U.C.C.E.S. storytelling framework), and CTA. A Cover Title Agent generates 5 viral thumbnail title options in the style of top creators. Everything is saved to Airtable as a structured content record. Slack notifications keep the creator updated at every stage: process started, script draft ready, cover titles done. The creator picks up from Slack without opening a single other tool.",
    workflow: [
      {
        title: "Slack input capture",
        description:
          "Monitors a dedicated Slack channel for messages and file uploads. Accepts 5 input types: plain text ideas, audio voice notes, images with context, YouTube URLs, and Instagram post URLs. Sends a 'Process Started' notification immediately.",
      },
      {
        title: "Intelligent content routing",
        description:
          "Switch node detects what was sent. Text goes straight to scripting. Audio files are downloaded from Slack and transcribed via OpenAI Whisper. Images are analyzed via Google Gemini for visual context. YouTube URLs trigger Apify to extract the video transcript. Instagram URLs trigger a separate Apify actor for post data.",
      },
      {
        title: "Reference research and extraction",
        description:
          "For YouTube: Apify scrapes the full video, extracts the transcript, and pulls the original script structure. For Instagram: extracts the caption, hashtags, and engagement context. For audio: full transcription with speaker detection. All processed into clean text for the AI agents.",
      },
      {
        title: "AI script generation in creator's voice",
        description:
          "Script Agent (Anthropic Claude) takes the processed reference material and generates a complete video script: 3-second hook, storytelling body using the S.U.C.C.E.S. framework (Simple, Unexpected, Concrete, Credible, Emotional), and a clear CTA. Written in the creator's natural speaking style, not AI-sounding. Cover Title Agent generates 5 ALL CAPS viral thumbnail titles (4-7 words, optimized for clicks).",
      },
      {
        title: "Content package delivery",
        description:
          "Complete content package saved to Airtable: script draft, 5 thumbnail titles, original reference material, content type tag. Slack notification sent with the finished output. Creator reviews and records directly from the script — no tool switching, no copy-pasting between apps.",
      },
    ],
    integrations: [
      "n8n",
      "Slack",
      "OpenAI Whisper",
      "Google Gemini",
      "Anthropic Claude",
      "Apify",
      "Airtable",
    ],
    results: [
      {
        label: "Research-to-script time",
        value: "3-5 hrs to 5 min",
        description:
          "The entire pre-production process (finding inspiration, researching, transcribing references, writing the script, creating titles) compressed from hours to minutes per video.",
      },
      {
        label: "Creator bandwidth freed",
        value: "12-20 hrs/week",
        description:
          "At 4 videos/week, the creator saves 12-20 hours of pre-production time. That time goes into actually creating content, taking more brand deals, or scaling the channel.",
      },
      {
        label: "Revenue impact",
        value: "Rs 2-5L/mo",
        description:
          "A creator producing 4 videos/week instead of 2 (because pre-production is automated) doubles their output. More content = more views = more brand deals. At Rs 50K-1L per brand deal, even 2-3 additional deals per month is Rs 1-3L in extra revenue.",
      },
      {
        label: "Input types handled",
        value: "5",
        description:
          "YouTube URL, Instagram URL, voice note, image, plain text. Any format of inspiration turns into a script. No idea is too raw or too rough.",
      },
    ],
    techStack: [
      "n8n",
      "Slack",
      "OpenAI Whisper",
      "Google Gemini",
      "Anthropic Claude",
      "Apify",
      "Airtable",
    ],
  },

  // PROJECT 5: AI Meeting Intelligence System
  {
    slug: "meeting-intelligence",
    title: "AI Meeting Intelligence — Never Miss a Detail from Any Call",
    tagline:
      "Every meeting automatically captured, analyzed, and turned into structured CRM data with key pointers, action items, and call history. You never have to re-watch a call again.",
    description:
      "Built for a team taking 15-20+ calls per week across sales, client delivery, and internal syncs. The 33-node n8n workflow captures every meeting transcript the moment the call ends, uses AI to extract every important detail (who said what, what was decided, what needs follow-up), classifies the call type, matches it to the right CRM contact, and creates a structured record. The result: a complete, searchable history of every conversation your team has ever had, built automatically.",
    featured: false,
    category: "Sales Automation",
    heroImage: "/images/projects/meeting-intelligence-hero.webp",
    screenshots: [],
    problem:
      "Teams taking 15-20 calls per week lose critical information constantly. After a call, you remember the highlights but forget the specifics: the exact pricing discussed, the objection raised, the feature requested, the deadline mentioned. Manually reviewing a 45-minute recording takes 30-45 minutes. Most people skip it entirely and rely on memory, which means action items get missed, follow-ups are forgotten, and the same questions get asked again in the next call. For a sales team, missed follow-ups directly translate to lost deals. For a client-facing team, it means dropped commitments and eroded trust. Across a team of 5 people taking 80+ calls per month, that's thousands of data points being lost every week.",
    solution:
      "Built a 33-node AI meeting intelligence system. The moment a call ends, Fathom sends the full transcript via webhook. The first AI agent (OpenRouter) decides whether the meeting is worth saving at all (filters out noise like accidental joins or empty calls). A second layer detects whether it's a client call or an internal meeting by analyzing participant email domains against a company config. For client calls, the workflow searches the Airtable CRM for the contact, creates a structured call recording linked to their profile, and tracks call sequencing (1st call, 2nd call, 3rd call with the same client). AI agents extract the key pointers: what was discussed, what was decided, what needs follow-up, and what the call type was (discovery, demo, negotiation, closing). For internal meetings, a separate AI agent evaluates whether the meeting contains actionable content worth saving or can be skipped. The end result: every meaningful conversation your team has is automatically analyzed, structured, and searchable in the CRM without anyone typing a single note.",
    workflow: [
      {
        title: "Automatic transcript capture",
        description:
          "Fathom webhook fires the instant a call ends. Full transcript, participant list, duration, and meeting metadata arrive in the workflow. No manual trigger needed.",
      },
      {
        title: "AI relevance check",
        description:
          "First AI agent (OpenRouter) reads the transcript and decides whether the meeting is worth saving. Accidental joins, empty calls, and irrelevant recordings are automatically filtered out.",
      },
      {
        title: "Client vs internal classification",
        description:
          "Code node analyzes participant email domains against a company config. Client calls (external domains present) and internal calls (only company domains) get routed to separate processing branches.",
      },
      {
        title: "AI intelligence extraction",
        description:
          "AI agents extract structured data from the transcript: key discussion points, decisions made, action items, objections raised, pricing discussed, and call type (discovery, demo, negotiation, closing). Not a summary — specific, actionable pointers.",
      },
      {
        title: "CRM record creation with call history",
        description:
          "For client calls: searches CRM for existing contact, creates a call recording linked to their profile, tracks call sequencing (marks 1st call, updates subsequent call numbers, manages last-call flags). For internal meetings: saves only if AI determines the content is actionable. Contact record updated with latest call status.",
      },
    ],
    integrations: [
      "n8n",
      "Fathom",
      "OpenRouter LLMs",
      "Airtable CRM",
      "JavaScript",
      "Webhooks",
    ],
    results: [
      {
        label: "Meeting review time",
        value: "45 min to 0",
        description:
          "No one needs to re-watch a 45-minute recording. AI extracts every key pointer, decision, and action item automatically. Across 80+ calls/month, that's 60+ hours of review time eliminated for the team.",
      },
      {
        label: "Data captured per meeting",
        value: "100%",
        description:
          "Every detail from every call is captured: discussion points, objections, pricing mentioned, decisions, follow-ups. Nothing relies on memory. Searchable forever.",
      },
      {
        label: "Follow-ups missed",
        value: "Zero",
        description:
          "Action items are extracted and logged in the CRM automatically. No more 'I forgot what we discussed last time' or 'Did we promise them that feature?'",
      },
      {
        label: "Revenue impact",
        value: "Rs 10-30L/yr",
        description:
          "Assuming 5-10% of deals are lost due to missed follow-ups or forgotten commitments. At 20 deals/month with Rs 1-2L average deal size, recovering even a fraction is Rs 10-30L annually.",
      },
    ],
    techStack: [
      "n8n",
      "Fathom",
      "OpenRouter LLMs",
      "Airtable",
      "JavaScript",
      "Webhooks",
    ],
  },

  // PROJECT 6: AI Prospect Research Agent
  {
    slug: "ai-prospect-research-agent",
    title: "AI Prospect Research & Cold Email Personalization Agent",
    tagline:
      "An AI research agent that scrapes prospect websites, extracts company intelligence, and writes hyper-personalized cold email icebreakers, processing hundreds of prospects in minutes instead of weeks.",
    description:
      "Built for a B2B sales team running outbound at scale. The workflow replaces the most expensive part of cold outreach: the manual research. It takes a list of prospect domains, visits each website, intelligently finds and reads the About Us page using AI, extracts what the company does, who they serve, and what makes them different, then generates a personalized email opener that references specific details about that prospect. The entire research-to-personalization pipeline runs unattended.",
    featured: false,
    category: "Sales Automation",
    heroImage: "/images/projects/clickpost-outreach-hero.webp",
    screenshots: [],
    problem:
      "Cold email reply rates with generic templates sit at 1-2%. Personalized emails that reference something specific about the prospect's business get 3-5x higher replies. But that personalization requires manual research: visit the website, find the About page, read what the company does, understand their positioning, then write a custom opening line. At 10-15 minutes per prospect and 500+ prospects per campaign, that's 80-125 hours of SDR time per campaign. A senior SDR at Rs 50-80K/month is spending most of their time on research instead of selling. At scale, this is a Rs 5-10 lakh/year cost just for the research portion of outbound.",
    solution:
      "Built a 24-node AI research agent in n8n. The workflow reads prospect domains from Google Sheets, scrapes each company's homepage, uses an AI agent (OpenAI GPT-4.1) to intelligently detect the About Us page from header/footer links, scrapes that page, extracts company intelligence (mission, product focus, team, differentiators, industry), and feeds it into a second AI agent that generates a hyper-personalized cold email icebreaker addressing the prospect by name and referencing what their company actually does. Handles edge cases: blocked websites are flagged (not silently skipped), companies without About pages get personalization from homepage content instead, and 2-second rate limiting between scrapes prevents IP blocking.",
    workflow: [
      {
        title: "Domain list input",
        description:
          "Reads prospect domains + contact names from Google Sheets. Loops through each domain with 2-second waits between scrapes to avoid getting blocked.",
      },
      {
        title: "Homepage scraping + block detection",
        description:
          "HTTP Request scrapes the homepage HTML. An If node checks whether the site returned a block/CAPTCHA page. Blocked domains are marked as 'BLOCKED' in the sheet so the team knows to research those manually.",
      },
      {
        title: "AI-powered About page discovery",
        description:
          "Code node extracts all links from header and footer navigation. OpenAI analyzes the link list and identifies which URL is the About Us page (looks for patterns like 'about', 'mission', 'team', 'story'). Returns a confidence score. If About page exists, a second scrape pulls its full content.",
      },
      {
        title: "Company intelligence extraction",
        description:
          "AI Agent reads the scraped About page content and extracts: what the company does, who they serve, founding story, team highlights, industry positioning, and key differentiators. Filters out promotional noise (discount offers, cookie banners). For companies without About pages, a separate branch extracts intelligence from the homepage instead.",
      },
      {
        title: "Hyper-personalized icebreaker generation",
        description:
          "A second AI Agent takes the extracted company intelligence + prospect's first name and generates a personalized cold email opener (1 sentence, 10-15 words). Uses proven personalization themes: sustainability angle, specialization, women-led/family-run, geographic pride, founding story. Output format: 'Hey [First Name], [Icebreaker]'. Written back to Google Sheets, ready for outreach sequencing.",
      },
    ],
    integrations: [
      "n8n",
      "OpenAI GPT-4.1",
      "Google Sheets",
      "HTTP Scraping",
      "LangChain Agents",
      "JavaScript",
    ],
    results: [
      {
        label: "Research time per prospect",
        value: "10 min to 30 sec",
        description:
          "Manual research: visit website, find About page, read it, write a custom opener. This agent does all of it in ~30 seconds per prospect, unattended.",
      },
      {
        label: "Prospects processed per run",
        value: "500+",
        description:
          "A single run can process 500+ domains. At 30 sec each with rate limiting, a batch of 500 completes in ~4 hours with zero human involvement.",
      },
      {
        label: "SDR cost replaced",
        value: "Rs 5-10L/yr",
        description:
          "Assuming a senior SDR at Rs 50-80K/month spends 60-70% of their time on prospect research. This agent eliminates that research entirely, freeing the SDR to focus on calls and closing.",
      },
      {
        label: "Reply rate uplift",
        value: "2-5x",
        description:
          "Personalized cold emails referencing specific company details consistently outperform generic templates. Industry benchmarks: generic 1-2% reply rate vs personalized 5-8%.",
      },
    ],
    techStack: [
      "n8n",
      "OpenAI GPT-4.1",
      "Google Sheets",
      "LangChain Agents",
      "HTTP Scraping",
      "JavaScript",
    ],
  },

  // PROJECT 7: AI Proposal Generation System
  {
    slug: "ai-proposal-generator",
    title: "AI Proposal Generator — Meeting to Proposal in 30 Seconds",
    tagline:
      "An AI system that listens to your sales calls, extracts what the client needs, matches it to your service catalog, and generates a fully branded PandaDoc proposal with dynamic pricing, in 30 seconds flat.",
    description:
      "Built for a growing agency that was losing deals because proposals took 2-3 days to send after a sales call. The system connects meeting transcription, AI extraction, catalog matching, proposal creation, contract tracking, payment processing, and client onboarding into a single automated pipeline.",
    featured: false,
    category: "Sales Automation",
    heroImage: "/images/projects/uplift-sales-os-hero.webp",
    screenshots: [],
    problem:
      "After every sales call, someone has to manually write a proposal: review their notes, figure out which services the client needs, look up pricing, create a PandaDoc document, add the right pricing tables, format it, and send it. This takes 2-3 hours per proposal and usually happens 1-3 days after the call. By then, the prospect has gone cold, talked to a competitor, or lost urgency. The bottleneck isn't the sales conversation, it's the time between the conversation and the proposal.",
    solution:
      "The system collects context from multiple client calls and internal discussions, understands the timeline of each conversation, identifies which points are still relevant vs. outdated, and generates an accurate proposal based on the latest state of the deal. When a sales call ends, Fathom sends the full transcript. AI extracts: services needed, budget range, timeline, company details, and decision-maker info. A second AI agent matches requirements against the service catalog (via PandaDoc API) and creates a branded proposal with dynamic pricing tables. After signing, the system handles payment via Stripe, creates a branded Google Drive folder, and sends an onboarding email. End-to-end: call ends, proposal sent, contract signed, payment collected, client onboarded.",
    workflow: [
      {
        title: "Meeting transcript capture",
        description:
          "Fathom webhook fires when a sales call ends. Full transcript, participant list, and meeting metadata land in the workflow. An Airtable webhook also listens for CRM triggers (proposal request or contract update).",
      },
      {
        title: "AI requirement extraction",
        description:
          "AI Information Extractor (Anthropic Claude) reads the full call transcript and pulls out: services discussed, client pain points, budget indicators, timeline, company name, and decision-maker details. Structured output, not free text.",
      },
      {
        title: "Catalog matching + proposal creation",
        description:
          "Workflow fetches the service catalog from PandaDoc API. An AI Agent matches extracted requirements to catalog items (service names, pricing tiers). Creates a PandaDoc proposal document with the client's name, matched service line items, and dynamic pricing tables. Updates the pricing table via PandaDoc API. Proposal link saved to CRM.",
      },
      {
        title: "Contract and payment tracking",
        description:
          "PandaDoc webhook detects when the client signs. CRM updated with contract status. Stripe Trigger captures payment events and updates payment status in real time. Welcome email with onboarding link sent via Gmail automatically.",
      },
      {
        title: "Client onboarding",
        description:
          "When the onboarding call is booked via Calendly, the workflow creates a branded Google Drive folder, shares it with the client (writer permissions), and sends a professional HTML email with the folder access link. CRM record marked complete. Zero manual handoff.",
      },
    ],
    integrations: [
      "n8n",
      "Fathom (Transcription)",
      "Anthropic Claude",
      "OpenRouter LLMs",
      "PandaDoc API",
      "Stripe",
      "Airtable CRM",
      "Calendly",
      "Gmail",
      "Google Drive",
      "Instantly",
    ],
    results: [
      {
        label: "Proposal delivery time",
        value: "30 seconds",
        description:
          "From end of sales call to a fully branded, priced proposal in the prospect's inbox. Previously took 1-3 days. Responding within 5 minutes makes you 21x more likely to close (Harvard Business Review).",
      },
      {
        label: "Deals saved from going cold",
        value: "20-30%",
        description:
          "Assuming 20 sales conversations/month and a 10-15% improvement in close rate due to instant follow-up. At average deal sizes of Rs 1-5L, that's Rs 4-30L in recovered annual revenue.",
      },
      {
        label: "Manual effort per proposal",
        value: "2-3 hrs to 0",
        description:
          "Previously required 2-3 hours of ops/sales time per proposal (reviewing notes, drafting, pricing, formatting in PandaDoc). At 20 proposals/month and Rs 500-1000/hr, that's Rs 20K-60K/month in labor eliminated. API costs are negligible in comparison.",
      },
      {
        label: "Tools orchestrated",
        value: "8",
        description:
          "Fathom, Airtable, PandaDoc, Stripe, Gmail, Google Drive, Calendly, Instantly. One workflow. Zero manual steps.",
      },
    ],
    techStack: [
      "n8n",
      "Anthropic Claude",
      "OpenRouter",
      "PandaDoc API",
      "Stripe",
      "Airtable",
      "Calendly",
      "Gmail",
      "Google Drive",
      "JavaScript",
    ],
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getActiveProjects(): Project[] {
  return projects.filter((p) => !p.title.includes("Coming Soon"));
}
