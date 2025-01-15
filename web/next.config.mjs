/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    turbo: {
      optimizePackageImports: ['package-name']
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'closebynearme.s3.amazonaws.com',
        protocol: 'https',
        port: ''
      }
    ]
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web' 
    }

    config.resolve.extensions = ['.web.js', '.js', '.ts', '.tsx', '.json', '.jsx']

    return config
  }
}

export default nextConfig
