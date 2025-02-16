import React from 'react'
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={styles.containerCenter} >
        <Image src={logo} alt="logo" />
        <section className={styles.login}>
          <h1>Faça login</h1>
          <form>
            <h2>Email</h2>
            <input type="email" 
            name='email' 
            placeholder='Digite seu email...'
            required 
            className={styles.input} />
            <h2>Password</h2>
            <input type="password" 
            placeholder='Senha...' 
            required 
            name='password'
            className={styles.input}
            />
            <button type="submit" className={styles.button}>Logar</button>
            <Link href="/signup" className={styles.text}>
              Não possui uma conta? <strong>Cadastre-se</strong>
            </Link>

          </form>
        </section>
      </div>
    </>
  )
}
