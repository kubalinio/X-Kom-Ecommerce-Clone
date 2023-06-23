/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.x-kom.pl', 'cdn.x-kom.pl', 'cdn.sanity.io'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
