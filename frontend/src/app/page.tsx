import styles from "./page.module.scss";
import logo from "@/../public/logo.svg";
import mmm from "@/../public/mmm.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logo} width={100} height={80} alt="Logo" />
      

      <section className={styles.login}>

        {/* <form action="">
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

        </form> */}

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? <strong>Cadastre-se!</strong>
        </Link>
        <Link href="/login" className={styles.text}>
          Já tem uma conta? <strong>Faça login!</strong>
        </Link>

      </section>
      </div>
    </>
  );
}
