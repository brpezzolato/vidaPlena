import express from 'express';
import {
  obterUsuarioPorIdController,
  listarUsuariosController,
} from '../controllers/UserController.js';
import authMiddleware from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/', authMiddleware, listarUsuariosController);

router.get('/:id', authMiddleware, obterUsuarioPorIdController);

export default router;
