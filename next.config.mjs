/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: ['cdn.discordapp.com'],
  }
};

export default nextConfig;
