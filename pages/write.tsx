import { Editor } from "src/components/molecules";
import { Button, Input } from "src/components/atoms";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import parseDate from "util/parseDate";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [series, setSeries] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = useCallback((content: any) => {
    setContent(content);
  }, []);

  const initData = () => {
    setTitle("");
    setContent("");
    setSeries("");
  };

  const handlePost = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!title || !content) return setError("제목 / 내용을 입력해주세요");

    let post = {
      title,
      content,
      series,
      uploadDate: parseDate(new Date()),
    };

    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let data = await response.json();

    if (data.success) {
      initData();
      alert("게시글 작성이 완료되었습니다.");
      router.replace("/");
    } else {
      alert(data.message);
      return setError(data.message);
    }
  };

  return (
    <>
      <Input
        size="default"
        placeholder="Series"
        value={series}
        onChange={(e: any) => setSeries(e.target.value)}
      />
      <Input
        size="default"
        placeholder="Title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <Editor height={500} value={content} onChange={handleChange} />
      <Button ButtonType="small" color="green" onClick={handlePost}>
        Submit
      </Button>
    </>
  );
}
