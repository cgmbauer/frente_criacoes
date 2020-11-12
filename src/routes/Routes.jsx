import React from 'react';

import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const Route = ({ isPrivate, component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === Object.entries(user).length > 0 ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate
                ? '/'
                : user.permission === 'admin'
                ? '/admin-profile'
                : '/offers',
            }}
          />
        );
      }}
    />
  );
};

export default Route;
