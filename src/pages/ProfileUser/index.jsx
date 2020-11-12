import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Select from '../../components/Select';

import DummyImg from '../../assets/profile-dummy.png';

import { UForm, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const ProfileUser = () => {
  const { user, updateUser } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async formData => {
      try {
        const { name, email, gender, genre, cache, disponibilidade } = formData;
        await api.put(`actress/update/${user.id}`, {
          name,
          email,
          gender,
          genre,
          price: cache,
          status: disponibilidade,
          relevance: 0,
        });

        updateUser();

        history.push('/user-profile');
      } catch (err) {
        console.log(err, 'erro ao tentar fazer signIn');
      }
    },
    [history],
  );

  return (
    <LoginContainer>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/user-profile' },
          { text: 'Reservas', link: '/reservations' },
          { text: 'Propostas', link: '/offers' },
        ]}
      />
      <LoginTitle>
        <LoginTitleText>Perfil De Usuário</LoginTitleText>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />
      </LoginTitle>

      <UForm onSubmit={handleSubmit}>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="genero">Gênero</label>
        <Select name="gender" id="genero">
          <option value=""> </option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="prefironresp">Prefiro não Responder</option>
        </Select>

        <label htmlFor="genero-atua">Gênero que atua</label>
        <Select name="genre" id="genero-atua">
          <option value="">Selecione um gênero</option>
          <option value="terror">Terror</option>
          <option value="comedia">Comédia</option>
          <option value="acão">Acão</option>
          <option value="aventura">Aventura</option>
        </Select>

        <div id="orcDisponibilidade">
          <div className="cache">
            <label htmlFor="cache">Cachê</label>
            <Input name="cache" type="text" placeholder="R$" />
          </div>
          <div className="disponibilidade">
            <label htmlFor="disponibilidade">Disponibilidade</label>
            <Select name="disponibilidade" id="disponibilidade">
              <option value="comedia"> </option>
            </Select>
          </div>
        </div>
        <button type="submit">Atualizar</button>
      </UForm>
    </LoginContainer>
  );
};

export default ProfileUser;
