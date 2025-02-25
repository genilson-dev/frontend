import styles from "./page.module.scss";
import logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/service/api";

export default function Signup() {
  
  async function handleRegister(formData: FormData){
    "use server";
    // Função que captura os dados de cada campo dos inputs do formulario em nextjs
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!name || !email || !password) {
      return;
    }
    // Acessando a API e realizando o cadastro do usuario
    try {
      await api.post("/user/create", {name, email, password});
      console.log("Usuario cadastrado com sucesso");
      
      
    } catch (error) {    
      console.log("Erro ao cadastrar o usuario", error);        
    }
  }
 

  return (
    <>
      <div className={styles.containerCenter}>
        <Link href={"/"}> 
        <Image src={logo} alt="Logo" />
        </Link>
      

      <section className={styles.login}>
        <h1>Cadastre-se!</h1>
        <form action={handleRegister}>
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
