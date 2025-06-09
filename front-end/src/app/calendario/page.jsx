'use client';

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBr from '@fullcalendar/core/locales/pt-br';
import interactionPlugin from '@fullcalendar/interaction';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast/Toast';
import ModalConsulta from '@/components/ModalConsulta/ModalConsulta';
import ModalNovaConsulta from '@/components/ModalNovaConsulta/ModalNovaConsulta';
import './style.css';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function CalendarioComModais() {
  const [consulta, setConsulta] = useState([]);
  const [tipoUser, setTipoUser] = useState([]);
  const [nome, setNome] = useState([]);
  const [updateRes, setUpdateRes] = useState('');
  const router = useRouter();

  useEffect(() => {
    const tipo = localStorage.getItem('tipo');
    setTipoUser(tipo);

    const nome = localStorage.getItem('nome');
    setNome(nome);

    const mensagem = localStorage.getItem('toast');
    if (mensagem) {
      setUpdateRes(mensagem);

      setTimeout(() => {
        localStorage.removeItem('toast');
        setUpdateRes('');
      }, 3500);
    }
  }, []);

  const carregarConsultas = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/consultas', {
        headers: { Authorization: 'Bearer ' + token },
      });

      if (res.status === 498) {
        localStorage.removeItem('token');
        localStorage.setItem(
          'toastExpirado',
          'Login expirado, realize-o novamente'
        );
        router.push('/login');
        return;
      }

      const data = await res.json();

      const consultaFormatados = data.map((consulta) => ({
        ...consulta,
        title: consulta.titulo,
        start: consulta.data_consulta,
      }));

      setConsulta(consultaFormatados);
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
    }
  };

  useEffect(() => {
    carregarConsultas();
  }, []);

  const excluirConsulta = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:3001/consultas/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        await carregarConsultas();
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };
  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente']}>
        <div className="container mt-4 ps-3 pb-5">
          {tipoUser === 'medico' ? (
            <h1 className="titulo-calendario d-flex flex-wrap m-sm-0">
              Olá, <span className="ms-0 ms-md-2">{nome}</span>
            </h1>
          ) : tipoUser === 'paciente' ? (
            <h1 className="titulo-calendario d-flex flex-wrap">
              Bem vindo, <span className="ms-0 ms-md-3">{nome}</span>
            </h1>
          ) : (
            <h1 className="titulo-calendario d-flex flex-wrap">
              Usuário não identificado
            </h1>
          )}
          <div className="d-flex d-md-none btn-responsivo">
            <button
              type="button"
              className="modal-btn criar-btn mb-4"
              data-bs-toggle="modal"
              data-bs-target="#modalCriar"
            >
              Marcar Consulta <i className="bi bi-plus-lg" />
            </button>
          </div>
          <div className="container-botao d-md-flex d-none justify-content-end align-items-center">
            <button
              type="button"
              className="modal-btn criar-btn mb-4"
              data-bs-toggle="modal"
              data-bs-target="#modalCriar"
            >
              Marcar Consulta<i className="bi bi-plus"></i>
            </button>
          </div>
          <ModalNovaConsulta />
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={consulta}
            locale={ptBr}
            eventDataTransform={(transform) => ({
              ...transform,
              title: transform.titulo,
              start: transform.data_consulta,
            })}
            eventContent={(consulta) => (
              <button
                type="button"
                className="modal-btn"
                data-bs-toggle="modal"
                data-bs-target={`#modalEvento${consulta.event.id}`}
              >
                {consulta.event.title}
              </button>
            )}
            eventDidMount={(info) => {
              info.el.style.backgroundColor = 'transparent';
              info.el.style.border = 'none';
            }}
            height="auto"
          />
        </div>

        {updateRes != '' ? <Toast conteudo={updateRes} tipo={'ok'} /> : ''}

        {consulta.map((evento) => (
          <ModalConsulta
            key={evento.id}
            tipoUser={tipoUser}
            evento={evento}
            onDelete={excluirConsulta}
          />
        ))}
      </RotaProtegida>
    </>
  );
}
