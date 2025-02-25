import styles from "./page.module.scss";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/service/api";
import { redirect } from "next/navigation";

export default function Login() {

  async function handleLogin(formatData: FormData) {
    "use server";
    const email = formatData.get("email");
    const password = formatData.get("password");
    console.log(password, email);

    if (!email || !password) {
      return;
    }
    try {
      const response = await api.post("/login", { email, password });
      console.log(response.data);    
        
    } catch (error) {
      console.log("Erro ao logar", error);
      return;      
    }   
    redirect('/')
    
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

          <button type="submit" className={styles.button}>Logar</button>

        </form>

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? <strong>Cadastre-se!</strong>
        </Link>

      </section>
      </div>
    </>
  );
}
