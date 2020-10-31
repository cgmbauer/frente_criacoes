import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavBarContainer } from './styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink activeClassName="selected" to="/profile">
        Seu perfil
      </NavLink>

      <NavLink activeClassName="selected" to="/reservations">
        Reservas
      </NavLink>

      <NavLink activeClassName="selected" to="/offers">
        Propostas
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
