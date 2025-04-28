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
  title: {
    default: 'Mattress Shop | Premium Australian Made Mattresses',
    template: '%s | Mattress Shop',
  },
  description:
    'Shop the best mattresses in Australia! Explore our wide range of premium mattresses for all sleep styles. Fast shipping, top-rated service, and unbeatable comfort.',
  keywords: [
    'mattress shop',
    'Australian mattresses',
    'premium mattresses',
    'bedding',
    'sleep comfort',
    'mattress store',
  ],
  authors: [{ name: 'Your Company Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mattress Shop | Premium Australian Made Mattresses',
    description:
      'Shop the best mattresses in Australia! Explore our wide range of premium mattresses for all sleep styles.',
    url: 'https://your-domain.com',
    siteName: 'Mattress Shop',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mattress Shop',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mattress Shop | Premium Australian Made Mattresses',
    description: 'Shop the best mattresses in Australia! Explore our wide range of premium mattresses.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
