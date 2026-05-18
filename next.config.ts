import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async headers() {
    return [
      {
        // Cache all static files (JS, CSS, fonts, images in /public)
        // for 1 year. Next.js fingerprints these files so it's safe.
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|woff|woff2|ttf|otf|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache the VCF contact file for 1 day
        source: "/MichaelAbbiw.vcf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
