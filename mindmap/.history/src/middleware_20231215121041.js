import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  //   const session = await getSession();
  //   if (request.nextUrl.pathname.startsWith("/mindmap")) {
  //     if (session.user) {
  //       return NextResponse.rewrite(new URL("/mindmap", request.url));
  //     } else {
  //       return NextResponse.rewrite(new URL("/", request.url));
  //     }
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  patterns: ["/about/*"],
};
