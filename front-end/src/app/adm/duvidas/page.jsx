import './styleDuvidas.css';
import Link from 'next/link';

export default function admDuvidas() {
    return (
        <>

            <h1 className="tituloDuvidas">Dúvidas:</h1>

            <ol className="lista-estilizada">
                <li>
                    <span>Dúvida 1</span>
                    <div className="acoes">
                        <Link href="/editar/1">
                            <img src="/imgAdm/editar.png" alt="Editar" className="iconeEditar" />
                        </Link>
                        <img src="/imgAdm/excluir.png" alt="Excluir" className="iconeExcluir" />
                    </div>
                </li>
                <li>
                    <span>Dúvida 2</span>
                    <div className="acoes">
                        <Link href="/editar/1">
                            <img src="/imgAdm/editar.png" alt="Editar" className="iconeEditar" />
                        </Link>
                        <img src="/imgAdm/excluir.png" alt="Excluir" className="iconeExcluir" />
                    </div>
                </li>
                <li>
                    <span>Dúvida 3</span>
                    <div className="acoes">
                        <Link href="/editar/1">
                            <img src="/imgAdm/editar.png" alt="Editar" className="iconeEditar" />
                        </Link>
                        <img src="/imgAdm/excluir.png" alt="Excluir" className="iconeExcluir" />
                    </div>
                </li>
            </ol>

            {/* Botão para voltar a página principal de adm */}
            <div className="admin-back-button-container">
                <Link href="/adm" className="admin-back-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Voltar ao painel principal
                </Link>
            </div>
        </>
    )

}