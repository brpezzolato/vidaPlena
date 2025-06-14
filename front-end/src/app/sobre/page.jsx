import './styleSobre.css';
import Image from 'next/image';
import Link from 'next/link';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function Sobre() {
  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente', null]}>
        <Image
          src="/imgSobre/bannerSobre.png"
          alt="Banner principal"
          layout="responsive"
          width={1200}
          height={300}
          className="banner-sobre d-none d-md-block"
        />
        {/* banner pricipal */}
        <div className="container-fluid ">
          <div className="row ">
            <div className="col ">
              <Image
                src="/imgSobre/banner.png"
                alt="Banner principal"
                layout="responsive"
                width={1200}
                height={300}
                className="banner-sobre d-block d-md-none"
              />
            </div>
          </div>
        </div>
        {/* titulo central  */}
        <h1>
          <div className="principal-sobre">
            <span className="vida-sobre text-break text-center">
              Conheça a clínica Vida <span className="plena-sobre">Plena</span>
            </span>
          </div>
        </h1>
        {/* texto do sobre */}
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="somos-sobre">Quem somos?</h2>
              <p className="texto-sobre">
                A Clínica Hospitalar Vida Plena tem como missão oferecer
                atendimento médico de excelência, com foco na humanização e na
                saúde integral. Visando inovação e eficiência, implantou uma
                agenda hospitalar digital que permite aos médicos cadastrarem
                suas disponibilidades e aos pacientes agendarem consultas de
                forma prática e segura. Essa iniciativa torna o processo de
                marcação mais ágil, melhora a organização interna e reforça o
                compromisso da instituição com a qualidade no atendimento e o
                bem-estar de todos.
              </p>
              <p className="texto-sobre">
                Essa solução foi pensada para otimizar o tempo, reduzir filas e
                tornar o acesso aos serviços de saúde mais ágil e organizado.
                Acreditamos que a tecnologia, aliada ao cuidado humano, é uma
                poderosa ferramenta para transformar o sistema de saúde e
                proporcionar uma vida mais plena para todos. Com essa
                integração, promovemos mais conforto, autonomia e transparência
                no agendamento de consultas, fortalecendo o vínculo entre
                profissionais e pacientes e elevando a qualidade do atendimento
                prestado.{' '}
              </p>
            </div>
            <div className="col-md-6 text-center">
              <Image
                className="medica-sobre img-fluid"
                src="/imgSobre/medica.png"
                alt="Medica"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
        {/* especialidades */}
        <div className="missao-sobre">
          <h1 className="especialidades-sobre">Nossa especialidades</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="continuacao-sobre col-md-6">
              <div className="container my-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Cardiologista
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="accordion-body">
                        Diagnóstico e tratamento de doenças cardíacas e
                        vasculares, como hipertensão, infarto, arritmias e
                        insuficiência cardíaca. Contamos com exames modernos e
                        cardiologistas especializados para cuidar do seu coração
                        com segurança e prevenção.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Pediatria
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Atendimento completo a crianças e adolescentes, com foco
                        em crescimento saudável, vacinação, prevenção e
                        tratamento de doenças comuns na infância. Cuidado
                        humanizado para todas as fases do desenvolvimento
                        infantil.{' '}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Ortopedia
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Tratamento de dores, fraturas, lesões esportivas,
                        problemas na coluna e articulações. Atuamos com
                        ortopedia clínica e cirúrgica, reabilitação e
                        fisioterapia para restaurar sua mobilidade{' '}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Dermatologista
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Cuida da pele, cabelos e unhas, tratando acne, manchas,
                        alergias, infecções e câncer de pele. Também oferecemos
                        procedimentos estéticos como botox, peelings e
                        tratamentos a laser.{' '}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Neurologista
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Tratamento de doenças neurológicas como dores de cabeça,
                        AVC, epilepsia, Alzheimer, Parkinson e distúrbios do
                        sono. Avaliação especializada com foco em preservar a
                        função neurológica e o bem-estar.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="continuacao-sobre col-md-6 dividir-sobre">
              <div className="container my-4">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Ginecologista
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Cuidado ginecológico completo: exames preventivos,
                        anticoncepção, pré-natal, menopausa, miomas,
                        endometriose e saúde hormonal. Atendimento em todas as
                        fases da vida da mulher.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0 ">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Endocrinologista
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Tratamento de diabetes, obesidade, distúrbios da
                        tireoide, osteoporose e alterações hormonais.
                        Acompanhamento para regular o metabolismo e melhorar sua
                        saúde e energia.{' '}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        Psiquiatra
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Diagnóstico e tratamento de ansiedade, depressão,
                        insônia, transtorno bipolar, TDAH e outras condições
                        emocionais. Atendimento humanizado e sigiloso com foco
                        no bem-estar mental.{' '}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        Oftalmologista
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Exames oftalmológicos, prescrição de óculos e tratamento
                        de doenças como miopia, catarata, glaucoma e
                        conjuntivite. Avaliações completas para todas as idades.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item mb-3 border-0">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed rounded-pill"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                        Reumatologista
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Atendimento a doenças como artrite, lúpus, fibromialgia,
                        gota e dores crônicas nas articulações. Tratamentos
                        modernos para preservar a mobilidade e aliviar sintomas.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* missão, visão e valores */}
        <div className="tudo-sobre">
          <div className="container">
            <div className="nossa-sobre">
              <h2 className="nossa-sobre">Nossa</h2>
            </div>
            <div className="missao-sobre">
              <h1 className="caracteristica-sobre">Missão, visão e valores</h1>
            </div>
          </div>
        </div>
        {/* Nossa misão */}
        <div
          className="container mx-auto px-4"
          style={{ marginBottom: '20px' }}
        >
          <div className="row">
            <div className="col-md-1">
              <img
                src="/imgSobre/missao.png"
                alt="Ícone de missão"
                width={60}
                height={60}
              />
            </div>
            <div className="col-md-11">
              <p className="transformar-sobre" style={{}}>
                Transformar a gestão hospitalar por meio da tecnologia,
                otimizando o tempo de profissionais da saúde e oferecendo
                praticidade, organização e agilidade no cuidado com os
                pacientes.
              </p>
            </div>
          </div>
        </div>
        {/* nossa visão */}
        <div className="vision-sobre container mx-auto px-4">
          <div className="row">
            <div className="col-md-1">
              <img
                src="/imgSobre/visao.png"
                alt="Ícone de visão"
                width={64}
                height={59}
              />
            </div>
            <div className="col-md-11">
              <p className="ser-sobre">
                Ser referência nacional em soluções inteligentes para gestão
                hospitalar, promovendo uma experiência mais eficiente, integrada
                e humana para profissionais de saúde e pacientes.{' '}
              </p>
            </div>
          </div>
        </div>
        {/* nossos valores */}
        <div className="valor-sobre container mx-auto px-4">
          <div className="row">
            <div className="col-md-1">
              <img
                src="/imgSobre/valores.png"
                alt="Ícone de valores"
                width={64}
                height={59}
              />
            </div>
            <div className="col-md-11">
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Eficiência –</span> Acreditamos
                que tempo é um recurso valioso na saúde. Trabalhamos para
                reduzir desperdícios e aumentar a produtividade.{' '}
              </p>
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Inovação –</span> Buscamos
                constantemente melhorias tecnológicas para entregar soluções
                modernas, seguras e intuitivas.
              </p>
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Simplicidade –</span> Criamos
                ferramentas fáceis de usar, que facilitam a rotina médica e
                administrativa.
              </p>
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Humanização –</span> Valorizamos
                as pessoas por trás dos processos. Nosso foco é liberar tempo
                para que o cuidado com o paciente seja prioridade.
              </p>
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Confiabilidade –</span> Garantimos
                segurança, estabilidade e integridade em cada parte da nossa
                plataforma.
              </p>
              <p className="letras-sobre">
                {' '}
                <span className="lista-sobre">Transparência –</span> Agimos com
                clareza e responsabilidade nas relações com nossos clientes,
                parceiros e usuários.
              </p>
            </div>
          </div>
        </div>
        {/* facilidades e acessos */}
        <div className="acesso-sobre">
          <h1 className="facilidade-sobre">Facilidade e serviços</h1>
        </div>
        {/* cards */}
        <div className="pai-sobre">
          <div className="container">
            <div className="row gap-3">
              {/* card de agendamento */}
              <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card-sobre">
                  <div className="card-body-custom-sobre">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src="/imgSobre/agendamento.png"
                          alt="Ícone de agendamento"
                          width={35}
                          height={35}
                          className="me-2"
                        />
                        <h5 className="card-title mb-0">
                          <span className="card-texto-sobre">Agendamento</span>
                        </h5>
                      </div>
                      <p className="card-text texto-poppins-sobre">
                        Gerencie consultas de forma simples e rápida, trazendo
                        mais organização para a clínica e conforto para os
                        pacientes.
                      </p>
                    </div>
                    <div className="text-center mt-3 texto-poppins-sobre">
                      <Link href={'/calendario'}>
                        <button className="titulo-sobre">
                          Agendar consulta
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card de contato */}
              <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card-sobre card-contato-login-sobre">
                  <div className="card-body-custom-sobre">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src="/imgSobre/contato.png"
                          alt="Ícone de contato"
                          width={35}
                          height={35}
                          className="me-2"
                        />
                        <h5 className="card-title mb-0">
                          <span className="card-texto-sobre">Contato</span>
                        </h5>
                      </div>
                      <p className="card-text texto-poppins-sobre">
                        Concentre os canais de comunicação da clínica em um só
                        lugar, facilitando o contato dos pacientes para
                        agendamentos e dúvidas.
                      </p>
                    </div>
                    <div className="text-center mt-3 texto-poppins-sobre">
                      <Link href={'/contato'}>
                        <button className="titulo-sobre">Fale conosco</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* card de login */}
              <div className="col-md-4 d-flex justify-content-center mb-4">
                <div className="card-sobre card-contato-login">
                  <div className="card-body-custom-sobre">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src="/imgSobre/login.png"
                          alt="Ícone de login"
                          width={35}
                          height={35}
                          className="me-2"
                        />
                        <h5 className="card-title mb-0">
                          <span className="card-texto-sobre">Login</span>
                        </h5>
                      </div>
                      <p className="card-text texto-poppins-sobre">
                        Acesse com segurança a agenda ChromoMed e gerencie seus
                        compromissos de forma simples e personalizada.
                      </p>
                    </div>
                    <div className="text-center mt-3 texto-poppins-sobre">
                      <Link href={'/login'}>
                        <button className="titulo-sobre">Fazer login</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bradescoNos p-4 w-100">
              <div className="parceriaNos d-flex justify-content-center mb-2 p-4">
                <img
                  src="/imgSobre/BannerBradescoSobreNos.png"
                  className="img-fluid bannerParceriaNos rounded-4 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </RotaProtegida>
    </>
  );
}
