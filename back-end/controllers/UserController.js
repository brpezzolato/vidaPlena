import { obterUsuarioPorId, listarUsuarios } from '../models/User.js';

const obterUsuarioPorIdController = async (req, res) => {
  try {
    const user = await obterUsuarioPorId(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ mensagem: 'Pessoa não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao obter Pessoa por ID:', error);
    res.status(500).json({ mensagem: 'Erro ao obter Pessoa por ID' });
  }
};

const listarUsuariosController = async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    console.error(`Erro ao listar usuarios: `, err);
    res.status(500).json({ mensagem: 'Erro ao listar usuarios' });
  }
};

export { obterUsuarioPorIdController, listarUsuariosController };
