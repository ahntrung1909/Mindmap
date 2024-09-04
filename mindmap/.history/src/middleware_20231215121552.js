import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//   const session = await getSession(request);
//   if (request.nextUrl.pathname.startsWith("/mindmap")) {
//     if (session) {
//       return NextResponse.rewrite(new URL("/mindmap", request.url));
//     } else {
//       return NextResponse.rewrite(new URL("/", request.url));
//     }
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   patterns: ["/about/*"],
// };
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL("/home", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
