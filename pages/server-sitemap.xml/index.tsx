import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ctx => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const DEV_URL = process.env.DEV_URL;
  const postData = await fetch(`${DEV_URL ? DEV_URL : ""}/api/buildSitemap`, {
    method: "GET",
  });
  const postInfo = await postData.json();
  const posts = postInfo["message"];

  const postFileds = posts.map((item: any) => ({
    loc: `${DEV_URL}/posts/${item.title}`, // Absolute url
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }));

  const fields = [...postFileds];

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {
  return;
};
