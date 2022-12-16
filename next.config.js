/** @type {import('next').NextConfig} */


const isDevelopment = process.env.NODE_ENV !== "production";
const rewritesConfig = isDevelopment
  ? [
      {
        source: "/api/:path*",
        destination: 'https://mahalekshmi.ceymox.xyz/:path*',
      },
    ]
  : [
    {
      source: "/api/:path*",
      destination: 'https://mahalekshmi.ceymox.xyz/:path*',
    },
  ];

const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => rewritesConfig,
}

module.exports = nextConfig


// https://kalyanhyper.ceymox.xyz/:path*