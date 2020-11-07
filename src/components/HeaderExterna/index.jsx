import React from 'react';

import LogoIcon from '../../assets/remoto_logo.svg';

import { HeaderContainer } from './styles';

const HeaderExterna = () => {
  return (
    <HeaderContainer>
      <img src={LogoIcon} alt="controle remoto" />
    </HeaderContainer>
  );
};

export default HeaderExterna;
