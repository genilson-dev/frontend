import { NextRequest, NextResponse } from 'next/server'
import { getCookieServer } from './lib/cookieServer';
import { api } from './service/api';

export async function middleware(req: NextRequest){
  const {pathname}  = req.nextUrl
  if (pathname.startsWith("/_next") || pathname === "/"){
    return NextResponse.next()
  }
  const token = await getCookieServer();

  // Codigo que exige que se o usuario nao tiver logado nao pode passar para a proxima pagina como o /dashboar
  if(pathname.startsWith("/dashboard")){
    if(!token){
      return NextResponse.redirect(new URL("/", req.url))
    }

    const isValid = await validateToken(token);

    if(!isValid){ return NextResponse.redirect(new URL("/", req.url))}
  }
  return NextResponse.next();  
}

// Função que verifica se o token é valido
async function validateToken(token: string){
  if(!token) {
    return false
  }
  // Rota de acesso aos detalhes do usuario
  try {
    await api.get("/me", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return true
    
  } catch (error) {
    console.log(`O token é invalido `, error);
    return false
    
  }

}
