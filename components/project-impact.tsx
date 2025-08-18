interface ProjectImpactProps {
  impact: Array<{
    metric: string
    value: string
    context?: string
  }>
}

export function ProjectImpact({ impact }: ProjectImpactProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Impact & Results</h3>
      <div className="space-y-4">
        {impact.map((item, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                {item.metric}
              </p>
              <p className="text-2xl font-bold text-primary">
                {item.value}
              </p>
              {item.context && (
                <p className="text-sm text-muted-foreground">
                  {item.context}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
