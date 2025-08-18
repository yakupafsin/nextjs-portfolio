import { allProjects } from 'contentlayer/generated'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { ContactSection } from '@/components/contact-section'
import { SkillsSection } from '@/components/skills-section'

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects projects={featuredProjects} />
      <ContactSection />
    </div>
  )
}
