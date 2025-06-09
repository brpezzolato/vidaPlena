'use client';

import './cadastro.css';
import { use, useEffect, useState } from 'react';
import Toast from '@/components/Toast/Toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

const convenioOptions = [
  { value: 'Nenhum', label: 'Não Possuo ou Nenhum desses' },
  { value: 'Bradesco', label: 'Bradesco' },
  { value: 'SulAmérica Saúde', label: 'SulAmérica Saúde' },
  { value: 'Unimed', label: 'Unimed' },
];

export default function Cadastro() {
  const [temConvenio, setConvenio] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoToast, setTipoToast] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOk(true);
  }, []);

  async function cadastro() {
    const dados = JSON.stringify({
      nome,
      email,
      telefone,
      senha,
      temConvenio,
    });

    try {
      const response = await fetch('http://localhost:3001/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dados,
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        }
        localStorage.setItem('toastCadastro', data.mensagem);
        setMensagem('');
        setTipoToast('ok');
        router.push('/login');
      } else {
        setMensagem(data.mensagem || 'Erro ao realizar cadastro');
        setTipoToast('!ok');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMensagem('Erro ao enviar os dados.');
    }
  }

  return (
    <>
      <style>
        {`
        @media (min-width: 790px) {
        body {
            background-image: url('/imgLoginCadastro/fundoCadastroDesktop.png');
            background-position: center 0;
            background-size: 103% 70%;
            background-repeat: no-repeat;
            font-family: 'Poppins', sans-serif !important;
        }}`}
      </style>
      <div className="container">
        <div className="geral d-flex justify-content-end">
          <div className="inputsCadastro">
            <h5 className="tituloCadastro text-center mb-4">Cadastre-se</h5>
            <div className="input-group mb-3 rounded-start-pill rounded-end-pill">
              <span
                className="input-group-text rounded-start-pill"
                id="basic-addon1"
              >
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                className="form-control rounded-5 rounded-start-0"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
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
            <div className="input-group mb-3 rounded-start-pill rounded-end-pill">
              <span
                className="input-group-text rounded-start-pill"
                id="basic-addon1"
              >
                <i className="bi bi-telephone-fill"></i>
              </span>
              <input
                type="number"
                className="form-control rounded-5 rounded-start-0"
                placeholder="Seu Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 rounded-start-pill rounded-end-pill">
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
            {ok && (
              <Select
                classNamePrefix="select-consulta"
                options={convenioOptions}
                value={
                  convenioOptions.find(
                    (option) => option.value === temConvenio
                  ) || null
                }
                onChange={(selectedOption) =>
                  setConvenio(selectedOption ? selectedOption.value : '')
                }
                placeholder="Escolha seu convênio médico"
                isSearchable
              />
            )}

            <button
              type="button"
              className="btn btn rounded-5 botaoMensagemContactUs mt-4"
              style={{
                backgroundColor: '#00715E',
                color: '#fff',
                width: '100%',
              }}
              onClick={cadastro}
            >
              Cadastrar
            </button>

            <div className="cadastrarLogin d-flex justify-content-center mt-3">
              <p className="criarConta me-1">Já tem conta? </p>
              <Link href="/login" className="criarConta2">
                Faça Login
              </Link>
            </div>

            {mensagem && <Toast conteudo={mensagem} tipo={tipoToast} />}
          </div>
        </div>
      </div>
    </>
  );
}
