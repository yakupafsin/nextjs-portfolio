import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import { Section } from '@/components/section'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <Section>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </div>
  )
}
