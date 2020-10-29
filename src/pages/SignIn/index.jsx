import React from 'react';

import { Link } from 'react-router-dom';

import { FaSignInAlt } from 'react-icons/fa';

import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const SignIn = () => {
  return (
    <LoginContainer>
      <LoginTitle>
        <LoginTitleText>Login</LoginTitleText>
      </LoginTitle>

      <Form>
        <label htmlFor="email">E-mail</label>
        <input name="email" type="email" id="email" />

        <label htmlFor="password">Senha</label>
        <input name="password" type="password" id="password" />

        <button type="submit">Entrar</button>

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
