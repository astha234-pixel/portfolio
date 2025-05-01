/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Only apply these settings in production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio/'
  } : {})
}

module.exports = nextConfig 