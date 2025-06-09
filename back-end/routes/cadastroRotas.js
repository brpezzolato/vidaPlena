import express from 'express';
import { criarUsuarioController } from '../controllers/CadastroController.js';

const router = express.Router();

// Rota para cadastro de usuário
router.post('/', criarUsuarioController);

export default router;
