import { listarNoticiaController, obterNoticiaPorIdController } from '../controllers/NoticiaController.js';
const router = express.Router();
import express from 'express';

router.get("/", listarNoticiaController);

router.get("/:id", obterNoticiaPorIdController);

router.options('/', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
})

router.options('/:id', (req, res) => {
    res.setHeader('Allow', 'GET, OPTIONS');
    res.status(204).send();
})

export default router;


