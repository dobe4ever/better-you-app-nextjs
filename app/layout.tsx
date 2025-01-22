// app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const nunito = Nunito({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Better You App',
  description: 'An app to help you become a better version of yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} ${nunito.className}`}>{children}</body>
    </html>
  )
}
