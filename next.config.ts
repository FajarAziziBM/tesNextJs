import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    domains: ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337", 
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;