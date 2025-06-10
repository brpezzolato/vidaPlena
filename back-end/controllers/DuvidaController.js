import {
  criarDuvida,
  listarDuvidas,
  editarDuvida,
  excluirDuvida,
} from '../models/Duvida.js';

const criarDuvidaController = async (req, res) => {
  try {
    const { email, telefone, nome, mensagem } = req.body;

    if (!email || !telefone || !nome || !mensagem) {
      return res
        .status(400)
        .json({ mensagem: 'Preencha todos os campos obrigatórios.' });
    }

    const usuarioData = {
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem,
    };

    await criarDuvida(usuarioData);

    res.status(201).json({
      mensagem:
        'Tudo certo! Sua mensagem foi enviada e logo a gente te responde',
    });
  } catch (error) {
    console.error('Erro ao criar Usuário:', error);
    res.status(500).json({ mensagem: 'Erro ao criar usuário' });
  }
};

const listarDuvidasController = async (req, res) => {
  try {
    const chamados = await listarDuvidas();
    res.status(200).json(chamados);
  } catch (err) {
    console.error('Erro ao listar chamados:', err);
    res.status(500).json({ message: 'Erro ao listar chamados ' });
  }
};

const editarDuvidaController = async (req, res) => {
  try {
    const chamadoId = req.params.id;
    const { status } = req.body;

    const novoStatus = {
      status: status,
    };

    await editarDuvida(chamadoId, novoStatus);
    res.status(200).json({ mensagem: 'Chamado atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar Chamado:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar Chamado' });
  }
};

const excluirDuvidaController = async (req, res) => {
  try {
    const chamadoId = req.params.id;
    await excluirDuvida(chamadoId);
    res.status(200).json({
      mensagem: `Chamado ${chamadoId} excluída com sucesso`,
    });
  } catch (error) {
    console.error('Erro ao excluir Chamado:', error);
    res.status(500).json({ mensagem: 'Erro ao excluir Chamado' });
  }
};

export {
  criarDuvidaController,
  listarDuvidasController,
  excluirDuvidaController,
  editarDuvidaController,
};
