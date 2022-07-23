/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const path = require('path')

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}