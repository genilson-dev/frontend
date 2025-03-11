import { NextRequest, NextResponse } from 'next/server'
import { getCookieServer } from './lib/cookieServer';

export async function middleware(req: NextRequest){
  // console.log("Passou pelo middleware")
  const {pathname}  = req.nextUrl
  if (pathname.startsWith("/_next") || pathname === "/"){
    return NextResponse.next()
  }
  const token = await getCookieServer();
  console.log(token);
  
}

