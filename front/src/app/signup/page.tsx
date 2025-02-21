// "use server"; // Diretiva use client
import React from 'react'
import Image from 'next/image';
import styles from './page.module.scss'
import logo from '../../../public/logo.svg'
import Link from 'next/link';
import { api } from '@/service/api';
import { redirect } from 'next/navigation';

export default function Signup() {
    async function handleRegister(formData: FormData) {
        "use server"; // Diretiva use client
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
    
        // Verifica se algum campo está vazio
        if (!name || !email || !password) {
            console.log("Preencha todos os campos");
            return;
        }
    
        try {
            await api.post("/user/create", { name, email, password });
            console.log("Usuário criado com sucesso!");
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
        // Redirecionando o usuario para a pagina de login
        redirect("/");
    }
    
    
    return (
        <div className={styles.containerCenter} >
            <Image src={logo} alt="logo" />
            <section className={styles.login}>
                <h1>Criando um novo usuario</h1>
                <form action={handleRegister}>
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

