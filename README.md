# 🏥 VidaPlena – Agenda Digital para a Clínica VidaPlena

**VidaPlena** é uma plataforma web desenvolvida por alunos da Escola Técnica Municipal de Aplicação como parte de um projeto integrador com aplicação social. A solução foi criada para digitalizar o processo de agendamento de consultas da clínica comunitária Vida Plena, localizada no bairro  Parque Esperança.

O sistema permite que médicos cadastrem suas disponibilidades e que pacientes agendem consultas online de forma rápida, segura e acessível — tanto pelo celular quanto pelo computador.

---
## 📚 Índice

- [🏥 VidaPlena – Agenda Digital para a Clínica VidaPlena](#vida-plena--agenda-digital-para-a-clínica-vidaplena)
- [🚀 Funcionalidades](#funcionalidades)
  - [👥 Para Pacientes](#para-pacientes)
  - [🩺 Para Funcionários (médicos e administradores)](#para-funcionários-médicos-e-administradores)
- [🎯 Objetivo do Projeto](#objetivo-do-projeto)
- [🧑‍💻 Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [Banco de Dados](#banco-de-dados)
- [🛠️ Instalação e Execução](#instalação-e-execução)
- [📁 Estrutura do Projeto](#estrutura-do-projeto)
- [🎨 Design e Experiência do Usuário](#design-e-experiência-do-usuário)
  - [Identidade Visual](#identidade-visual)
- [📑 Documentação](#documentação)
- [🤝 Parcerias e Impacto Social](#parcerias-e-impacto-social)
- [👨‍🏫 Equipe de Desenvolvimento](#equipe-de-desenvolvimento)
- [📄 Licença](#licença)
- [📬 Contato](#contato)

---

## 🚀 Funcionalidades

### 👥 Para Pacientes
- Cadastro e login de pacientes
- Agendamento, cancelamento e visualização de consultas
- Página "Sobre Nós" com especialidades oferecidas
- Página inicial com médicos destacados por especialidade
- Página de blog com notícias e informações da clínica
- Envio de mensagens via formulário de contato
- Assistente virtual "Vika" com respostas automatizadas

### 🩺 Para Funcionários (médicos e administradores)
- Cadastro e login de médicos e administradores
- Cadastro de disponibilidade médica
- Visualização e edição de agenda médica
- Atualização de status das consultas
- Gerenciamento de médicos
- Gerenciamento de pacientes
- Acesso e visualização de feedbacks recebidos via contato

---

## 🎯 Objetivo do Projeto

Atender à necessidade da clínica Vida Plena de eliminar os agendamentos manuais feitos em cadernos e planilhas, que causavam atrasos, esquecimentos e conflitos de horário. A proposta é tornar a gestão de consultas mais eficiente, digital e segura.

---

## 🧑‍💻 Tecnologias Utilizadas

### Front-end:
- [Next.js](https://nextjs.org/) – Utilizado para construir a interface da aplicação com rapidez e boa performance, facilitando a criação de páginas acessíveis e dinâmicas. 
- [Bootstrap](https://getbootstrap.com/) – Auxiliou na criação de um layout responsivo e amigável, com 
componentes prontos que se adaptam bem a diferentes telas.

- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) – Complementa a identidade visual do projeto, permitindo personalização do estilo conforme a proposta da clínica VidaPlena.

- [Bootstrap-icons](https://icons.getbootstrap.com/) – Icones para utilizar no site, também importado do Bootstrap são mais de 200 icones para utilização

- [FullCalendar](https://fullcalendar.io/) – Permite criar calendários interativos e responsivos, com componentes prontos para exibir, gerenciar e manipular eventos de forma intuitiva em diferentes dispositivos.

- [React-Select](https://react-select.com/home) – Componente personalizável de seleção para React, que oferece listas suspensas estilizadas, com suporte a busca, múltipla seleção e integração fácil com formulários.

- [React-Datepicker](https://www.npmjs.com/package/react-datepicker) – Componente de seleção de datas para React, altamente personalizável, com suporte a seleção única ou intervalos, navegação por meses e anos, internacionalização, atalhos de teclado e fácil integração com bibliotecas de formulários.


### Back-end:
- [Node.js](https://nodejs.org/) – Plataforma escolhida para construir a API do sistema, conectando o front-end ao banco de dados e garantindo respostas rápidas para os agendamentos e cadastros.

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) – Biblioteca de hash para senhas baseada no algoritmo bcrypt, compatível com JavaScript puro (sem dependências nativas), ideal para aplicações Node.js que precisam armazenar senhas com segurança.

- [Cors](https://www.npmjs.com/package/cors) – Middleware para Express que habilita o compartilhamento de recursos entre diferentes origens (CORS), permitindo requisições seguras entre front-end e back-end hospedados em domínios distintos.

- [Express](https://expressjs.com/) – Framework minimalista e flexível para criação de APIs e aplicações web com Node.js, que fornece um robusto conjunto de recursos para manipular rotas, requisições e middlewares.

- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) – Biblioteca para geração e verificação de JSON Web Tokens (JWT), usada para autenticação segura de usuários em aplicações web e APIs, com suporte a diferentes algoritmos de assinatura.

- [Multer](https://www.npmjs.com/package/multer) – Middleware para Express responsável por lidar com upload de arquivos multipart/form-data, oferecendo controle sobre armazenamento, nomeação e filtragem dos arquivos recebidos.

- [Mysql2](https://www.npmjs.com/package/mysql2) – Driver MySQL para Node.js que oferece suporte a Promises e Prepared Statements, com desempenho otimizado e compatibilidade com o pacote mysql, ideal para integração com bancos de dados MySQL/MariaDB.

### Banco de Dados:
- [MySQL](https://www.mysql.com/) – Banco relacional utilizado para guardar informações sobre pacientes, médicos, horários e agendamentos, garantindo consistência e confiabilidade no acesso aos dados.

---

## 🛠️ Instalação e Execução

### Pré-requisitos:
- Node.js e npm instalados
- MySQL instalado e configurado

### Passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/vida-plena.git

2. Acesse o diretório do projeto:
   ```bash
   cd vida-plena

3. Instale as dependências do back-end (API):
    ```bash
    cd back-end
    npm install

4. Configure o banco de dados no arquivo .env dentro da pasta /back-end:
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=vida_plena

5. Inicie o servidor Node.js:
    ```bash
    node app.js

6. Abra um novo terminal, volte para a raiz do projeto e vá para o front-end:
    ```bash
    cd ../front-end
    npm install

7. Inicie o front-end (Next.js):
    ```bash
    npm run dev

8. Acesse a aplicação em:
    ```bash
    http://localhost:3000

---

## 📁 Estrutura do Projeto

    vida-plena/
    │
    ├── front-end/       # Aplicação front-end (Next.js)
    │   ├── public/
    │   └── scr/   
    │       ├── app/
    │       └── components/
    │
    ├── server/       # API back-end (Node.js)
    │   ├── routes/
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── config/
    │   ├── models/
    │   └── app.js
    │
    │──banco-de-dados/
    │   └── banco.sql/
    │
    │──documentacao/
    │   └── Briefing_VidaPlena.docx
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
## 📑 Documentação

[Clique aqui e acesse a documentação do projeto ](https://drive.google.com/file/d/1SUMGDbojs5prPN4FAA-h_VWvZ8RXcRox/view?usp=sharing)

---


## 🤝 Parcerias e Impacto Social

Este projeto nasceu de uma parceria com a clínica Vida Plena, que atende semanalmente mais de 150 pacientes em consultas populares. A agenda digital busca melhorar a organização e reduzir falhas no atendimento, fortalecendo o acesso à saúde em comunidades.

## 👨‍🏫 Equipe de Desenvolvimento
Projeto realizado por alunos da Escola Técnica Municipal de Aplicação:

### Aluno

- Amanda Gabrielli Ferreira de Lima - [GitHub](https://github.com/AmandaLimax)
- Bruno Pezzolato Hollosi – [GitHub](https://github.com/brpezzolato)
- Giulia Berraquero Ventre – [GitHub](https://github.com/Giulia-Ventre)
- Júlia Guizzardi Sanches – [GitHub](https://github.com/juliaGuizzardi)
- Wesley Daniel Correia – [GitHub](https://github.com/WesleyDanielCorreia)

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