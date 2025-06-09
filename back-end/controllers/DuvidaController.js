import {
  criarDuvida,
  obterDuvidaPorId,
  listarDuvidas,
} from '../models/Noticias.js';

const listarNoticiaController = async (req, res) => {
  try {
    const noticias = await listarDuvidas();
    res.status(200).json(noticias);
  } catch (err) {
    console.error('Erro ao listar notícias:', err);
    res.status(500).json({ message: 'Erro ao listar notícias ' });
  }
};
const obterNoticiaPorIdController = async (req, res) => {
  try {
    const noticia = await obterNoticiaPorId(req.params.id);
    if (noticia) {
      res.json(noticia);
    } else {
      res.status(404).json({ message: 'Notícia não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao obter noticia por ID:', err);
    res.status(500).json({ message: 'Erro ao obter notícia' });
  }
};
export { listarNoticiaController, obterNoticiaPorIdController };
