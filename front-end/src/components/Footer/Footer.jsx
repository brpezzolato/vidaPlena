import '@/components/Footer/styleFooter.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <>
      <footer className="rodape" id="contato">
        <div className="rodape-div">
          <div className="rodape-div-1">
            <div className="rodape-div-1-coluna">
              <a href="#home">
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
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/sobre">Sobre</a>
              </p>
              <p>
                <a href="/blog">Blog</a>
              </p>
              <p>
                <a href="/contato">Contato</a>
              </p>
            </div>
          </div>

          <div className="rodape-div-3">
            <div className="rodape-div-3-coluna">
              <span className="titulo-coluna">Sobre</span>
              <p>
                <a href="/sobre">Conheça a nossa história.</a>
              </p>
              <p className="texto-sobre-frase">
                Nossa missão é cuidar do seu tempo com saúde!
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
