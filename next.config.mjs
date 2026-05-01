/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fastfashionbd.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.fastrackeyewear.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static-01.daraz.com.bd",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.eyeglassworld.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lentesbd.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.myntassets.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
