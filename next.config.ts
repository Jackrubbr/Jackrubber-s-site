import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/jackrubber-portfolio",
  assetPrefix: "/jackrubber-portfolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true}
};

module.exports = nextConfig;
export default nextConfig;
