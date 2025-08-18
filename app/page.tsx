import { getProjects } from '@/lib/mdx'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { ContactSection } from '@/components/contact-section'
import { SkillsSection } from '@/components/skills-section'

export default async function HomePage() {
  const projects = await getProjects()
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects projects={featuredProjects} />
      <ContactSection />
    </div>
  )
}
