import React, { useCallback, useRef } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/HeaderExterna';
import Input from '../../components/Input';

import { UForm, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const AdminSignIn = () => {
  const { signIn } = useAuth();

  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async formData => {
      try {
        await signIn({ email: formData.email, password: formData.password });

        history.push('/admin-profile');
      } catch (err) {
        console.log(err, 'erro ao tentar fazer signIn');
      }
    },
    [history, signIn],
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
    </LoginContainer>
  );
};

export default AdminSignIn;
