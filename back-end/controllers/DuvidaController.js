import { criarDuvida, listarDuvidas } from '../models/Duvida.js';

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
    const noticias = await listarDuvidas();
    res.status(200).json(noticias);
  } catch (err) {
    console.error('Erro ao listar notícias:', err);
    res.status(500).json({ message: 'Erro ao listar notícias ' });
  }
};

export { criarDuvidaController, listarDuvidasController };
