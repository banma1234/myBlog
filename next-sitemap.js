/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.chocoham.dev",
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/**/*.ts", "/admin.tsx", "/write.tsx"],
  include: ["./src", "./pages"],
  pagesConfig: [
    {
      path: "/posts/[title].tsx",
      priority: 0.8,
      exclude: false,
    },
    {
      path: "/series/detail/[series].tsx",
      priority: 0.5,
      exclude: false,
    },
    {
      path: "/series/detail/[series].tsx",
      priority: 0.5,
      exclude: false,
    },
  ],
  targetFolder: "./public",
  pagesDirectory: __dirname + "/pages",
  buildId: "chocoham",
  additionalSitemaps: ["https://chocoham.dev/new/sitemap.xml"],
};
