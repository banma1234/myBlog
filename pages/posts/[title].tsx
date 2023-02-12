import Head from "next/head";
import dynamic from "next/dynamic";
import { CommentBox } from "src/components/organisms";

export default function Post({ data }: any) {
  return (
    <>
      <Head>
        <title>{data.post[0].title}</title>
      </Head>
      <h1>{data.post[0].title}</h1>
      <MarkdownReader style={{ padding: 25 }} source={data.post[0].content} />
      <CommentBox data={data.comment} postName={data.post[0].title} />
    </>
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

  let response_Post = await fetch(`${DEV_URL ? DEV_URL : ""}/api/posts`, {
    method: "GET",
    headers: myHeaders,
  });
  let postData = await response_Post.json();

  let response_Comment = await fetch(`${DEV_URL ? DEV_URL : ""}/api/comments`, {
    method: "GET",
    headers: myHeaders,
  });
  let commentData = await response_Comment.json();

  return {
    props: {
      data: {
        post: postData["message"],
        comment: commentData["message"],
      },
    },
  };
}
