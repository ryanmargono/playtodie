import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      {/* <Route exact path= '/signup' component = {Signup} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)
