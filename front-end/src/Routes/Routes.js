import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Tasks } from '../Pages/Index';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route exact path='/tasks' component={ Tasks } />
    </Switch>
  )
}

export default Routes;