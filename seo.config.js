const url = "https://chocoham.dev/";

const SEO = {
  title: `초코햄의 블로그`,
  description: "그림과 코딩을 좋아하는 프론트엔드 개발자 ChocoHam의 블로그",
  canonical: url,
  openGraph: {
    type: "website",
    locale: "utf-8",
    url: url,
    title: "초코햄의 블로그",
    description: "그림과 코딩을 좋아하는 프론트엔드 개발자 ChocoHam의 블로그",
    images: [
      {
        url: `${url}/images/default_thumbnail.png`,
        width: 400,
        height: 400,
        alt: "default Thumbnail",
      },
      {
        url: `${url}/images/banner.jpg`,
        width: 1200,
        height: 500,
        alt: "website banner",
      },
    ],
    site_name: "초코햄의 블로그",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;
