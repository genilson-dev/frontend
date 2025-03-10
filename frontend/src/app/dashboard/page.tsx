import Image from "next/image"
import styles from './page.module.scss'
import logo from './../../../public/logo.svg'
import Link from "next/link"
export default function Dashboard() {
  return (
    <div className={styles.containerCenter}>
      <h1>Pagina Principal</h1>
      <>
        <Link href="/">
        <Image src={logo} alt="Logo do projeto"/>
        </Link>
      </>
    </div>
  )
}
