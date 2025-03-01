import styles from "./page.module.scss";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/service/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Login() {
  async function handleLogin(formatData: FormData) {
    "use server";
    const email = formatData.get("email");
    const password = formatData.get("password");
    
    if (email === "" || password === "") {
      return;
    }
    try {
      const response = await api.post("/login", { email, password });
      console.log(response.data);
      if (response.data.token) {
        return;
      }

      // Salvando o token do usuario no cookie
      const expireTime = 60 * 60 * 24 * 90; // 90 dias
      const setCookies = await cookies();
      setCookies.set("loginToken", response.data.token, {
        maxAge: expireTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",

      });
    } catch (error) {
      console.log("Erro ao logar", error);
      return;
    }
    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" />
        </Link>

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite o E-mail"
              className={styles.input}
            />

            <input
              type="password"
              name="password"
              required
              placeholder="Digite sua senha"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Logar
            </button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? <strong>Cadastre-se!</strong>
          </Link>
        </section>
      </div>
    </>
  );
}
