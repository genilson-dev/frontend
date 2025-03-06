import logo from "./../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.containerCenter}>
      <>
      <Link href="#">
        <Image src={logo} alt="Logo do projeto" />
      </Link>
      <section className={styles.login}>
        <form className={styles.form}>
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
          <button type="submit" className={styles.buttonDash}>Acess</button>
        </form>
        <Link href="/signup" className={styles.text}>
          <p>Não tem uma conta?, <strong>Cadastre-se</strong></p>
        </Link>
      </section>
    </>
    </div>
  );
}
