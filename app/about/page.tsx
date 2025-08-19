import { AboutHero } from '@/components/about-hero'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { EducationSection } from '@/components/education-section'
import { SkillsGrid } from '@/components/skills-grid'
import { Section } from '@/components/section'

export const metadata = {
  title: 'About',
  description: 'Learn more about my background, experience, and skills.',
  openGraph: {
    title: 'About Yakup Afsin',
    description: 'Learn more about my background, experience, and skills.',
    images: ['/og?title=About%20Yakup%20Afsin&tag=Developer&description=Learn%20more%20about%20my%20background%20and%20experience'],
  },
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <AboutHero />
      
      <Section>
        <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
        <SkillsGrid />
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <ExperienceTimeline />
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <EducationSection />
      </Section>
    </div>
  )
}
