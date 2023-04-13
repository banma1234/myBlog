import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { ButtonLayout, HashTagBox } from "styles/globals";
import { CommentBox } from "src/components/organisms";
import { useEffect } from "react";

export default function Post({ data }: any) {
  let imgUrl = "/default_thumbnail.svg";
  const title = data.post[0].title;
  const url = `https://www.chocoham.dev/posts/${data.post[0].title}`;
  const description =
    data.post[0].content.length > 150
      ? data.post[0].content.substr(0, 150)
      : data.post[0].content;
  const keywords = data.post[0].hashtag;
  const SEO = {
    title: title,
    canonical: url,
    description: description,
    author: "초코햄",
    images: [
      {
        url: `${imgUrl}`,
        width: 380,
        height: 250,
        alt: `${title}의 썸네일`,
      },
    ],
    openGraph: {
      title,
      url,
      description,
      images: [
        {
          url: `${imgUrl}`,
          width: 380,
          height: 250,
          alt: `${title}의 썸네일`,
        },
      ],
    },
  };

  useEffect(() => {});
  return (
    <>
      <NextSeo {...SEO} />
      <h1>{data.post[0].title}</h1>
      <MarkdownReader style={{ padding: 25 }} source={data.post[0].content} />
      <br />
      <br />
      <ButtonLayout>
        {keywords &&
          keywords.split(" ").map((item: string, i: any) => {
            item = "#" + item;
            return <HashTagBox>{item}</HashTagBox>;
          })}
      </ButtonLayout>
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

  const response_Post = await fetch(`${DEV_URL ? DEV_URL : ""}/api/posts`, {
    method: "GET",
    headers: myHeaders,
  });
  const postInfo = await response_Post.json();
  const postData = postInfo["message"];

  const response_Comment = await fetch(
    `${DEV_URL ? DEV_URL : ""}/api/comments`,
    {
      method: "GET",
      headers: myHeaders,
    },
  );
  const commentData = await response_Comment.json();

  await postData[0].imageTitle.forEach((title: string) => {
    fetch(`${DEV_URL ? DEV_URL : ""}/api/images/${title}`, {
      method: "GET",
    });
  });

  return {
    props: {
      data: {
        post: postData,
        comment: commentData["message"],
      },
    },
  };
}
