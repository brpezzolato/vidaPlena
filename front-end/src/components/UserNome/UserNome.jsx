'use client';

import React, { useEffect, useState } from 'react';

export default function PacienteNome({ usuario_id }) {
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`http://localhost:3001/pessoas/${usuario_id}`, {
      headers: { Authorization: 'Bearer ' + token },
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          const errorMsg = data.mensagem || 'Erro ao buscar usuario';
          throw new Error(errorMsg);
        }

        return data;
      })
      .then((data) => setPaciente(data))
      .catch((error) => setPaciente({ nome: error.message }));
  }, [usuario_id]);

  return paciente ? paciente.nome : 'Carregando...';
}
