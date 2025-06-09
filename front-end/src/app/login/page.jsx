'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './login.css';
import Toast from '@/components/Toast/Toast';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [conteudoResposta, setConteudoResposta] = useState('');
  const [tipoToast, setTipoToast] = useState('');
  const [cadastroRes, setCadastroRes] = useState('');
  const [toastExpirado, setToastExpirado] = useState('');
  const router = useRouter();

  useEffect(() => {
    const mensagem = localStorage.getItem('toastCadastro');
    if (mensagem) {
      setCadastroRes(mensagem);

      setTimeout(() => {
        localStorage.removeItem('toastCadastro');
        setCadastroRes('');
      }, 3500);
    }

    const mensagemExpirado = localStorage.getItem('toastExpirado');
    if (mensagemExpirado) {
      setToastExpirado(mensagemExpirado);

      setTimeout(() => {
        localStorage.removeItem('toastExpirado');
        setToastExpirado('');
      }, 3500);
    }
  }, []);

  async function handleLogin() {
    const dados = JSON.stringify({
      email: email,
      senha: senha,
    });

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dados,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('tipo', data.tipo);
        localStorage.setItem('userId', data.id_user);
        localStorage.setItem('nome', data.nome);
        localStorage.setItem('convenio', data.temConvenio);
        localStorage.setItem('toast', data.mensagem);
        setTipoToast('ok');
        if (data.tipo === 'medico' || data.tipo === 'paciente') {
          window.location.replace('/calendario');
        } else {
          window.location.replace('/adm');
        }
      } else {
        setConteudoResposta(data.mensagem);
        setTipoToast('!ok');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      setMensagem('Erro ao conectar com o servidor.');
    }
  }
  return (
    <>
      <style>
        {`@media (min-width: 790px) {
        body {
          background-image: url('/imgLoginCadastro/fundoLoginDesktop.png');
          background-position: center 0;
          background-size: 100% 80%;
          background-repeat: no-repeat;
          font-family: 'Poppins', sans-serif !important;
        }

        .inputsCadastro {
          width: 35%;
          margin-top: 9%;
          margin-bottom: 18.9%;
          margin-left: -2%;
        }}`}
      </style>
      <div className="container pt-4">
        <div className="geral d-flex justify-content-start">
          <div className="inputsCadastro">
            <h5 className="tituloCadastro text-center mb-4">Seja bem-vindo!</h5>
            <div className="input-group mb-3 rounded-start-pill rounded-end-pill">
              <span
                className="input-group-text rounded-start-pill"
                id="basic-addon1"
              >
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                className="form-control rounded-5 rounded-start-0"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-2 rounded-start-pill rounded-end-pill">
              <span
                className="input-group-text rounded-start-pill"
                id="basic-addon1"
              >
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type="password"
                className="form-control rounded-5 rounded-start-0"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn rounded-5 botaoMensagemContactUs mb-2"
              style={{
                backgroundColor: '#00715E',
                color: '#fff',
                width: '100%',
              }}
              onClick={handleLogin}
            >
              Entrar
            </button>

            <div className="cadastrarLogin d-flex justify-content-center">
              <p className="criarConta me-1">Não tem conta? </p>
              <Link href="/cadastro" className="criarConta2">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>

      {cadastroRes != '' ? <Toast conteudo={cadastroRes} tipo={'ok'} /> : ''}

      {conteudoResposta && (
        <Toast conteudo={conteudoResposta} tipo={tipoToast} />
      )}

      {toastExpirado && <Toast conteudo={toastExpirado} tipo={'!ok'} />}

      {mensagem && <p className="mensagem-login">{mensagem}</p>}
    </>
  );
}
