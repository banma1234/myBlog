import { getSortedPostsData } from 'util/posts';
import Link from 'next/link';
import { Layout } from "../src/components/organisms";
import { Card } from '../src/components/molecules';

export default function Home({ allPostsData }:any) {
  return (
    <Layout>
      <h1>Home</h1>
      <section>
      {allPostsData && allPostsData.map(({id, title}:any) => (
        <Link href={`/posts/${id}`}>
          <Card type='default' color='pink'>
            <h2>{title}</h2>
          </Card>
        </Link>
      ))}
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
