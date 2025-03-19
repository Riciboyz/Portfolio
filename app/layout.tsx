import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorEffect from '@/components/cursor-effect'
import PageTransition from '@/components/page-transition'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <head>
        <style>{`
          :root {
            background-color: black;
          }
        `}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen w-full overflow-x-hidden`}>
        <div className="fixed inset-0 bg-black -z-10" />
        <Suspense fallback={<Loading />}>
          <CursorEffect />
          <PageTransition>
            <div className="min-h-screen bg-black">
              {children}
            </div>
          </PageTransition>
        </Suspense>
      </body>
    </html>
  )
}
