import React, { useCallback } from 'react';

import { FaPowerOff } from 'react-icons/fa';
import LogoIcon from '../../assets/remoto_logo.svg';

import { HeaderContainer } from './styles';

const HeaderInterna = () => {
  const signOut = useCallback(() => {
    console.log('mover para auth');
  }, []);

  return (
    <HeaderContainer>
      <img src={LogoIcon} alt="controle remoto" />

      <button type="button" onClick={signOut}>
        <FaPowerOff />
      </button>
    </HeaderContainer>
  );
};

export default HeaderInterna;
