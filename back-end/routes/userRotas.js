import express from 'express';
import {
  obterUsuarioPorIdController,
  listarUsuariosController,
} from '../controllers/UserController.js';
const router = express.Router();

router.get('/', listarUsuariosController);

router.get('/:id', obterUsuarioPorIdController);

export default router;
