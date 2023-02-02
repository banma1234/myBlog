import { getSortedPostsData } from "util/posts";
import Link from "next/link";
import Image from "next/legacy/image";
import imgUrl from "public/bannerImg.png";
import { Layout } from "src/components/organisms";
import { Card } from "src/components/molecules";
import { Board, ImgWrapper, OverlapDiv } from "styles/globals";
import { Button } from "src/components/atoms";

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <ImgWrapper type="banner">
        <Image src={imgUrl} alt="card Img" priority />
        <OverlapDiv>
          <Button color="high" ButtonType="default" onClick={console.log("wow")}>
            Go
          </Button>
        </OverlapDiv>
      </ImgWrapper>
      <section>
        <Board>
          {allPostsData &&
            allPostsData.map(({ id, title }: any) => (
              <Link href={`/posts/${id}`} key={title}>
                <Card type="default" color="low">
                  <h3>{title}</h3>
                </Card>
              </Link>
            ))}
        </Board>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
