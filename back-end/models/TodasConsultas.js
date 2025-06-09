import { read, readAll } from '../config/database.js';

const listarTodasConsultas = async () => {
  try {
    return await readAll('Consultas');
  } catch (err) {
    console.error('Erro ao listar consultas: ', err);
    throw err;
  }
};

const obterTodasConsultaPorId = async (id) => {
  try {
    return await read('Consultas', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter consulta por ID:', error);
    throw error;
  }
};

export { listarTodasConsultas, obterTodasConsultaPorId };
