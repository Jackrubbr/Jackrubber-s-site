import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Jackrubber-s-site",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
export default nextConfig;
