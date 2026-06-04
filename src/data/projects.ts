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
      "- A mid-size coaching institute spends **Rs 8-10 lakh/year** on operational staff (admin, typist, data entry)\n- Timetables take **10-15 hours per term** to create manually, and still have conflicts\n- Question papers take a typist **2-3 days** per paper, with formatting errors\n- Fee registers miss **GST calculations**, receipts are manual, payments go untracked\n- No centralized system for testing, homework, attendance, or financial reporting\n- The money is being spent, but the **operations are still broken**",
    solution:
      "- **AI Timetable Generation** — Claude API takes teacher availability, room constraints, and subject requirements. Produces a conflict-free timetable in **60 seconds**. No competitor in India has this\n- **AI Question Paper Creator** — Teachers upload a PDF/DOCX. Mathpix OCR extracts questions, options, answers, and math formulas. Auto-corrects formatting, applies institute logo and watermark. **Days of work reduced to minutes**\n- **Fee management with GST** — Component-wise fee structures with individual GST percentages, Razorpay billing, installment tracking, and automated receipts\n- **Online testing engine** — JEE/NEET/Board formats, global question bank, auto-graded CBT with student tracking\n- **Partner Sales CRM** — Google Maps lead discovery, Gemini-powered sales messaging in Hinglish, 9-stage pipeline\n- **30+ modules total** — Attendance, payroll, homework, syllabus tracking, expense management. One platform for the entire institute",
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
      "- Agencies need **500+ influencer profiles per campaign** across multiple cities and niches\n- Manual process: Google search, open each result, verify profile, note follower count, paste into spreadsheet\n- At **10-15 minutes per profile**, this takes a team member **1-2 weeks** per campaign\n- Every day spent on manual research is a day the **campaign isn't running**\n- Limits how many creators the team can evaluate, directly impacting revenue",
    solution:
      "- Client drops **keyword + location pairs** into a Google Sheet (e.g., 'fitness influencer, Mumbai')\n- Workflow builds site-filtered Google search queries with **exclusion rules** (no explore, reels, stories pages)\n- SerpAPI scrapes with **configurable pagination** (5 pages or 50), rate-limited to prevent throttling\n- Custom JavaScript extracts **7 data points per lead**: username, profile URL, title, bio, follower count (K/M parsing), source keyword, location\n- Filter strips invalid results, clean data appended to output sheet\n- Source keyword marked done, workflow **recursively processes the next batch**\n- Entire campaign's research runs unattended in the background",
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
      "- Creators producing 3-5 videos/week spend **60-70% of their time** on everything except creating\n- Finding inspiration, researching, transcribing references, writing scripts, crafting hooks, thumbnail titles, captions, YouTube descriptions\n- A single video's pre-production takes **3-5 hours**\n- At 4 videos/week, that's **12-20 hours/week** on tasks that can be automated\n- The real cost isn't just time. It's the **videos that never get made** because the creator ran out of bandwidth",
    solution:
      "- **5 input types accepted** — YouTube URL, Instagram post, voice note, image, or plain text idea. Drop it into a Slack channel\n- Workflow **auto-detects input type** and routes through the right processing branch\n- YouTube/Instagram URLs scraped via **Apify** for original script/caption/transcript\n- Audio transcribed via **OpenAI Whisper**, images analyzed via **Google Gemini**\n- Script Agent (**Anthropic Claude**) generates a complete video script: 3-second hook, S.U.C.C.E.S. storytelling body, clear CTA\n- Cover Title Agent generates **5 viral thumbnail titles** optimized for clicks\n- Everything saved to **Airtable** as a structured content record\n- Slack notifications at every stage. Creator picks up from Slack without opening a single other tool",
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
      "- Teams taking **15-20 calls/week** lose critical information after every call\n- You remember the highlights but forget: exact pricing discussed, objections raised, deadlines mentioned\n- Reviewing a **45-minute recording takes 30-45 minutes**. Most people skip it entirely\n- Missed follow-ups **directly translate to lost deals**\n- Across a team of 5 people taking **80+ calls/month**, thousands of data points are lost every week",
    solution:
      "- Call ends, **Fathom sends the full transcript** via webhook instantly\n- First AI agent filters out noise (accidental joins, empty calls)\n- Second layer **classifies client vs. internal calls** by analyzing participant email domains\n- For client calls: searches CRM, creates a structured record, **tracks call sequencing** (1st, 2nd, 3rd call with same client)\n- AI extracts **key pointers**: discussion points, decisions, action items, objections, pricing, call type (discovery/demo/negotiation/closing)\n- For internal meetings: AI evaluates if content is **actionable or skippable**\n- Every meaningful conversation is **automatically analyzed, structured, and searchable** in the CRM. Zero manual notes",
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
      "- Generic cold emails get **1-2% reply rates**. Personalized ones get **3-5x higher**\n- Personalization requires manual research: visit website, find About page, read positioning, write custom opener\n- At **10-15 minutes per prospect** and 500+ prospects per campaign, that's **80-125 hours of SDR time**\n- A senior SDR at Rs 50-80K/month is spending most of their time on research instead of selling\n- At scale, this is a **Rs 5-10 lakh/year cost** just for the research portion of outbound",
    solution:
      "- Reads prospect domains from Google Sheets, **scrapes each company's homepage**\n- AI agent (**OpenAI GPT-4.1**) detects the About Us page from header/footer links automatically\n- Extracts **company intelligence**: mission, product focus, team, differentiators, industry\n- Second AI agent generates a **hyper-personalized icebreaker** addressing the prospect by name, referencing what their company actually does\n- **Edge cases handled**: blocked websites flagged (not silently skipped), companies without About pages get personalization from homepage content\n- **2-second rate limiting** between scrapes prevents IP blocking\n- Output written directly to Google Sheets, ready for outreach sequencing",
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
      "- After every sales call, someone manually writes a proposal: review notes, look up pricing, create PandaDoc doc, format it, send it\n- This takes **2-3 hours per proposal** and usually happens **1-3 days after the call**\n- By then, the prospect has gone cold, talked to a competitor, or lost urgency\n- Responding within 5 minutes makes you **21x more likely to close**\n- The bottleneck isn't the sales conversation. It's the **time between the conversation and the proposal**",
    solution:
      "- System collects context from **multiple client calls and internal discussions**\n- Understands the **timeline of each conversation**, identifies which points are still relevant vs. outdated\n- When a call ends, **Fathom sends the full transcript** via webhook\n- AI extracts: **services needed, budget range, timeline, company details, decision-maker info**\n- Second AI agent matches requirements against the **service catalog via PandaDoc API**\n- Creates a **branded proposal with dynamic pricing tables** in 30 seconds\n- After signing: **Stripe payment**, branded Google Drive folder, onboarding email sent automatically\n- End-to-end: call ends, proposal sent, contract signed, payment collected, client onboarded. **Zero manual steps**",
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
