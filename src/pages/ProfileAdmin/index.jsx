import React from 'react';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Input from '../../components/Input';

import {
  Form,
  SignupProfileAdmin,
  SignupTitle,
  SignupTitleText,
} from './styles';

const ProfileAdmin = () => {
  return (
    <SignupProfileAdmin>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/profile' },
          { text: 'Buscas', link: '/search' },
          { text: 'Dashboard', link: '/Dashboard' },
        ]}
      />

      <SignupTitle>
        <SignupTitleText>Perfil De Usuario</SignupTitleText>
      </SignupTitle>

      <Form>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="text" id="password" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <button type="submit">Continuar</button>
      </Form>
    </SignupProfileAdmin>
  );
};

export default ProfileAdmin;
