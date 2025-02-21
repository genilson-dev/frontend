
import React from 'react';
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/service/api';
import { redirect } from 'next/navigation';

export default function Page() {

  async function handleLogin(formData: FormData) {
    "use server"; // Certifique-se de que esta diretiva está corretamente posicionada

    const email = formData.get('email');
    const password = formData.get('password');

    if (email === "" || password === "") {
      console.log('Preencha todos os campos');
      return;
    }

    try {
      const response = await api.post('/login', { email, password });
      // Verificando se o token exite na requisição.
      if (!response.data.token) {
        console.log('Erro ao logar:', response.data);
        return;
      }
      console.log('Logado com sucesso!', response.data);
      
    } catch (error) {
      console.error('Erro ao logar:', error);
    }
    redirect('/dashboard');
  }

  return (
    <div className={styles.containerCenter}>
      <Image src={logo} alt="logo" />
      <section className={styles.login}>
        <h1>Faça login</h1>
        <form action={handleLogin}>
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            required
            className={styles.input}
          />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            placeholder="Senha..."
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Logar</button>
          <Link href="/signup" className={styles.text}>
            Não possui uma conta? <strong>Cadastre-se</strong>
          </Link>
        </form>
      </section>
    </div>
  );
}
