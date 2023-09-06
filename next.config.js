/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cash",
        destination: "/donations/Cash", // Fixed path
      },
      {
        source: "/check",
        destination: "/donations/Check", // Fixed path
      },
      {
        source: "/giftinkind",
        destination: "/donations/GiftInKind", // Fixed path
      },
      {
        source: "/securities",
        destination: "/donations/Securities", // Fixed path
      },
      {
        source: "/wire",
        destination: "/donations/Wire", // Fixed path
      },
    ];
  },
};

module.exports = nextConfig;
