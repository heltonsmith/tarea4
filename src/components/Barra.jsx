import '../assets/css/barra.css'

function Barra({botonBarra, cambiarBotonBarra}) {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <span 
          className="navbar-brand text-black marca"
          onClick={() => cambiarBotonBarra(0)}> 
          <i className="fa-solid fa-bolt"></i> three pics
        </span>
        <i 
          className="fa-solid fa-circle-user fa-xl icono-user"
          onClick={() => cambiarBotonBarra(1)}>
        </i>
      </div>
    </nav>
  )
}

export default Barra





