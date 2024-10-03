import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from '@/components/Logo'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SafePlate Technologies',
  description: 'Innovative solutions for food safety and quality control',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-6 w-6" />
                    <span className="font-bold hidden sm:inline-block">
                      SafePlate Technologies
                    </span>
                  </Link>
                </div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                  <Link href="#hero" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                    Features
                  </Link>
                  <Link href="#vision" className="text-sm font-medium transition-colors hover:text-primary">
                    Vision
                  </Link>
                  <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                    About Us
                  </Link>
                  <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                    Contact
                  </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}