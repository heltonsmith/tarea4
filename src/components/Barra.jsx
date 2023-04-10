
import '../assets/css/barra.css';

function Barra() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand text-black marca" href="/">
                    <i className="fa-solid fa-bolt"></i> three pics
                </a>
                <i class="fa-solid fa-circle-user fa-xl icono-user"></i>
            </div>
        </nav>
    </>
  );
}

export default Barra;
