import { cookies } from "next/headers";

export async function getCookiesServer(){
    // buscando o cookie salvo anteriormente no localStorage
    const cookiesSet = await cookies();
    const token = cookiesSet.get("login")?.value;
    return token || undefined;
}

