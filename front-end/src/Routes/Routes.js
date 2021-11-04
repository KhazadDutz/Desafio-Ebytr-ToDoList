import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Tasks, SignUp, NotFound } from '../Pages/Index';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route exact path='/signup' component={ SignUp } />
      <Route exact path='/tasks' component={ Tasks } />
      <Route component={ NotFound } />
    </Switch>
  )
}

export default Routes;