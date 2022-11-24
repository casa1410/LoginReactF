import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio'

import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="Inicio" element={<Inicio />} />
          <Route path="login" element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );

  /*return (
    <div className="App">
  
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login />}
    </div>
  );*/
}

export default App;
