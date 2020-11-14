import React, { useCallback, useState } from 'react';

import { FaTimes } from 'react-icons/fa';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Input from '../../components/Input';

import DummyImg from '../../assets/profile-dummy.png';

import {
  UForm,
  SignupProfileAdmin,
  SignupTitle,
  SignupTitleText,
  AlertModal,
} from './styles';

const ProfileAdmin = () => {
  const { user, updateUser, adminSign } = useAuth();

  const [alert, setAlert] = useState(false);

  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleSubmit = useCallback(
    async formData => {
      try {
        const { name, email } = formData;

        const userData = {
          name,
          user: {
            login: email,
            password: 123456,
          },
        };

        await api.put(`producer/update/${user.id}`, userData);

        toggleAlert();

        await adminSign(user.id, name, email, 123456);

        await updateUser(userData);
      } catch (err) {
        console.log(err, 'erro ao tentar atualizar cadastro');
      }
    },
    [adminSign, updateUser, user.id],
  );

  return (
    <SignupProfileAdmin>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/admin-profile' },
          { text: 'Buscas', link: '/admin-search' },
          { text: 'Dashboard', link: '/dashboard' },
        ]}
      />

      <SignupTitle>
        <SignupTitleText>Perfil De Usuario</SignupTitleText>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />
      </SignupTitle>

      <UForm
        onSubmit={handleSubmit}
        initialData={{
          name: user.name,
          email: user.user.login,
        }}
      >
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="text" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <button type="submit">Atualizar</button>
      </UForm>

      <AlertModal modal={alert}>
        <FaTimes onClick={toggleAlert} />
        <p>Perfil atualiado com sucesso!</p>
      </AlertModal>
    </SignupProfileAdmin>
  );
};

export default ProfileAdmin;
