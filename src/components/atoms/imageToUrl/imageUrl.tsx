import { useState, useEffect } from "react";
import { ImageUrlType } from "./imageUrlType";
import Image from "next/legacy/image";
import getImage from "pages/api/getImage";

const ImagUrlComponent: React.FC<ImageUrlType> = (props: ImageUrlType) => {
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    const getStream = async () => {
      const stream = await getImage(props.fileName);
      const chunks: Uint8Array[] = [];

      stream.on("data", (chunk: Uint8Array) => chunks.push(chunk));
      stream.on("end", () => {
        const blob = new Blob(chunks, { type: stream.contentType });
        const url = URL.createObjectURL(blob);
        setImgUrl(url);
      });
    };

    getStream();
  }, [props.fileName]);

  return <Image src={imgUrl} width={400} height={300} />;
};

export default ImagUrlComponent;
