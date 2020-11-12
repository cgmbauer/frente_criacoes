import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import { UForm, SignupContainer, SignupTitle, SignupTitleText } from './styles';

const AdminSignUp = () => {
  const { signIn } = useAuth();

  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async formData => {
      try {
        const { email, password } = formData;

        await api.post('/actress/create', {
          email,
          password,
        });

        history.push('/admin-signin');
      } catch (err) {
        console.log(err, 'erro ao tentar cadastrar');
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
        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" required />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" required />

        <button type="submit">Cadastrar</button>
      </UForm>

      <Link to="/admin-signin">
        <FaArrowLeft />
        Voltar
      </Link>
    </SignupContainer>
  );
};

export default AdminSignUp;
