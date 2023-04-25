/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.DEV_URL,
  generateRobotsTxt: true,
  changefreq: "weekly",
  exclude: ["/api/**/*.ts", "/admin/*.tsx", "/admin/*", "/admin", "/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/api/**/*", "/admin/*", "/admin", "/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`https://chocoham.dev/server-sitemap.xml`],
  },
  targetFolder: "./public",
  pagesDirectory: __dirname + "/pages",
  buildId: "chocoham",
  additionalSitemaps: ["https://chocoham.dev/server-sitemap.xml"],
};
