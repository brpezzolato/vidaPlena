import express from 'express';
import {
  listarDuvidasController,
  criarDuvidaController,
  excluirDuvidaController,
  editarDuvidaController,
} from '../controllers/DuvidaController.js';
import authMiddleware from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/', authMiddleware, listarDuvidasController);

router.post('/', criarDuvidaController);

router.put('/:id', authMiddleware, editarDuvidaController);

router.delete('/:id', authMiddleware, excluirDuvidaController);

router.options('/', (req, res) => {
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.status(204).send();
});

router.options('/:id', (req, res) => {
  res.setHeader('Allow', 'PUT, DELETE, OPTIONS');
  res.status(204).send();
});

export default router;
