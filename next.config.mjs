/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
          {
            protocol: 'https',
            hostname: 'cdn.dribbble.com',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },

        ]
    }
};

export default nextConfig;
