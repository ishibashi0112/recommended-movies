/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["image.tmdb.org"] },
  env: {
    TMDB_API_KEY: "baa7af1f304682eb49bcbb6db49c1579",
    CLERK__FRONTEND_API_KEY: "clerk.divine.vervet-45.lcl.dev",
  },
};

module.exports = nextConfig;
