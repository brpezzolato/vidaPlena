'use client';

import { useState, useEffect } from 'react';
import './ModalNovaConsultaAdm.css';
import Select from 'react-select';
import FormularioConsulta from '@/components/SelectHora/SelectHora';
import DatePicker from 'react-datepicker';

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

export default function ModalNovaConsultaAdmin() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [dataConsultaDate, setDataConsultaDate] = useState(null);
  const [medicoId, setMedicoId] = useState(null);
  const [pacienteId, setPacienteId] = useState(null);
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [convenio, setConvenio] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [token, setToken] = useState('');
  const [resposta, setResposta] = useState('');

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    setToken(tokenStorage);

    if (!tokenStorage) return;

    fetch('http://localhost:3001/pessoas', {
      headers: { Authorization: 'Bearer ' + tokenStorage },
    })
      .then((res) => res.json())
      .then((data) => {
        setMedicos(data.filter((p) => p.tipo === 'medico'));
        setPacientes(data.filter((p) => p.tipo === 'paciente'));
      })
      .catch(() => setResposta('Erro ao buscar médicos e pacientes.'));
  }, []);

  const adicionarConsulta = async () => {
    if (!medicoId || !pacienteId || !dataConsulta || !horaConsulta) {
      setResposta('Preencha todos os campos obrigatórios.');
      return;
    }

    const dataHoraCompleta = `${dataConsulta}T${horaConsulta}:00`;

    const dados = {
      tipo: 'admin',
      titulo,
      descricao,
      data_consulta: dataHoraCompleta,
      medico_id: Number(medicoId),
      usuario_id: Number(pacienteId),
      eConvenio: convenio,
    };

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
        setResposta(data.mensagem || 'Erro ao criar consulta.');
      } else {
        setResposta('');
        window.location.reload();
      }
    } catch (error) {
      setResposta('Erro ao enviar os dados.');
    }
  };

  return (
    <div
      className="modal fade"
      id="modalNovoConsultaAdm"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-top">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Nova Consulta (Admin)</h2>
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

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Selecionar Médico</label>
                <Select
                  classNamePrefix="select-consulta"
                  options={medicos.map((m) => ({
                    value: m.id,
                    label: m.nome,
                  }))}
                  onChange={(selected) =>
                    setMedicoId(selected ? selected.value : null)
                  }
                  placeholder="Médico"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Selecionar Paciente</label>
                <Select
                  classNamePrefix="select-consulta"
                  options={pacientes.map((p) => ({
                    value: p.id,
                    label: p.nome,
                  }))}
                  onChange={(selected) =>
                    setPacienteId(selected ? selected.value : null)
                  }
                  placeholder="Paciente"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Convênio Médico</label>
                <Select
                  classNamePrefix="select-consulta"
                  options={convenioOptions}
                  value={
                    convenioOptions.find((c) => c.value === convenio) || null
                  }
                  onChange={(selected) =>
                    setConvenio(selected ? selected.value : '')
                  }
                  placeholder="Convênio"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Data</label>
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
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Horário</label>
              <FormularioConsulta
                medicoId={Number(medicoId)}
                pacienteId={Number(pacienteId)}
                dataConsulta={dataConsulta}
                setHoraConsulta={setHoraConsulta}
              />
            </div>

            {resposta && <p className="text-danger">{resposta}</p>}
          </div>
          <div className="modal-footer">
            <button className="btn btn-nova-enviar" onClick={adicionarConsulta}>
              Marcar Consulta <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
