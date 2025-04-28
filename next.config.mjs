/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isGithubPages ? '/your-repo-name' : '',
  assetPrefix: isGithubPages ? '/your-repo-name/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
