import { listarNoticiaController, obterNoticiaPorIdController } from '../controllers/NoticiaController.js';
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router();
import express from 'express';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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


