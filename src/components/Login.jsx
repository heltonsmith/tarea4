import '../assets/css/login.css';

import { useState } from "react";
import { getLogin } from "../services/LoginServices";

function Login({ validarLogin }) {

  const [loading, setLoading] = useState(false);
  const [incorrecto, setIncorrecto] = useState(false);

  const imprimirLogin = () => {

    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;

    setLoading(true); // activar loading

    //username: john
    //password: P4ssW0rd!#

    //espero dos segundos (solución parche para el problema de CORS que tiene la API)
    const loginPromise = getLogin(email, password);
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("La petición ha tardado demasiado tiempo (usuario inválido)"));
        }, 3000);
    });

    Promise.race([loginPromise, timeoutPromise])
    .then((x) => {
        setLoading(false); // ocultar loading

        if (x.status === 200) {
            console.log("Usuario OK")
            setIncorrecto(false)
            validarLogin(true)
        } 
        else {
            console.log("Usuario no encontrado")
            setIncorrecto(true)
        }
    })
    .catch((error) => {
        console.error(error.message);
        setLoading(false); // ocultar loading
        setIncorrecto(true);
    });

  }

  return (
    <form className="mb-3 mt-3 pt-4 px-5">
      <hr />
            {incorrecto && (
                <div className="alert alert-danger mt-4" role="alert">
                    Invalid email or password
                </div>
            )}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="txtEmail" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="txtPassword" />
      </div>
      <div className="d-grid gap-2 mb-4">
        <button
          type="button"
          className="btn btn-primary"
          id="btnLogin"
          onClick={imprimirLogin}
          disabled={loading} // deshabilitar el botón mientras se espera la respuesta
        >
          {loading ? "Cargando..." : "Login"}
        </button>
      </div>
      <hr />
    </form>
  )
}

export default Login;
