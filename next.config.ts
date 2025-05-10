import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{serverSourceMaps:
  false},
  productionBrowserSourceMaps:
  false,
};

export default nextConfig;
