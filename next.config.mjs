const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-commerce-admin-bigjib.s3.amazonaws.com", // replace with you bucket name
        port: "",
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
