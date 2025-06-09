'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Toast from '@/components/Toast/Toast';

import 'react-datepicker/dist/react-datepicker.css';
import './styleConsultas.css';

function mesmaData(data, data2) {
  return (
    data.getFullYear() === data2.getFullYear() &&
    data.getMonth() === data2.getMonth() &&
    data.getDate() === data2.getDate()
  );
}

export default function TabelaConsultas() {
  const router = useRouter();

  const horariosPossiveis = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ].map((hora) => ({ value: hora, label: hora }));

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    {
      field: 'titulo',
      headerName: 'Título',
      width: 200,
      disableColumnMenu: true,
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      width: 250,
      disableColumnMenu: true,
    },
    {
      field: 'dataFormatada',
      headerName: 'Data',
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: 'horaFormatada',
      headerName: 'Hora',
      width: 100,
      disableColumnMenu: true,
    },
    {
      field: 'medico_id',
      headerName: 'ID Médico',
      width: 110,
      disableColumnMenu: true,
    },
    {
      field: 'usuario_id',
      headerName: 'ID Paciente',
      width: 120,
      disableColumnMenu: true,
    },
    {
      field: 'eConvenio',
      headerName: 'Convênio',
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 90,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button
          className="btn"
          onClick={() => router.push(`/adm/consultas/${params.row.id}`)}
          title="Editar consulta"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
      ),
    },
    {
      field: 'excluir',
      headerName: 'Excluir',
      width: 90,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <button
          className="btn"
          onClick={() => excluirConsulta(params.id)}
          title="Excluir Consulta"
        >
          <i className="bi bi-trash3"></i>
        </button>
      ),
    },
  ];

  const [consultas, setConsultas] = useState([]);
  const [filtroData, setFiltroData] = useState(null);
  const [filtroHora, setFiltroHora] = useState('');
  const [filtroMedicoId, setFiltroMedicoId] = useState('');
  const [filtroPacienteId, setFiltroPacienteId] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [updateRes, setUpdateRes] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const mensagem = localStorage.getItem('toast');
    if (mensagem) {
      setUpdateRes(mensagem);

      setTimeout(() => {
        localStorage.removeItem('toast');
        setUpdateRes('');
      }, 3500);
    }

    const token = localStorage.getItem('token');

    fetch(`http://localhost:3001/todasadm`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.mensagem || 'Erro');

        const agora = new Date();

        const futurasConsultas = data.filter((consulta) => {
          const dataConsulta = new Date(consulta.data_consulta);
          return dataConsulta >= agora;
        });

        const consultasComDataHora = futurasConsultas.map((consulta) => {
          const dataConsulta = new Date(consulta.data_consulta);
          return {
            ...consulta,
            dataConsulta,
            dataFormatada: dataConsulta.toLocaleDateString('pt-BR'),
            horaFormatada: dataConsulta.toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          };
        });

        setConsultas(consultasComDataHora);
      })
      .catch((err) => console.error('Erro na requisição:', err));
  }, []);

  if (!isClient) return null;

  const filtrado = consultas.filter((consulta) => {
    const dataValida = filtroData
      ? mesmaData(consulta.dataConsulta, filtroData)
      : true;

    return (
      dataValida &&
      consulta.horaFormatada.includes(filtroHora) &&
      consulta.medico_id.toString().includes(filtroMedicoId) &&
      consulta.usuario_id.toString().includes(filtroPacienteId)
    );
  });

  const excluirConsulta = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:3001/consultas/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('toast', data.mensagem);
        window.location.replace('/adm/consultas');
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  return (
    <>
      <style>{`p { margin: 0; }`}</style>

      {updateRes != '' ? <Toast conteudo={updateRes} tipo={'ok'} /> : ''}

      <div className="container total-adm">
        <p className="tituloMedicos mb-3">Lista de Consultas:</p>

        <div className="d-flex flex-wrap gap-3 container-filtro-pacientes mb-5 mb-sm-4 mt-4 mt-sm-0">
          <div className="inputs-filtro-adm adm-datepicker">
            <label htmlFor="filtroData" className="form-label">
              Filtrar por Data:
            </label>
            <DatePicker
              id="filtroData"
              selected={filtroData}
              onChange={(date) => setFiltroData(date)}
              filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
              placeholderText="Selecione a data"
              className="form-control input-nova"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable={false}
            />
          </div>

          <div className="inputs-filtro-adm">
            <label htmlFor="filtroHora" className="form-label">
              Filtrar por Hora:
            </label>
            <Select
              options={horariosPossiveis}
              classNamePrefix="select-consulta"
              value={
                horariosPossiveis.find(
                  (opcoes) => opcoes.value === filtroHora
                ) || null
              }
              onChange={(opcao) => setFiltroHora(opcao ? opcao.value : '')}
              placeholder="Selecione"
              noOptionsMessage={() => 'Nenhum horário disponível'}
              isClearable
            />
          </div>

          <div className="inputs-filtro-adm">
            <label htmlFor="filtroMedicoId" className="form-label">
              Filtrar por ID Médico:
            </label>
            <input
              id="filtroMedicoId"
              type="text"
              className="form-control input-consulta"
              placeholder="ID Médico"
              value={filtroMedicoId}
              onChange={(e) => setFiltroMedicoId(e.target.value)}
            />
          </div>

          <div className="inputs-filtro-adm">
            <label htmlFor="filtroPacienteId" className="form-label">
              Filtrar por ID Paciente:
            </label>
            <input
              id="filtroPacienteId"
              type="text"
              className="form-control input-consulta"
              placeholder="ID Paciente"
              value={filtroPacienteId}
              onChange={(e) => setFiltroPacienteId(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-sm-5">
          <DataGrid
            rows={filtrado}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[10, 15, 20]}
            getRowId={(row) => row.id}
            disableRowSelectionOnClick
          />
        </div>
      </div>
    </>
  );
}
