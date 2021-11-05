import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Tasks, Register, NotFound, Home } from '../Pages/Index';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/register' component={ Register } />
      <Route exact path='/tasks' component={ Tasks } />
      <Route component={ NotFound } />
    </Switch>
  )
}

export default Routes;