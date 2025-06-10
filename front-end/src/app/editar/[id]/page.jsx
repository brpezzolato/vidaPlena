'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import UserNome from '@/components/UserNome/UserNome';
import './styleEditar.css';
import DatePicker from 'react-datepicker';
import FormularioConsulta from '@/components/SelectHora/SelectHora';
import NotFound from '@/app/not-found';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

//FUNÇÃO PARA FAZER DATE ANO MES DIA
function formatDate(date) {
  if (!date) return '';
  return date.toISOString().slice(0, 10);
}

export default function AtualizarConsulta() {
  const params = useParams();
  const consultaId = params.id;
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataThora, setDataThora] = useState('');
  const [medico, setMedico] = useState('');
  const [paciente, setPaciente] = useState('');
  const [resposta, setResposta] = useState('');
  const [tipoUser, setTipoUser] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [tipoToast, setTipoToast] = useState('');
  const [convenio, setConvenio] = useState('');
  const [ok, setOk] = useState(false);
  const [userStorage, setUserStorage] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [dataConsultaDate, setDataConsultaDate] = useState(null);
  const [horaConsulta, setHoraConsulta] = useState('');
  const [horaConsultaAntiga, setHoraConsultaAntiga] = useState('');

  // Pegar as informações da consulta
  useEffect(() => {
    const tipo = localStorage.getItem('tipo');
    const userId = localStorage.getItem('userId');
    setTipoUser(tipo);
    setUserStorage(userId);

    const token = localStorage.getItem('token');
    fetch(`http://localhost:3001/consultas/${consultaId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403 || res.status === 404) {
          const mensagem = await res.json();
          setResposta(mensagem.mensagem || 'Erro');
          setNotFound(true);
          return;
        }
        const data = await res.json();
        setTitulo(data.titulo || '');
        setMedico(data.medico_id);
        setPaciente(data.usuario_id);
        setDescricao(data.descricao || '');
        setConvenio(data.eConvenio || '');

        if (data.data_consulta) {
          setDataThora(data.data_consulta);
          const dt = new Date(data.data_consulta);
          setDataConsultaDate(dt);
          setDataConsulta(formatDate(dt));

          const hora = dt.toTimeString().slice(0, 5);
          setHoraConsulta(hora);
          setHoraConsultaAntiga(hora);
        }
      })
      .catch(() => setNotFound(true));

    setOk(true);
  }, [consultaId]);

  // Função para atualizar consulta
  async function atualizarConsulta() {
    if (!titulo.trim() || !descricao.trim() || !dataConsulta || !horaConsulta) {
      setResposta('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const token = localStorage.getItem('token');

    const dataHoraCompleta = `${dataConsulta}T${horaConsulta}:00`;

    const dados = {
      titulo,
      descricao,
      data_consulta: dataHoraCompleta,
      eConvenio: convenio,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/consultas/${consultaId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify(dados),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('toast', data.mensagem);
        setTipoToast('ok');
        router.push('/calendario');
      } else {
        const text = await response.text();
        setResposta('Erro ao atualizar: ' + text);
      }
    } catch {
      setResposta('Erro ao enviar os dados.');
    }
  }

  if (notFound) {
    return <NotFound />;
  }

  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente']}>
        <div className="container">
          <div className="tudo-editar">
            <div className="row">
              <h1 className="titulo-editar">Atualizar Consulta</h1>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <div className="campos-sobre-imagem ps-3 w-100">
                  {tipoUser === 'medico' ? (
                    <label className="form-label etiqueta">
                      Paciente (apenas leitura):
                    </label>
                  ) : tipoUser === 'paciente' ? (
                    <label className="form-label etiqueta">
                      Médico (apenas leitura):
                    </label>
                  ) : (
                    'Usuário não identificado'
                  )}
                  <div className="input-padrao-editar2">
                    <p>
                      {tipoUser === 'medico' ? (
                        <UserNome usuario_id={Number(paciente)} />
                      ) : tipoUser === 'paciente' ? (
                        <UserNome usuario_id={Number(medico)} />
                      ) : (
                        'Usuário não identificado'
                      )}
                    </p>
                  </div>

                  <label className="form-label etiqueta">
                    Convênio (apenas leitura):
                  </label>
                  <div className="input-padrao-editar2">
                    <p>{convenio}</p>
                  </div>
                </div>

                <img
                  src="/imgEditar/editar.png"
                  alt="Editar"
                  className="img-fluid img-fundo-editar mt-3 d-none d-md-flex"
                />
              </div>

              <div className="col-12 col-md-6">
                <div className="form-container-editar">
                  <label className="form-label etiqueta">Título: </label>
                  <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    className="form-control input-padrao-editar"
                  />

                  <label className="form-label etiqueta">Descrição: </label>
                  <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                    className="form-control input-padrao-editar"
                  />

                  <label className="form-label etiqueta">
                    Data da Consulta:{' '}
                  </label>
                  <DatePicker
                    selected={dataConsultaDate}
                    onChange={(date) => {
                      setDataConsultaDate(date);
                      setDataConsulta(formatDate(date));
                    }}
                    filterDate={(date) =>
                      date.getDay() !== 0 && date.getDay() !== 6
                    }
                    placeholderText="Selecione a data"
                    className="form-control input-nova"
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    isClearable={false}
                  />

                  <label className="form-label etiqueta">
                    Hora da Consulta (Atual: {horaConsultaAntiga}):
                  </label>
                  {tipoUser === 'paciente' ? (
                    <FormularioConsulta
                      medicoId={Number(medico)}
                      pacienteId={Number(userStorage)}
                      dataConsulta={dataConsulta}
                      setHoraConsulta={setHoraConsulta}
                    />
                  ) : (
                    <FormularioConsulta
                      medicoId={Number(userStorage)}
                      pacienteId={Number(paciente)}
                      dataConsulta={dataConsulta}
                      setHoraConsulta={setHoraConsulta}
                    />
                  )}
                </div>

                <button
                  className="btn-atualizar-editar"
                  onClick={atualizarConsulta}
                >
                  Atualizar Consulta
                </button>

                <pre id="responseContent">{resposta}</pre>

                <img
                  src="/imgEditar/editar.png"
                  alt="Editar"
                  className="img-fluid img-fundo-editar mt-3 d-flex d-md-none"
                />
              </div>
            </div>
          </div>
        </div>
      </RotaProtegida>
    </>
  );
}
