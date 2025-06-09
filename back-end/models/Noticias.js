import { read, readAll } from '../config/database.js';

const listarNoticia = async () => {
  try {
    return await readAll('noticias');
  } catch (err) {
    console.error('Erro ao listar notícias:', err);
    throw err;
  }
};

const obterNoticiaPorId = async (id) => {
  try {
    return await read('noticias', `id = ${id}`);
  } catch (err) {
    console.error('Erro obter notícia por ID:', err);
    throw err;
  }
};
export { listarNoticia, obterNoticiaPorId };
