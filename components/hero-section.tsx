import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { Section } from '@/components/section'

export function HeroSection() {
  return (
    <Section className="pt-20 pb-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                Hi, I'm{' '}
                <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl">
                Full-stack developer passionate about building exceptional digital experiences
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              I specialize in creating modern web applications using React, Next.js, and TypeScript. 
              With a focus on performance, accessibility, and user experience, I help businesses 
              bring their ideas to life through code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Available for work</span>
              </div>
              <div>📍 Your Location</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Image
                src="/avatar.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/10 blur-xl"></div>
          </div>
        </div>
      </div>
    </Section>
  )
}
