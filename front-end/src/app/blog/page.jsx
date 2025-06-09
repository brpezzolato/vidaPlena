'use client';

import { useEffect, useState } from 'react';
import CardBlog from '@/components/CardBlog/CardBlog';
import './blog.css';
import RotaProtegida from '@/components/RotaProtegida/RotaProtegida';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/noticias')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Erro ao buscar dados da API:', err));
  }, []);

  return (
    <>
      <RotaProtegida permitido={['medico', 'paciente']}>  
        <div className="tudoBlog">
          <div className="bannersBlog">
            <img
              src="/blog/bannerBlogDesktop.png"
              className="img-fluid bannerBlogDesktop rounded-bottom"
            />
            <img
              src="/blog/bannerBlogMobile.png"
              className="img-fluid bannerBlogMobile rounded-bottom"
            />
          </div>
          <div className="container blogContainer">
            <h5 className="tituloBlogs mt-4">Notícias Recentes</h5>
            <div className="row">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
                >
                  <CardBlog blog={blog} />
                </div>
              ))}
            </div>

            <div className="parceriaBlog d-flex justify-content-center mt-2 mb-2">
              <img
                src="/blog/bannerParceria.png"
                className="img-fluid bannerParceria rounded-4 mt-4 mb-4"
              />
            </div>
          </div>
        </div>
      </RotaProtegida>
    </>
  );
}
