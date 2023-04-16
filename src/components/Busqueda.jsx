
import '../assets/css/busqueda.css';

function Busqueda(props) {
    const handleSearchTextChange = (event) => {
      props.onSearchTextChange(event.target.value);
    };
  
    return (
      <div className="container mt-2">
        <input
          className="form-control"
          type="text"
          placeholder="El filtro lo hice con filtro de usuarios"
          aria-label="Search"
          onChange={handleSearchTextChange}
        />
      </div>
    );
}
  
export default Busqueda;
  