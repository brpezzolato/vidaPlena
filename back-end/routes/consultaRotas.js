import express from 'express';
import {
  listarConsultasController,
  obterConsultaPorIdController,
  criarConsultaController,
  atualizarLivroController,
  excluirLivroController,
} from '../controllers/ConsultaController.js';
import authMiddleware from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.get('/', authMiddleware, listarConsultasController);

router.get('/:id', authMiddleware, obterConsultaPorIdController);

router.post('/', authMiddleware, criarConsultaController);

router.put('/:id', authMiddleware, atualizarLivroController);

router.delete('/:id', authMiddleware, excluirLivroController);

router.options('/', (req, res) => {
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.status(204).send();
});

router.options('/:id', (req, res) => {
  res.setHeader('Allow', 'GET, PUT, DELETE, OPTIONS');
  res.status(204).send();
});

export default router;
