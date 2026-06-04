import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ProjectHeader } from "@/components/project-detail/project-header";
import { ProjectOverview } from "@/components/project-detail/project-overview";
import { ProjectWorkflow } from "@/components/project-detail/project-workflow";
import { ProjectIntegrations } from "@/components/project-detail/project-integrations";
import { ProjectResults } from "@/components/project-detail/project-results";
import { ProjectDiagram } from "@/components/project-detail/project-diagram";
import { ProjectScreenshots } from "@/components/project-detail/project-screenshots";
import { ProjectNav } from "@/components/project-detail/project-nav";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => !p.title.includes("Coming Soon"))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.title.includes("Coming Soon")) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const activeProjects = projects.filter((p) => !p.title.includes("Coming Soon"));
  const prevProject = activeProjects[activeProjects.indexOf(project) - 1];
  const nextProject = activeProjects[activeProjects.indexOf(project) + 1];

  return (
    <>
      <Navbar />
      <main>
        <ProjectHeader project={project} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">
          <ProjectOverview project={project} />
          <ProjectWorkflow project={project} />
          <ProjectIntegrations project={project} />
          {project.diagramImage && <ProjectDiagram project={project} />}
          {project.screenshots.length > 0 && (
            <ProjectScreenshots project={project} />
          )}
          <ProjectResults project={project} />
          <ProjectNav prev={prevProject} next={nextProject} />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
