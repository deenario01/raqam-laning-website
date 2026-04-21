/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/shop-grid",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/shop-grid/",
        destination: "/products/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/news/",
        permanent: true,
      },
      {
        source: "/blog-details",
        destination: "/news-details",
        permanent: true,
      },
      {
        source: "/blog-details/",
        destination: "/news-details/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
