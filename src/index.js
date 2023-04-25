import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import Barra from './components/Barra'
import PostList from './components/PostList'
import DetalleUsuario from './components/DetalleUsuario'
import Login from './components/Login'
import { token } from './services/LoginServices'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {

  const [loginOk, setLoginOk] = useState(token)

  const validarLogin = (x) => {
    setLoginOk(x)
  }

  const cerrarSession = (x) => {
    setLoginOk(x)
    localStorage.removeItem("token");
    localStorage.removeItem("usernameid");
  }


  return (
    <>
      <Barra />
      <Routes>
          <Route path='/' element={loginOk ? <PostList /> : <Login validarLogin={validarLogin} />}/>
          <Route path='/profile' element={loginOk ? <DetalleUsuario cerrarSession={cerrarSession} /> : <Login validarLogin={validarLogin} />}/>
          <Route path='/login' element={!loginOk ? <Login validarLogin={validarLogin} /> : <PostList />}/>
      </Routes>
    </>
  )

  
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)