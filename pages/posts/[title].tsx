import Head from "next/head";
import { Layout } from "../../src/components/organisms";

export default function Post({ post }: any) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        {/* <p>{useDate(postData.date)}</p> */}
        <p>{post.content}</p>
      </article>
    </Layout>
  );
}

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

export async function getServerSideProps(context: any) {
  const DEV_URL = process.env.DEV_URL;
  let viewPost = context.params.title;
  // let path = window.location.search.replace(DEV_URL+"/post/", "");
  console.log(viewPost);
  debugger;
  let response = await fetch("localhost:3000/api/post", {
    method: "GET",
    headers: {viewPost}
  });
  let data = await response.json();

  return {
    props: {
        post: data['message'],
    },
  };
}