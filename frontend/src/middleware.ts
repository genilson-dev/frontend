import { NextRequest, NextResponse } from 'next/server';
"use server";
export async function middleware(req: NextRequest, res: NextResponse) {
    console.log("Middleware called");
    
  return NextResponse.next();
}
