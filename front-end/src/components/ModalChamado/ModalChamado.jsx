'use client';

import './ModalChamado.css';
import FormatarData from '@/components/FormatarHora/FormatarHora';
import Select from 'react-select';
import { useState } from 'react';

export default function ModalChamado({ chamado, editar, excluir }) {
  const statusSelect = [
    { value: 'Resolvida', label: 'Resolvida' },
    { value: 'Pendente', label: 'Pendente' },
  ];

  const [statusSelecionado, setStatusSelecionado] = useState(chamado.status);

  return (
    <div
      className="modal fade"
      id={`chamadoModal${chamado.id}`}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-top">
        <div className="modal-content">
          <div className="modal-header">
            <div className="titulo-sub-chamado">
              <h2 className="modal-title">Chamado de {chamado.nome}</h2>
              <p className="mb-0">
                Data de Envio: <FormatarData data={chamado.dataEnvio} />
              </p>
            </div>
            <button
              type="button"
              className="btn btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            />
          </div>
          <div className="modal-body">
            <label htmlFor="filtroCelular" className="form-label">
              Filtrar pelo conteudo:
            </label>
            <input
              id="filtroCelular"
              type="text"
              className="form-control"
              placeholder="Palavra-Chave"
              aria-label="Filtrar pelo conteudo"
              aria-describedby="button-addon2"
              readOnly
              value={chamado.email}
            />
            <label htmlFor="filtroCelular" className="form-label">
              Filtrar pelo conteudo:
            </label>
            <input
              id="filtroCelular"
              type="text"
              className="form-control"
              placeholder="Palavra-Chave"
              aria-label="Filtrar pelo conteudo"
              aria-describedby="button-addon2"
              readOnly
              value={chamado.telefone}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Status:
            </label>
            <Select
              options={statusSelect}
              classNamePrefix="select-consulta2"
              value={
                statusSelect.find(
                  (opcao) => opcao.value === statusSelecionado
                ) || null
              }
              onChange={(opcaoSelecionada) =>
                setStatusSelecionado(
                  opcaoSelecionada ? opcaoSelecionada.value : ''
                )
              }
              placeholder="Selecione"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mensagem:
            </label>
            <textarea
              className="form-control h-auto msg-chamado-modal"
              placeholder="Mensagem"
              id="floatingTextarea"
              value={chamado.mensagem}
              readOnly
            />
          </div>
          <div className="modal-footer d-flex justify-content-end gap-2">
            <button
              className="editar-modal-chamado"
              onClick={() => excluir(chamado.id)}
              data-bs-dismiss="modal"
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
            <button
              className="excluir-modal-chamado"
              onClick={() => editar(chamado.id, statusSelecionado)}
              data-bs-dismiss="modal"
            >
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
