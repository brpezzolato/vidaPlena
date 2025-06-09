import './CardBlog.css';
import Link from 'next/link';

export default function CardBlog({ blog }) {
  return (
    <>
      <Link className="geralBlog" href={`noticia/${blog.id}`}>
        <div className="card border-0 rounded-4" style={{ width: '21rem' }}>
          <div className="imageCardBlog p-3">
            <img src={blog?.imagemnoticia} className="card-img-top rounded-4" />
          </div>
          <div className="card-body">
            <div className="tempoAtrasBlog d-flex">
              <i className="bi bi-stopwatch me-1"></i>
              <p className="fw-light">
                {blog?.postagem || 'Horário desconhecido'}
              </p>
            </div>
            <h5 className="card-title tituloCardBlog">{blog?.titulo}</h5>
            <p className="card-text textoCardBlog">{blog?.resumo}</p>
            <div className="meioCard d-flex">
              <img
                src={blog?.imagemmedico}
                className="me-2 rounded-circle float-start medicoBlog"
              ></img>
              <div className="infosBlog">
                <p className="fw-bolder nomeDoutorBlog">{blog?.escritor}</p>
                <p className="fst-italic dataBlog">
                  {blog?.datas} às {blog?.horario.slice(0, 5)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
