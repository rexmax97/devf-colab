import React, { createContext, useState, useEffect } from 'react'
import decode from 'jwt-decode'
import { setAuthToken } from '../utils/https'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const logIn = (newToken) => {
    localStorage.setItem('photify-token', newToken)
    setAuthToken(newToken)
    const decoded = decode(newToken)
    setUser(decoded)
    setIsAuth(true)
  }
  const logOut = () => {
    localStorage.removeItem('photify-token')
    setUser(null)
    setIsAuth(false)
  }

  useEffect(() => {
    const localToken = localStorage.getItem('photify-token')
    if (localToken) {
      logIn(localToken)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        logIn,
        logOut
      }}
    >
      { props.children }
    </AuthContext.Provider>
  )

}
