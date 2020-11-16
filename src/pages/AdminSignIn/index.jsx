import React, { useCallback, useRef, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaSignInAlt, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import {
  UForm,
  LoginContainer,
  LoginTitle,
  LoginTitleText,
  AlertModal,
} from './styles';

const AdminSignIn = () => {
  const { signIn, failResponse } = useAuth();

  const formRef = useRef(null);

  const history = useHistory();

  const [alert, setAlert] = useState(false);

  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleSubmit = useCallback(
    async formData => {
      try {
        await signIn({ email: formData.email, password: formData.password });

        const response = failResponse;

        if (response) {
          toggleAlert();
          throw new Error('Login/Senha inválidos.');
        }

        history.push('/admin-profile');
      } catch (err) {
        throw new Error(err);
      }
    },
    [failResponse, history, signIn, toggleAlert],
  );

  return (
    <LoginContainer>
      <Header />

      <LoginTitle>
        <LoginTitleText>Login</LoginTitleText>
      </LoginTitle>

      <UForm onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="username">E-mail</label>
        <Input name="email" type="text" id="username" required />

        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" id="password" required />

        <button to="/offers" type="submit">
          Entrar
        </button>
      </UForm>

      <Link to="/admin-signup">
        <FaSignInAlt />
        Criar conta
      </Link>

      <AlertModal modal={alert}>
        <FaTimes onClick={toggleAlert} />
        <p>Login ou senha inválidos.</p>
      </AlertModal>
    </LoginContainer>
  );
};

export default AdminSignIn;
