import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed webpack canvas externalization for Vercel compatibility
  // Canvas library should be used client-side only with dynamic imports if needed
};

export default nextConfig;
