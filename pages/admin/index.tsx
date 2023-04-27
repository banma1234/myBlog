import React, { useEffect } from "react";
import { useRouter } from "next/router";
import accessAdmin from "util/accessAdmin";
import Link from "next/link";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    let inputPw = prompt("ACCESS CODE 입력");
    let result = accessAdmin(inputPw);
    if (!result) {
      router.replace("/");
    }
  }, []);

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
