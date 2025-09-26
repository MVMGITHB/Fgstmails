// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.fgstmails.com"], // 👈 whitelist your API domain
    domains: ["66.116.198.221"], // 👈 whitelist your API domain
  },
};

export default nextConfig;
