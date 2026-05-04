import type { NextConfig } from "next";

const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
