import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Select from '../../components/Select';
import DummyImg from '../../assets/profile-dummy.png';

import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const ProfileUser = () => {
  return (
    <LoginContainer>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/profile' },
          { text: 'Reservas', link: '/reservations' },
          { text: 'Propostas', link: '/offers' },
        ]}
      />
      <LoginTitle>
        <LoginTitleText>Perfil De Usuário</LoginTitleText>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />
      </LoginTitle>

      <Form>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="genero">Gênero</label>
        <Select id="genero">
          <option value=""> </option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="prefironresp">Prefiro não Responder</option>
        </Select>

        <label htmlFor="genero-atua">Gênero que atua</label>
        <Select id="genero-atua">
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
            <Select id="disponibilidade">
              <option value="comedia"> </option>
            </Select>
          </div>
        </div>
        <button type="submit">Atualizar</button>
      </Form>
    </LoginContainer>
  );
};

export default ProfileUser;
