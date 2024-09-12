// export { auth as default } from "./auth";

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "light");
  }
  return response;
}