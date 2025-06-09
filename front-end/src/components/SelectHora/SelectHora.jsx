'use client';

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './SelectHora.css';

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
];

export default function FormularioConsulta({
  medicoId,
  pacienteId,
  dataConsulta,
  setHoraConsulta,
}) {
  const [horariosOcupados, setHorariosOcupados] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    if (!medicoId || !dataConsulta) {
      setHorariosOcupados([]);
      setHorarioSelecionado('');
      setHoraConsulta('');
      return;
    }

    const token = localStorage.getItem('token');

    fetch(
      `http://localhost:3001/horarios?medicoId=${medicoId}&usuarioId=${pacienteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data recebida:', data);
        const ocupadosDoDia = data
          .filter((dt) => dt.startsWith(dataConsulta))
          .map((dt) => dt.slice(11, 16));
        setHorariosOcupados(ocupadosDoDia);
        setHorarioSelecionado('');
        setHoraConsulta('');
      })
      .catch((err) => {
        console.error('Erro ao buscar horários:', err);
        setHorariosOcupados([]);
        setHorarioSelecionado('');
        setHoraConsulta('');
      });

    setMontado(true);
  }, [medicoId, dataConsulta, setHoraConsulta]);

  const options = horariosPossiveis
    .filter((horaOcupada) => !horariosOcupados.includes(horaOcupada))
    .map((horaVaga) => ({
      value: horaVaga,
      label: horaVaga,
    }));

  if (!montado)
    return (
      <div>
        <div className="select-consulta-div">
          <p>Indisponível</p>
        </div>
      </div>
    );

  return (
    <div>
      <Select
        options={options}
        classNamePrefix="select-consulta"
        isDisabled={!medicoId || !dataConsulta}
        value={
          options.find((option) => option.value === horarioSelecionado) || null
        }
        onChange={(option) => {
          setHorarioSelecionado(option?.value || '');
          setHoraConsulta(option?.value || '');
        }}
        placeholder={'Selecione'}
        noOptionsMessage={() => 'Nenhum horário disponível'}
      />
    </div>
  );
}
