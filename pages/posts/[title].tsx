import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import { CommentBox } from 'src/components/organisms';
import { TextBox, Button, Input } from 'src/components/atoms';
import { ButtonLayout, FlexEndComponent } from "styles/globals";
import parseDate from "util/parseDate";

export default function Post({ data }: any) {
  const [content, setContent] = useState("");
  const [writter, setWritter] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const initData = () => {
    setContent("");
    setError("");
  }

  const handleComment = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!content) return setError("댓글을 입력해주세요");

    let comment = {
      REF: 3,
      RE_STEP: 0,
      RE_LEVEL: 0,
      date: parseDate(new Date()),
      writter,
      content,
      password,
      postName: data.post[0].title,
    }

    let response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
    });

    let responseData = await response.json();

    if (responseData.success) {
      initData();
      router.replace(router.asPath)
    } else {
      alert(responseData.message);
      return setError(responseData.message);
    }
  }

  return (
    <>
      <Head>
        <title>{data.post[0].title}</title>
      </Head>
      <h1>{data.post[0].title}</h1>
      <MarkdownReader style={{ padding: 25 }} source={data.post[0].content} />
      <CommentBox data={data.comment} >
        <hr/>
        <ButtonLayout>
          <Input
            size="small"
            placeholder="닉네임"
            value={writter}
            type="text"
            onChange={(e: any) => setWritter(e.target.value)}
          />
          <Input
            size="small"
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </ButtonLayout>
        <TextBox placeholder="댓글 입력" value={content} onChange={(e: any) => setContent(e.target.value)} />
        <FlexEndComponent>
        <Button color="green" ButtonType="small" onClick={handleComment}>Submit</Button>
        </FlexEndComponent>
      </CommentBox>
      
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
        comment: commentData["message"]
      }
    },
  };
}
