import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zomito',
  description: 'Find the best restaurants, cafes and bars in india',
}

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
