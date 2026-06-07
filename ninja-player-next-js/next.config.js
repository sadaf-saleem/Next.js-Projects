/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com',
      'i.pravatar.cc',              // ✅ add kiya
      'images.unsplash.com',        // ✅ add kiya
    ]
  }
}

module.exports = nextConfig