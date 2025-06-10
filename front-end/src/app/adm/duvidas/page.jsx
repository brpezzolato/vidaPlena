'use client';

import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './styleDuvidas.css';
import Select from 'react-select';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';
import FormatarData from '@/components/FormatarHora/FormatarHora';
import ModalChamado from '@/components/ModalChamado/ModalChamado';

const statusSelect = [
  { value: 'Resolvida', label: 'Resolvida' },
  { value: 'Pendente', label: 'Pendente' },
];

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    disableColumnMenu: true,
  },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 160,
    disableColumnMenu: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 220,
    disableColumnMenu: true,
  },
  {
    field: 'telefone',
    headerName: 'Telefone',
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: 'mensagem',
    headerName: 'Mensagem',
    width: 300,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'dataEnvio',
    headerName: 'Enviado Em',
    width: 155,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return <FormatarData data={params.value} />;
    },
  },
  {
    field: 'vizualizar',
    headerName: 'Vizualizar/Editar',
    width: 130,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <button
        type="button"
        className="btn ms-4"
        data-bs-toggle="modal"
        data-bs-target={`#chamadoModal${params.id}`}
      >
        <i className="bi bi-eye-fill"></i>
      </button>
    ),
  },
];

export default function TabelaUsuarios() {
  const [chamados, setChamados] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroEmail, setFiltroEmail] = useState('');
  const [filtroMensagem, setFiltroMensagem] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3001/chamados', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const errorMsg = data.mensagem || 'Erro ao buscar usuários';
          console.error(errorMsg);
          return [];
        }
        setChamados(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error.message);
        setChamados([]);
      });
  }, []);

  const filtrado = chamados.filter((user) => {
    const nome = user.nome || '';
    const email = user.email || '';
    const mensagem = user.mensagem || '';
    const status = user.status || '';

    return (
      nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
      email.toLowerCase().includes(filtroEmail.toLowerCase()) &&
      mensagem.toLowerCase().includes(filtroMensagem.toLowerCase()) &&
      status.toLowerCase().includes(filtroStatus.toLowerCase())
    );
  });

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const excluirChamado = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:3001/chamados/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        window.location.replace('/adm/duvidas');
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  async function atualizarStatus(id, novoStatus) {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:3001/chamados/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: novoStatus }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.replace('/adm/duvidas');
      } else {
        console.error('Erro ao atualizar:', data);
      }
    } catch (err) {
      console.error('Erro ao enviar:', err);
    }
  }

  return (
    <>
      {filtrado.map((chamado) => (
        <ModalChamado
          key={chamado.id}
          chamado={chamado}
          editar={atualizarStatus}
          excluir={excluirChamado}
        />
      ))}
      <RotaProtegida permitido={'adm'}>
        <div className="container total-adm">
          <p className="tituloMedicos mb-3">Lista de Chamados:</p>

          <div className="d-flex flex-wrap gap-3 container-filtro-pacientes mb-5 mb-sm-4 mt-4 mt-sm-0">
            <div className="inputs-filtro-adm">
              <label className="form-label">Filtrar pelo Nome do autor:</label>
              <div className="input-group borda-filtro-pacientes">
                <button
                  className="btn btn-filtro-pacientes"
                  type="button"
                  id="button-addon1"
                >
                  <i className="bi bi-person-badge"></i>
                </button>
                <input
                  id="filtroNome"
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  aria-label="Filtrar por nome"
                  aria-describedby="button-addon1"
                  value={filtroNome}
                  onChange={(e) => setFiltroNome(e.target.value)}
                />
              </div>
            </div>

            <div className="inputs-filtro-adm">
              <label className="form-label">
                Filtrar por Telefone do autor:
              </label>
              <div className="input-group borda-filtro-pacientes">
                <button
                  className="btn btn-filtro-pacientes"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-telephone-fill"></i>
                </button>
                <input
                  id="filtroCelular"
                  type="text"
                  className="form-control"
                  placeholder="Telefone"
                  aria-label="Filtrar por celular"
                  aria-describedby="button-addon2"
                  value={filtroEmail}
                  onChange={(e) => setFiltroEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="inputs-filtro-adm">
              <label className="form-label">Filtrar pelo conteudo:</label>
              <div className="input-group borda-filtro-pacientes">
                <button
                  className="btn btn-filtro-pacientes"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-pen-fill"></i>
                </button>
                <input
                  id="filtroCelular"
                  type="text"
                  className="form-control"
                  placeholder="Palavra-Chave"
                  aria-label="Filtrar pelo conteudo"
                  aria-describedby="button-addon2"
                  value={filtroMensagem}
                  onChange={(e) => setFiltroMensagem(e.target.value)}
                />
              </div>
            </div>

            <div className="inputs-filtro-adm">
              <label className="form-label">Filtrar por Status:</label>
              <div className="input-group">
                <Select
                  options={statusSelect}
                  classNamePrefix="select-consulta2"
                  value={
                    statusSelect.find(
                      (opcao) => opcao.value === filtroStatus
                    ) || null
                  }
                  onChange={(opcaoSelecionada) =>
                    setFiltroStatus(
                      opcaoSelecionada ? opcaoSelecionada.value : ''
                    )
                  }
                  placeholder="Selecione"
                  isClearable
                />
              </div>
            </div>
          </div>

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
      </RotaProtegida>
    </>
  );
}
