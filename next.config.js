/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'sjc.microlink.io',
      'pbs.twimg.com',
      'placeholder.svg',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
}

module.exports = nextConfig 