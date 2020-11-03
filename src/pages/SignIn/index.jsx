import React from 'react';

import { Link } from 'react-router-dom';

import { FaSignInAlt } from 'react-icons/fa';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const SignIn = () => {
  return (
    <LoginContainer>
      <Header />

      <LoginTitle>
        <LoginTitleText>Login</LoginTitleText>
      </LoginTitle>

      <Form>
        <label htmlFor="username">Username</label>
        <Input type="text" id="username" name="username" />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" />

        <button to="/offers" type="submit">
          Entrar
        </button>

        <Link to="/forgot-password">Esqueci a senha</Link>
      </Form>

      <Link to="/signup">
        <FaSignInAlt />
        Criar conta
      </Link>
    </LoginContainer>
  );
};

export default SignIn;
