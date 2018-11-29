import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Settings from './components/Settings'
import Feed from './components/Feed'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/settings' component={Settings} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
