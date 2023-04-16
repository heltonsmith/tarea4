import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Barra from './components/Barra';
import PostList from './components/PostList';
import DetalleUsuario from './components/DetalleUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  function handleClick(icono) {
    console.log('Icono presionado:', icono);
    if (icono === 'detalle') {
      setMostrarDetalle(true);
    } else {
      setMostrarDetalle(false);
    }
  }

  return (
    <React.StrictMode>
      <Barra handleClick={handleClick} />
      {
        mostrarDetalle ? <DetalleUsuario /> : <PostList />
      }
    </React.StrictMode>
  );
}

root.render(<App />);
