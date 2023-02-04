import { getSortedPostsData } from "util/posts";
import Link from "next/link";
import Image from "next/legacy/image";
import imgUrl from "public/bannerImg.png";
import { Layout } from "src/components/organisms";
import { Card } from "src/components/molecules";
import { Board, ImgWrapper, OverlapDiv } from "styles/globals";
import { Button } from "src/components/atoms";

export default function Home({ posts }: any) {
  return (
    <Layout>
      <ImgWrapper type="banner">
        <Image src={imgUrl} alt="card Img" priority />
        <OverlapDiv>
          <Button color="high" ButtonType="default" onClick={()=>{console.log("damn")}}>
            Go
          </Button>
        </OverlapDiv>
      </ImgWrapper>
      <section>
        <Board>
          {posts && posts.map((item:any, i:any) => {
            return(
              <Link href={`/posts/${item.title}`} key={i}>
                <Card type="default" color="low">
                  <h3>{item.title}</h3>
                </Card>
              </Link>
            );
          })}
        </Board>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  let DEV_URL = process.env.DEV_URL;

  // request posts from api
  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET"
  });
  // extract the data
  let data = await response.json();

  return {
      props: {
          posts: data['message'],
      },
  };
}