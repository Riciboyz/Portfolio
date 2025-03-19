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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['gsap', 'framer-motion'],
    optimizeFonts: true,
    http2: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
        }
      }
    }
    return config;
  }
}

module.exports = nextConfig 