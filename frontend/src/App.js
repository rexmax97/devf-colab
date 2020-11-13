import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  Navbar
} from './components/index.js'
import { AuthContextProvider } from './context/AuthContext.js'
import Routes from './Routes.js'

const App = () => {
  return(
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          
          <Navbar />
          <div>
            { Routes }
          </div>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  )
}

export default  App