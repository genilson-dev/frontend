import logo from './../../public/logo.svg'
import { api } from '@/service/api'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      <Link href="/"> 
        <Image src={logo} alt='Logo favorito'/>
       </Link>

    </div>
  )
}
