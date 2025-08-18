import Image from 'next/image'
import { Download, MapPin } from 'lucide-react'
import { getSiteConfig } from '@/lib/data'

export function AboutHero() {
  const siteConfig = getSiteConfig()

  return (
    <div className="space-y-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              About Me
            </h1>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              {siteConfig.summary}
            </p>
            <p>
              I'm passionate about creating digital experiences that are not only functional 
              but also delightful to use. My approach combines technical expertise with 
              design thinking to solve complex problems and deliver value to users and businesses.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.cvUrl || '/resume.pdf'}
              download
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
