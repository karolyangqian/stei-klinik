// export { auth as default } from "./auth";

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";
// import { loginIsRequiredServer } from "./app/lib/auth";

export async function middleware(req: NextRequest) {
  // loginIsRequiredServer()

  const sessionRes = await fetch("http://localhost:3000/api/auth/session",
    {
      method: "handler",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (sessionRes.status === 404) {
    console.log("Session not found middleware");
    return NextResponse.redirect(new URL('/login', req.url));
  }
  console.log("middleware success");


  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: [
    "/home", 
    "/chat-dokter", 
    "/setting", 
    "/articles", 
    "/feedback", 
    "/gantipassword", "/gantipassword2", "/gantipassword3",
  ],
};