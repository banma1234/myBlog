/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.DEV_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  exclude: ["/api/**/*.ts", "/write.tsx, /server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/**/*.ts", "/write.tsx'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}server-sitemap.xml`],
  },
  targetFolder: "./public",
  pagesDirectory: __dirname + "/pages",
  buildId: "chocoham",
  additionalSitemaps: ["https://chocoham.dev/new/sitemap.xml"],
};
