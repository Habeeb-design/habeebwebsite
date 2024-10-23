/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_AUTH_TOKEN: process.env.NEXT_APP_AUTH_TOKEN,
    NEXT_APP_BASE_ID: process.env.NEXT_APP_BASE_ID,
    NEXT_APP_TABLE_ID: process.env.NEXT_APP_TABLE_ID
  },
  images: {
    remotePatterns:
      [{
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }, {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      }
       , {
         protocol: 'https',
        hostname: 'gameheadsoakland.org', }
      ],
  },
};

export default nextConfig;
