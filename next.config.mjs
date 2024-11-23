/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/get-started',
        destination: '/getstarted',
        permanent: true,
      },
      {
        source: '/toiletpaper',
        destination: '/applications/toilet-paper',
        permanent: true,
      },
      {
        source: '/automater',
        destination: '/applications/automater',
        permanent: true,
      },
      {
        source: '/gamearcade',
        destination: '/applications/game-arcade',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
