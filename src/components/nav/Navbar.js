import React from 'react'
import {link} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav class="navbar navbar-expand navbar-expand-sm " style={{"background-color": "#ffffffb0", position:"fixed",}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Clinic
      </a>
      <button 
        class="navbar-toggler" 
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-lq-0 mx-auto">
          <Link class=" nav-item nav-link active" aria-current="page" to="/" >Home</Link>
          <Link class="nav-item nav-link" to="/Doctors">Doctores</Link>
          <Link  class="nav-item nav-link" to="/Clinic">Clinica</Link>
          </ul>
          <button class="btn btn-outline-success" type="submit">Login</button>
      </div>
    </div>
  </nav>    
    )
}

export default Navbar
