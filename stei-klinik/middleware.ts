// export { auth as default } from "./auth";

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // console.log("middleware success");

  const response = NextResponse.next();

  return response;
}

// Uncomment jika ingin menjalankan middleware pada path tertentu.
// Saat ini tidak perlu karena page protection sudah diatur di dalam page.tsx (kecuali articles, login, dan register).
// export const config = {
//   matcher: [
//     "/home", 
//     "/chat-dokter", 
//     "/setting", 
//     "/articles", 
//     "/feedback", 
//     "/gantipassword", "/gantipassword2", "/gantipassword3",
//   ],
// };