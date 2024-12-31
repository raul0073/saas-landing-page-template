/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        remotePatterns: [
          
          {
            protocol: 'https',
            hostname: 'example.com',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
          },
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
            hostname: 'cdn.pixabay.com',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },

        ]
    }
};

export default nextConfig;
