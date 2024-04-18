import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await getToken({ req: request });

  if (request.nextUrl.pathname.startsWith("/write")) {
    if (session == null) {
      return NextResponse.redirect(
        "http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Flist"
      );
    }
  }

  if (request.nextUrl.pathname.startsWith("/list")) {
    // console.log(new Date());
    // console.log(request.headers.get("sec-ch-ua-platform"));
    return NextResponse.next();
  }
}
