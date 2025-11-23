/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.scdn.co',
      'is1-ssl.mzstatic.com',
      'm.media-amazon.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/podcast',
        destination: '/listen',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
