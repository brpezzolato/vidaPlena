import express from 'express';
const app = express();
const port = 3001;
import consultaRotas from './routes/consultaRotas.js';
import authRotas from './routes/authRotas.js';
import cadastroRotas from './routes/cadastroRotas.js';
import pessoasRotas from './routes/userRotas.js';
import horariosRotas from './routes/horariosRotas.js';
import noticiasRotas from './routes/noticiaRotas.js';
import chatBotRotas from './routes/chatBotRotas.js';
import todasConsultasRotas from './routes/todasConsultasRotas.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/consultas', consultaRotas);
app.use('/auth', authRotas);
app.use('/cadastro', cadastroRotas);
app.use('/pessoas', pessoasRotas);
app.use('/horarios', horariosRotas);
app.use('/noticias', noticiasRotas);
app.use('/vika', chatBotRotas);
app.use('/todasadm', todasConsultasRotas);

app.get('/', (req, res) => {
  res.status(200).send('API de Biblioteca');
});

app.options('/', (req, res) => {
  res.setHeader('Allow', 'GET, OPTIONS');
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ mensagem: 'Rota inválida ou não encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
