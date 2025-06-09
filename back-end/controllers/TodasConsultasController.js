import {
  listarTodasConsultas,
  obterTodasConsultaPorId,
} from '../models/TodasConsultas.js';

const listarTodasConsultasController = async (req, res) => {
  if (!req.usuarioId) {
    return res.status(401).json({ mensagem: 'Usuário não autenticado' });
  }
  try {
    const consultas = await listarTodasConsultas();
    res.status(200).json(consultas);
  } catch (err) {
    console.error(`Erro ao listar consultas: `, err);
    res.status(500).json({ mensagem: 'Erro ao listar consultas' });
  }
};

const obterTodasConsultaPorIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const consulta = await obterTodasConsultaPorId(id);
    if (!consulta) {
      return res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }
    res.status(200).json(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
};

export { listarTodasConsultasController, obterTodasConsultaPorIdController };
