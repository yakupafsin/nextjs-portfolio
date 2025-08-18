'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'

interface ProjectsFilterProps {
  tags: string[]
  stack: string[]
}

export function ProjectsFilter({ tags, stack }: ProjectsFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 w-80 rounded-lg border bg-popover p-4 shadow-lg">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded-full border border-input px-3 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <button
                    key={tech}
                    className="rounded-full border border-input px-3 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
