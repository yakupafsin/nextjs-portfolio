import { AboutHero } from '@/components/about-hero'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { EducationSection } from '@/components/education-section'
import { SkillsGrid } from '@/components/skills-grid'
import { Section } from '@/components/section'

export const metadata = {
  title: 'About',
  description: 'Learn more about Yakup Afsin — Full-Stack / React & React Native Developer with 7+ years experience in Edinburgh, Scotland.',
  openGraph: {
    title: 'About Yakup Afsin',
    description: 'Learn more about Yakup Afsin — Full-Stack / React & React Native Developer with 7+ years experience in Edinburgh, Scotland.',
    images: ['/og?title=About%20Yakup%20Afsin&tag=Developer&description=7%2B%20years%20React%20%26%20React%20Native%20experience'],
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
