import { Editor } from "src/components/molecules";
import { Button, Input } from "src/components/atoms";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import parseDate from "util/parseDate";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [series, setSeries] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = useCallback((content: any) => {
    setContent(content);
  }, []);

  const handleImageChange = useCallback((e: any) => {
    const files = e.target.files;
    if (files) {
      setImages((prevFiles) => [...prevFiles, ...files]);
    }
  }, []);

  const initData = () => {
    setTitle("");
    setContent("");
    setSeries("");
    setError("");
    setImages([]);
  };

  const handlePost = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!title || !content) return setError("제목 / 내용을 입력해주세요");

    const post = new FormData();
    
    post.append("title", title);
    post.append("content", content);
    post.append("series", series);
    post.append("uploadDate", parseDate(new Date()));
    for (let i = 0; i < images.length; i++) {
      post.append('images', images[i]);
    }

    let response = await fetch("/api/posts", {
      method: "POST",
      body: post,
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
        type="string"
        onChange={(e: any) => setSeries(e.target.value)}
      />
      <Input
        size="default"
        placeholder="Title"
        value={title}
        type="string"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <Editor height={500} value={content} onChange={handleChange} />
      <input type="file" onChange={handleImageChange} multiple />
      <Button ButtonType="small" color="green" onClick={handlePost}>
        Submit
      </Button>
    </>
  );
}
