import '../assets/css/detalle.css'
import profile from "../json/profile.json"
import { usernameid } from '../services/LoginServices'

function DetalleUsuario({cerrarSession}) {

  const cerrar = () => {
    cerrarSession(false)
  }

  return (
    <div className='container text-center mt-5 pt-5'>
      <img src={profile.avatar} className="rounded-circle" alt="Cinque Terre" /> 
      <p className='mt-4'><b>@{usernameid}</b></p>
      <p className='container'>{profile.bio}</p>
      <button className='btn btn-primary mt-3' onClick={cerrar}>Cerrar Sessión</button>
    </div>
  )

}
  
export default DetalleUsuario
  