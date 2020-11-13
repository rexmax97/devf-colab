import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../utils/https.js'

const Signup = () => {
  const { isAuth } = useContext(AuthContext)
  const [ first_name, setFirstName ] = useState('')
  const [ last_name, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ birth_date, setBirthDate ] = useState('')
  const [ password, setPassword ] = useState('')
  const [profile_img, setPorfileImg] = useState('')
  const [ redirect, setRedirect ] = useState(false)
  
  const handleForm = async (e) => {
    try {
      e.preventDefault()
      const body = {
        first_name,
        last_name,
        profile_img,
        email,
        birth_date,
        password
      }
      await auth.signup(body)
      setRedirect(true)
    } catch (error) {
     console.log(error) 
    }
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <h1>
            Registro de usuarios
          </h1>
        </div>
        <div className="col">
          <form onSubmit={handleForm}>
            <div className="form-group">
              <label>
                Nombre
              </label>
              <input
                className="form-control"
                value={first_name}
                onChange={ e => setFirstName(e.target.value) }
                placeholder="Ingresa tu nombre."
              />
            </div>
            <div className="form-group">
              <label>
                Apellido
              </label>
              <input
                className="form-control"
                value={last_name}
                onChange={ e => setLastName(e.target.value) }
                placeholder="Ingresa tu apellido."
              />
            </div>
            <div className="form-group">
              <label>
                Fecha de nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                value={birth_date}
                onChange={ e => setBirthDate(e.target.value) }
                placeholder="Ingresa la fecha de tu nacimiento."
              />
            </div>
            <div className="form-group">
              <label>
                URL de imagen de perfil
              </label>
              <input
                className="form-control"
                value={profile_img}
                onChange={ e => setPorfileImg(e.target.value) }
                placeholder="Agrega una dirección de imagen."
              />
            </div>
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
              Registrame
            </button>
          </form>
        </div>
      </div>
      { redirect || isAuth ? <Redirect to="/login"/> : null}
    </React.Fragment>
  )
}

export default Signup
