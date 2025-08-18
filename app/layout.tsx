import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yakupafsin.com'

export const metadata: Metadata = {
  title: {
    default: 'Yakup Afsin - Developer Portfolio',
    template: '%s | Yakup Afsin',
  },
  description: 'Full-stack developer passionate about building exceptional digital experiences.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Yakup Afsin' }],
  creator: 'Yakup Afsin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Yakup Afsin - Developer Portfolio',
    description: 'Full-stack developer passionate about building exceptional digital experiences.',
    siteName: 'Yakup Afsin Portfolio',
    images: [
      {
        url: '/og?title=Yakup%20Afsin&tag=Developer&description=Full-stack%20developer%20passionate%20about%20building%20exceptional%20digital%20experiences',
        width: 1200,
        height: 630,
        alt: 'Yakup Afsin - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yakup Afsin - Developer Portfolio',
    description: 'Full-stack developer passionate about building exceptional digital experiences.',
    images: ['/og?title=Yakup%20Afsin&tag=Developer&description=Full-stack%20developer%20passionate%20about%20building%20exceptional%20digital%20experiences'],
    creator: '@yakupafsin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
