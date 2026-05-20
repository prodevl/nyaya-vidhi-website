const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Next.js doesn't walk up to C:\Users\... and trip
  // EPERM on the trace file. The user has a higher-level lockfile that misleads
  // Next's auto-detection.
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
