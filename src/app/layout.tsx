import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johnnie - Writer, Producer & Director Portfolio',
  description: 'Johnnie is a prolific writer, producer, and director with over 100 copyright works including plays, screenplays, and TV productions. Explore his portfolio of creative works.',
  keywords: 'Johnnie, writer, producer, director, playwright, screenwriter, TV producer, Soul-Conscious Productions, She\'s Not Our Sister, The Love You Save',
  authors: [{ name: 'Johnnie' }],
  creator: 'Johnnie',
  openGraph: {
    title: 'Johnnie - Writer, Producer & Director Portfolio',
    description: 'Prolific writer, producer, and director with over 100 copyright works including plays, screenplays, and TV productions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johnnie - Writer, Producer & Director Portfolio',
    description: 'Prolific writer, producer, and director with over 100 copyright works.',
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
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
