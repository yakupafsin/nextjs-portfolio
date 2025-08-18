import { getEducation } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'
import { GraduationCap, Award } from 'lucide-react'

export function EducationSection() {
  const education = getEducation()

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {education.map((edu, index) => (
        <div key={index} className="rounded-lg border bg-card p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{formatDateRange(edu.start, edu.end)}</span>
              </div>
            </div>
          </div>

          {edu.gpa && (
            <div className="text-sm">
              <span className="font-medium">GPA: </span>
              <span className="text-muted-foreground">{edu.gpa}</span>
            </div>
          )}

          {edu.honors && edu.honors.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Honors & Awards</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {edu.honors.map((honor, honorIndex) => (
                  <li key={honorIndex} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {edu.relevant_courses && edu.relevant_courses.length > 0 && (
            <div className="space-y-2">
              <span className="font-medium text-sm">Relevant Coursework</span>
              <div className="flex flex-wrap gap-1">
                {edu.relevant_courses.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {edu.skills && edu.skills.length > 0 && (
            <div className="space-y-2">
              <span className="font-medium text-sm">Skills Acquired</span>
              <div className="flex flex-wrap gap-1">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {edu.credential_id && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Credential ID: </span>
              {edu.credential_id}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
