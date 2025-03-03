import { getCookie } from "cookies-next";

export async function getCookiesServer() {
    const token = getCookie("login");
    return token || undefined;
}

