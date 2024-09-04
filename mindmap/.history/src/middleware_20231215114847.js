import { NextResponse } from "next/server";
import { useUser } from "@auth0/nextjs-auth0/client";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { user, error, isLoading } = useUser();
  if (request.nextUrl.pathname.startsWith("/mindmap")) {
    return NextResponse.rewrite(new URL("/mindmap", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
