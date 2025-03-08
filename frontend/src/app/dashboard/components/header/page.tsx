"use client";
import { api } from '@/service/api';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
  const [userName, setUserName] = useState("Genilson");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await api.get('/me');
        setUserName(response.data.name);
      } catch (error) {
        console.log("Erro ao buscar o nome do usuário", error);
      }
    }

    fetchUserName();
  }, []);

  return (
    <header>
      <h1>Bem-vindo, {userName ? userName : 'Visitante'}!</h1>
    </header>
  );
};

export default Header;
