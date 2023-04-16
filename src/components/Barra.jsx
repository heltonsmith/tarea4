import React from 'react';
import '../assets/css/barra.css';

function Barra(props) {
  const { handleClick } = props;

  function handleClickIcon(icono) {
    handleClick(icono);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <span
            className="navbar-brand text-black marca"
            onClick={() => handleClickIcon('rayo')}
          >
            <i className="fa-solid fa-bolt"></i> three pics
          </span>
          <i
            className="fa-solid fa-circle-user fa-xl icono-user"
            onClick={() => handleClickIcon('detalle')}
          ></i>
        </div>
      </nav>
    </>
  );
}

export default Barra;