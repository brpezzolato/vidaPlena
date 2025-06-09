# 🏥 VidaPlena – Agenda Digital para a Clínica VidaPlena

**VidaPlena** é uma plataforma web desenvolvida por alunos da Escola Técnica Municipal de Aplicação como parte de um projeto integrador com aplicação social. A solução foi criada para digitalizar o processo de agendamento de consultas da clínica comunitária **Vida Plena**, localizada no bairro Parque Esperança.

O sistema permite que médicos cadastrem suas disponibilidades e que pacientes agendem consultas online de forma rápida, segura e acessível — tanto pelo celular quanto pelo computador.

---

## 🚀 Funcionalidades

- Cadastro e login de médicos e pacientes
- Agendamento de consultas pelos pacientes e médicos
- Visualização da agenda mensal
- Cancelamento de consultas pelos pacientes e médicos
- Edição de descrição e título das consultas
- Atualização de status das consultas pelos médicos
- Sobre a clínica
- Blog de notícias do VidaPlena
- Página de contato com campos para envio de mensagens e cards para informações adicionais
- Responsividade para dispositivos móveis

---

## 🎯 Objetivo do Projeto

Atender à necessidade da clínica Vida Plena de eliminar os agendamentos manuais feitos em cadernos e planilhas, que causavam atrasos, esquecimentos e conflitos de horário. A proposta é tornar a gestão de consultas mais eficiente, digital e segura.

---

## 🧑‍💻 Tecnologias Utilizadas

### Front-end:

- [Next.js](https://nextjs.org/) – Interface e renderização de páginas
- [Bootstrap](https://getbootstrap.com/) – Componentes visuais responsivos
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) – Estilização personalizada

### Back-end:

- [Node.js](https://nodejs.org/) – API e regras de negócio

### Banco de Dados:

- [MySQL](https://www.mysql.com/) – Armazenamento das informações de agendamentos, usuários e consultas

---

## 🛠️ Instalação e Execução

### Pré-requisitos:

- Node.js e npm instalados
- MySQL instalado e configurado

### Passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/vida-plena-agenda.git

   ```

2. Acesse o diretório do projeto:

   ```bash
   cd vida-plena-agenda

   ```

3. Instale as dependências do back-end (API):

   ```bash
   cd server
   npm install

   ```

4. Configure o banco de dados no arquivo .env dentro da pasta /server:

   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=vida_plena

   ```

5. Inicie o servidor Node.js:

   ```bash
   node app.js

   ```

6. Abra um novo terminal, volte para a raiz do projeto e vá para o front-end:

   ```bash
   cd ../client
   npm install

   ```

7. Inicie o front-end (Next.js):

   ```bash
   npm run dev

   ```

8. Acesse a aplicação em:
   ```bash
   http://localhost:3000
   ```

---

## 📁 Estrutura do Projeto

    vida-plena-agenda/
    │
    ├── client/       # Aplicação front-end (Next.js)
    │   ├── pages/
    │   ├── components/
    │   └── styles/
    │
    ├── server/       # API back-end (Node.js)
    │   ├── routes/
    │   ├── controllers/
    │   └── models/
    │
    └── README.md

---

## 🎨 Design e Experiência do Usuário

A interface foi pensada para ser clara e acessível, com botões grandes e cores suaves para facilitar o uso por diferentes perfis de pacientes. O layout é responsivo, se adaptando bem a celulares e computadores.

### Identidade Visual

#### - Paleta de cores

https://www.canva.com/design/DAGo8iuEjzE/Jy7uZTrLkrKsoh3qPo3CWw/edit?utm_content=DAGo8iuEjzE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

#### - Logotipo (e seus variantes)

https://www.canva.com/design/DAGnnU1i1Bg/gQWQfhFTHRwvB9a33Mm9KQ/edit?utm_content=DAGnnU1i1Bg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

---

## 🤝 Parcerias e Impacto Social

Este projeto nasceu de uma parceria com a clínica Vida Plena, que atende semanalmente mais de 150 pacientes em consultas populares. A agenda digital busca melhorar a organização e reduzir falhas no atendimento, fortalecendo o acesso à saúde em comunidades.

## 👨‍🏫 Equipe de Desenvolvimento

Projeto realizado por alunos da Escola Técnica Municipal de Aplicação:

### Aluno

- Amanda Gabrielli Ferreira de Lima -
- Bruno Pezzolato Hollosi – GitHu
- Giulia Berraquero Ventre – GitHub
- Júlia Guizzardi Sanches – GitHub
- Wesley Daniel Correia – GitHub

### Orientadores:

- Prof. Gustavo Paiva
- Prof. Rogerio da Silva Alcantara
- Prof. Rodrigo Rodrigues Alvarez
- Prof. William Reis da Silva

---

## 📄 Licença

Este projeto possui fins educacionais e sociais. Pode ser utilizado livremente para fins não-comerciais.

---

## 📬 Contato

Para dúvidas ou sugestões:

📧 contato@vidaplena.com

🌐 www.vidaplena.com
