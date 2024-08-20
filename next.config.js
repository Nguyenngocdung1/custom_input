/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
require("dotenv").config({ path: `${process.env.BASE_URL}` });
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
  pageExtensions: ["tsx", "ts"],
  reactStrictMode: false,
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
  i18n,
  output: "standalone",
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
