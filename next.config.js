 /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images:{
    domains: ['res.cloudinary.com'] 
  },
  reactStrictMode: true,
}

module.exports = nextConfig
