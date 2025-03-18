
import { Button } from "../components/button"
import styles from "./page.module.scss"
export default function Category() {

  async function handleRegisterCategory(){
    "use server"
    console.log("Cadastrando categoria")
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
          required={true}
          className={styles.input}
                    
          />
          <Button name="Cadastrar" />
        </form>
    </main>
  )
}
