import Link from "next/link";
import Image from "next/legacy/image";
import imgUrl from "public/bannerImg.png";
import { useIcons } from "util/hooks";
import { CardLayout, ImgWrapper, OverlapDiv } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";
import { Layout } from "src/components/organisms";

export default function Home({ posts }: any) {
  return (
    <Layout>
      <ImgWrapper type="banner">
        <Image src={imgUrl} alt="card Img" width={"1200"}/>
        <OverlapDiv>
          <Button
            color="high"
            ButtonType="default"
            onClick={() => {
              console.log("damn");
            }}
          >
            Go
          </Button>
        </OverlapDiv>
      </ImgWrapper>
      <section>
        <Link href="/view">
          <h2>{useIcons("arrowRight", "18")} view more</h2>
        </Link>
        <CardLayout>
          {posts &&
            posts.map((item: any, i: any) => {
              return (
                <Link href={`/posts/${item.title}`} key={i}>
                  <Card type="default" color="low">
                    {item.title}
                  </Card>
                </Link>
              );
            })}
        </CardLayout>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const DEV_URL = process.env.DEV_URL;
  let myHeaders = new Headers({
    "Content-Type": "text/html; charset=utf-8",
  });
  myHeaders.append("viewType", "VIEW_TOTAL");

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