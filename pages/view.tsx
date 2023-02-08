import Link from "next/link";
import { CardLayout, ButtonLayout } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";

export default function Board({ posts }: any) {
  return (
    <>
      <ButtonLayout>
        <Link href="/view">
          <Button color="high" ButtonType="small" onClick={null}>
            Total view
          </Button>
        </Link>
        <Link href="/series">
          <Button color="gray" ButtonType="small" onClick={null}>
            Series
          </Button>
        </Link>
      </ButtonLayout>
      <CardLayout>
        { posts && posts.map((item :any, i: any) => {
          return(
            <Link href={`/posts/${item.title}`} key={i}>
              <Card type="default" color="low" info={item.uploadDate}>
                {item.title}
              </Card>
            </Link>
          )
        }) }
      </CardLayout>
    </>
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
