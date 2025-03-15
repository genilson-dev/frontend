"use client";
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from './../../../../../public/logo.svg'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  async function handleLogout(){
    deleteCookie("login", {path: "/"});
    // window.location.href = "/";
    router.replace("/");

  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src={logo} alt='Logo da pizzaria' width={190} height={60} priority={true} quality={100}/>
        </Link>
        <nav>
          <Link href="/dashboard/category" className={styles.link}>Categoria</Link>
          <Link href="/dashboard/product" className={styles.link}>Produto</Link>
          <form action= {handleLogout} >
            <button type='submit'>
              <LogOutIcon size={24} color='#fff'/>
            </button>
          </form>

        </nav>
      </div>
      
    </header>
  )
}
