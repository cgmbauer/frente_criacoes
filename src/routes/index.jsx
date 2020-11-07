import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import ProfileUser from '../pages/ProfileUser';
import Reservations from '../pages/Reservations';
import ProfileAdmin from '../pages/ProfileAdmin';
import Offers from '../pages/Offers';

import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />

    <Route path="/profile" component={ProfileUser} />
    <Route path="/reservations" component={Reservations} />
    <Route path="/offers" component={Offers} />

    <Route path="/dashboard" component={Dashboard} />
    <Route path="/admin-profile" component={ProfileAdmin} />
  </Switch>
);

export default Routes;
