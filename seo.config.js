const url = "https://chocoham.dev/";

const SEO = {
  title: `Chocoham | 초코햄의 블로그`,
  description: "그림과 코딩을 좋아하는 프론트엔드 개발자 ChocoHam의 블로그",
  canonical: url,
  openGraph: {
    type: "website",
    locale: "utf-8",
    url: url,
    title: "Chocoham | 초코햄의 블로그",
    description: "그림과 코딩을 좋아하는 프론트엔드 개발자 ChocoHam의 블로그",
    images: [
      {
        url: "/default_thumbnail.svg",
        width: 380,
        height: 250,
        alt: "default Thumbnail",
      },
    ],
    site_name: "Chocoham | 초코햄의 블로그",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;
