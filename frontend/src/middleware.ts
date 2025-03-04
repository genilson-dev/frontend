import { NextRequest, NextResponse } from "next/server";
import { getCookiesServer } from "./lib/cookieServer";

export async function middleware(req: NextRequest) {
  console.log("Middleware called");
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  const token = await getCookiesServer();
  console.log("Token", token);
  if (pathname.startsWith("/dashboard")) {
   if (!token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));    }
  }
}

//  Verificando se o token é válido


