/** -----------------------------------------------------
 * 🖤  G & G Luxury – IQ400 V5 Next.js Configuration
 * -----------------------------------------------------
 *  Focus: Stability • Performance • Elegant Pathing
 *  Author: G
 * ----------------------------------------------------- */

const path = require("path");
const fs = require("fs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* 🚀 1️⃣ Build Performance & Optimization */
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

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

  /* 🩺 4️⃣ Pre-Build Guard — Auto-Check for Critical Files */
  async webpackBuildDone() {
    const cssPath = path.join(__dirname, "styles", "globals.css");
    if (!fs.existsSync(cssPath)) {
      console.warn(
        "\n⚠️  Missing styles/globals.css — creating fallback file..."
      );
      fs.mkdirSync(path.join(__dirname, "styles"), { recursive: true });
      fs.writeFileSync(
        cssPath,
        "/* Auto-generated fallback stylesheet. Please customize. */\nbody{margin:0;padding:0;}"
      );
    }
  },

  /* 🔒 5️⃣ Future-Proofing */
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
