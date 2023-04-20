import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import Barra from './components/Barra'
import PostList from './components/PostList'
import DetalleUsuario from './components/DetalleUsuario'
import Login from './components/Login'
import { token } from './services/LoginServices'

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {

  const [botonBarra, setBotonBarra] = useState(0)
  const [loginOk, setLoginOk] = useState(token)

  const cambiarBotonBarra = (x) => {
    setBotonBarra(x)
  }

  const validarLogin = (x) => {
    setLoginOk(x)
  }

  const cerrarSession = (x) => {
    setLoginOk(x)
    localStorage.setItem("token", "")
    localStorage.setItem("usernameid", "")
  }

  if(loginOk){
    return (
      <>
        <Barra botonBarra={botonBarra} cambiarBotonBarra={cambiarBotonBarra} />
        {botonBarra === 0 ? <PostList /> : <DetalleUsuario cerrarSession={cerrarSession} />} 
      </>
    )
  }
  else{
    return (
      <Login validarLogin={validarLogin} />
    )
  }
  
}

root.render(<App />)