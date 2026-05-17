import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Geo Dish — Turning Data Into Intelligence',
  description: 'Enterprise-grade data science, AI, and analytics solutions. Transform raw data into actionable intelligence with cutting-edge machine learning infrastructure.',
  generator: 'v0.app',
  keywords: ['data science', 'AI', 'machine learning', 'analytics', 'business intelligence', 'data engineering'],
  authors: [{ name: 'Geo Dish' }],
  openGraph: {
    title: 'Geo Dish — Turning Data Into Intelligence',
    description: 'Enterprise-grade data science, AI, and analytics solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geo Dish — Turning Data Into Intelligence',
    description: 'Enterprise-grade data science, AI, and analytics solutions.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
