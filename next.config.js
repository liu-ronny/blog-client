module.exports = {
  async redirects() {
    return [
      {
        source: "/admin/dashboard",
        destination: "/admin/dashboard/posts",
        permanent: true,
      },
    ];
  },
  powereredByHeader: false,
};
