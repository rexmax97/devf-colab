import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../utils/https.js'

const Login = () => {
  const { logIn, isAuth } = useContext(AuthContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleForm = async (e) => {
    e.preventDefault()
    const body = {
      email,
      password,
    }
    const response = await auth.login(body)
    const newToken = response.data.payload

    logIn(newToken)
  }

  return (
    <React.Fragment>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label>
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={ e => setEmail(e.target.value) }
            placeholder="Aquí va tu correo."
          />
        </div>
        <div className="form-group">
          <label>
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={ e => setPassword(e.target.value) }
            placeholder="Escribe una contraseña"
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
        >
          Iniciar sesión
        </button>
      </form>
      { isAuth ? <Redirect to={"/"}/> : null }
    </React.Fragment>
  )
}

export default Login