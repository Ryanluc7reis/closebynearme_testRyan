import withTM from 'next-transpile-modules'

/** @type {import('next').NextConfig} */
const nextConfig = withTM(['react-native', 'react-native-web'])({
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true
  },
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
  },
  staticPageGenerationTimeout: 300
})

export default nextConfig
