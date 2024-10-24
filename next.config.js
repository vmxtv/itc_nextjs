/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: process.env.NEXT_IMAGE_DOMAIN }],
  },
};

module.exports = nextConfig;
