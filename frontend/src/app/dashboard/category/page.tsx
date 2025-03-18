import styles from "./page.module.scss"
export default function Category() {
  function handleSubmit(event: React.FormEvent) {
    console.log("Clicou categoria")
  }
  return (
    <main className={styles.container}>
        <h1>Nova Categoria</h1>
        <form  className={styles.form}>
          <input 
          type="text"
          name="categoria"
          placeholder="Nome da categoria"
          required={true}
          className={styles.input}
                    
          />
          <button className={styles.button} >
            cadastrar categoria
          </button>
        </form>
    </main>
  )
}
