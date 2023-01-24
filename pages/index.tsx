import { getSortedPostsData } from "util/posts";
import Link from "next/link";
import { Layout } from "src/components/organisms";
import { Card } from "src/components/molecules";
import { Board } from 'styles/globals';

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <h1>Home</h1>
      <section>
        <Board>
        {allPostsData &&
          allPostsData.map(({ id, title }: any) => (
            <Link href={`/posts/${id}`}>
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
