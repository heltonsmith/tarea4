import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Barra from './components/Barra';
import PostList from './components/PostList';
import DetalleUsuario from './components/DetalleUsuario';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

  const [botonBarra, setBotonBarra] = useState(0)

  const cambiarBotonBarra = (x) => {
    setBotonBarra(x)
  }

  return (
    <>
      <Barra botonBarra={botonBarra} cambiarBotonBarra={cambiarBotonBarra} />
      {botonBarra === 0 ? <PostList /> : <DetalleUsuario />} 
    </>
  )
  
}


root.render(<App />);
