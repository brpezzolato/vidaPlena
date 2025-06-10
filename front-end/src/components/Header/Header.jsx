'use client';

import '@/components/Header/styleHeader.css';
import Button from '@/components/BotaoLogout/BotaoLogout';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderAdm from './HeaderAdm';

export default function Header() {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tipoUser = localStorage.getItem('tipo');

    setTipo(tipoUser);

    if (token && userId) {
      fetch(`http://localhost:3001/pessoas/${userId}`, {
        headers: { Authorization: 'Bearer ' + token },
      })
        .then(async (res) => {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.mensagem || 'Erro ao buscar usuário');
          }
          setUsuario(data);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário:', error);
          setUsuario(null);
        });
    } else {
      setUsuario(null);
    }
  }, [isClient]);

  const handleIconeClick = () => {
    const token = localStorage.getItem('token');

    if (token) {
      setModalAberto(true);
    } else {
      router.push('/login');
    }
  };

  const handleFecharModal = () => {
    setModalAberto(false);
  };

  if (!isClient) return null;

  if (tipo === 'adm') {
    return <HeaderAdm />;
  }

  return (
    <div className="container-fluid">
      {/* Mobile */}
      <div className="d-flex d-md-none align-items-center justify-content-between py-3 px-3">
        <img
          src="/imgHeader/logoBaseInvertido.png"
          alt="logo"
          id="logoMobile"
        />
        <button
          className="btn ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
          aria-expanded="false"
          aria-controls="mobileMenu"
        >
          &#9776;
        </button>
      </div>

      <div className="collapse d-md-none" id="mobileMenu">
        <div className="d-flex flex-column align-items-center px-3 gap-3 py-3 mobile-menu">
          <Link href="/" className="menu-link">
            Home
          </Link>
          <Link href="/calendario" className="menu-link">
            Calendrio
          </Link>
          <Link href="/blog" className="menu-link">
            Blog
          </Link>
          <Link href="/contato" className="menu-link">
            Contato
          </Link>
          <img
            src="/imgHeader/iconeUsuario.png"
            className="iconeUsuarioMobile"
            alt="iconeUsuario"
            onClick={handleIconeClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="d-none d-md-flex custom-header">
        <div className="links-wrapper">
          <div className="left-section">
            <Link href="/" className="menu-link">
              Home
            </Link>
            <Link href="/calendario" className="menu-link">
              Calendário
            </Link>
          </div>
          <div className="center-section">
            <Link href="/">
              <img
                src="/imgHeader/logoBaseInvertido.png"
                alt="logo"
                className="logoDesktop"
              />
            </Link>
          </div>
          <div className="right-section">
            <Link href="/blog" className="menu-link">
              Blog
            </Link>
            <Link href="/contato" className="menu-link">
              Contato
            </Link>
          </div>
        </div>
        <img
          src="/imgHeader/iconeUsuario.png"
          className="iconeUsuario"
          alt="iconeUsuario"
          onClick={handleIconeClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Modal de informações do usuário */}
      {modalAberto && usuario && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          role="dialog"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bem-vindo(a), {usuario.nome}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleFecharModal}
                />
              </div>
              <div className="modal-body">
                <p
                  style={{
                    marginBottom: '1rem !important',
                  }}
                >
                  Nome Completo:
                </p>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control mb-3 input-informacao"
                  placeholder={usuario.nome}
                  disabled
                />
                <div className="conjunto-input d-flex">
                  <div className="input-convenio">
                    <p>Convênio:</p>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control mb-3 input-informacao"
                      placeholder={usuario.temConvenio}
                      disabled
                    />
                  </div>
                  <div className="input-celular ms-4">
                    <p>Celular:</p>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control mb-3 input-informacao"
                      placeholder={usuario.celular}
                      disabled
                    />
                  </div>
                </div>
                <p>Email:</p>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control mb-3 input-informacao"
                  placeholder={usuario.email}
                  disabled
                />
                <p>Senha:</p>
                <input
                  type="password"
                  id="disabledTextInput"
                  className="form-control mb-3 input-informacao"
                  placeholder="•••••••••"
                  disabled
                />
              </div>
              <div className="modal-footer">
                <Button onLogout={handleFecharModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
