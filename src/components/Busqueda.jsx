import '../assets/css/busqueda.css'

function Busqueda({cambiarBusqueda}) {

    const cambiarTexto = (event) => {
      cambiarBusqueda(event.target.value)
    }

    return (
      <div className="container mt-2">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={cambiarTexto}
        />
      </div>
    )

}
  
export default Busqueda
  