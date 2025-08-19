import { getProjects } from '@/lib/mdx'
import { HeroSection } from '@/components/hero-section'
import { FeaturedProjects } from '@/components/featured-projects'
import { ContactSection } from '@/components/contact-section'
import { SkillsSection } from '@/components/skills-section'

export const metadata = {
  title: 'Home',
  description: 'Yakup Afsin — Full-Stack / React & React Native Developer in Edinburgh, Scotland. Building secure, performant SaaS apps and cross-platform experiences.',
  openGraph: {
    title: 'Yakup Afsin — Full-Stack / React & React Native Developer',
    description: 'Full-Stack / React & React Native Developer in Edinburgh, Scotland. Building secure, performant SaaS apps and cross-platform experiences.',
    images: ['/og?title=Yakup%20Afsin&tag=Developer&description=Full-Stack%20React%20%26%20React%20Native%20Developer%20in%20Edinburgh'],
  },
}

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
