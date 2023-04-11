import { Editor } from "src/components/molecules";
import { useRouter } from "next/router";
import { Button, Input } from "src/components/atoms";
import { ChangeEvent, useCallback, useState, useEffect } from "react";
import parseDate from "util/parseDate";
import { uploadImage } from "util/handleImg/uploadImg";
import accessAdmin from "util/accessAdmin";

export default function Write() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [series, setSeries] = useState<string>("");
  const [hashtag, setHashtag] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [imageTitle, setImageTitle] = useState<any[]>([]);
  const [isThumbnail, setIsThumbnail] = useState<boolean>(false);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    let inputPw = prompt("ACCESS CODE 입력");
    accessAdmin(inputPw);
  }, []);

  const handleChange = useCallback((content: any) => {
    setContent(content);
  }, []);

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
      hashtag,
      images,
      imageTitle,
      isThumbnail,
    };

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
      <span>자체 썸네일 사용</span>
      <input
        type="checkbox"
        checked={isThumbnail}
        onChange={(e: any) => setIsThumbnail(!isThumbnail)}
      />
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
      <Input
        size="default"
        placeholder="스페이스바로 태그를 구분해주세요"
        value={hashtag}
        type="string"
        onChange={(e: any) => setHashtag(e.target.value)}
      />
      <Button ButtonType="small" color="green" onClick={handlePost}>
        Submit
      </Button>
    </>
  );
}
