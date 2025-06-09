import {
  create,
  deleteRecord,
  readAll,
  read,
  update,
} from '../config/database.js';

const listarConsultas = async (userId) => {
  try {
    return await readAll(
      'Consultas',
      `usuario_id = ${userId} OR medico_id = ${userId}`
    );
  } catch (err) {
    console.error('Erro ao listar consultas: ', err);
    throw err;
  }
};

const obterHorariosPorId = async (medico_id, usuario_id) => {
  try {
    return await readAll(
      'Consultas',
      `medico_id = ${medico_id} OR usuario_id = ${usuario_id}`
    );
  } catch (error) {
    console.error('Erro ao obter consultas:', error);
    throw error;
  }
};

const obterConsultaPorId = async (id) => {
  try {
    return await read('Consultas', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter livro por ID:', error);
    throw error;
  }
};

const criarConsulta = async (consultaData) => {
  try {
    return await create('Consultas', consultaData);
  } catch (err) {
    console.error('Erro ao criar consulta: ', err);
  }
};

const atualizarConsulta = async (id, consultaData) => {
  try {
    await update('Consultas', consultaData, `id = ${id}`);
  } catch (error) {
    console.error('Erro ao atualizar Consulta: ', error);
    throw error;
  }
};

const excluirConsulta = async (id) => {
  try {
    await deleteRecord('Consultas', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao excluir Consulta: ', error);
    throw error;
  }
};

export {
  listarConsultas,
  obterHorariosPorId,
  obterConsultaPorId,
  criarConsulta,
  atualizarConsulta,
  excluirConsulta,
};
