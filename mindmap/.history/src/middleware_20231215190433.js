import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   const session = await getSession(request);
  //   if (request.nextUrl.pathname.startsWith("/mindmap")) {
  //     if (!session) {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //   }
  console.log(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/mindmap",
};
