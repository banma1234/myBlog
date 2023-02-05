import Head from "next/head";
import dynamic from "next/dynamic";
import { Layout } from "src/components/organisms";

export default function Post({ post }: any) {
  return (
    <Layout>
      <Head>
        <title>{post[0].title}</title>
      </Head>
      <article>
        <h1>{post[0].title}</h1>
        <MarkdownReader style={{ padding: 25 }} source={post[0].content} />
      </article>
    </Layout>
  );
}

const MarkdownReader = dynamic(
  () =>
    import("@uiw/react-md-editor").then(mod => {
      return mod.default.Markdown;
    }),
  { ssr: false },
);

export async function getServerSideProps(context: any) {
  const DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("postName", encodeURI(context.params.title));

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/posts`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();

  return {
    props: {
      post: data["message"],
    },
  };
}
