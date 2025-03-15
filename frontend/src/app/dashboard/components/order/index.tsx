import styles from './styles.module.scss'
import {RefreshCcw} from 'lucide-react'
export default function Orders() {
  return (
    <main className={styles.container} >
      <section className={styles.containerHeader} >
        <h1>Ultimos pedidos</h1>
        <button> <RefreshCcw size={24} color='#3fffa3' /> </button>
      </section>    
      <section className={styles.listOrder}>
        <button className={styles.orderItem}>
          <div className={styles.tag} ></div>
          <span>Mesa: 10 </span>
        </button>

        <button className={styles.orderItem}>
          <div className={styles.tag} ></div>
          <span>Mesa: 5 </span>
        </button>

      </section>  
    </main>
  )
}
