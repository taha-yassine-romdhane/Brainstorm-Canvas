import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brainstorm Canvas',
  description: 'A modern note-taking and brainstorming application',
}

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing publishableKey')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full bg-gray-50`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
