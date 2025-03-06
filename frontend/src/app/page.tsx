import logo from "./../../public/logo.svg";
import { api } from "@/service/api";
import Link from "next/link";
import Image from "next/image";
import styles from './page.module.scss'

export default function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      {/* Este link direciona o usuario quando clicar na logo para a pagina home */}
      <Link href="/">
        <Image src={logo} alt="Logo favorito" />
      </Link>
      <Link href="/signup" className={styles.text}>
        <h3>Não possui uma conta? Cadastre-se</h3>
      </Link>
      <Link href="/login" className={styles.text}>
        <h3>Já conta? Faça login!</h3>
      </Link>
    </div>
  );
}
