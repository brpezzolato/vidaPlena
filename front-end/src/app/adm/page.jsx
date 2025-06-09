'use client';

import './styleAdm.css';
import Link from 'next/link';
import Toast from '@/components//Toast/Toast';
import { useEffect, useState } from 'react';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function Adm() {
  const [updateRes, setUpdateRes] = useState('');

  useEffect(() => {
    const mensagem = localStorage.getItem('toast');
    if (mensagem) {
      setUpdateRes(mensagem);

      setTimeout(() => {
        localStorage.removeItem('toast');
        setUpdateRes('');
      }, 3500);
    }
  }, []);

  return (
    <>
      <RotaProtegida permitido={'adm'}>
        <div className="adm-dashboard">
          <header className="adm-comeco">
            <h1>Painel Administrativo</h1>
            <p>Gerencie facilmente todas as informações do sistema.</p>
          </header>

          {/* card das dúvidas */}
          <div className="adm-secao">
            <Link href="/adm/duvidas" className="adm-card-link">
              <section className="adm-card">
                <h2>Dúvidas</h2>
                <ul>
                  <li>Como remarcar uma consulta?</li>
                  <li>Quais convênios aceitam?</li>
                  <li>Como acessar meus resultados?</li>
                </ul>
              </section>
            </Link>

            {/* card dos médicos */}
            <Link href="/adm/medicos" className="adm-card-link">
              <section className="adm-card">
                <h2>Médicos</h2>
                <ul>
                  <li>Dr. Ana Beatriz - Cardiologia</li>
                  <li>Dr. Lucas Mendes - Ortopedia</li>
                  <li>Dra. Fernanda Lima - Ginecologia</li>
                </ul>
              </section>
            </Link>

            {/* card dos usuários */}
            <Link href="/adm/usuarios" className="adm-card-link">
              <section className="adm-card">
                <h2>Usuários</h2>
                <ul>
                  <li>João Pereira</li>
                  <li>Camila Souza</li>
                  <li>Felipe Andrade</li>
                </ul>
              </section>
            </Link>

            {/* card das consultas */}
            <Link href="/adm/consultas" className="adm-card-link">
              <section className="adm-card">
                <h2>Consultas</h2>
                <ul>
                  <li>João - 05/06/2025 - 14h - Dr. Lucas</li>
                  <li>Camila - 06/06/2025 - 10h - Dra. Ana</li>
                  <li>Felipe - 07/06/2025 - 16h - Dra. Fernanda</li>
                </ul>
              </section>
            </Link>
          </div>
        </div>
        {updateRes != '' ? <Toast conteudo={updateRes} tipo={'ok'} /> : ''}
      </RotaProtegida>
    </>
  );
}
