/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'new-master.s3.ca-central-1.amazonaws.com',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'masterultils.com',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos/200',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.weatherapi.com',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'webtoons-static.pstatic.net',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'media.rawg.io',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
