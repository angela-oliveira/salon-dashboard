import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Agenda from './pages/Agenda'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/agenda" component={Agenda} />
      </Switch>
    </BrowserRouter>
  )
}