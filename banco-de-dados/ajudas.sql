USE vida_plena;

CREATE TABLE IF NOT EXISTS mensagens_contato (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    nome VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    status ENUM('Resolvida', 'Pendente') DEFAULT 'Pendente',
    dataEnvio DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO mensagens_contato (email, telefone, nome, mensagem, status)
VALUES
('ana.souza@email.com', '11988880011', 'Ana Souza', 'Gostaria de saber se a consulta pode ser realizada online.', 'Resolvida'),
('pedro.lima@email.com', '11988880012', 'Pedro Lima', 'Tive um problema para agendar minha consulta, podem me ajudar?', 'Resolvida'),
('carla.dias@email.com', '11988880013', 'Carla Dias', 'Quero informações sobre os planos aceitos pelo hospital.', 'Pendente'),
('lucas.costa@email.com', '11988880014', 'Lucas Costa', 'Meu horário foi alterado sem aviso, gostaria de uma explicação.', 'Pendente'),
('bruno.pezzolato@email.com', '11988880015', 'Bruno Pezzolato', 'Como posso acessar o resultado do meu exame de sangue?', 'Resolvida'),
('mariana.ferreira@email.com', '11988880021', 'Mariana Ferreira', 'O Dr. João Silva atende pelo convênio Unimed? Não encontrei a informação no site.', 'Resolvida'),
('gabriel.martins@email.com', '11988880022', 'Gabriel Martins', 'Preciso remarcar minha consulta de pediatria para a próxima semana. Qual a disponibilidade?', 'Pendente'),
('ana.lucas@email.com', '11988880023', 'Ana Clara Souza', 'Não consigo fazer login no portal do paciente, a senha parece não funcionar.', 'Resolvida'),
('felipe.rocha@email.com', '11988880024', 'Felipe Rocha', 'Qual o valor de uma consulta particular com a Dra. Carolina Ribeiro?', 'Pendente'),
('bruna.lima@email.com', '11988880025', 'Bruna Lima', 'Gostaria de solicitar um atestado médico para apresentar no trabalho referente à minha última consulta.', 'Resolvida'),
('rafael.oliveira@email.com', '11988880026', 'Rafael Oliveira', 'É necessário jejum para o exame de ecocardiograma agendado para amanhã?', 'Resolvida'),
('camila.santos@email.com', '11988880027', 'Camila Santos', 'O hospital oferece estacionamento para pacientes? Qual o valor?', 'Pendente'),
('thiago.costa@email.com', '11988880028', 'Thiago Costa', 'Como faço para solicitar meu histórico médico completo para levar a outro especialista?', 'Resolvida'),
('juliana.pereira@email.com', '11988880029', 'Juliana Pereira', 'Recebi uma cobrança que acredito ser indevida. Com quem posso falar para resolver?', 'Pendente'),
('andre.silva@email.com', '11988880030', 'André Silva', 'A Dra. Fernanda Lima realiza parto normal? Gostaria de mais informações.', 'Resolvida'),
('sofia.carvalho@email.com', '11988880031', 'Sofia Carvalho', 'O agendamento online está apresentando erro na etapa final. Podem verificar?', 'Pendente'),
('diego.nascimento@email.com', '11988880032', 'Diego Nascimento', 'Qual o horário de funcionamento da farmácia interna do hospital?', 'Resolvida'),
('larissa.moreira@email.com', '11988880033', 'Larissa Moreira', 'Meu convênio Bradesco oferece cobertura para o procedimento de peeling químico?', 'Pendente'),
('mateus.almeida@email.com', '11988880034', 'Mateus Almeida', 'Perdi minha receita médica. É possível obter uma segunda via sem marcar nova consulta?', 'Resolvida'),
('carolina.gomes@email.com', '11988880035', 'Carolina Gomes', 'Gostaria de elogiar o atendimento da enfermeira Joana, do setor de pediatria. Foi excepcional!', 'Resolvida'),
('pedro.henrique@email.com', '11988880036', 'Pedro Henrique', 'Quais são os documentos necessários para a internação cirúrgica?', 'Pendente'),
('bianca.rodrigues@email.com', '11988880037', 'Bianca Rodrigues', 'É possível agendar duas consultas de especialidades diferentes para o mesmo dia?', 'Resolvida'),
('lucas.fernandes@email.com', '11988880038', 'Lucas Fernandes', 'O resultado da minha ressonância já está disponível no portal?', 'Pendente'),
('gustavo.alves@email.com', '11988880040', 'Gustavo Alves', 'Qual o tempo médio de espera para uma consulta com o Dr. Carlos Souza (Ortopedista)?', 'Resolvida'),
('fernanda.ribeiro@email.com', '11988880041', 'Fernanda Ribeiro', 'Esqueci um objeto pessoal na sala de espera ontem. Como posso recuperá-lo?', 'Pendente'),
('leticia.castro@email.com', '11988880045', 'Letícia Castro', 'Gostaria de saber se vocês têm um programa de acompanhamento para gestantes.', 'Resolvida'),
('aline.martins@email.com', '11988880049', 'Aline Martins', 'A vacina da gripe está disponível para o público geral ou apenas para grupos de risco?', 'Pendente'),
('aline.souza@email.com', '11988880053', 'Aline Souza', 'Posso levar um acompanhante para a minha consulta de rotina?', 'Resolvida'),
('sabrina.almeida@email.com', '11988880055', 'Sabrina Almeida', 'Como atualizo meu endereço e telefone no cadastro?', 'Resolvida'),
('alexandre.dias@email.com', '11988880058', 'Alexandre Dias', 'O hospital emite nota fiscal dos serviços para reembolso no imposto de renda?', 'Pendente'),
('thais.lima@email.com', '11988880061', 'Thais Lima', 'Gostaria de cancelar minha consulta de amanhã com a Dra. Ana Paula Costa.', 'Resolvida'),
('leandro.silva@email.com', '11988880062', 'Leandro Silva', 'Preciso de um laudo detalhado sobre minha condição para a empresa. Como solicitar?', 'Pendente'),
('camila.fernandes@email.com', '11988880065', 'Camila Fernandes', 'O Dr. Ricardo Mendes tem algum horário disponível para a próxima semana?', 'Pendente'),
('paulo.henrique@email.com', '11988880066', 'Paulo Henrique', 'Vocês oferecem algum tipo de pacote ou desconto para check-up completo particular?', 'Resolvida');
