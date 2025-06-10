import { create, readAll, update, deleteRecord } from '../config/database.js';

const criarDuvida = async (dataDuvida) => {
  try {
    return await create('mensagens_contato', dataDuvida);
  } catch (err) {
    console.error('Erro ao criar dúvida: ', err);
  }
};

const listarDuvidas = async () => {
  try {
    return await readAll('mensagens_contato');
  } catch (err) {
    console.error('Erro ao listar dúvidas: ', err);
    throw err;
  }
};

const editarDuvida = async (id, novoStatus) => {
  try {
    await update('mensagens_contato', novoStatus, `id = ${id}`);
  } catch (error) {
    console.error('Erro ao atualizar Status do chamado: ', error);
    throw error;
  }
};

const excluirDuvida = async (id) => {
  try {
    await deleteRecord('mensagens_contato', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao excluir Chamado: ', error);
    throw error;
  }
};

export { criarDuvida, listarDuvidas, excluirDuvida, editarDuvida };
