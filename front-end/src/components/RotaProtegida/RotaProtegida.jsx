'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RotaProtegida({ permitido, children }) {
  const [tipoUser, setTipoUser] = useState('');

  useEffect(() => {
    const tipo = localStorage.getItem('tipo');
    setTipoUser(tipo);
  }, []);

  if (!permitido.includes(tipoUser)) {
    return (
      <div className="container text-center forbidden">
        <div className="row p-4 mb-4">
          <h1 className="text-info-emphasis mt-4">
            Ops! Você não tem permissão para acessar essa área.
          </h1>
          <p className="text-body-secondary">
            Mesmo estando logado, este conteúdo não está disponível para o seu
            tipo de usuário. Tente voltar ou acesse um conteúdo disponível para
            o seu perfil.
          </p>
          <div className="col-md-12 text-center">
            <img
              src="/imgNotFound/image403.png"
              className="w-50 img-fluid img-speak"
              alt="Acesso negado"
            />
          </div>
          <Link href="/">
            <button
              type="button"
              className="btn btn rounded-5 mt-4"
              style={{
                backgroundColor: '#00715E',
                color: '#fff',
                width: '20%',
              }}
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
