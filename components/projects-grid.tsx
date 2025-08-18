'use client'

import { useState, useMemo } from 'react'
import { ProjectCard } from '@/components/project-card'
import type { Project } from '@/lib/mdx'

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedStack, setSelectedStack] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag))

      const matchesStack = selectedStack.length === 0 ||
        selectedStack.some((tech) => project.stack.includes(tech))

      return matchesSearch && matchesTags && matchesStack
    })
  }, [projects, searchTerm, selectedTags, selectedStack])

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        
        {/* Filter indicators */}
        {(selectedTags.length > 0 || selectedStack.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tag}
                <button
                  onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}
                  className="ml-2 text-primary/60 hover:text-primary"
                >
                  ×
                </button>
              </span>
            ))}
            {selectedStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {tech}
                <button
                  onClick={() => setSelectedStack(prev => prev.filter(t => t !== tech))}
                  className="ml-2 text-secondary-foreground/60 hover:text-secondary-foreground"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedTags([])
              setSelectedStack([])
            }}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
