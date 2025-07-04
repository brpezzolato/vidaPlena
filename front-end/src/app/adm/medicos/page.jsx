'use client';

import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CadastroMedico from '@/components/ModalCdastroMedico/ModalCdastroMedico';
import './styleMedicos.css';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';
import FormatarData from '@/components/FormatarHora/FormatarHora';

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
    width: 250,
    disableColumnMenu: true,
  },
  {
    field: 'celular',
    headerName: 'Celular',
    width: 150,
    disableColumnMenu: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 90,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'temConvenio',
    headerName: 'Convênio',
    width: 110,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'dataCriacao',
    headerName: 'Criado em',
    width: 180,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return <FormatarData data={params.value} />;
    },
  },
  {
    field: 'dataAtualizacao',
    headerName: 'Atualizado em',
    width: 180,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return <FormatarData data={params.value} />;
    },
  },
];

export default function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroCelular, setFiltroCelular] = useState('');
  const [filtroEmail, setEmail] = useState('');

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');

    fetch('http://localhost:3001/pessoas', {
      headers: { Authorization: 'Bearer ' + tokenStorage },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const errorMsg = data.mensagem || 'Erro ao buscar usuários';
          console.error(errorMsg);
          return [];
        }
        return data;
      })
      .then((usuarios) =>
        setUsuarios(usuarios.filter((tipo) => tipo.tipo === 'medico'))
      )
      .catch((error) => {
        console.error('Erro na requisição:', error.message);
        setUsuarios([]);
      });
  }, []);

  const filtrado = usuarios.filter(
    (user) =>
      user.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
      user.celular.toLowerCase().includes(filtroCelular.toLowerCase()) &&
      user.email.toLowerCase().includes(filtroEmail.toLowerCase())
  );

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  return (
    <>
      <RotaProtegida permitido={'adm'}>
        <div className="container total-adm">
          <p className="tituloMedicos mb-3">Lista de Médicos:</p>

          <div className="d-flex flex-wrap gap-3 container-filtro-pacientes mb-5 mb-sm-4 mt-4 mt-sm-0">
            <div className="inputs-filtro-adm">
              <label className="form-label">Filtrar por Nome:</label>
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
              <label className="form-label">Filtrar por Telefone:</label>
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
                  value={filtroCelular}
                  onChange={(e) => setFiltroCelular(e.target.value)}
                />
              </div>
            </div>

            <div className="inputs-filtro-adm">
              <label className="form-label">Filtrar por E-mail:</label>
              <div className="input-group borda-filtro-pacientes">
                <button
                  className="btn btn-filtro-pacientes"
                  type="button"
                  id="button-addon3"
                >
                  <i className="bi bi-envelope-at"></i>
                </button>
                <input
                  id="filtroConvenio"
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  aria-label="Filtrar por convênio"
                  aria-describedby="button-addon3"
                  value={filtroEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="">
            <CadastroMedico />
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
      </RotaProtegida>
    </>
  );
}
