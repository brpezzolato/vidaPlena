'use client';

import { useState, useEffect } from 'react';
import './ModalNovaConsulta.css';
import Select from 'react-select';
import FormularioConsulta from '@/components/SelectHora/SelectHora';
import DatePicker from 'react-datepicker';

//FUNÇÃO PARA FAZER DATE ANO MES DIA
function formatDate(date) {
  if (!date) return '';
  return date.toISOString().slice(0, 10);
}

const convenioOptions = [
  { value: 'Nenhum', label: 'Não Possuo ou Nenhum desses' },
  { value: 'Bradesco', label: 'Bradesco' },
  { value: 'SulAmérica Saúde', label: 'SulAmérica Saúde' },
  { value: 'Unimed', label: 'Unimed' },
];

export default function ModalNovaConsulta() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [dataConsultaDate, setDataConsultaDate] = useState(null);
  const [userId, setUserId] = useState(null);
  const [pessoas, setPessoas] = useState([]);
  const [token, setToken] = useState('');
  const [tipo, setTipo] = useState('');
  const [resposta, setResposta] = useState('');
  const [convenio, setConvenio] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [userStorage, setUserStorage] = useState(null);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    const tipoStorage = localStorage.getItem('tipo');
    const convenioStorage = localStorage.getItem('convenio');
    const user = localStorage.getItem('userId');

    setToken(tokenStorage);
    setTipo(tipoStorage);
    setConvenio(convenioStorage);
    setOk(true);
    setUserStorage(user ? Number(user) : null);
  }, []);

  useEffect(() => {
    if (!token) return;

    fetch(`http://localhost:3001/pessoas`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          setResposta(data.mensagem || 'Erro ao buscar pessoas');
          return;
        }
        if (tipo === 'paciente') {
          const arrayMedico = data.filter((item) => item.tipo === 'medico');
          setPessoas(arrayMedico);
        } else if (tipo === 'medico') {
          const arrayPacientes = data.filter(
            (item) => item.tipo === 'paciente'
          );
          setPessoas(arrayPacientes);
        }
      })
      .catch(() => {
        setResposta('Erro ao buscar pessoas');
      });
  }, [token, tipo]);

  useEffect(() => {
    setResposta('');
  }, [titulo, descricao, userId, dataConsulta, horaConsulta, convenio]);

  const adicionarConsulta = async () => {
    if (!userId || !dataConsulta || !horaConsulta) {
      setResposta('Por favor, preencha médico, data e horário.');
      return;
    }

    const dataHoraCompleta = `${dataConsulta}T${horaConsulta}:00`;

    let dados;

    if (tipo === 'medico') {
      dados = {
        tipo: 'medico',
        titulo,
        descricao,
        data_consulta: dataHoraCompleta,
        usuario_id: Number(userId),
        eConvenio: convenio,
      };
    } else if (tipo === 'paciente') {
      dados = {
        tipo: 'paciente',
        titulo,
        descricao,
        data_consulta: dataHoraCompleta,
        medico_id: Number(userId),
        eConvenio: convenio,
      };
    }

    try {
      const response = await fetch('http://localhost:3001/consultas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(dados),
      });

      const data = await response.json();

      if (!response.ok) {
        setResposta(data.mensagem || 'Não foi possível criar a consulta');
      } else {
        setResposta('');
        window.location.reload();
      }
    } catch (error) {
      console.error('Erro:', error);
      setResposta('Erro ao enviar os dados.');
    }
  };

  const selectedValue =
    pessoas
      .map((p) => ({ value: p.id, label: p.nome }))
      .find((op) => op.value === Number(userId)) || null;

  const medicoIdParaFormulario =
    tipo === 'paciente' ? Number(userId) || null : Number(userStorage) || null;

  const pacienteIdParaFormulario =
    tipo === 'paciente' ? Number(userStorage) || null : Number(userId) || null;

  return (
    <>
      <div
        className="modal fade"
        id="modalCriar"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-top">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex flex-column">
                <h2 className="modal-title">Marcar Nova Consulta</h2>
              </div>
              <button
                type="button"
                className="btn-close fechar"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              />
            </div>
            <div className="modal-body modal-config">
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control input-nova"
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <input
                  type="text"
                  className="form-control input-nova"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              {ok && (
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">
                      {tipo === 'medico'
                        ? 'Selecione o paciente'
                        : 'Selecione o médico'}
                    </label>
                    <Select
                      classNamePrefix="select-consulta"
                      options={pessoas.map((p) => ({
                        value: p.id,
                        label: p.nome,
                      }))}
                      value={selectedValue}
                      onChange={(selectedOption) =>
                        setUserId(
                          selectedOption ? Number(selectedOption.value) : null
                        )
                      }
                      placeholder={tipo === 'medico' ? 'Paciente' : 'Médico'}
                      isSearchable
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Convênio Médico: </label>
                    <Select
                      classNamePrefix="select-consulta"
                      options={
                        tipo === 'paciente'
                          ? convenioOptions.filter(
                              (option) => option.value === convenio
                            )
                          : convenioOptions
                      }
                      value={
                        convenioOptions.find(
                          (option) => option.value === convenio
                        ) || null
                      }
                      onChange={(selectedOption) => {
                        if (tipo !== 'paciente') {
                          setConvenio(
                            selectedOption ? selectedOption.value : ''
                          );
                        }
                      }}
                      placeholder="Escolha seu convênio médico"
                      isSearchable={tipo === 'medico'}
                    />
                  </div>
                </div>
              )}

              <div className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Data da Consulta: </label>
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
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Hora da Consulta: </label>
                      {tipo === 'paciente' ? (
                        <FormularioConsulta
                          medicoId={medicoIdParaFormulario}
                          pacienteId={pacienteIdParaFormulario}
                          dataConsulta={dataConsulta}
                          setHoraConsulta={setHoraConsulta}
                        />
                      ) : (
                        <FormularioConsulta
                          medicoId={medicoIdParaFormulario}
                          pacienteId={pacienteIdParaFormulario}
                          dataConsulta={dataConsulta}
                          setHoraConsulta={setHoraConsulta}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {resposta && <p className="text-danger">{resposta}</p>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-nova-enviar"
                onClick={adicionarConsulta}
              >
                Marcar consulta <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
