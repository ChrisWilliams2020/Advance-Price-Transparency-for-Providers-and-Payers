/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  async headers() {
    return [
      {
        // This pattern matches static assets in Next.js public folder
        source: '/:path*\.(js|css|png|jpg|jpeg|gif|ico|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig