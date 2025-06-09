'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('tipo');
    localStorage.removeItem('nome');
    localStorage.removeItem('convenio');
    localStorage.removeItem('chatbot-mensagens');

    setIsClient(true);

    setTimeout(() => {
      window.location.replace('/login');
    }, 1500); 

  }, [router]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="container text-center not-found">
      <div className="row p-4 mb-4">
        <div className="col-md-12 text-center">
          <img
            src="/imgLogout/imageLogout.png"
            className="w-100 img-fluid img-speak"
            alt="Logout"
          />
        </div>
      </div>
    </div>
  );
}
