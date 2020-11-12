import React, { useCallback } from 'react';

import { FaPowerOff } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import LogoIcon from '../../assets/remoto_logo.svg';

import { HeaderContainer } from './styles';

const HeaderInterna = () => {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <HeaderContainer>
      <img src={LogoIcon} alt="controle remoto" />

      <button type="button" onClick={handleSignOut}>
        <FaPowerOff />
      </button>
    </HeaderContainer>
  );
};

export default HeaderInterna;
