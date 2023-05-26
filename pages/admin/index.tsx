import Link from "next/link";
import { GetServerSideProps } from "next";
import authMiddleware from "util/auth/authMiddleware";

export default function Admin() {
  return (
    <>
      <h1>Admin Page</h1>
      <ul>
        <li>
          <Link href="/admin/write">글 작성</Link>
        </li>
        <li>
          <Link href="/admin/thumbnail">썸네일 등록</Link>
        </li>
      </ul>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = authMiddleware(
//   async context => {
//     const session = context.session;
//     if (!session || !session.get("session")) {
//       console.log(session);
//       console.log(context.rawHeaders);
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }

//     return {
//       props: {},
//     };
//   },
// );
