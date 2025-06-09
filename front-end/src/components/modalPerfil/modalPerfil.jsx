import './styleModal.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  if (!montado) {
    return <p>Montando o seu perfil</p>;
  }

  return (
    <>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#D6F1ED',
          borderColor: '#D6F1ED',
          borderRadius: '30px',
          width: '28px',
          height: 'auto',
          marginLeft: '10px',
          padding: '0',
        }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <img
          src="/imgHeader/iconeUsuario.png"
          className="iconeUsuario"
          alt="iconeUsuario"
          style={{ width: '100%', height: 'auto' }}
        />
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              style={{ backgroundColor: '#D6F1ED' }}
              className="modal-header"
            >
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <span style={{ color: '#00715E' }}>Seu perfil</span>
              </h1>
            </div>

            {/* definição das posições */}
            <div className="container">
              <div className="row align-items-center">
                {/* Coluna da imagem */}
                <div className="d-flex align-items-center gap-4">
                  {/* Imagem */}
                  <img
                    src="/imgModal/modal.png"
                    style={{
                      width: '120px',
                      height: '120px',
                      marginTop: '2vh',
                      marginBottom: '2vh',
                    }}
                    alt="Ícone do usuário"
                  />

                  {/* Textos */}
                  <div>
                    <div className="modal-body">Nome:</div>
                    <div className="modal-body">Convênio:</div>
                  </div>
                </div>
              </div>

              {/* botões de editar e sair */}
              <div className="modal-footer d-flex justify-content-end">
                <button
                  style={{
                    backgroundColor: '#00715E',
                    borderColor: '#00715E',
                    borderRadius: '55px',
                    width: '95px',
                    marginRight: '10px', // espaçamento entre os botões
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  Editar
                </button>

                <button
                  style={{
                    backgroundColor: '#00715E',
                    borderColor: '#00715E',
                    borderRadius: '55px',
                    width: '95px',
                  }}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
