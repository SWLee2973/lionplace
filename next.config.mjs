/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
};

export default nextConfig;
