import Link from "next/link";
import { CardLayout, ButtonLayout } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";

export default function Board({ series }: any) {
  return (
    <>
      <ButtonLayout>
        <Link href="/view">
          <Button color="gray" ButtonType="small" onClick={null}>
            Total view
          </Button>
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link href="/series">
          <Button color="high" ButtonType="small" onClick={null}>
            Series
          </Button>
        </Link>
      </ButtonLayout>
      <CardLayout>
        {series &&
          series.map((item: any, i: any) => {
            let url = null;
            if (item.thumbnail) {
              url = `data:image/${item.thumbnail.contentType};base64,${item.thumbnail.data}`;
            }
            return (
              <Link href={`/series/detail/${item.series}`} key={i}>
                <Card
                  src={url}
                  type="default"
                  color="low"
                  info={`${item.count}개의 게시물`}
                >
                  {item.series}
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
  myHeaders.append("viewType", "VIEW_SERIES");

  let response = await fetch(`${DEV_URL ? DEV_URL : ""}/api/viewBoard`, {
    method: "GET",
    headers: myHeaders,
  });
  let data = await response.json();

  return {
    props: {
      series: data["message"],
    },
  };
}
