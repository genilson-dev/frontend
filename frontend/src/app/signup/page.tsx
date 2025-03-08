import { api } from "@/service/api";
import styles from "@/app/signup/page.module.scss";
import logo from "./../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Validando o tipo de email
    function validateEmail(email: string): boolean {
      const validEmail = /\S+@\S+\.\S+/;
      return validEmail.test(email);
    }

    if (
      typeof email === typeof validateEmail &&
      typeof password === "string" &&
      typeof name === "string"
    ) {
      console.log("Funcionou");
      return;
    }

    try {
      const response = await api.post("/create", {
       name, email, password
      })
      console.log(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      console.log("Erro ao tentar cadastrar um novo usuario");
    }
    redirect("/")
  }

  return (
    <div className={styles.containerCenter}>
      <>
        <div>
          <Link href="/">
            <Image src={logo} alt="Descrição do logo " />
          </Link>
        </div>
        <section className={styles.login}>
          <form action={handleRegister} className={styles.form}>
            <input
              type="name"
              className={styles.input}
              name="name"
              placeholder="Digite seu nome"
              required
            />
            <input
              type="text"
              className={styles.input}
              name="email"
              required
              placeholder="Digite seu E-mail"
            />
            <input
              type="password" 
              name="password"
              className={styles.input}
              placeholder="Crie sua senha"
              required
            />
            <button type="submit" className={styles.buttonDash}>
              Cadastrar
            </button>
          </form>
          <Link href="/" className={styles.text}>
            <h1>
              Já tem uma conta?, <strong>Faça Login!</strong>
            </h1>
          </Link>
        </section>
      </>
    </div>
  );
}
