import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Exclude demo folder from build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules/**', '**/demo/**', '**/.git/**'],
    }
    return config
  },
};

export default nextConfig;
