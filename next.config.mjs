/** @type {import('next').NextConfig} */

const repo = 'lionplace';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
};

export default nextConfig;
