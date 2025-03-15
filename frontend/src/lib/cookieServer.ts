import { cookies } from "next/headers";

export async function getCookieServer(){
    // buscando o cookie salvo anteriormente no localStorage
    const cookieSet = await cookies();
    const token = cookieSet.get("login")?.value;
    return token || undefined;
}

