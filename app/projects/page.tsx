import { getProjects } from '@/lib/mdx'
import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectsFilter } from '@/components/projects-filter'
import { Section } from '@/components/section'

export const metadata = {
  title: 'Projects',
  description: 'A collection of React Native, Node.js, and full-stack projects by Yakup Afsin, showcasing mobile apps, SaaS platforms, and cross-platform development.',
  openGraph: {
    title: 'Yakup Afsin — Projects',
    description: 'A collection of React Native, Node.js, and full-stack projects showcasing mobile apps, SaaS platforms, and cross-platform development.',
    images: ['/og?title=Yakup%20Afsin%20—%20Projects&tag=Portfolio&description=React%20Native%20and%20full-stack%20projects'],
  },
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort()

  // Get all unique stack items
  const allStack = Array.from(
    new Set(projects.flatMap((project) => project.stack))
  ).sort()

  return (
    <div className="container py-12">
      <Section>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects I've worked on, showcasing my skills and experience.
          </p>
        </div>
      </Section>

      <Section>
        <ProjectsFilter tags={allTags} stack={allStack} />
        <ProjectsGrid projects={projects} />
      </Section>
    </div>
  )
}
