import Image from "next/image"
// import styles from './page.module.scss'
// import logo from './../../../public/logo.svg'
// import Link from "next/link"
import Orders from "./components/order"
export default function Dashboard() {
  return (
    <div>
      
      <>
        {/* <Link href="/">
        <Image src={logo} alt="Logo do projeto"/>
        </Link> */}
        <Orders />
      </>
    </div>
  )
}
