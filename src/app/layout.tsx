import type { Metadata } from 'next'
import { Inter, Ubuntu, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu'
})
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'El Mimouni Ayoub - Personal Portfolio',
  description: 'Student, Future Marketer, Designer & Freelancer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}