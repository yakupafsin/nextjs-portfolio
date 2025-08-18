import { getSkills } from '@/lib/data'

export function SkillsGrid() {
  const skills = getSkills()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skillGroup) => (
        <div
          key={skillGroup.category}
          className="space-y-4 rounded-lg border bg-card p-6"
        >
          <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
          <div className="space-y-2">
            {skillGroup.items.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between rounded-lg bg-muted p-3"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
