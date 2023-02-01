import { Layout } from "src/components/organisms";
import { Editor } from "src/components/molecules";
import { Button, Input } from "src/components/atoms";
import { useCallback, useState, useEffect } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [series, setSeries] = useState("");
  const [error, setError] = useState("");
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

    const writer = "chocoham";
    let post = {
      title,
      content,
      series,
      writer,
      uploadDate: new Date().toISOString(),
    };

    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let data = await response.json();

    if (data.success) {
      initData();
      alert("성공임마");
      console.log(data.message);
    } else return setError(data.message);
  };

  return (
    <Layout>
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
    </Layout>
  );
}
