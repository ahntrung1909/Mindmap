// This function can be marked `async` if using `await` inside
import { NextResponse } from "next/server";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async (req) => {
  const res = NextResponse.next();
  const user = await getSession(req, res);
  if (!user) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  return res;
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/mindmap", "/mindmap/:path*"],
};
