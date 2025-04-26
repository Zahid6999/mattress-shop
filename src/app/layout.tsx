import ClientWrapper from '@/components/common/ClientWrapper' // ✅ Import this
import { Navbar } from '@/components/common/Navbar'
import SmoothScrollProvider from '@/components/common/SmoothScroll'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
// import { Noto_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

// const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto-sans' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'], // Optional: choose specific weights
})

export const metadata: Metadata = {
  title: 'Mattress Shop',
  description:
    'Shop the best mattresses in Australia! Explore our wide range of premium mattresses for all sleep styles. Fast shipping, top-rated service, and unbeatable comfort.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#EDF0F5] antialiased`}>
        <SmoothScrollProvider>
          <ClientWrapper>
            <Navbar />
            <main>
              {children}
              <Toaster position="top-right" toastOptions={{ className: 'text-base' }} />
            </main>
            <Footer />
          </ClientWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
