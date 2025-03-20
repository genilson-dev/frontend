import { Button } from "../components/button"
import styles from "./page.module.scss"
import { api } from "@/service/api"
import { getCookieServer } from "@/lib/cookieServer"
import { redirect } from "next/navigation"

export default function Category() {

  async function handleRegisterCategory(formData: FormData){
    "use server"
    const name = formData.get("categoria")
    if (!name) return;
   
    const data = { name: name}

    const token = await getCookieServer();

    await api.post("/category", data, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .catch((error) => {
      console.error("Erro ao cadastrar categoria", error)
      return;
    })
    redirect("/dashboard")
  }

  return (
    <main className={styles.container}>
        <h1>Nova Categoria</h1>
        <form
          action={handleRegisterCategory}
          className={styles.form}>
          <input 
          type="text"
          name="categoria"
          placeholder="Nome da categoria"
          required
          className={styles.input}
                    
          />
          <Button name="Cadastrar" />
        </form>
    </main>
  )
}
