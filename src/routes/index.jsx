import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Routes';

import Home from '../pages/Home';

import UserSignIn from '../pages/UserSignIn';
import UserSignUp from '../pages/UserSignUp';

import AdminSignIn from '../pages/AdminSignIn';
import AdminSignUp from '../pages/AdminSignUp';

import ProfileUser from '../pages/ProfileUser';
import Reservations from '../pages/Reservations';
import Offers from '../pages/Offers';

import ProfileAdmin from '../pages/ProfileAdmin';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/user-signin" exact component={UserSignIn} isPrivate={false} />
    <Route path="/user-signup" component={UserSignUp} isPrivate={false} />

    <Route path="/user-profile" component={ProfileUser} isPrivate />
    <Route path="/reservations" component={Reservations} isPrivate />
    <Route path="/offers" component={Offers} isPrivate />

    <Route path="/admin-signin" exact component={AdminSignIn} />
    <Route path="/admin-signup" component={AdminSignUp} />

    <Route path="/admin-profile" component={ProfileAdmin} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
