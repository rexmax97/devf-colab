import React from 'react'
import {
  Home,
  Example,
  Signup,
  Login,
  Logout,
  NotFound,
} from './pages/index.js'

import {
  PrivateRoute
} from './components/index.js'

import {
  Switch,
  Route,
} from 'react-router-dom'

export default (
  <Switch>
    <Route
      exact path='/'
      component={ Home }
    />
    
    <Route
      exact path='/signup'
      component={ Signup }
    />
    <Route
      exact path='/login'
      component={ Login }
    />
    <PrivateRoute
      exact path='/example'
      component={ Example }
    />
    <PrivateRoute
      exact path="/logout"
      component={ Logout}
    />
    <Route
      component={ NotFound }
    />
  </Switch>
)
