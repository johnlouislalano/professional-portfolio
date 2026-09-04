/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real photography/CAD renders are served locally from /public/assets —
    // see README.md for the exact file list expected by lib/projects.ts.
    unoptimized: true,
  },
};

export default nextConfig;
