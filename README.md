# Ashish Pratap Singh — AI Automation Portfolio

Personal portfolio website showcasing AI automation expertise, n8n workflows, and the Institura SaaS product.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Dark Mode:** next-themes
- **Icons:** Lucide React
- **Contact Form:** Formspree
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repo
git clone <your-repo-url>
cd APS_AI_Automation_Portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local and add your Formspree ID

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Adding a New Project

All project data lives in a single file: `src/data/projects.ts`

### Step 1: Add project images

Place your images in `public/images/projects/`:
- `your-project-hero.webp` — Main hero image (recommended: 1200x630)
- `your-project-diagram.webp` — Workflow diagram (optional)
- `your-project-1.webp`, `your-project-2.webp` — Screenshots (optional)

### Step 2: Add project data

Open `src/data/projects.ts` and add a new entry to the `projects` array (or replace one of the placeholder entries):

```typescript
{
  slug: "your-project-slug",          // URL-friendly name
  title: "Your Project Title",
  tagline: "One-line summary for the card view",
  description: "2-3 sentence description",
  featured: false,                     // true = shows as large featured card
  category: "AI Automation",           // Category badge
  heroImage: "/images/projects/your-project-hero.webp",
  screenshots: [
    "/images/projects/your-project-1.webp",
  ],
  problem: "What business problem does this solve?",
  solution: "How did you solve it?",
  workflow: [
    { title: "Step 1", description: "What happens first" },
    { title: "Step 2", description: "What happens next" },
  ],
  integrations: ["n8n", "OpenAI", "Supabase"],
  results: [
    { label: "Time Saved", value: "10hrs/week", description: "Optional details" },
  ],
  diagramImage: "/images/projects/your-project-diagram.webp",  // optional
  liveUrl: "https://example.com",      // optional
  githubUrl: "https://github.com/...", // optional
  techStack: ["n8n", "TypeScript", "OpenAI API"],
}
```

### Step 3: Done

The route `/projects/your-project-slug` is auto-generated. The project card appears on the home page grid.

## Project Structure

```
src/
  app/
    page.tsx              — Home page (all sections)
    layout.tsx            — Root layout with SEO metadata
    globals.css           — Theme variables and custom styles
    sitemap.ts            — Auto-generated sitemap
    robots.ts             — Robots.txt
    projects/[slug]/
      page.tsx            — Project detail page
  components/
    layout/               — Navbar, Footer
    sections/             — Hero, About, Skills, Projects, Services, Contact
    ui/                   — Reusable UI components
    project-detail/       — Project detail page components
  data/
    projects.ts           — All project data (edit this file)
  lib/
    constants.ts          — Site config, skills, services
    utils.ts              — Utility functions
  hooks/                  — Custom React hooks
  types/                  — TypeScript interfaces
```

## Customization

### Site Info
Edit `src/lib/constants.ts` to update your name, email, social links, skills, and services.

### Theme Colors
Edit the CSS variables in `src/app/globals.css` under `:root` (light) and `.dark` (dark).

### SEO
Update the metadata in `src/app/layout.tsx`. Replace the `metadataBase` URL with your actual domain.

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Add environment variable: `NEXT_PUBLIC_FORMSPREE_ID`
5. Deploy

The site builds and deploys automatically on every push to `main`.

## Adding Your Resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" button in the hero section links to it.

## Adding an OG Image

Replace `public/og-image.png` with your custom Open Graph image (1200x630px recommended). This is what shows when the site is shared on LinkedIn, Twitter, etc.
