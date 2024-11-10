/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.praktickebydleni.cz',
      },
    ],
  },
}

module.exports = nextConfig 