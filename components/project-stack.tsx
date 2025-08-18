interface ProjectStackProps {
  stack: string[]
}

export function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Tech Stack</h3>
      <div className="space-y-2">
        {stack.map((tech) => (
          <div
            key={tech}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <span className="font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
