import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Profile from '../pages/Profile';
import Reservations from '../pages/Reservations';
import Offers from '../pages/Offers';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />

    <Route path="/profile" exact component={Profile} />
    <Route path="/reservations" exact component={Reservations} />
    <Route path="/offers" exact component={Offers} />
  </Switch>
);

export default Routes;
