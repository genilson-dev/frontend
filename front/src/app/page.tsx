import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/service/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

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
      if (response.data.token) {        
        return;
      }

      // Salvando o cookie do usuario
      console.log(response.data.token);
      
      const expressTime = 60 * 60 * 24 * 30 * 1000;

      const cookieStorage = await cookies();

      cookieStorage.set("@login", response.data.token, {
        maxAge: expressTime, // Quando o token vai expirar.
        path: "/", // Caminho onde eu quero acessar.
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
      });
      
    } catch (error) {
      console.error('Erro ao logar:', error);
      return;
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
