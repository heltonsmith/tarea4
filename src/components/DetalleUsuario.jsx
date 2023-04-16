import '../assets/css/detalle.css';
import profile from "../json/profile.json"

function DetalleUsuario() {

  return (
    <div className='container text-center mt-5 pt-5'>
      <img src={profile.avatar} className="rounded-circle" alt="Cinque Terre" /> 
      <p className='mt-4'><b>@{profile.username}</b></p>
      <p className='container'>{profile.bio}</p>
    </div>
  );

}
  
export default DetalleUsuario;
  