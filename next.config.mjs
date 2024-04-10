/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://swlee2973.github.io/lionplace'
      : '',
  images: {
    loader: 'imgix',
    path: 'https://swlee2973.github.io/lionplace',
  },
};

export default nextConfig;
