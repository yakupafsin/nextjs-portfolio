import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { Section } from '@/components/section'

export function ContactSection() {
  return (
    <Section>
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-8 lg:p-12">
          <div className="mx-auto max-w-2xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Usually respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
