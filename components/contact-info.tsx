import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <p className="text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Email</p>
            <a 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              your.email@example.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Response Time</p>
            <p className="text-muted-foreground">Usually within 24 hours</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-4">Connect with me</h4>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-6">
        <h4 className="font-medium mb-2">Prefer email?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Feel free to reach out directly at{' '}
          <a 
            href="mailto:your.email@example.com"
            className="text-primary hover:underline"
          >
            your.email@example.com
          </a>
        </p>
        <p className="text-xs text-muted-foreground">
          I typically respond to emails within 24 hours during business days.
        </p>
      </div>
    </div>
  )
}
