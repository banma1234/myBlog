import { NextRequest, NextResponse } from "next/server";

export async function withAuth(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    url.pathname = "/login";

    const response = await validateUser(req);

    if (response.status === 200) {
      return NextResponse.next();
    } else if (response.status === 401) {
      return NextResponse.redirect(url);
    }
  } catch (e: any) {
    console.log(e);
  }
}

export async function withoutAuth(req: NextRequest) {
  try {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";

    const response = await validateUser(req);

    if (response.status === 200) {
      return NextResponse.redirect(url);
    } else if (response.status === 401) {
      return NextResponse.next();
    }
  } catch (e: any) {
    console.log(e);
  }
}

function validateUser(req: NextRequest): Promise<Response> {
  return fetch("/admin", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      cookie: `세션 쿠키 ID = ${req.cookies.get("세션 쿠키 ID")}`,
    },
  });
}
