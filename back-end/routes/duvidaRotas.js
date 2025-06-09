import express from 'express';
import {
  listarDuvidasController,
  criarDuvidaController,
} from '../controllers/DuvidaController.js';
import authMiddleware from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/', authMiddleware, listarDuvidasController);

router.post('/', authMiddleware, criarDuvidaController);

// router.put('/:id', authMiddleware, atualizarStatusDuvidaController);

router.options('/', (req, res) => {
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.status(204).send();
});

router.options('/:id', (req, res) => {
  res.setHeader('Allow', 'PUT, OPTIONS');
  res.status(204).send();
});

export default router;
