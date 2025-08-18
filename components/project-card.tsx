import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/mdx'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn('group relative overflow-hidden rounded-lg border bg-card', className)}>
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <span className="text-4xl font-bold text-muted-foreground">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center space-x-4">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">View demo</span>
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">View source</span>
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground">{project.period}</span>
          </div>
          
          <p className="text-muted-foreground line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Link overlay */}
      <Link href={project.url} className="absolute inset-0">
        <span className="sr-only">View {project.title}</span>
      </Link>
    </div>
  )
}
