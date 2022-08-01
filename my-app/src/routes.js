import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import NavBar from './components/navbar'

import Checkout from './components/checkOut'

import Burger from './components/Burger'

const Routes = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Burger} />
          <Route exact path='/'>
            <Redirect to='/' />
          </Route>

          {/* <Route exact path="/auth" component={About} /> */}
          <Route exact path='/checkout' component={Checkout} />
          {/* <Route exact path="/" component={Checksum} /> */}
        </Switch>
      </div>
    </Router>
  )
}
export default Routes
