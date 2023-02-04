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
        <MarkdownReader source={post[0].content} />
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

// localhost:3000/post/할리스에서%20post하기
// const path = getURLParams(location.search);
// path.replace(process.env.)

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getServerSideProps(ctx: any) {
  const DEV_URL = process.env.DEV_URL;
  // let viewPost = context.params.title;
  // let path = window.location.search.replace(DEV_URL+"/post/", "");
  let myHeaders = new Headers();
  myHeaders.append("postName", ctx.params.title);

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
