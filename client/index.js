import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Connect from './components/Connect'
// import Thoughts from './components/Thoughts'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Connect} />
        <Route exact path='/thoughts' component={Connect} />
        <Route exact path='/about' component={Connect} />
        <Route exact path='/connect' component={Connect} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)
