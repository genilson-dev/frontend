import { api } from "@/service/api";
import Link from "next/link";
import logo from "./../../../public/logo.svg";
import Image from "next/image";
import styles from './../page.module.scss'
import { cookies } from "next/headers";

export default function Login() {
  async function handleLogin(formData: FormData) {
    "use server"
    const email = formData.get("email")
    const password = formData.get("password");
    if (email === "" || password === "") return;

    try {
        // Acessando a api informada na rota
        const response = await api.post("/login", {email, password});
        console.log(response.data.auth.name);

        // Se o token não for encontrado deve parar a plicação
        if (!response.data.token) return;
        console.log(response.data)

        // Validando o tempo para que o token expire
        const tempoParaExpirarToken = 60 * 60 * 24 * 90 * 1000
        const cookieStorage = await cookies();
        cookieStorage.set("login", response.data.toke, {
            maxAge: tempoParaExpirarToken,
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production"
        })

        
    } catch (error) {
        console.log("O erro que deu foi: ", error)
        return;
        
    }

    console.log("Esta chamando a função de login", email, password);
  }
  return (
    <div className={styles.containerCenter}>
      <h1>Login</h1>
      <>
        {/* Quando clicar na imagem o usuario é redirecionado para a pagina home */}
        <Link href="/">
          <Image src={logo} alt="Logo favorito" />
        </Link>

        <section className={styles.login}>
            <form action={handleLogin}>
                <input type="email" name="email" required placeholder="Digite seu E-mail" className={styles.input}  />
                <input type="password" name="password" required placeholder="Digite sua senha" className={styles.input}  />

                <button type="submit" className={styles.button}>Acessar!</button>

            </form>
            <Link href="/signup" className={styles.text}>
                <p>Ainda Não possui uma conta? <strong>Cadastre-se</strong> </p>
            </Link>
        </section>

      </>
    </div>
  );
}
