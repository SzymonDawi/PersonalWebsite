import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UrqlProvider from './urqlProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Szymon Dawidowski',
  description: 'My personal website to display my projects and art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <UrqlProvider>
            {children}
          </UrqlProvider>
        </body>
      </html>

  )
}
