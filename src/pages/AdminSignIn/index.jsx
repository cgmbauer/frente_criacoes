import React, { useCallback, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

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
  const { signIn, failResponseAdmin } = useAuth();

  const formRef = useRef(null);

  const [alert, setAlert] = useState(false);

  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleSubmit = useCallback(
    async formData => {
      try {
        await signIn({ email: formData.email, password: formData.password });

        const response = failResponseAdmin;

        if (response) {
          toggleAlert();
          throw new Error('Login/Senha inválidos.');
        }
      } catch (err) {
        console.log(err, 'Erro no servidor. Por favor, tente novamente');
      }
    },
    [failResponseAdmin, signIn, toggleAlert],
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
