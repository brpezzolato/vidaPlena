USE vida_plena;

-- Tabela consultas
CREATE TABLE IF NOT EXISTS consultas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_consulta VARCHAR(25) NOT NULL,
    medico_id INT NOT NULL,
    usuario_id INT NOT NULL,
    eConvenio ENUM('Nenhum', 'Bradesco', 'SulAmérica Saúde', 'Unimed') DEFAULT 'Nenhum',
    dataCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dataAtualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (medico_id) REFERENCES usuarios(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Inserindo 150 consultas, todas agendadas entre 13 e 30 de Junho de 2025.

-- Dr. João Silva (Cardiologista) - ID 1
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Consulta Cardiológica de Rotina', 'Check-up anual para o paciente 15.', '2025-06-13T09:00:00', 1, 15, 'Bradesco'),
('Avaliação de Pressão Alta', 'Monitoramento e ajuste de medicação.', '2025-06-13T11:00:00', 1, 45, 'Bradesco'),
('Ecocardiograma', 'Exame de imagem cardíaca.', '2025-06-16T14:30:00', 1, 35, 'Unimed'),
('Teste Ergométrico', 'Avaliação de capacidade física.', '2025-06-16T08:00:00', 1, 53, 'Bradesco'),
('Consulta Risco Cirúrgico', 'Avaliação pré-operatória.', '2025-06-17T10:00:00', 1, 21, 'Bradesco'),
('Acompanhamento Pós-infarto', 'Reavaliação clínica.', '2025-06-17T09:30:00', 1, 65, 'Bradesco'),
('Check-up Cardiológico', 'Exames de rotina.', '2025-06-18T11:30:00', 1, 25, 'Bradesco'),
('Avaliação de Arritmia', 'Investigação de palpitações.', '2025-06-18T15:00:00', 1, 41, 'Bradesco'),
('Consulta de Retorno', 'Análise de resultados de exames.', '2025-06-19T14:00:00', 1, 55, 'Unimed'),
('Doppler de Carótidas', 'Exame preventivo.', '2025-06-19T08:30:00', 1, 31, 'Unimed'),
('Avaliação de Sopro Cardíaco', 'Investigação clínica.', '2025-06-20T10:30:00', 1, 40, 'Nenhum'),
('MAPA 24h', 'Instalação do aparelho.', '2025-06-20T16:00:00', 1, 13, 'Bradesco'),
('Consulta Cardiológica', 'Primeira avaliação.', '2025-06-23T09:00:00', 1, 28, 'Nenhum'),
('Avaliação para Atividade Física', 'Liberação para esportes.', '2025-06-23T11:00:00', 1, 50, 'SulAmérica Saúde'),
('Consulta de Rotina', 'Acompanhamento anual.', '2025-06-24T14:30:00', 1, 62, 'SulAmérica Saúde');

-- Dra. Maria Oliveira (Pediatra) - ID 2
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Consulta de Puericultura', 'Acompanhamento do bebê (paciente 15).', '2025-06-24T14:00:00', 2, 15, 'Bradesco'),
('Consulta Pediátrica', 'Rotina de 1 ano.', '2025-06-25T10:30:00', 2, 32, 'Nenhum'),
('Avaliação de Desenvolvimento', 'Marcos de desenvolvimento.', '2025-06-25T15:00:00', 2, 42, 'SulAmérica Saúde'),
('Acompanhamento de Rotina', 'Consulta semestral.', '2025-06-26T11:00:00', 2, 52, 'Nenhum'),
('Verificação de Alergia', 'Investigação de alergia alimentar.', '2025-06-26T13:30:00', 2, 22, 'SulAmérica Saúde'),
('Consulta de Vacinação', 'Aplicação de vacinas de rotina.', '2025-06-27T16:00:00', 2, 36, 'Nenhum'),
('Avaliação de Febre', 'Investigação de febre persistente.', '2025-06-27T10:00:00', 2, 56, 'Nenhum'),
('Consulta de Rotina Infantil', 'Acompanhamento de crescimento.', '2025-06-30T14:30:00', 2, 12, 'Nenhum'),
('Atestado para Natação', 'Liberação para atividade física.', '2025-06-30T11:30:00', 2, 24, 'Nenhum'),
('Consulta Pediátrica', 'Queixa de tosse.', '2025-06-13T09:00:00', 2, 44, 'Nenhum'),
('Avaliação de G-anho de Peso', 'Acompanhamento nutricional.', '2025-06-13T15:30:00', 2, 64, 'Nenhum'),
('Consulta de Retorno', 'Análise de exames.', '2025-06-16T14:00:00', 2, 14, 'Nenhum'),
('Introdução Alimentar', 'Orientações para os pais.', '2025-06-17T10:30:00', 2, 32, 'Nenhum'),
('Avaliação de Assimetria Craniana', 'Verificação postural.', '2025-06-18T16:30:00', 2, 62, 'SulAmérica Saúde'),
('Consulta Anual', 'Check-up geral.', '2025-06-19T11:00:00', 2, 20, 'Nenhum');

-- Dr. Carlos Souza (Ortopedista) - ID 3
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Avaliação de dor no joelho', 'Avaliação para o paciente 15.', '2025-06-20T10:00:00', 3, 15, 'Bradesco'),
('Consulta Ortopédica', 'Dor no ombro.', '2025-06-20T09:30:00', 3, 38, 'SulAmérica Saúde'),
('Acompanhamento de Fratura', 'Reavaliação de fratura no punho.', '2025-06-18T11:00:00', 3, 34, 'SulAmérica Saúde'),
('Avaliação de Lesão Esportiva', 'Lesão no tornozelo.', '2025-06-19T14:00:00', 3, 24, 'Nenhum'),
('Infiltração no Joelho', 'Procedimento para alívio da dor.', '2025-06-13T10:30:00', 3, 65, 'Bradesco'),
('Consulta Dor Lombar', 'Avaliação e tratamento.', '2025-06-16T09:00:00', 3, 44, 'Nenhum'),
('Avaliação de Quadril', 'Investigação de dor.', '2025-06-17T11:30:00', 3, 37, 'Bradesco'),
('Retorno de Cirurgia', 'Acompanhamento pós-operatório.', '2025-06-23T15:00:00', 3, 54, 'SulAmérica Saúde'),
('Avaliação de Escoliose', 'Exame postural.', '2025-06-24T09:00:00', 3, 13, 'Bradesco'),
('Consulta Ortopédica', 'Dor crônica no cotovelo.', '2025-06-25T10:30:00', 3, 29, 'Bradesco'),
('Avaliação de Pé Plano', 'Análise da pisada.', '2025-06-26T14:30:00', 3, 48, 'Nenhum'),
('Acompanhamento de Artrose', 'Controle da doença.', '2025-06-27T11:00:00', 3, 57, 'Bradesco'),
('Laudo para Fisioterapia', 'Encaminhamento para tratamento.', '2025-06-30T09:30:00', 3, 20, 'Nenhum'),
('Consulta de Mão', 'Avaliação de tendinite.', '2025-06-13T15:00:00', 3, 61, 'Bradesco'),
('Avaliação de Postura', 'Análise postural completa.', '2025-06-16T10:00:00', 3, 33, 'Bradesco');

-- Dra. Ana Paula Costa (Dermatologista) - ID 4
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Tratamento de Eczema', 'Acompanhamento e prescrição.', '2025-06-13T11:00:00', 4, 11, 'Bradesco'),
('Avaliação de Pintas', 'Mapeamento corporal.', '2025-06-13T15:30:00', 4, 49, 'Bradesco'),
('Tratamento para Acne', 'Acompanhamento e prescrição.', '2025-06-16T13:00:00', 4, 29, 'Bradesco'),
('Remoção de Verruga', 'Procedimento a laser.', '2025-06-16T16:00:00', 4, 39, 'Unimed'),
('Consulta de Cabelo e Unhas', 'Avaliação de queda capilar.', '2025-06-17T11:30:00', 4, 59, 'Unimed'),
('Peeling Químico', 'Sessão de tratamento facial.', '2025-06-17T14:00:00', 4, 35, 'Unimed'),
('Biópsia de Lesão', 'Coleta de material para análise.', '2025-06-19T10:00:00', 4, 25, 'Bradesco'),
('Tratamento de Psoríase', 'Controle e medicação.', '2025-06-19T15:00:00', 4, 61, 'Bradesco'),
('Crioterapia de Lesão', 'Procedimento para remoção.', '2025-06-23T11:00:00', 4, 33, 'Bradesco'),
('Consulta Dermatológica', 'Avaliação de manchas na pele.', '2025-06-23T14:30:00', 4, 53, 'Bradesco'),
('Tratamento de Rosácea', 'Acompanhamento clínico.', '2025-06-24T16:30:00', 4, 21, 'Bradesco'),
('Avaliação de Alergia de Pele', 'Teste de contato.', '2025-06-25T10:30:00', 4, 41, 'Bradesco'),
('Microagulhamento', 'Sessão para tratamento de cicatrizes.', '2025-06-26T15:00:00', 4, 57, 'Bradesco'),
('Preenchimento Labial', 'Procedimento estético.', '2025-06-27T11:00:00', 4, 27, 'Unimed'),
('Consulta de Rotina', 'Check-up anual da pele.', '2025-06-30T13:30:00', 4, 45, 'Bradesco');

-- Dr. Ricardo Mendes (Neurologista) - ID 5
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Avaliação de Enxaqueca', 'Investigação e tratamento.', '2025-06-13T15:00:00', 5, 11, 'Bradesco'),
('Consulta Neurológica', 'Investigação de dores de cabeça crônicas.', '2025-06-13T13:30:00', 5, 30, 'SulAmérica Saúde'),
('Avaliação de Memória', 'Teste e avaliação de queixas.', '2025-06-16T14:00:00', 5, 40, 'Nenhum'),
('Acompanhamento de Epilepsia', 'Controle e ajuste de medicação.', '2025-06-16T10:00:00', 5, 50, 'SulAmérica Saúde'),
('Avaliação de Tontura', 'Investigação de vertigem.', '2025-06-17T15:30:00', 5, 60, 'Nenhum'),
('Avaliação Pós-AVC', 'Acompanhamento de sequelas.', '2025-06-17T11:00:00', 5, 58, 'SulAmérica Saúde'),
('Acompanhamento de Parkinson', 'Ajuste de tratamento.', '2025-06-20T14:00:00', 5, 34, 'SulAmérica Saúde'),
('Eletroneuromiografia', 'Solicitação de exame.', '2025-06-20T10:30:00', 5, 26, 'SulAmérica Saúde'),
('Consulta de Retorno', 'Análise de ressonância magnética.', '2025-06-23T15:00:00', 5, 12, 'Nenhum'),
('Avaliação de Tremor Essencial', 'Diagnóstico e tratamento.', '2025-06-23T11:30:00', 5, 46, 'SulAmérica Saúde'),
('Consulta Neurológica', 'Investigação de formigamento.', '2025-06-25T14:30:00', 5, 22, 'SulAmérica Saúde'),
('Laudo para Aposentadoria', 'Avaliação de incapacidade.', '2025-06-26T10:00:00', 5, 54, 'SulAmérica Saúde'),
('Tratamento de Neuropatia', 'Acompanhamento da dor.', '2025-06-27T15:30:00', 5, 14, 'Nenhum'),
('Consulta de Cefaleia', 'Avaliação de dor de cabeça tensional.', '2025-06-27T11:00:00', 5, 39, 'Unimed'),
('Avaliação de Insônia', 'Investigação de distúrbios do sono.', '2025-06-30T14:00:00', 5, 66, 'SulAmérica Saúde');

-- Dra. Fernanda Lima (Ginecologista) - ID 6
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Consulta Ginecológica Anual', 'Exame preventivo e Papanicolau.', '2025-06-13T13:00:00', 6, 15, 'Bradesco'),
('Planejamento Familiar', 'Aconselhamento sobre métodos contraceptivos.', '2025-06-13T14:15:00', 6, 26, 'SulAmérica Saúde'),
('Acompanhamento Pré-natal', 'Consulta de rotina para gestante.', '2025-06-16T10:00:00', 6, 36, 'Nenhum'),
('Inserção de DIU', 'Procedimento de inserção.', '2025-06-16T15:00:00', 6, 55, 'Unimed'),
('Avaliação de Mioma', 'Exame de ultrassom.', '2025-06-17T11:00:00', 6, 27, 'Unimed'),
('Consulta de Rotina', 'Check-up anual.', '2025-06-17T13:30:00', 6, 46, 'SulAmérica Saúde'),
('Tratamento de Candidíase', 'Prescrição de medicação.', '2025-06-18T10:30:00', 6, 31, 'Unimed'),
('Acompanhamento de Climatério', 'Terapia de reposição hormonal.', '2025-06-18T14:00:00', 6, 63, 'Unimed'),
('Consulta Pós-parto', 'Reavaliação de 40 dias.', '2025-06-23T11:00:00', 6, 11, 'Bradesco'),
('Resultados de Exames', 'Análise de mamografia e ultrassom.', '2025-06-24T15:30:00', 6, 51, 'Unimed'),
('Avaliação de Endometriose', 'Investigação de cólicas intensas.', '2025-06-25T10:00:00', 6, 23, 'Unimed'),
('Coleta de Preventivo', 'Exame Papanicolau.', '2025-06-26T13:00:00', 6, 43, 'Unimed'),
('Consulta Ginecológica', 'Queixa de corrimento.', '2025-06-27T11:30:00', 6, 39, 'Unimed'),
('Avaliação de SOP', 'Investigação de Síndrome dos Ovários Policísticos.', '2025-06-30T14:30:00', 6, 59, 'Unimed'),
('Consulta de Acompanhamento', 'Monitoramento de cisto ovariano.', '2025-06-30T10:00:00', 6, 65, 'Bradesco');

-- Dr. Marcelo Tavares (Endocrinologista) - ID 7
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Avaliação de Diabetes', 'Controle e ajuste de insulina.', '2025-06-13T09:30:00', 7, 11, 'Bradesco'),
('Avaliação da Tireoide', 'Exame e acompanhamento de nódulos.', '2025-06-13T11:30:00', 7, 27, 'Unimed'),
('Tratamento de Obesidade', 'Acompanhamento para perda de peso.', '2025-06-16T16:30:00', 7, 37, 'Bradesco'),
('Consulta Endocrinológica', 'Ajuste de dose de levotiroxina.', '2025-06-16T10:00:00', 7, 47, 'Unimed'),
('Bomba de Insulina', 'Avaliação para uso.', '2025-06-17T14:00:00', 7, 25, 'Bradesco'),
('Acompanhamento de Nódulo Adrenal', 'Reavaliação com exames.', '2025-06-18T09:00:00', 7, 52, 'Nenhum'),
('Avaliação Hormonal', 'Investigação de desequilíbrio hormonal.', '2025-06-18T11:00:00', 7, 29, 'Bradesco'),
('Consulta de Rotina', 'Acompanhamento de diabetes tipo 2.', '2025-06-19T15:00:00', 7, 42, 'SulAmérica Saúde'),
('Avaliação de Crescimento', 'Análise de curva de crescimento.', '2025-06-20T09:30:00', 7, 34, 'SulAmérica Saúde'),
('Tratamento de Colesterol Alto', 'Acompanhamento e dieta.', '2025-06-23T11:30:00', 7, 56, 'Nenhum'),
('Consulta Endocrinológica', 'Avaliação de hipoglicemia.', '2025-06-24T14:30:00', 7, 20, 'Nenhum'),
('Bioimpedância', 'Análise de composição corporal.', '2025-06-25T10:00:00', 7, 60, 'Nenhum'),
('Acompanhamento de Tireoidite', 'Controle de Hashimoto.', '2025-06-26T11:00:00', 7, 13, 'Bradesco'),
('Avaliação de Vitamina D', 'Análise de deficiência.', '2025-06-27T15:00:00', 7, 49, 'Bradesco'),
('Consulta de Retorno', 'Análise de exames hormonais.', '2025-06-30T09:30:00', 7, 64, 'Nenhum');

-- Dra. Priscila Andrade (Psiquiatra) - ID 8
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Sessão de Terapia', 'Acompanhamento para ansiedade.', '2025-06-13T16:00:00', 8, 14, 'Nenhum'),
('Acompanhamento de Depressão', 'Ajuste de medicação e acompanhamento.', '2025-06-13T17:00:00', 8, 23, 'Unimed'),
('Consulta Psiquiátrica', 'Avaliação para diagnóstico de TDAH.', '2025-06-16T18:00:00', 8, 33, 'Bradesco'),
('Sessão de Psicoterapia', 'Terapia para tratamento de ansiedade.', '2025-06-16T16:30:00', 8, 43, 'Unimed'),
('Acompanhamento de Depressão', 'Sessão de acompanhamento.', '2025-06-17T17:30:00', 8, 53, 'Bradesco'),
('Avaliação de Pânico', 'Tratamento de síndrome do pânico.', '2025-06-18T16:00:00', 8, 49, 'Bradesco'),
('Laudo para Cirurgia Bariátrica', 'Avaliação psicológica.', '2025-06-19T14:00:00', 8, 21, 'Bradesco'),
('Avaliação de Transtorno Bipolar', 'Ajuste de estabilizador de humor.', '2025-06-20T17:00:00', 8, 63, 'Unimed'),
('Terapia de Casal', 'Sessão de acompanhamento.', '2025-06-23T18:00:00', 8, 28, 'Nenhum'),
('Consulta de Acompanhamento', 'Avaliação de resposta ao tratamento.', '2025-06-24T16:30:00', 8, 38, 'SulAmérica Saúde'),
('Avaliação de Estresse Pós-traumático', 'Início de terapia.', '2025-06-25T17:30:00', 8, 50, 'SulAmérica Saúde'),
('Consulta Psiquiátrica', 'Queixa de insônia e ansiedade.', '2025-06-26T16:00:00', 8, 66, 'SulAmérica Saúde'),
('Sessão de Terapia Cognitivo-comportamental', 'Tratamento de fobias.', '2025-06-27T18:00:00', 8, 26, 'SulAmérica Saúde'),
('Acompanhamento de TOC', 'Avaliação de Transtorno Obsessivo-compulsivo.', '2025-06-30T17:00:00', 8, 46, 'SulAmérica Saúde'),
('Consulta de Retorno', 'Planejamento de alta.', '2025-06-30T16:30:00', 8, 30, 'SulAmérica Saúde');

-- Dr. Bruno Pires (Oftalmologista) - ID 9
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Exame de Refração', 'Verificação de grau para óculos.', '2025-06-13T09:30:00', 9, 21, 'Bradesco'),
('Mapeamento de Retina', 'Exame detalhado do fundo do olho.', '2025-06-13T10:30:00', 9, 31, 'Unimed'),
('Consulta Oftalmológica', 'Avaliação de irritação ocular.', '2025-06-16T11:00:00', 9, 41, 'Bradesco'),
('Exame de Refração', 'Verificação de grau para óculos.', '2025-06-16T14:00:00', 9, 51, 'Unimed'),
('Mapeamento de Retina', 'Acompanhamento de glaucoma.', '2025-06-17T09:00:00', 9, 61, 'Bradesco'),
('Cirurgia de Catarata - Avaliação', 'Exames pré-operatórios.', '2025-06-17T11:30:00', 9, 46, 'SulAmérica Saúde'),
('Avaliação de Olho Seco', 'Teste de Schirmer.', '2025-06-18T15:30:00', 9, 20, 'Nenhum'),
('Teste de Pressão Ocular', 'Tonometria.', '2025-06-19T09:30:00', 9, 13, 'Bradesco'),
('Adaptação de Lentes de Contato', 'Teste e orientação.', '2025-06-20T11:00:00', 9, 23, 'Unimed'),
('Consulta de Retorno', 'Avaliação pós-cirúrgica.', '2025-06-23T14:00:00', 9, 35, 'Unimed'),
('Avaliação de Vista Cansada', 'Prescrição de óculos para perto.', '2025-06-24T09:00:00', 9, 55, 'Unimed'),
('Exame de Campo Visual', 'Campimetria.', '2025-06-25T11:30:00', 9, 63, 'Unimed'),
('Consulta Oftalmológica', 'Queixa de visão embaçada.', '2025-06-26T15:30:00', 9, 12, 'Nenhum'),
('Avaliação de Estrabismo', 'Teste de oclusão.', '2025-06-27T09:30:00', 9, 36, 'Nenhum'),
('Topografia de Córnea', 'Exame para ceratocone.', '2025-06-30T11:00:00', 9, 48, 'Nenhum');

-- Dra. Carolina Ribeiro (Reumatologista) - ID 10
INSERT INTO consultas (titulo, descricao, data_consulta, medico_id, usuario_id, eConvenio) VALUES
('Consulta Reumatológica', 'Investigação de dor articular.', '2025-06-13T09:00:00', 10, 28, 'Nenhum'),
('Acompanhamento de Artrite Reumatoide', 'Controle da doença e medicação.', '2025-06-13T09:45:00', 10, 38, 'SulAmérica Saúde'),
('Avaliação de Fibromialgia', 'Diagnóstico e plano de tratamento.', '2025-06-16T10:30:00', 10, 48, 'Nenhum'),
('Investigação de Lúpus', 'Análise de exames.', '2025-06-16T11:00:00', 10, 58, 'SulAmérica Saúde'),
('Avaliação de Gota', 'Controle de ácido úrico.', '2025-06-17T09:00:00', 10, 43, 'Unimed'),
('Tratamento para Osteoporose', 'Prescrição de medicação.', '2025-06-18T11:30:00', 10, 13, 'Bradesco'),
('Densitometria Óssea', 'Solicitação de exame.', '2025-06-19T10:00:00', 10, 22, 'SulAmérica Saúde'),
('Consulta Reumatológica', 'Avaliação de síndrome de Sjögren.', '2025-06-20T09:45:00', 10, 62, 'SulAmérica Saúde'),
('Acompanhamento de Espondilite', 'Avaliação de atividade da doença.', '2025-06-23T11:00:00', 10, 32, 'Nenhum'),
('Infiltração Articular', 'Procedimento para alívio da dor.', '2025-06-24T09:00:00', 10, 44, 'Nenhum'),
('Consulta de Retorno', 'Análise de fator reumatoide.', '2025-06-25T10:30:00', 10, 52, 'Nenhum'),
('Avaliação de Vasculite', 'Investigação de lesões de pele.', '2025-06-26T11:00:00', 10, 20, 'Nenhum'),
('Tratamento de Artrite Psoriásica', 'Acompanhamento clínico.', '2025-06-27T09:45:00', 10, 37, 'Bradesco'),
('Consulta Reumatológica', 'Investigação de dor muscular difusa.', '2025-06-30T11:30:00', 10, 56, 'Nenhum'),
('Laudo para PCD', 'Avaliação de doença incapacitante.', '2025-06-30T10:00:00', 10, 24, 'Nenhum');