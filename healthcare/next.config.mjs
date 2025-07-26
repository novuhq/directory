/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following lines if you need static export
  // output: 'export',
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
