import Link from 'next/link';
import '@/app/convenios/styleConvenios.css';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function Convenios() {
  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente']}>
        <div className="paginaConvenios">
          {/* banner */}
          <div className="bannerHome position-relative">
            {/* Imagem para desktop */}
            <img
              src="/imgConvenios/bannerConvenios.png"
              alt="Banner Desktop"
              className="img-fluid d-none d-md-block w-100"
              id="bannerHome"
            />

            {/* Imagem para mobile */}
            <img
              src="/imgConvenios/bannerConveniosMobile.png"
              alt="Banner Mobile"
              className="img-fluid d-block d-md-none w-100"
              id="bannerHomeMobile"
            />
          </div>

          {/* Texto institucional */}
          <section className="introducao text-center">
            <h2>Atendimento com os melhores convênios de saúde</h2>
            <p>
              A Clínica Vida Plena busca sempre oferecer o melhor atendimento
              para você. Por isso, firmamos parcerias com diversos convênios
              médicos, garantindo acesso fácil, seguro e de qualidade aos nossos
              serviços. Veja abaixo os convênios aceitos atualmente:
            </p>
          </section>

          {/* Grade de convênios */}
          <section className="gradeConvenios">
            <Link href="https://www.unimed.coop.br/site/planos">
              <div className="convenio">
                <img src="/imgConvenios/unimed.png" alt="Unimed" />
              </div>
            </Link>
            <Link href="https://bradescosaudeconvenios.com.br/">
              <div className="convenio">
                <img
                  src="/imgConvenios/bradescoSaude.png"
                  alt="Bradesco Saúde"
                />
              </div>
            </Link>
            <Link href="https://www.amilvendas.net.br/site/index.php">
              <div className="convenio">
                <img src="/imgConvenios/amil.png" alt="Amil" />
              </div>
            </Link>
            <Link href="https://portal.sulamericaseguros.com.br/para-voce/saude/">
              <div className="convenio">
                <img src="/imgConvenios/sulAmerica.png" alt="SulAmérica" />
              </div>
            </Link>
            <Link href="https://notredameconvenio.com.br/">
              <div className="convenio">
                <img
                  src="/imgConvenios/notreDame.png"
                  alt="NotreDame Intermédica"
                />
              </div>
            </Link>
            <Link href="https://contrate-online.ccgsaude.com.br/?tag=E_Google_SCH_CCG_Institucional_CONV_Conversao&gad_source=1&gad_campaignid=20587478303&gbraid=0AAAAApUZGd1daWHLhxX5juOS0x7jwVppU&gclid=EAIaIQobChMIxqzf1KPUjQMVXkVIAB3noxODEAAYBCAAEgIC3_D_BwE">
              <div className="convenio">
                <img src="/imgConvenios/hapvida.png" alt="Hapvida" />
              </div>
            </Link>
          </section>

          {/* Benefícios */}
          <section className="beneficios">
            <h2>Vantagens para pacientes conveniados</h2>
            <ul>
              <li>✔ Atendimento com agendamento online</li>
              <li>✔ Cobertura em diversas especialidades</li>
              <li>✔ Prontuário digital acessível</li>
              <li>✔ Menor tempo de espera e mais conforto</li>
            </ul>
          </section>

          {/* Dúvidas frequentes */}
          <h2 className="text-center">Perguntas frequentes:</h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Como sei se meu plano cobre determinado exame?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Você pode consultar diretamente com seu convênio ou falar com
                  nossa equipe pelo WhatsApp.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Preciso de autorização para consultas?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Depende do convênio e do tipo de atendimento. Consulte seu
                  plano ou entre em contato conosco.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Meu convênio não está na lista, posso me consultar?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Sim! Também atendemos particular com condições especiais. Fale
                  com nossa equipe.
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <section className="contatoConvenios">
            <h2>Entre em contato</h2>
            <p>
              Ficou com dúvidas ou quer confirmar o atendimento pelo seu plano?
            </p>
            <Link href={'/contato'} className="botaoContato">
              <i className="fa-brands fa-whatsapp"></i> Fale com a equipe!
            </Link>
          </section>
        </div>
      </RotaProtegida>
    </>
  );
}
