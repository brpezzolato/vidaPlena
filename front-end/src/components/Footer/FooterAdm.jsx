import '@/components/Footer/styleFooter.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <>
      <footer className="rodape" id="contato">
        <div className="rodape-div">
          <div className="rodape-div-1">
            <div className="rodape-div-1-coluna">
              <a href="/adm">
                <img
                  src="/imgFooter/LogoAgenda.png"
                  alt="logo"
                  className="logo"
                />
              </a>
            </div>
          </div>

          <div className="rodape-div-2">
            <div className="rodape-div-2-coluna">
              <span className="titulo-coluna">VidaPlena</span>
              <p>
                <a href="/adm">Painel ADM</a>
              </p>
              <p>
                <a href="/adm/medicos">Médicos</a>
              </p>
              <p>
                <a href="/adm/usuarios">Pacientes</a>
              </p>
              <p>
                <a href="/adm/consultas">Consultas</a>
              </p>
            </div>
          </div>

          <div className="rodape-div-3">
            <div className="rodape-div-3-coluna">
              <span className="titulo-coluna">Funcionários</span>
              <p>
                <a href="/adm">Você faz parte da nossa história.</a>
              </p>
              <p className="texto-sobre-frase">
                Nossa missão é cuidar do tempo com saúde!
              </p>
            </div>
          </div>

          <div className="rodape-div-4">
            <div className="rodape-div-4-coluna">
              <span className="titulo-coluna">Contato</span>
              <div className="icones-contato">
                <a
                  href="https://wa.me/seunumerowhatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/imgFooter/iconeWhats.png"
                    alt="whatsapp"
                    className="icone-contato"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/imgFooter/iconeInsta.png"
                    alt="instagram"
                    className="icone-contato"
                  />
                </a>
                <a
                  href="https://workspace.google.com/intl/pt-BR/gmail/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/imgFooter/iconeEmail.png"
                    alt="email"
                    className="icone-contato"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="rodape-direitos">© {anoAtual} COPYRIGHT – VIDA PLENA</p>
      </footer>
    </>
  );
}
