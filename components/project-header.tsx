import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import type { Project } from '@/lib/mdx'

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="space-y-8">
      {/* Cover Image */}
      {project.cover && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Project Info */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{project.period}</span>
            </div>
            {project.readingTime && (
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{project.readingTime.text}</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {project.summary}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
