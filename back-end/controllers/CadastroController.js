import { criarUsuario } from '../models/User.js';
import generateHashedPassword from '../hashPassword.js';
import { read } from '../config/database.js';

const criarUsuarioController = async (req, res) => {
  try {
    const { nome, email, telefone, senha, temConvenio, tipo } = req.body;

    if (!nome || !email || !telefone || !senha) {
      return res.status(400).json({
        mensagem: 'Por favor, preencha todos os campos',
      });
    }

    const senhaHash = await generateHashedPassword(senha);

    const verificarEmail = await read('usuarios', `email = '${email}'`);

    if (verificarEmail) {
      return res
        .status(400)
        .json({ mensagem: 'Este email já foi cadastrado, tente um diferente' });
    }

    const usuarioData = {
      nome: nome,
      email: email,
      celular: telefone,
      senha: senhaHash,
      temConvenio: temConvenio,
      tipo: tipo || 'paciente',
    };

    const userId = await criarUsuario(usuarioData);

    res
      .status(201)
      .json({ mensagem: 'Cadastro realizado com sucesso', userId });
  } catch (error) {
    console.error('Erro ao criar Usuário:', error);
    res.status(500).json({ mensagem: 'Erro ao criar usuário' });
  }
};

export { criarUsuarioController };
