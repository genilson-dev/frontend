import { NextRequest, NextResponse } from 'next/server';
"use server";
export async function middleware(req: NextRequest, res: NextResponse) {
    console.log("Middleware called");
    const { pathname } = req.nextUrl;
    if (pathname.startsWith("/_next") || pathname === "/" || pathname === "/login") {
      return NextResponse.next();
    } 
    
  
}
