/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Netlify specific settings
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
};

export default nextConfig;
