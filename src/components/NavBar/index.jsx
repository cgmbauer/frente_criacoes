import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavBarContainer } from './styles';

const NavBar = ({ navProps }) => {
  return (
    <NavBarContainer>
      {navProps.map(properties => {
        return (
          <NavLink
            key={properties.link}
            activeClassName="selected"
            to={properties.link}
          >
            {properties.text}
          </NavLink>
        );
      })}
    </NavBarContainer>
  );
};

export default NavBar;
