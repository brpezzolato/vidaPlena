import express from 'express';
import { respostaChatController } from '../controllers/ChatController.js';
const router = express.Router();

// Rota para cadastro de usuário
router.post('/', respostaChatController);

export default router;
