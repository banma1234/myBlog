import { Editor } from "src/components/molecules";
import { Button, Input } from "src/components/atoms";
import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import parseDate from "util/parseDate";
import { uploadImage } from "util/handleImg/uploadImg";

export default function Write() {
<<<<<<< HEAD
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [series, setSeries] = useState("");
  const [images, setImages] = useState<File[]>([]);
=======
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [series, setSeries] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [imageTitle, setImageTitle] = useState<any[]>([]);
>>>>>>> main
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = useCallback((content: any) => {
    setContent(content);
  }, []);

<<<<<<< HEAD
  const handleImageChange = useCallback((e: any) => {
    const files = e.target.files;
    if (files) {
      setImages((prevFiles) => [...prevFiles, ...files]);
    }
  }, []);
=======
  const handleImgUpload = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const { images, imageTitle } = await uploadImage(e.target.files);
        setImages(images);
        setImageTitle(imageTitle);
      }
    },
    [],
  );
>>>>>>> main

  const initData = () => {
    setTitle("");
    setContent("");
    setSeries("");
    setImages([]);
    setError("");
<<<<<<< HEAD
    setImages([]);
=======
    setImageTitle([]);
>>>>>>> main
  };

  const handlePost = async (e: any) => {
    e.preventDefault();

    setError("");
    if (!title || !content) return setError("제목 / 내용을 입력해주세요");

<<<<<<< HEAD
    const post = new FormData();
    
    post.append("title", title);
    post.append("content", content);
    post.append("series", series);
    post.append("uploadDate", parseDate(new Date()));
    for (let i = 0; i < images.length; i++) {
      post.append('images', images[i]);
    }
=======
    let post = {
      title,
      content,
      series,
      uploadDate: parseDate(new Date()),
      images,
      imageTitle,
    };
>>>>>>> main

    console.log("post : ", post);

    let response = await fetch("/api/posts", {
      method: "POST",
<<<<<<< HEAD
      body: post,
=======
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
>>>>>>> main
    });

    let data = await response.json();

    if (data.success) {
      initData();
      alert("게시글 작성이 완료되었습니다.");
      router.replace("/");
    } else {
      alert(data.message);
      console.log(data.message);
      return setError(data.message);
    }
  };

  return (
    <>
      <input type="file" onChange={handleImgUpload} multiple />
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
