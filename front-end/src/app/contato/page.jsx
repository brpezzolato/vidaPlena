import './contato.css';

export default function ContactUs() {
  return (
    <>
      <div className="bannersContact">
        <img
          src="/contactUs/bannerDesktopContactUs.png"
          className="img-fluid bannerDesktopContactUs"
        />
        <img
          src="/contactUs/bannerMobileContactUs.png"
          className="img-fluid bannerMobileContactUs"
        />
      </div>
      <div className="container tudoContactUs">
        <div className="topoContactUs mt-4">
          <div className="formularioContactUs">
            <div className="row g-3 mb-3">
              <div className="col">
                <input
                  type="email"
                  className="form-control rounded-5"
                  placeholder="E-mail"
                  style={{ backgroundColor: '#D6F1ED' }}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control rounded-5"
                  placeholder="Telefone"
                  style={{ backgroundColor: '#D6F1ED' }}
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded-5"
                id="exampleFormControlInput1"
                placeholder="Nome"
                style={{ backgroundColor: '#D6F1ED' }}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control rounded-4"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={''}
                placeholder="Mensagem"
                style={{ backgroundColor: '#D6F1ED' }}
              />
            </div>
            <button
              type="button"
              className="btn btn rounded-5 botaoMensagemContactUs"
              style={{ backgroundColor: '#00715E', color: '#fff' }}
            >
              Enviar mensagem
            </button>
          </div>

          <div className="cardOurNewsletter">
            <div className="card form-bg">
              <img src="/contactUs/cardContactUs.png" className="card-img" />
              <div className="card-img-overlay">
                <div className="formCardContactUs">
                  <input
                    type="email"
                    className="form-control rounded-5 mb-2 botaoCard"
                    id="exampleFormControlInput1"
                  />
                  <button
                    type="button"
                    className="btn btn-dark rounded-5 w-100"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="listaCardsContactUs justify-content-center p-5">
          <img
            src="/contactUs/cardsContato1.png"
            className="card-img imageContact"
          />
          <img
            src="/contactUs/cardsContato2.png"
            className="card-img imageContact"
          />
          <img
            src="/contactUs/cardsContato3.png"
            className="card-img imageContact"
          />
        </div>

        <div className="mapaContctUs d-flex mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.39793433204!2d-46.80140786185651!3d-23.4461064073658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefd0ee0f242b7%3A0x3a08134e4c3d0802!2sParque%20Esperanca%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1747850600254!5m2!1spt-BR!2sbr"
            width={1090}
            height={300}
            style={{ borderRadius: 14 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
