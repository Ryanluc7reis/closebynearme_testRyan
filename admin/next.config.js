/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')

/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  output: 'standalone',
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'globalThis.__DEV__': false
      })
    )

    return config
  },
  // experimental: {
  //   turbo: {
  //     optimizePackageImports: ['package-name']
  //   }
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
}
