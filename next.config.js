/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_SERVER_URL : process.env.NEXT_SERVER_URL,
    GRAPHQL_SERVER_URL : process.env.GRAPHQL_SERVER_URL
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  }
}

module.exports = nextConfig
