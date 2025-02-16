import React from 'react'
import Image from 'next/image';
import styles from './page.module.scss'
import logo from '../../../public/logo.svg'
import Link from 'next/link';

export default function page() {
    return (
        <div className={styles.containerCenter} >
            <Image src={logo} alt="logo" />
            <section className={styles.login}>
                <h1>Criando um novo usuario</h1>
                <form>
                    <input type="text"
                        name="name"
                        placeholder="Nome..."
                        required
                        className={styles.input} />
                   
                    <input type="email"
                        name='email'
                        placeholder='Digite seu email...'
                        required
                        className={styles.input} />
                    
                    <input type="password"
                        placeholder='Senha...'
                        required
                        name='password'
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Cadastrar</button>
                    <Link href="/" className={styles.text}>
                        Já possui uma conta? <strong>Faça Login</strong>
                    </Link>

                </form>
            </section>
        </div>
    )
}

