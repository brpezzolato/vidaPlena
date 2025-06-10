'use client';

import { useEffect, useState } from 'react';
import Toast from '@/components/Toast/Toast';
import BotaoNovo from '@/components/BotaoNovo/BotaoNovo';
import { useRouter } from 'next/navigation';
import './ModalCdastroMedico.css';
import Select from 'react-select';

const convenioOptions = [
  { value: 'Nenhum', label: 'Não Possuo ou Nenhum desses' },
  { value: 'Bradesco', label: 'Bradesco' },
  { value: 'SulAmérica Saúde', label: 'SulAmérica Saúde' },
  { value: 'Unimed', label: 'Unimed' },
];

export default function CadastroMedico() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [convenio, setConvenio] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoToast, setTipoToast] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toast = localStorage.getItem('toastCadastro');
    if (toast) {
      setMensagem(toast);
      setTimeout(() => {
        localStorage.removeItem('toastCadastro');
        setMensagem('');
      }, 3500);
    }
    setOk(true);
  }, [nome, email, telefone, senha]);

  useEffect(() => {
    const toast = localStorage.getItem('toastCadastro');
    if (toast) {
      setMensagem(toast);
      setTipoToast('ok');
      setTimeout(() => {
        localStorage.removeItem('toastCadastro');
        setMensagem('');
      }, 3500);
    }
  }, []);

  async function cadastro() {
    const dados = JSON.stringify({
      nome,
      email,
      telefone,
      senha,
      temConvenio: convenio,
      tipo: 'paciente',
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
        localStorage.setItem('toastCadastro', data.mensagem);
        window.location.reload();
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
      .input-group {
        border: solid 1.5px #008872 !important;
      }
      .form-select {
        border: solid 1.5px #008872 !important;
      }`}
      </style>
      {mensagem && <Toast conteudo={mensagem} tipo={tipoToast} />}
      <BotaoNovo
        placeholder={'Cadastrar Novo Paciente'}
        data={'#modalNovoPaciente'}
      />
      <div
        className="modal fade"
        id="modalNovoPaciente"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title titulo-novo-medico"
                id="exampleModalLabel"
              >
                Cadastre um novo Paciente
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="inputsCadastro">
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
                <Select
                  options={convenioOptions}
                  classNamePrefix="select-consulta"
                  value={
                    convenioOptions.find(
                      (opcoes) => opcoes.value === convenio
                    ) || null
                  }
                  onChange={(opcao) => setConvenio(opcao ? opcao.value : '')}
                  placeholder="Convenio"
                  noOptionsMessage={() => 'Nenhum horário disponível'}
                  isClearable
                />
              </div>
            </div>
            <div className="modal-footer pt-0">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
