import { getExperience } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'

export function ExperienceTimeline() {
  const experience = getExperience()

  return (
    <div className="space-y-8">
      {experience.map((job, index) => (
        <div key={index} className="relative">
          {/* Timeline line */}
          {index !== experience.length - 1 && (
            <div className="absolute left-6 top-12 h-full w-0.5 bg-border" />
          )}
          
          <div className="flex gap-6">
            {/* Timeline dot */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              {job.company.charAt(0)}
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {formatDateRange(job.start, job.end)}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{job.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.location}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.type}</span>
                </div>
              </div>

              <p className="text-muted-foreground">{job.summary}</p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-medium">Key Achievements:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
