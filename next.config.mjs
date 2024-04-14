/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'development'
      ? ''
      : 'https://swlee2973.github.io/lionplace/',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },
};

export default nextConfig;
