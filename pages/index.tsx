import Link from "next/link";
import Image from "next/legacy/image";
import imgUrl from "public/banner_svg.svg";
import { useIcons } from "util/hooks";
import { CardLayout, ImgWrapper, OverlapDiv } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";

export default function Home({ posts }: any) {
  return (
    <>
      <ImgWrapper type="banner">
        <Image src={imgUrl} alt="card Img" width={"980"} />
        <OverlapDiv>
          <Button
            color="high"
            ButtonType="default"
            onClick={() => {
              null;
            }}
          >
            Go
          </Button>
        </OverlapDiv>
      </ImgWrapper>
      <Link href="/view">
        <h2>{useIcons("arrowRight", "18")} view more</h2>
      </Link>
      <CardLayout>
        {posts &&
          posts.map((item: any, i: any) => {
            let url = null;
            if (item.thumbnail) {
              url = `data:image/${item.thumbnail.contentType};base64,${item.thumbnail.data}`;
            }
            return (
              <Link href={`/posts/${item.title}`} key={i}>
                <Card
                  src={url}
                  type="default"
                  color="low"
                  info={item.uploadDate}
                >
                  {item.title}
                </Card>
              </Link>
            );
          })}
      </CardLayout>
    </>
  );
}

export async function getServerSideProps() {
  const DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("viewType", "VIEW_INDEX");

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();

  return {
    props: {
      posts: data["message"],
    },
  };
}
