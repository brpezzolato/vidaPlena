import '@/app/styleHome.css';
import Link from 'next/link';
import CardHome from '@/components/CardHome/CardHome';
import CardComentariosHome from '@/components/CardComentariosHome/CardComentariosHome';
import CardMedicos from '@/components/CardMedicos/CardMedicos';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function Home() {
  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente']}>
        {/* banner inicial*/}
        <div className="bannerHome position-relative">
          {/* Imagem para desktop */}
          <img
            src="/imgHome/bannerHome.png"
            alt="Banner Desktop"
            className="img-fluid d-none d-md-block w-100"
            id="bannerHome"
          />

          {/* Imagem para mobile */}
          <img
            src="/imgHome/imgBannerMobile.png"
            alt="Banner Mobile"
            className="img-fluid d-block d-md-none w-100"
            id="bannerHomeMobile"
          />

          {/* Botão sobre a imagem */}
          <Link href="/login">
            <button className="botaoBannerHome">FAÇA SEU LOGIN!</button>
          </Link>
        </div>

        {/* título para os cards abaixo */}
        <h1 className="titulo1">Tecnologia a serviço da saúde...</h1>

        {/* cards mostrando os benefícios da agenda hospitalar */}
        <div className="container mx-auto my-5 d-flex flex-wrap gap-3 justify-content-center">
          <CardHome
            src={'/imgHome/imgTempo.png'}
            text={
              'Médicos cadastram seus horários na plataforma da clínica, evitando conflitos de agenda e otimizando o tempo de atendimento.'
            }
          />
          <CardHome
            src={'/imgHome/imgClick.png'}
            text={
              'Pacientes podem marcar consultas de forma simples, pelo celular ou computador, sem precisar ir até a clínica ou telefonar.'
            }
          />
          <CardHome
            src={'/imgHome/imgEngrenagem.png'}
            text={
              'Mais praticidade para quem antes usava cadernos e bilhetes, agora substituídos por um sistema digital simples, moderno e organizado.'
            }
          />
          <CardHome
            src={'/imgHome/imgMao.png'}
            text={
              'Nosso consultório facilita a rotina de médicos e pacientes, cuidando da organização para que o foco esteja no cuidado com a saúde.'
            }
          />
        </div>

        {/* banner falando da mascote Vika */}
        {/* Imagem para desktop */}
        <img
          src="/imgHome/bannerVika.png"
          alt="Banner Desktop"
          className="img-fluid d-none d-md-block w-100"
          id="bannerVika"
        />

        {/* Imagem para mobile */}
        <img
          src="/imgHome/bannerVikaMobile.png"
          alt="Banner Mobile"
          className="img-fluid d-block d-md-none w-100"
          id="bannerVikaMobile"
        />

        {/* Parte em que fala um pouco do sobre */}
        <div
          className="card mb-3"
          style={{ maxWidth: 740, maxHeight: 570 }}
          id="cardSobreHome"
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="/imgHome/LogoAgenda.png"
                className="img-fluid"
                id="imgLogoAgendaHome"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body-home">
                <h5 className="card-title" id="tituloQuemSomos">
                  Quem somos?
                </h5>
                <p className="card-text" id="textoSobre">
                  A Clínica Vida Plena adotou uma agenda digital para agilizar o
                  agendamento de consultas, reduzir filas e melhorar a
                  organização. A solução une tecnologia e humanização,
                  oferecendo mais conforto, autonomia e qualidade no
                  atendimento.
                </p>
                <Link href={'/sobre'}>
                  <button className="learn-more" id="botaoSobre">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow" />
                    </span>
                    <span className="button-text">Veja mais!</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* área dos comentários */}
        <div className="comentariosContainer">
          <img
            className="ondaCima"
            src="/imgHome/imgOnda.png"
            alt="onda superior"
          />

          <div className="fundoComentarios">
            <div className="tituloComentarios">
              <h1>Comentários</h1>
            </div>

            <div className="paiComentarios">
              <CardComentariosHome
                src="/imgHome/imgPessoa1.png"
                title="Carlos Almeida"
                title2="Paciente"
                text="“Nunca mais precisei ficar esperando na linha. É só abrir o site e agendar. Muito prático!”"
                text2="Escrito em 24/10/2024"
                src2="/imgHome/imgEstrelaParcial.png"
              />
              <CardComentariosHome
                src="/imgHome/imgPessoa2.png"
                title="Larissa Gonçalves"
                title2="Doutora"
                text="“A agenda digital otimizou nossa rotina, organizou os atendimentos e reduziu faltas. Bem melhor!”"
                text2="Escrito em 04/03/2025"
                src2="/imgHome/imgEstrelaTotal.png"
              />
              <CardComentariosHome
                src="/imgHome/imgPessoa3.png"
                title="Renata Rocha"
                title2="Paciente"
                text="“Muito mais fácil marcar consulta agora. Faço tudo pelo celular, sem precisar ligar pra clínica.”"
                text2="Escrito em 11/07/2024"
                src2="/imgHome/imgEstrelaParcial.png"
              />
              <CardComentariosHome
                src="/imgHome/imgPessoa4.png"
                title="Rafael Monteiro"
                title2="Doutor"
                text="“A agenda digital melhorou minha rotina, tornando a organização dos horários mais eficiente.”"
                text2="Escrito em 16/05/2025"
                src2="/imgHome/imgEstrelaTotal.png"
              />
            </div>
          </div>

          <img
            className="ondaBaixo"
            src="/imgHome/imgOndaBaixo.png"
            alt="onda inferior"
          />
        </div>

        {/* parte mostrando alguns médicos do hospital */}
        <h1 className="tituloNossosMedicos">Nossos médicos</h1>
        <div className="text-center paiTexto">
          <p className="textoApresentandoMedicos">
            Conheça alguns médicos da Clínica Vida Plena, uma equipe
            comprometida em oferecer atendimento humanizado e de qualidade. Cada
            profissional trabalha com dedicação para cuidar da saúde e bem-estar
            da nossa comunidade.
          </p>
        </div>

        <div className="container mx-auto my-5 d-flex flex-wrap gap-5 justify-content-center">
          <CardMedicos
            src={'/imgHome/imgDoutor1.png'}
            title={'Doutor'}
            text={'João Silva'}
            text2={'Cardiologista'}
          />
          <CardMedicos
            src={'/imgHome/imgDoutora1.png'}
            title={'Doutora'}
            text={'Priscila Andrade'}
            text2={'Psiquiatra'}
          />
          <CardMedicos
            src={'/imgHome/imgDoutora2.png'}
            title={'Doutora'}
            text={'Ana Paula Costa'}
            text2={'Dermatologista'}
          />
        </div>
        <div className="container mx-auto my-5 d-flex flex-wrap gap-5 justify-content-center">
          <CardMedicos
            src={'/imgHome/imgDoutor2.png'}
            title={'Doutor'}
            text={'Carlos Souza'}
            text2={'Ortopedista'}
          />
          <CardMedicos
            src={'/imgHome/imgDoutor3.png'}
            title={'Doutor'}
            text={'Marcelo Tavares'}
            text2={'Endocrinologista'}
          />
          <CardMedicos
            src={'/imgHome/imgDoutora3.png'}
            title={'Doutora'}
            text={'Fernanda Lima'}
            text2={'Ginecologista'}
          />
        </div>

        {/* banner levando para os convenios */}
        <div className="banner-convenios-solido fade-in">
          <div className="banner-lateral"></div>

          <div className="banner-conteudo">
            <div className="banner-texto">
              <h2>Convênios que facilitam seu atendimento</h2>
              <p>
                Confira os convênios que temos disponíveis e agende sua consulta
                de forma rápida e prática.
              </p>
            </div>

            <ul className="banner-beneficios">
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4l-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
                Cobertura com os principais planos
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.12.37 2.33.57 3.54.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.2 2.42.57 3.54a1 1 0 0 1-.24 1.05l-2.2 2.2Z" />
                </svg>
                Agendamento online rápido
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8a6 6 0 1 0-12 0c0 3.32 2.69 6.64 6 11.31 3.31-4.67 6-7.99 6-11.31Zm-8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
                </svg>
                Atendimento humanizado e completo
              </li>
            </ul>

            <div className="banner-botao">
              <a href="/convenios">Ver convênios</a>
            </div>
          </div>
        </div>
      </RotaProtegida>
    </>
  );
}
