import { create, read, readAll } from '../config/database.js';

const criarUsuario = async (usuarioData) => {
  try {
    return await create('Usuarios', usuarioData);
  } catch (err) {
    console.error('Erro ao criar Usuário: ', err);
  }
};

const obterUsuarioPorId = async (id) => {
  try {
    return await read('Usuarios', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter paciente por ID:', error);
    throw error;
  }
};

const listarUsuarios = async () => {
  try {
    return await readAll('Usuarios');
  } catch (err) {
    console.error('Erro ao listar medicos: ', err);
    throw err;
  }
};

export { criarUsuario, obterUsuarioPorId, listarUsuarios };
