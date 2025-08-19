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
    default: 'Yakup Afsin — Full-Stack / React & React Native Developer',
    template: '%s | Yakup Afsin',
  },
  description: 'Full-Stack / React & React Native Developer in Edinburgh, Scotland. 7+ years building secure, performant SaaS apps and cross-platform experiences.',
  keywords: ['developer', 'portfolio', 'react native', 'react', 'nodejs', 'graphql', 'typescript', 'mobile development'],
  authors: [{ name: 'Yakup Afsin' }],
  creator: 'Yakup Afsin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Yakup Afsin — Full-Stack / React & React Native Developer',
    description: 'Full-Stack / React & React Native Developer in Edinburgh, Scotland. 7+ years building secure, performant SaaS apps and cross-platform experiences.',
    siteName: 'Yakup Afsin Portfolio',
    images: [
      {
        url: '/og?title=Yakup%20Afsin&tag=Developer&description=Full-Stack%20React%20%26%20React%20Native%20Developer%20in%20Edinburgh',
        width: 1200,
        height: 630,
        alt: 'Yakup Afsin — Full-Stack / React & React Native Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yakup Afsin — Full-Stack / React & React Native Developer',
    description: 'Full-Stack / React & React Native Developer in Edinburgh, Scotland. 7+ years building secure, performant SaaS apps and cross-platform experiences.',
    images: ['/og?title=Yakup%20Afsin&tag=Developer&description=Full-Stack%20React%20%26%20React%20Native%20Developer%20in%20Edinburgh'],
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
