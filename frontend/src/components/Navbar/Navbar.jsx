import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Link } from 'react-router-dom'

const navStyles = {
  backgroundColor: '#e3f2fd'
}

const Navbar = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <nav className="navbar bg-warning" style={navStyles}>
      <Link to={'/'}>
        <span className="navbar-brand text-dark">
          COVIDAY
        </span> 
      </Link>
        {
          isAuth
            ? (
              <ul className="navbar-nav">
                <Link to={'/logout'}>
                  <li className="nav-item">
                    <span className="nav-link">Cerrar sesión</span>
                  </li>
                </Link>
                <Link to={'/example'}>
                  <li className="nav-item">
                    <span className="nav-link">Example</span>
                  </li>
                </Link>
              </ul>
            )
          : (
            <ul className="navbar-nav">
              <Link to={'/signup'}>
                <li className="nav-item">
                  <span className="nav-link">Registro</span>
                </li>
              </Link>
              <Link to={'/login'}>
                <li className="nav-item">
                  <span className="nav-link">Iniciar sesión</span>
                </li>
              </Link>
            </ul>
            )
        }
      
    </nav>
  )
}

export default Navbar
