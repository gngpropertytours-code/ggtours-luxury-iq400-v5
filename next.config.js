/** -----------------------------------------------------
 * 🖤  G & G Luxury – IQ400 V5 Next.js Configuration
 * -----------------------------------------------------
 *  Focus: Stability • Performance • Elegant Pathing
 *  Author: G
 * ----------------------------------------------------- */

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* 🚀 1️⃣ Build Performance & Optimization */
  swcMinify: true,                  // Next-gen compiler for faster builds
  compress: true,                   // Gzip compression by default
  poweredByHeader: false,           // Removes "X-Powered-By: Next.js"

  /* 💡 2️⃣ Image Handling (auto-optimized by Vercel) */
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com", "cdn.pixabay.com"],
    formats: ["image/avif", "image/webp"],
  },

  /* 🧭 3️⃣ Path Aliases for Cleaner Imports */
  webpack(config) {
    config.resolve.alias["@styles"] = path.join(__dirname, "styles");
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@lib"] = path.join(__dirname, "lib");
    config.resolve.alias["@public"] = path.join(__dirname, "public");
    config.resolve.alias["@pages"] = path.join(__dirname, "pages");
    return config;
  },

  /* 🔒 4️⃣ Future-Proofing */
  eslint: { ignoreDuringBuilds: true }, // Prevents build fails from linting noise
};

module.exports = nextConfig;
