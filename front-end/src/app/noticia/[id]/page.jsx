"use client";
import Link from 'next/link';
import './noticia.css';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Noticia() {
    const { id } = useParams();
    const router = useRouter();
    const [noticia, setNoticia] = useState(null);
    const [topNoticias, setTopNoticias] = useState([]);


    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/noticias/${id}`)
                .then(res => res.json())
                .then(data => setNoticia(data))
                .catch(err => console.error('Erro ao buscar dados da API:', err));
        }
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:3001/noticias')
            .then(res => res.json())
            .then(data => setTopNoticias(data.slice(0, 4))) // pega as 4 primeiras
            .catch(err => console.error('Erro ao buscar top notícias:', err));
    }, []);

    if (!noticia) {
        return <p>Carregando...</p>;
    }

    const currentId = Number(id);

    function handleAnterior() {
        const prevId = currentId === 1 ? 12 : currentId - 1;
        router.push(`/noticia/${prevId}`);
    }

    function handleProximo() {
        const nextId = currentId === 12 ? 1 : currentId + 1;
        router.push(`/noticia/${nextId}`);
    }

    return (
        <div className="container mb-4">
            <div className="topoNoticia mt-4 d-flex mb-4">
                <img src={noticia.imagemnoticia} className="img-fluid img-speak imageNoticia" />
                <div className="geralInfosNoticia">
                    <img src="/imgNoticia/bannerImgNoticia.png" className="img-fluid bannerNoticia rounded-end" />
                </div>
            </div>

            <div className="meioNoticia d-flex flex-column flex-lg-row">
                <div className="noticiaEscritaMeio flex-grow-1 mb-4 mb-lg-0 me-lg-4">
                    <h4 className="tituloNoticia">
                        {noticia.titulo}
                    </h4>
                    <h6 className="subtituloNoticia">
                        {noticia.subtitulo}
                    </h6>
                    <div className="descricaoNoticia d-flex">
                        <div className="geralInfosNoticias d-flex me-4">
                            <i className="bi bi-person-lines-fill iconNoticia"></i>
                            <p className="escritaNoticia ps-2">
                                Escrito por {noticia.escritor}
                            </p>
                        </div>
                        <div className="geralInfosNoticias d-flex me-4">
                            <i className="bi bi-calendar-week iconNoticia align-items-start"></i>
                            <p className="escritaNoticia ps-2">
                                {noticia.datas}
                            </p>
                        </div>
                        <div className="geralInfosNoticias d-flex">
                            <i className="bi bi-stopwatch iconNoticia"></i>
                            <p className="escritaNoticia ps-1">
                                {noticia.horario?.slice(0, 5)}
                            </p>
                        </div>
                    </div>
                    <div className="escritaCorpoNoticia">
                        {noticia.noticia.split(/\n{2,}/).map((paragrafo, index) => (
                            <p key={index} className="mb-3">ㅤ{paragrafo}</p>
                        ))}
                    </div>
                </div>

                <div className="geralTopNoticias mb-4">
                    <div className="topNoticias p-4">
                        {topNoticias.map((top, index) => (
                            <div className="elementosTopNoticia d-flex mb-4" key={top.id}>
                                <img
                                    src={`/imgNoticia/numero${index + 1}.png`}
                                    className="img-fluid numeroNoticia rounded-end"
                                />
                                <Link href={`/noticia/${top.id}`} className="noticiaTop text-decoration-none text-dark">
                                    {top.titulo.length > 75 ? top.titulo.slice(0, 75) + "..." : top.titulo}
                                </Link>
                            </div>
                        ))}
                        <div className="avancarNoticia d-flex">
                            <button
                                type="button"
                                className="btn btn-secondary botaoNoticia me-2 w-50"
                                onClick={handleAnterior}
                            >
                                <i className="bi bi-arrow-left me-1"></i>Anterior
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary botaoNoticia w-50"
                                onClick={handleProximo}
                            >
                                Próxima <i className="bi bi-arrow-right ms-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
