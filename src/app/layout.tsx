import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CssContextProvider } from './Context/store'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSS Editor',
  description: 'CSS editor, fast checking css code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssContextProvider>
          {children}
        </CssContextProvider>
      </body>
    </html>
  )
}
