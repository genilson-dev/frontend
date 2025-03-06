import { api } from "@/service/api";
import Link from "next/link";
import logo from "./../../../public/logo.svg";
import Image from "next/image";
import styles from './../page.module.scss'
export default function Login() {
  async function handleLogin(formData: FormData) {
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")

    console.log("Esta chamando a função de login", email, password);
  }
  return (
    <div>
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
