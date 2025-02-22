import styles from "./page.module.scss";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Link href={"/"}>
        <Image src={logo} alt="Logo" />
        </Link>
      

      <section className={styles.login}>
        <h1>Cadastre-se!</h1>
        <form action="">
          <input 
          type="text"
            name="name" 
            required 
            placeholder="Qual o seu nome?"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Informe seu E-mail"
            className={styles.input}
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Informe sua senha"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>Cadastrar</button>

        </form>

        <Link href="/login" className={styles.text}>
          Já possui uma conta? <strong>Faça Login!</strong>
        </Link>

      </section>
      </div>
    </>
  );
}
