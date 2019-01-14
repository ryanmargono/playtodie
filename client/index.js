import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Connect from './components/Connect'
import Subscribe from './components/Subscribe'
import Terms from './components/Terms';
import Thoughts from './components/Thoughts';
import Shop from './components/Shop';

console.warn = () => {}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/thoughts' component={Thoughts} />
      <Route exact path='/about' component={About} />
      <Route exact path='/connect' component={Connect} />
      <Route exact path='/subscribe' component={Subscribe} />
      <Route exact path='/terms' component={Terms} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)
