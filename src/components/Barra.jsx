import { Link } from 'react-router-dom'
import '../assets/css/barra.css'

function Barra() {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className='nav-link' to="/">
          <span 
            className="navbar-brand text-black marca"
           > 
            <i className="fa-solid fa-bolt"></i> three pics
          </span>
        </Link>
        <Link className='nav-link' to="/profile">
          <i 
            className="fa-solid fa-circle-user fa-xl icono-user"
            >
          </i>
        </Link>
      </div>
    </nav>
  )
}

export default Barra





