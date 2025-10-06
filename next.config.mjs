// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: ["api.fgstmails.com", "66.116.198.221"], // 👈 whitelist your API and server IP
},

};

export default nextConfig;
