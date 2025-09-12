// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.fgstmails.com"], // 👈 whitelist your API domain
  },
};

export default nextConfig;
