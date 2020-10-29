import React from 'react';

import { Link } from 'react-router-dom';

import { FaSignInAlt } from 'react-icons/fa';

import Input from '../../components/Input';

import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const SignIn = () => {
  return (
    <LoginContainer>
      <LoginTitle>
        <LoginTitleText>Login</LoginTitleText>
      </LoginTitle>

      <Form>
        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" />

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
