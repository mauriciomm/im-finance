import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route path="/login" component={Login} ></Route>
    </Switch>
  )
}

export default App
