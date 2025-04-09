import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com"
      }
    ]
  }
  , experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    }
  }
};

export default nextConfig;
