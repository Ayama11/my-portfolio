/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "app.trickle.so" },
      { protocol: "https", hostname: "huggingface.co" },
      { protocol: "https", hostname: "drive.google.com" }
    ]
  }
};

module.exports = nextConfig;
