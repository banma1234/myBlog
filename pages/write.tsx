import { Editor } from "src/components/molecules";
import { Button, Input } from "src/components/atoms";
import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import parseDate from "util/parseDate";

export default function Write() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [series, setSeries] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [imageTitle, setImageTitle] = useState<any[]>([]);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = useCallback((content: any) => {
    setContent(content);
  }, []);

  const handleImgUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const files = Array.from(e.target.files);
        Promise.all(
          files.map(file => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                const base64 = reader.result as string;
                setImageTitle(prevImageTitle => [...prevImageTitle, file.name]);
                resolve(base64);
              };
              reader.onerror = () => {
                console.error("Error occurred while encoding image file.");
                reject();
              };
            });
          }),
        )
          .then((base64Array: any) => {
            setImages(base64Array);
          })
          .catch(() => {
            setError("Error occurred while uploading image files.");
          });
      }
    },
    [],
  );

  const initData = () => {
    setTitle("");
    setContent("");
    setSeries("");
    setImages([]);
    setError("");
    setImageTitle([]);
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
      images,
      imageTitle,
    };

    console.log("post : ", post);

    let response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
      <Button ButtonType="small" color="green" onClick={handlePost}>
        Submit
      </Button>
    </>
  );
}
