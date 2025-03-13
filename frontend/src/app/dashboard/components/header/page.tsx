import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from './../../../../../public/logo.svg'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainer}>
        <Link href="/dashboard">
          <Image src={logo} alt='Logo da pizzaria' width={190} height={60} priority={true} quality={100}/>
        </Link>
        <nav>
          <Link href="/dashboard/category" className={styles.link}>Categoria</Link>
          <Link href="/dashboard/product" className={styles.link}>Produto</Link>

        </nav>
      </div>
      
    </header>
  )
}
