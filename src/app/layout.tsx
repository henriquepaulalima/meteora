import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Features from '@/components/Features/Features'
import Footer from '@/components/Footer/Footer'
import Newsletter from '@/components/Newsletter/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mateora',
  description: 'Moda de impacto positivo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Features />
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}
