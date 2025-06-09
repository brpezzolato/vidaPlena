'use client';

import React from 'react';
import UserNome from '@/components/UserNome/UserNome';
import './ModalConsulta.css';

export default function ModalConsulta({ evento, tipoUser, onDelete }) {
  const date = new Date(evento.data_consulta);
  const optionsDate = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const dataFormtada = date.toLocaleDateString('pt-BR', optionsDate);
  const horaFormada = date.toLocaleTimeString('pt-BR', optionsTime);

  return (
    <>
      <div
        className="modal fade"
        id={`modalEvento${evento.id}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-top">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex flex-column">
                <h3 className="modal-title">{evento.titulo}</h3>
                <p className="mb-0 opacity-75">
                  {dataFormtada} às {horaFormada}
                </p>
              </div>
              <button
                type="button"
                className="btn-close fechar"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              />
            </div>
            <div className="modal-body modal-config">
              <p>
                <strong>Horário da consulta: </strong> {horaFormada}
              </p>
              <p>
                <strong>Descrição: </strong>
                {evento.descricao}
              </p>
              {tipoUser === 'medico' ? (
                <p>
                  <strong>Paciente(a): </strong>{' '}
                  <UserNome usuario_id={evento.usuario_id} />
                </p>
              ) : tipoUser === 'paciente' ? (
                <p>
                  <strong>Médico(a): </strong>{' '}
                  <UserNome usuario_id={evento.medico_id} />
                </p>
              ) : (
                <p>Usuário não identificado</p>
              )}
              <p>
                <strong>Convênio: </strong> {evento.eConvenio}
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-end">
              <button
                className="btn btn-modal-consulta"
                onClick={() => onDelete(evento.id)}
                data-bs-dismiss="modal"
              >
                Desmarcar ou Excluir
              </button>

              <a
                className="btn btn-modal-consulta"
                href={`/editar/${evento.id}`}
              >
                Editar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
