import { cookies } from "next/headers";

export async function getCookieServer(){
    const cookieServer = await cookies();
    const cookie = cookieServer.get("@login")?.value;
    return cookie || null;
}

