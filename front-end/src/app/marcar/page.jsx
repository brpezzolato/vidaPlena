'use client';

import { useState } from 'react';

export default function AdicionarConsulta() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataThora, setDataThora] = useState('');
  const [local, setLocal] = useState('');
  const [profissional, setProfissional] = useState('');
  const [resposta, setResposta] = useState('');

  async function adicionarConsulta() {
    const token = localStorage.getItem('token');

    const dados = {
      titulo,
      descricao,
      data_consulta: dataThora,
      local,
      profissional,
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

      const text = await response.text();

      try {
        const data = JSON.parse(text);
        setResposta(JSON.stringify(data, null, 2));
      } catch {
        setResposta('Resposta não é JSON: ' + text);
      }
    } catch (error) {
      console.error('Erro:', error);
      setResposta('Erro ao enviar os dados.');
    }
  }

  return (
    <div>
      <h1>Adicionar Consulta</h1>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <br />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        placeholder="Data e Hora"
        value={dataThora}
        onChange={(e) => setDataThora(e.target.value)}
        step={1800}
      />
      <br />
      <input
        type="text"
        placeholder="Local"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Profissional"
        value={profissional}
        onChange={(e) => setProfissional(e.target.value)}
      />
      <br />
      <button onClick={adicionarConsulta}>Adicionar Consulta</button>

      <pre id="responseContent">{resposta}</pre>
    </div>
  );
}
