import Head from "next/head";
import Link from "next/link";
import { CardLayout } from "styles/globals";
import { Card } from "src/components/molecules";
import { Layout } from "src/components/organisms";

export default function Series({ posts }: any) {
  return (
    <Layout>
      <Head>
        <title>{posts[0].series}</title>
      </Head>
      <h1>{posts[0].series}</h1>
      <hr />
      <br />
      <CardLayout>
        {posts &&
          posts.map((item: any, i: any) => {
            return (
              <Link href={`/posts/${item.title}`} key={i}>
                <Card type="default" color="low">
                  {item.title}
                </Card>
              </Link>
            );
          })}
      </CardLayout>
    </Layout>
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
