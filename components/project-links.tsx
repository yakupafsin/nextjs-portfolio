import { ExternalLink, Github, FileText } from 'lucide-react'

interface ProjectLinksProps {
  links?: {
    repo?: string
    demo?: string
    case_study?: string
  }
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links) return null

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Project Links</h3>
      <div className="space-y-3">
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Live Demo</p>
              <p className="text-sm text-muted-foreground">View the project in action</p>
            </div>
          </a>
        )}

        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <Github className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Source Code</p>
              <p className="text-sm text-muted-foreground">View on GitHub</p>
            </div>
          </a>
        )}

        {links.case_study && (
          <a
            href={links.case_study}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent transition-colors"
          >
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium">Case Study</p>
              <p className="text-sm text-muted-foreground">Detailed analysis</p>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
