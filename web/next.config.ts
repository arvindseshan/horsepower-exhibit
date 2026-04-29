import type { NextConfig } from "next";

/**
 * Subpath on your Jekyll site (e.g. https://arvind.seshan.org/projects/horsepower).
 * Leave empty for `next dev` and for Vercel (`npm run build`) so the app is served from `/`.
 * Static HTML export (`out/`) runs only when NEXT_BASE_PATH is set — use `npm run build:jekyll`.
 */
const basePath = process.env.NEXT_BASE_PATH ?? "";
const jekyllStaticExport = Boolean(basePath);

const nextConfig: NextConfig = {
  ...(jekyllStaticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
      },
    ],
  },
};

export default nextConfig;
