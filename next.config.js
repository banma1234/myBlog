/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "choco-image-server.cdn.ntruss.com",
      },
    ],
  },
};

// next.js에서 react-md-editor 사용하기 위한 구문
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  ...nextConfig,
});
