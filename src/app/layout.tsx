import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Fundación sonrisas que abrazan',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
