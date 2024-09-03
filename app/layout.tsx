import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import UrqlProvider from './urqlProvider'

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: "--font-lato",
  display: 'swap',
})

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
      <html lang="en" className={`${lato.variable}`}>
        <body className="body">
          <UrqlProvider>
            {children}
          </UrqlProvider>
        </body>
      </html>

  )
}
