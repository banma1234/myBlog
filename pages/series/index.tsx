import Link from "next/link";
import { CardLayout } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";

export default function Board({ series }: any) {
  return (
    <>
      <Link href="/view">
        <Button color="gray" ButtonType="small" onClick={null}>
          Total view
        </Button>
      </Link>
      <Link href="/series">
        <Button color="green" ButtonType="small" onClick={null}>
          Series
        </Button>
      </Link>
      <CardLayout>
        {series &&
          series.map((item: any, i: any) => {
            return (
              <Link href={`/series/detail/${item.series}`} key={i}>
                <Card
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
