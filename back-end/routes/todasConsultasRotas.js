import express from 'express';
import {
  listarTodasConsultasController,
  obterTodasConsultaPorIdController,
} from '../controllers/TodasConsultasController.js';
import authMiddleware from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/', authMiddleware, listarTodasConsultasController);

router.get('/:id', authMiddleware, obterTodasConsultaPorIdController);

router.options('/', (req, res) => {
  res.setHeader('Allow', 'GET, OPTIONS');
  res.status(204).send();
});

router.options('/:id', (req, res) => {
  res.setHeader('Allow', 'GET, OPTIONS');
  res.status(204).send();
});

export default router;
