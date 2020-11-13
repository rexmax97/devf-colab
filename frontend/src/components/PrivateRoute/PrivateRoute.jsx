import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import {
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component, ...RouterProps }) => {
  const { isAuth } = useContext(AuthContext)
  const validateAuth = (props) => {
    const Component = component
    return isAuth
      ? (<Component {...props}/>)
      : (<Redirect to={'/login'}/>)
  }

  return (
    <Route
      {...RouterProps}
      render={
        props => (validateAuth(props))
      }
    />
  )
}

export default PrivateRoute