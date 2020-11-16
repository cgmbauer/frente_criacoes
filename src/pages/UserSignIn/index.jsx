import React, { useCallback, useRef, useState } from 'react';

import { FaTimes, FaSignInAlt } from 'react-icons/fa';

import { Link, useHistory } from 'react-router-dom';

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

const UserSignIn = () => {
  const { signIn, failResponseArtist } = useAuth();

  const formRef = useRef(null);

  const [alert, setAlert] = useState(false);

  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleSubmit = useCallback(
    async formData => {
      try {
        await signIn({
          email: formData.email,
          password: formData.password,
        });

        const response = failResponseArtist;

        if (response) {
          toggleAlert();
          console.log('Login/Senha inválidos.');
        }
      } catch (err) {
        console.log(err, 'Erro no servidor. Por favor, tente novamente');
      }
    },
    [failResponseArtist, signIn, toggleAlert],
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

        <button to="/user-profile" type="submit">
          Entrar
        </button>
      </UForm>

      <Link to="/user-signup">
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

export default UserSignIn;
