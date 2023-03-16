import { NextSeo } from "next-seo";
import Link from "next/link";
import { CardLayout } from "styles/globals";
import { Card } from "src/components/molecules";

export default function Series({ posts }: any) {
  const title = `series | ${posts[0].series}`;
  const url = `https://www.chocoham.dev/${posts[0].series}`;
  const description = `초코햄 blog의 게시글 모음 | ${posts[0].series}`;
  const SEO = {
    title: title,
    canonical: url,
    description: description,
    openGraph: {
      title,
      url,
      description,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h1>{posts[0].series}</h1>
      <hr />
      <br />
      <CardLayout>
        {posts &&
          posts.map((item: any, i: any) => {
            let url = null;
            if (item.thumbnail) {
              url = `data:image/${item.thumbnail.contentType};base64,${item.thumbnail.data}`;
            }
            return (
              <Link href={`/posts/${item.title}`} key={i}>
                <Card
                  src={url}
                  type="default"
                  color="low"
                  info={item.uploadDate}
                >
                  {item.title}
                </Card>
              </Link>
            );
          })}
      </CardLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("viewType", encodeURI(context.params.series));

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();

  return {
    props: {
      posts: data["message"],
    },
  };
}
