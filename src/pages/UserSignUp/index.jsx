import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import { UForm, SignupContainer, SignupTitle, SignupTitleText } from './styles';

const UserSignUp = () => {
  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async formData => {
      try {
        const { nome, email, password } = formData;

        await api.post('/actress/create', {
          name: nome,
          gender: '',
          price: 0,
          relevance: 0,
          genre: '',
          status: true,
          user: {
            login: email,
            password,
          },
        });

        history.push('/user-signin');
      } catch (err) {
        console.log(err, 'Erro no servidor. Por favor, tente novamente');
      }
    },
    [history],
  );

  return (
    <SignupContainer>
      <Header />

      <SignupTitle>
        <SignupTitleText>Cadastro</SignupTitleText>
      </SignupTitle>

      <UForm onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="nome">Nome</label>
        <Input name="nome" type="text" id="nome" required />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" required />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" required />

        <button type="submit">Cadastrar</button>
      </UForm>

      <Link to="/user-signin">
        <FaArrowLeft />
        Voltar
      </Link>
    </SignupContainer>
  );
};

export default UserSignUp;
