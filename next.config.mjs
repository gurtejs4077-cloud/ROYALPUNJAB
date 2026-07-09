/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/bot/:path*',
        destination: process.env.BOT_API_URL 
          ? `${process.env.BOT_API_URL}/:path*` 
          : 'http://localhost:3008/:path*'
      }
    ];
  }
};

export default nextConfig;
