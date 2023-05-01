/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGODB_URI: 'mongodb+srv://kctest:kctest123@cluster0.9uwwm4u.mongodb.net/?retryWrites=true&w=majority'
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
}

module.exports = nextConfig
