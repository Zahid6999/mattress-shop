import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add your image domains
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
