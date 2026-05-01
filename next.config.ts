import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/my-resume-site" : undefined,
  assetPrefix: isGithubActions ? "/my-resume-site/" : undefined,
};

export default nextConfig;
