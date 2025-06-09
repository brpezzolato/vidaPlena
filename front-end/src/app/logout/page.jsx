'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Remove o token
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    localStorage.removeItem('nome');
    localStorage.removeItem('convenio');
    localStorage.removeItem('chatbot-mensagens');

    setTimeout(() => {
      window.location.replace('/login');
    }, 1000);
  }, [router]);

  return (
    <>
      <div className="container text-center not-found">
        <div className="row p-4 mb-4">
          <div className="col-md-12 text-center">
            <img
              src="/imgLogout/imageLogout.png"
              className="w-100 img-fluid img-speak"
            />
          </div>
        </div>
      </div>
    </>
  );
}
