import {
  listarConsultas,
  obterHorariosPorId,
  obterConsultaPorId,
  criarConsulta,
  atualizarConsulta,
  excluirConsulta,
} from '../models/Consulta.js';

const listarConsultasController = async (req, res) => {
  if (!req.usuarioId) {
    return res.status(401).json({ mensagem: 'Usuário não autenticado' });
  }
  try {
    const usuarioId = req.usuarioId;
    if (!usuarioId) {
      return res.status(401).json({ mensagem: 'Usuário não autenticado' });
    }
    const consultas = await listarConsultas(usuarioId);
    res.status(200).json(consultas);
  } catch (err) {
    console.error(`Erro ao listar consultas: `, err);
    res.status(500).json({ mensagem: 'Erro ao listar consultas' });
  }
};

const listarHorariosController = async (req, res) => {
  if (!req.usuarioId) {
    return res.status(401).json({ mensagem: 'Usuário não autenticado' });
  }
  const { medicoId, usuarioId } = req.query;

  if (!medicoId || !usuarioId) {
    return res.status(400).json({ mensagem: 'Parâmetros insuficientes' });
  }
  try {
    const consultas = await obterHorariosPorId(medicoId, usuarioId);

    const horarios = consultas.map(
      (datasHorarios) => datasHorarios.data_consulta
    );

    res.status(200).json(horarios);
  } catch (err) {
    console.error('Erro ao buscar consultas:', err);
    res.status(500).json({ mensagem: 'Erro ao buscar consultas' });
  }
};

const obterConsultaPorIdController = async (req, res) => {
  try {
    const usuarioId = req.usuarioId;
    const consulta = await obterConsultaPorId(req.params.id);

    if (consulta) {
      if (consulta.usuario_id == usuarioId || consulta.medico_id == usuarioId) {
        res.json(consulta);
      } else {
        res.status(404).json({ mensagem: 'Consulta não encontrada' });
      }
    } else {
      res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao obter consulta por ID:', error);
    res.status(500).json({ mensagem: 'Erro ao obter consulta por ID' });
  }
};

const criarConsultaController = async (req, res) => {
  if (!req.usuarioId) {
    return res.status(401).json({ mensagem: 'Usuário não autenticado' });
  }

  try {
    let {
      tipo,
      titulo,
      descricao,
      data_consulta,
      medico_id,
      usuario_id,
      eConvenio,
      status,
    } = req.body;

    if (
      !tipo ||
      !titulo ||
      !data_consulta ||
      !eConvenio ||
      (tipo === 'medico' && !usuario_id) || // paciente selecionado
      (tipo === 'paciente' && !medico_id) // médico selecionado
    ) {
      return res.status(400).json({
        mensagem: 'Por favor, preencha todos os campos obrigatórios.',
      });
    }

    if (tipo === 'medico') {
      medico_id = req.usuarioId;
    } else if (tipo === 'paciente') {
      usuario_id = req.usuarioId;
    }

    const dataConsultaFormatada = data_consulta.replace(' ', 'T');

    const consultaData = {
      titulo,
      descricao,
      data_consulta: dataConsultaFormatada,
      medico_id,
      usuario_id,
      eConvenio,
      status: status || 'agendada',
    };

    const consultaId = await criarConsulta(consultaData);
    res
      .status(201)
      .json({ mensagem: 'Consulta criada com sucesso', consultaId });
  } catch (error) {
    console.error('Erro ao criar consulta:', error);
    res.status(500).json({ mensagem: 'Erro ao criar consulta' });
  }
};

const atualizarLivroController = async (req, res) => {
  try {
    const consultaId = req.params.id;
    const { titulo, descricao, data_consulta, eConvenio } = req.body;

    const consultaData = {
      titulo: titulo,
      descricao: descricao,
      data_consulta: data_consulta,
      eConvenio: eConvenio,
    };

    await atualizarConsulta(consultaId, consultaData);
    res.status(200).json({ mensagem: 'Consulta atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar Consulta' });
  }
};

const excluirLivroController = async (req, res) => {
  try {
    const consultaId = req.params.id;
    await excluirConsulta(consultaId);
    res.status(200).json({ mensagem: 'Consulta excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir Consulta:', error);
    res.status(500).json({ mensagem: 'Erro ao excluir Consulta' });
  }
};

export {
  listarConsultasController,
  listarHorariosController,
  obterConsultaPorIdController,
  criarConsultaController,
  atualizarLivroController,
  excluirLivroController,
};
