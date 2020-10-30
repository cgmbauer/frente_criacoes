import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/SignIn';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LogIn} />
  </Switch>
);

export default Routes;
