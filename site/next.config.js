/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Kasm registry',
    description: 'My unofficial store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://github.com/trochumski/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
