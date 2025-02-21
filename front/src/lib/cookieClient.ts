import { getCookie } from "cookies-next";

export function getCookieClient(){
    const toke = getCookie("@login");
    return toke;
}
