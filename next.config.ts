import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/caromarchioni" : undefined,
  assetPrefix: isGithubActions ? "/caromarchioni/" : undefined,
};

export default nextConfig;
