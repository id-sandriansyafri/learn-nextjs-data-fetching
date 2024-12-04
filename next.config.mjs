/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...process.env.NEXT_API_URL,
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  }
};

export default nextConfig;
