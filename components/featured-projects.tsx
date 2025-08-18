import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Section } from '@/components/section'
import type { Project } from '@/lib/mdx'

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <Section>
      <div className="container">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A selection of my recent work and side projects
              </p>
            </div>
            
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
