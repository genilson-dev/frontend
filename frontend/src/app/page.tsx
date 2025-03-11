import logo from "./../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { api } from "@/service/api";
// import { redirect } from "next/navigation";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  async function handleLogin(formData: FormData) {
    "use server";
    
    // Instanciando e capturando os campos email e password vindo do Form
    const email = formData.get("email");
    const password = formData.get("password");

    // Validando o tipo de email
    // function validateEmail(email: string): boolean {
    //   const validEmail = /\S+@\S+\.\S+/;
    //   return validEmail.test(email);
    // }
    if (email === "" || password === ""){
      return;
    }

    // if (typeof(email) === typeof(validateEmail) && typeof(password) === "string") {
    //   console.log("Funcionou");
    // }
    try {
      // Buscando os dado no banco de dados atravez da api
      const response = await api.post("/login", {
        email,
        password,
      });
      
      
      // Verificando se o token consta na requisição, se não, para a aplicação
      const {toke} = response.data.auth
      if (toke) {
        console.log("Não foi encontrado um token!");
        return;
      }

      // Salvando o cookie no localstorage
      const localstorage = await cookies();
      const cookieTime = 60 * 60 * 24 * 30 * 1000;
      localstorage.set("login", response.data.auth.token, {
        maxAge: cookieTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
      });

      // Exibindo algum erro caso haja depois que a requisição for rejeitado
    } catch (error) {
      console.log(`O tipo de erro é: `, error);
    }
    // Redirecionando o usuario depois de logado para a pagina de signup
    
    redirect("/dashboard");
  }

  return (
    <div className={styles.containerCenter}>
      <>
        <Link href="#">
          <Image src={logo} alt="Logo do projeto" />
        </Link>

        <section className={styles.login}>
          <form action={handleLogin}>
            <input
              type="email"
              name="email"
              required
              placeholder="Digite seu Email"
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Digite sua senha"
              className={styles.input}
            />

            <button type="submit" className={styles.buttonDash}>
              Acess
            </button>
          </form>
          <Link href="/signup" className={styles.text}>
            <p>
              Não tem uma conta?, <strong>Cadastre-se</strong>
            </p>
          </Link>
        </section>
      </>
    </div>
  );
}
