import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const session = await getSession(request);
  console.log(request);
  if (request.nextUrl.pathname.startsWith("/mindmap")) {
    if (session) {
      return NextResponse.redirect("/mindmap");
    } else {
      return NextResponse.redirect("/mindmap");
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/mindmap/:path*",
};
