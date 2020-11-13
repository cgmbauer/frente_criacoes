import React from 'react';

import { Link } from 'react-router-dom';

import LogoIcon from '../../assets/remoto_logo.svg';

import { HeaderContainer } from './styles';

const HeaderExterna = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoIcon} alt="controle remoto" />
      </Link>
    </HeaderContainer>
  );
};

export default HeaderExterna;
