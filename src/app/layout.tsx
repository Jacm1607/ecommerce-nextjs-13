import Navbar from '@/components/ui/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hauscenter',
  description: 'eCommerce Hauscenter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
