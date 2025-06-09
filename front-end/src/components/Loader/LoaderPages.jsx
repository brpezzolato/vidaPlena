'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function LoaderForPages({ children }) {
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setCarregado(true);
  }, []);

  if (!carregado) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e8e8e8',
        }}
      >
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
