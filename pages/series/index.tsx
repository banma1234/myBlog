import Link from "next/link";
import { CardLayout } from "styles/globals";
import { Button } from "src/components/atoms";
import { Card } from "src/components/molecules";
import { Layout } from "src/components/organisms";

export default function Board() {
  return (
    <Layout>
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
    </Layout>
  );
}
