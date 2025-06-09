import { create, readAll } from '../config/database.js';

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

export { criarDuvida, listarDuvidas };
