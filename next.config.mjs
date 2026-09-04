/** @type {import('next').NextConfig} */

// This must exactly match your GitHub repository name, since GitHub Pages serves
// project sites from https://<username>.github.io/<repo-name>/ rather than the domain
// root. If you rename the repo, update this to match.
const REPO_NAME = "professional-portfolio";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true,
  images: {
    // Real photography/CAD renders are served locally from /public/assets —
    // see README.md and ASSET_MANIFEST.md for the exact file list expected by lib/projects.ts.
    unoptimized: true,
  },
  env: {
    // Exposed to the browser so plain <img>/<a> tags (which Next does NOT auto-prefix,
    // unlike <Link> and <Image>) can prepend it manually. See lib/basePath.ts.
    NEXT_PUBLIC_BASE_PATH: `/${REPO_NAME}`,
  },
};

export default nextConfig;
