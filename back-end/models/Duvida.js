import { create, read, readAll } from '../config/database.js';

const criarDuvida = async (dataDuvida) => {
  try {
    return await create('Usuarios', dataDuvida);
  } catch (err) {
    console.error('Erro ao criar dúvida: ', err);
  }
};

const obterDuvidaPorId = async (id) => {
  try {
    return await read('Usuarios', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter paciente por ID:', error);
    throw error;
  }
};

const listarDuvidas = async () => {
  try {
    return await readAll('Usuarios');
  } catch (err) {
    console.error('Erro ao listar medicos: ', err);
    throw err;
  }
};

export { criarDuvida, obterDuvidaPorId, listarDuvidas };
