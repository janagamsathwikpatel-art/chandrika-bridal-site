/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "poezabride.com"],
  },
};

module.exports = nextConfig;
