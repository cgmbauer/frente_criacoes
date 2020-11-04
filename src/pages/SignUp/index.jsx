import React from 'react';

import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import { Form, SignupContainer, SignupTitle, SignupTitleText } from './styles';

const SignUp = () => {
  return (
    <SignupContainer>
      <Header />

      <SignupTitle>
        <SignupTitleText>Cadastro</SignupTitleText>
      </SignupTitle>

      <Form>
        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" />

        <label htmlFor="password">Repetir senha</label>
        <Input name="password" type="password" id="password" />

        <button type="submit">Cadastrar</button>
      </Form>

      <Link to="/">
        <FaArrowLeft />
        Voltar
      </Link>
    </SignupContainer>
  );
};

export default SignUp;
