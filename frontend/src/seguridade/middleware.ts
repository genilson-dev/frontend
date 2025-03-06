import { NextRequest, NextResponse } from "next/server";
import { api } from "@/service/api";
export async function middleware(req: NextRequest){

        console.log("Chamou o middleware");
        
        return NextResponse.next();

}
