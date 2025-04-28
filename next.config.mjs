/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isGithubPages ? '/personal-portfolio' : '',
  assetPrefix: isGithubPages ? '/personal-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
