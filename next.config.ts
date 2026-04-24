import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/github-claw",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
