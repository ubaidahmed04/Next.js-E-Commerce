/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*', // Match all paths
          has: [
            {
              type: 'host',
              value: 'shopeco.vercel.app', // Match subdomain
            },
          ],
          destination: 'https://ubaidahmed.store/:path*', // Redirect to the main domain
          permanent: true, // Indicates a 308 Permanent Redirect
        },
      ];
    },
    images: {
        domains: ['res.cloudinary.com',"img.freepik.com"],
      },
};

export default nextConfig;
