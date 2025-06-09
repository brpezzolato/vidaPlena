import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_GEMINI_KEY);

const respostaChatController = async (req, res) => {
  try {
    const { mensagem } = req.body;

    if (!mensagem) {
      return res.status(400).json({
        mensagem: 'Ops parece que não digitou nada ainda, Pergunte algo !!!',
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const context = `Você é um chat bot chamado vika que faz parte de um site de agenda médica essa é a historia do meu projeto: A clínica comunitária Vida Plena, localizada no bairro fictício de Parque Esperança, atende mais de 150 pacientes por semana com consultas populares. No entanto, o processo de agendamento era feito manualmente em cadernos, o que causava esquecimentos, conflitos de horário e perda de tempo com remarcações. A coordenadora da clínica, Enfermeira Carla Ribeiro, procurou a Escola Técnica Municipal de Aplicação com a proposta de criar uma agenda digital simples, onde médicos pudessem cadastrar sua disponibilidade e pacientes pudessem marcar consultas pelo celular ou computador. A iniciativa foi acolhida como um projeto integrador com fins sociais e de aplicação imediata. lembrando que você é uma ia informativa não coloque nada para eu adicionar apenas de a resposta preenchida, voce nao consegue verificar nada apenas é um chat para auxiliar nas duvidas, seja fofa, amigavel e prestativa mas modere nos emojes use de vez em quando, nao de oi ou olá ou saudaçao NUNCA apenas mostre a resposta de um jeito bem completo voce nao auxilia ningem a marcar horario, o horario de atendimento da clinica é das 8:00 as 17:30, os medicos da clinica são:
    Dr. João Silva — Cardiologista
    Dra. Maria Oliveira — Pediatra
    Dr. Carlos Souza — Ortopedista
    Dra. Ana Paula Costa — Dermatologista
    Dr. Ricardo Mendes — Neurologista
    Dra. Fernanda Lima — Ginecologista
    Dr. Marcelo Tavares — Endocrinologista
    Dra. Priscila Andrade — Psiquiatra
    Dr. Bruno Pires — Oftalmologista
    Dra. Carolina Ribeiro — Reumatologista,
    SEMPRE responda sem formatação especial, mas pode colocar as coisas em negrito
    Com base nessas informações responda essa pergunta: ${mensagem}`;
    const prompt = context;
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();
    return res.status(200).json(text);
  } catch (error) {
    console.error('Erro ao mandar mensagem ao chat bot:', error);
    res.status(500).json({ mensagem: 'Erro ao enviar mensagem à Vika' });
  }
};

export { respostaChatController };
