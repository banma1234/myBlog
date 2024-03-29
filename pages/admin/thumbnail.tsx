import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { Button, Input } from "src/components/atoms";
import { uploadImage } from "util/handleImg/uploadImg";
import { useRouter } from "next/router";
import accessAdmin from "util/accessAdmin";

export default function thumbnail() {
  const [series, setSeries] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [imageTitle, setImageTitle] = useState<any[]>([]);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    let inputPw = prompt("ACCESS CODE 입력");
    let result = accessAdmin(inputPw);
    if (!result) {
      router.replace("/");
    }
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
    setSeries("");
    setImages([]);
    setImageTitle([]);
  };

  const handleThumbnail = async (e: any) => {
    e.preventDefault();

    setError("");

    let thumbnail = {
      imageTitle,
      series,
      images,
    };

    let response = await fetch("/api/thumbnail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thumbnail),
    });

    let data = await response.json();

    if (data.success) {
      initData();
      alert("썸네일 등록이 완료되었습니다.");
      router.replace("/");
    } else {
      alert(data.message);
      console.log(data.message);
      return setError(data.message);
    }
  };

  return (
    <>
      <h1>시리즈 썸네일 등록</h1>
      <input type="file" onChange={handleImgUpload} />
      <Input
        size="default"
        placeholder="Series"
        value={series}
        type="string"
        onChange={(e: any) => setSeries(e.target.value)}
      />
      <Button ButtonType="small" color="green" onClick={handleThumbnail}>
        Submit
      </Button>
    </>
  );
}
