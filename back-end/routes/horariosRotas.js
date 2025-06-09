import express from 'express';
import authMiddleware from '../middlewares/authMiddlewares.js';
import { listarHorariosController } from '../controllers/ConsultaController.js';
const router = express.Router();

router.get('/', authMiddleware, listarHorariosController);

export default router;
